"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getEmailError, getPhoneError, getRequiredError } from "@/lib/validation";

type Props = {
  variant?: "demo" | "contact";
  submitLabel?: string;
};

const reasons = [
  "Request a demo",
  "Pricing inquiry",
  "Book workflow review",
  "Technical support",
  "Partnership opportunity",
  "Other",
];

const fieldBase =
  "w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-vellum placeholder:text-graphite-2 outline-none transition-colors focus:border-blueprint/60";

const fieldError =
  "w-full rounded-xl border border-markup/60 bg-ink/60 px-4 py-3 text-sm text-vellum placeholder:text-graphite-2 outline-none transition-colors focus:border-markup";

const FALLBACK_EMAIL = "sales@vizedraw.com";

type FieldName = "firstName" | "lastName" | "email" | "company" | "phone" | "message";

const VALIDATORS: Record<FieldName, (value: string) => string> = {
  firstName: (v) => getRequiredError("First name", v, { max: 100 }),
  lastName: (v) => getRequiredError("Last name", v, { max: 100 }),
  email: getEmailError,
  company: (v) => getRequiredError("Company", v, { max: 200 }),
  phone: getPhoneError,
  message: (v) => getRequiredError("Message", v, { min: 10, max: 5000 }),
};

export default function LeadForm({
  variant = "demo",
  submitLabel = "Request demo",
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [honeypot, setHoneypot] = useState("");
  const [submitError, setSubmitError] = useState("");

  const [values, setValues] = useState<Record<FieldName, string>>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [serverErrors, setServerErrors] = useState<Partial<Record<FieldName, string>>>({});

  const setValue = (name: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (serverErrors[name]) {
      setServerErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  const setFieldTouched = (name: FieldName) =>
    setTouched((prev) => ({ ...prev, [name]: true }));

  const errorFor = (name: FieldName) => {
    if (touched[name]) {
      const err = VALIDATORS[name](values[name]);
      if (err) return err;
    }
    return serverErrors[name] || "";
  };

  const resetForm = () => {
    setStatus("idle");
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
    setTouched({});
    setServerErrors({});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return; // bot trap

    const fieldNames = Object.keys(VALIDATORS) as FieldName[];
    const allTouched: Partial<Record<FieldName, boolean>> = {};
    let hasError = false;
    for (const name of fieldNames) {
      allTouched[name] = true;
      if (VALIDATORS[name](values[name])) hasError = true;
    }
    setTouched(allTouched);
    if (hasError) return;

    setSubmitError("");
    setServerErrors({});
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          variant,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          company: values.company,
          reason: formData.get("reason"),
          message: values.message,
          website: honeypot,
        }),
      });
      const data = await res.json().catch(() => ({ ok: false }));

      if (data.ok) {
        setStatus("sent");
        return;
      }

      if (data.fieldErrors) {
        setServerErrors(data.fieldErrors);
        setSubmitError("Please fix the highlighted fields and try again.");
        setStatus("idle");
        return;
      }

      throw new Error(
        data.error || `Something went wrong. Please email us at ${FALLBACK_EMAIL}.`
      );
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : `Something went wrong. Please email us at ${FALLBACK_EMAIL}.`
      );
      setStatus("idle");
    }
  };

  return (
    <div className="relative rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 16 }}
              className="grid h-16 w-16 place-items-center rounded-full border border-blueprint/40 bg-blueprint/10"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <motion.path
                  d="M4 12.5l5 5L20 6.5"
                  stroke="#6fcfd1"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                />
              </svg>
            </motion.div>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-vellum">
              Request received
            </h3>
            <p className="mt-3 max-w-sm text-sm text-graphite">
              Thanks — we typically reply within one business day. A confirmation
              has been noted for your team&apos;s drawing workflow review.
            </p>
            <button
              onClick={resetForm}
              data-cursor="hover"
              className="mt-7 text-sm font-medium text-blueprint-soft"
            >
              Send another →
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="First name"
                name="firstName"
                placeholder="Jordan"
                required
                value={values.firstName}
                onChange={(v) => setValue("firstName", v)}
                onBlur={() => setFieldTouched("firstName")}
                error={errorFor("firstName")}
              />
              <Field
                label="Last name"
                name="lastName"
                placeholder="Rivera"
                required
                value={values.lastName}
                onChange={(v) => setValue("lastName", v)}
                onBlur={() => setFieldTouched("lastName")}
                error={errorFor("lastName")}
              />
            </div>
            <Field
              label="Work email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
              value={values.email}
              onChange={(v) => setValue("email", v)}
              onBlur={() => setFieldTouched("email")}
              error={errorFor("email")}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Company"
                name="company"
                placeholder="Acme Builders"
                required
                value={values.company}
                onChange={(v) => setValue("company", v)}
                onBlur={() => setFieldTouched("company")}
                error={errorFor("company")}
              />
              <Field
                label="Phone (optional)"
                name="phone"
                type="tel"
                placeholder="+1 555 0100"
                value={values.phone}
                onChange={(v) => setValue("phone", v)}
                onBlur={() => setFieldTouched("phone")}
                error={errorFor("phone")}
              />
            </div>

            {variant === "contact" && (
              <label className="grid gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-graphite-2">
                  Reason for contact
                </span>
                <div className="relative">
                  <select
                    name="reason"
                    className={`${fieldBase} appearance-none pr-10`}
                    defaultValue={reasons[0]}
                  >
                    {reasons.map((r) => (
                      <option key={r} className="bg-ink text-vellum">
                        {r}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-graphite-2">
                    ▾
                  </span>
                </div>
              </label>
            )}

            <label className="grid gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-graphite-2">
                Message
                <span className="ml-1 text-markup">*</span>
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your drawing packages, current tools, and the workflow you want to improve."
                value={values.message}
                onChange={(e) => setValue("message", e.target.value)}
                onBlur={() => setFieldTouched("message")}
                aria-invalid={!!errorFor("message")}
                aria-describedby={errorFor("message") ? "message-error" : undefined}
                className={`${errorFor("message") ? fieldError : fieldBase} resize-none`}
              />
              {errorFor("message") && (
                <p id="message-error" role="alert" className="text-xs text-markup">
                  {errorFor("message")}
                </p>
              )}
            </label>

            {/* honeypot — hidden from users */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
              aria-hidden
            />

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileTap={{ scale: 0.98 }}
              data-cursor="hover"
              className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-blueprint px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-blueprint-soft disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : submitLabel}
              {status !== "sending" && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}
            </motion.button>
            {submitError && (
              <p role="alert" className="text-center text-xs text-markup">
                {submitError}
              </p>
            )}
            <p className="text-center text-xs text-graphite-2">
              By submitting you agree to be contacted about VizeDraw. No spam.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-graphite-2">
        {label}
        {required && <span className="ml-1 text-markup">*</span>}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={onChange ? value : undefined}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        onBlur={onBlur}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={error ? fieldError : fieldBase}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs text-markup">
          {error}
        </p>
      )}
    </label>
  );
}
