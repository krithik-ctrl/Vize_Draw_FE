import { NextResponse } from "next/server";
import { getEmailError, getPhoneError, getRequiredError } from "@/lib/validation";

export const runtime = "nodejs";

const CONTACT_API_URL =
  process.env.VIZEDRAW_CONTACT_API_URL ||
  "https://api.vizedraw.com/api/v1/public/contact";
// Only sent when VizeDraw has issued one; the header is safe to use here
// because this route runs server-side and never ships the value to the browser.
const CONTACT_SECRET = process.env.WEBSITE_CONTACT_SECRET;
// Shown on each lead in the VizeDraw admin console to identify this site.
const SOURCE_TAG = process.env.VIZEDRAW_CONTACT_SOURCE?.trim() || "vizedraw-marketing-site";
const FALLBACK_EMAIL = "sales@vizedraw.com";

const REASON_MAP: Record<string, string> = {
  "Request a demo": "demo",
  "Pricing inquiry": "pricing",
  "Book workflow review": "workflow",
  "Technical support": "support",
  "Partnership opportunity": "partnership",
  Other: "other",
};

// Maps the API's snake_case field names back to this form's field names.
const FIELD_NAME_MAP: Record<string, string> = {
  first_name: "firstName",
  last_name: "lastName",
  email: "email",
  company: "company",
  phone: "phone",
  reason: "reason",
  message: "message",
};

type LeadPayload = {
  variant?: "demo" | "contact";
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  phone?: string;
  reason?: string;
  message?: string;
  website?: string; // honeypot
};

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Validate JSON types before trimming; TypeScript does not validate requests.
  const typeErrors: Record<string, string> = {};
  for (const field of ["firstName", "lastName", "email", "company", "phone", "message", "website", "reason"] as const) {
    if (body[field] !== undefined && typeof body[field] !== "string" && !(field === "reason" && body.variant !== "contact" && body[field] === null)) {
      typeErrors[field] = "Must be text.";
    }
  }
  if (Object.keys(typeErrors).length) {
    return NextResponse.json({ ok: false, fieldErrors: typeErrors }, { status: 422 });
  }

  // Reject bot submissions without forwarding or claiming they were stored.
  if (body.website) {
    return NextResponse.json(
      { ok: false, error: `Unable to accept this submission. Please email us at ${FALLBACK_EMAIL}.` },
      { status: 422 }
    );
  }

  const firstName = (body.firstName || "").trim();
  const lastName = (body.lastName || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();
  const variant = body.variant === "contact" ? "contact" : "demo";
  const reason = variant === "demo" ? "demo" :
    Object.prototype.hasOwnProperty.call(REASON_MAP, body.reason || "") ? REASON_MAP[body.reason!] : "";

  const fieldErrors: Record<string, string> = {};
  const checks: [string, string][] = [
    ["reason", reason ? "" : "Choose a reason for contact."],
    ["firstName", getRequiredError("First name", firstName, { max: 100 })],
    ["lastName", getRequiredError("Last name", lastName, { max: 100 })],
    ["email", getEmailError(email)],
    ["company", getRequiredError("Company", company, { max: 200 })],
    ["phone", getPhoneError(phone)],
    ["message", getRequiredError("Message", message, { min: 10, max: 5000 })],
  ];
  for (const [field, error] of checks) {
    if (error) fieldErrors[field] = error;
  }
  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json({ ok: false, fieldErrors }, { status: 422 });
  }

  if (SOURCE_TAG.length > 64) {
    console.error("VizeDraw contact configuration error: source exceeds 64 characters.");
    return NextResponse.json(
      { ok: false, error: `Something went wrong. Please email us at ${FALLBACK_EMAIL}.` },
      { status: 503 }
    );
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (CONTACT_SECRET) headers["X-Contact-Secret"] = CONTACT_SECRET;

  let apiRes: Response;
  try {
    apiRes = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        company,
        phone: phone || undefined,
        reason,
        message,
        source: SOURCE_TAG,
        website: "",
      }),
    });
  } catch {
    console.error("VizeDraw contact API request failed before an HTTP response.");
    return NextResponse.json(
      { ok: false, error: `Something went wrong. Please email us at ${FALLBACK_EMAIL}.` },
      { status: 503 }
    );
  }

  // Log only the status: upstream bodies/errors may contain private data.
  console.info("VizeDraw contact API response status:", apiRes.status);

  if (apiRes.status === 201) {
    return NextResponse.json({ ok: true });
  }

  if (apiRes.status === 422) {
    const data = await apiRes.json().catch(() => null);
    const upstreamErrors: Record<string, string> = {};
    for (const detail of Array.isArray(data?.detail) ? data.detail : []) {
      const field = Array.isArray(detail?.loc) ? detail.loc[detail.loc.length - 1] : undefined;
      const mapped = typeof field === "string" && Object.prototype.hasOwnProperty.call(FIELD_NAME_MAP, field)
        ? FIELD_NAME_MAP[field] : undefined;
      if (mapped && typeof detail?.msg === "string") upstreamErrors[mapped] = detail.msg;
    }
    return NextResponse.json({
      ok: false,
      fieldErrors: upstreamErrors,
      error: `The submission could not be validated. Please email us at ${FALLBACK_EMAIL} if the problem continues.`,
    }, { status: 422 });
  }

  if (apiRes.status === 429) {
    const retryAfter = apiRes.headers.get("Retry-After");
    const wait = retryAfter ? `${retryAfter} seconds` : "a few minutes";
    return NextResponse.json(
      { ok: false, error: `Too many submissions. Please try again in ${wait}.` },
      { status: 429 }
    );
  }

  // 403 (missing/wrong secret — a config error, not the visitor's fault),
  // 503 (form switched off), or anything else unexpected.
  return NextResponse.json(
    { ok: false, error: `Something went wrong. Please email us at ${FALLBACK_EMAIL}.` },
    { status: 503 }
  );
}
