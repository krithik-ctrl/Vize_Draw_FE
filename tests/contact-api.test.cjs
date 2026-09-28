const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const vm = require("node:vm");
const ts = require("typescript");


function load(file, globals = {}, imports = {}) {
  const module = { exports: {} };
  const code = ts.transpileModule(
    readFileSync(path.join(__dirname, "..", file), "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }
  ).outputText;
  vm.runInNewContext(code, {
    module, exports: module.exports,
    require: (name) => {
      if (Object.hasOwn(imports, name)) return imports[name];
      throw new Error(`Unexpected import: ${name}`);
    },
    ...globals,
  }, { filename: file });
  return module.exports;
}

const validation = load("lib/validation.ts");
const valid = {
  variant: "contact", firstName: " Asha ", lastName: " Rao ",
  email: " asha@example.com ", company: " Example Fabrication ",
  phone: " +91 98765 43210 ext 12 ", reason: "Pricing inquiry",
  message: " Contact integration test. ", website: "",
};

function harness({ env = {}, status = 201, response = { ok: true }, headers = {}, fail = false } = {}) {
  const calls = [];
  const logs = [];
  const route = load("app/api/lead/route.ts", {
    process: { env },
    console: { info: (...args) => logs.push(args.join(" ")), error: (...args) => logs.push(args.join(" ")) },
    fetch: async (url, options) => {
      calls.push({ url, ...options, body: JSON.parse(options.body) });
      if (fail) throw new Error("private transport detail");
      return new Response(JSON.stringify(response), { status, headers });
    },
  }, { "next/server": require("next/server"), "@/lib/validation": validation });
  return {
    calls, logs,
    submit: async (body = valid) => {
      const res = await route.POST(new Request("http://localhost:3000/api/lead", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
      }));
      return { status: res.status, body: await res.json() };
    },
  };
}

test("default endpoint, exact payload, trimming, and accepted response", async () => {
  const h = harness();
  assert.deepEqual(await h.submit(), { status: 200, body: { ok: true } });
  assert.equal(h.calls.length, 1);
  const call = h.calls[0];
  assert.equal(call.url, "https://api.vizedraw.com/api/v1/public/contact");
  assert.equal(call.method, "POST");
  assert.equal(call.headers["Content-Type"], "application/json");
  assert.equal(call.headers["X-Contact-Secret"], undefined);
  assert.deepEqual(call.body, {
    first_name: "Asha", last_name: "Rao", email: "asha@example.com", company: "Example Fabrication",
    phone: "+91 98765 43210 ext 12", reason: "pricing", message: "Contact integration test.",
    source: "vizedraw-marketing-site", website: "",
  });
  assert.ok(h.logs.some((line) => line.endsWith("201")));
});

test("phone accepts any format through 40 characters and remains optional", async () => {
  for (const phone of ["", "123", "call extension ABC", "x".repeat(40)]) {
    assert.equal(validation.getPhoneError(phone), "");
    const h = harness();
    assert.equal((await h.submit({ ...valid, phone })).status, 200);
    if (!phone) assert.equal(Object.hasOwn(h.calls[0].body, "phone"), false);
  }
  const h = harness();
  assert.equal((await h.submit({ ...valid, phone: "x".repeat(41) })).status, 422);
  assert.equal(h.calls.length, 0);
});

test("documented required field boundaries", async () => {
  for (const [field, min, max] of [["firstName", 1, 100], ["lastName", 1, 100], ["company", 1, 200], ["message", 10, 5000]]) {
    for (const length of [min, max]) {
      assert.equal((await harness().submit({ ...valid, [field]: "x".repeat(length) })).status, 200);
    }
    for (const length of [min - 1, max + 1]) {
      const h = harness();
      assert.equal((await h.submit({ ...valid, [field]: "x".repeat(length) })).status, 422);
      assert.equal(h.calls.length, 0);
    }
  }
});

test("all six contact categories and demo category", async () => {
  for (const [label, reason] of Object.entries({
    "Request a demo": "demo", "Pricing inquiry": "pricing", "Book workflow review": "workflow",
    "Technical support": "support", "Partnership opportunity": "partnership", Other: "other",
  })) {
    const h = harness();
    await h.submit({ ...valid, reason: label });
    assert.equal(h.calls[0].body.reason, reason);
  }
  const h = harness();
  await h.submit({ ...valid, variant: "demo", reason: null });
  assert.equal(h.calls[0].body.reason, "demo");
  for (const reason of [undefined, "unrecognized", "toString"]) {
    assert.equal((await harness().submit({ ...valid, reason })).status, 422);
  }
});

test("honeypot and invalid types never forward or claim success", async () => {
  for (const body of [null, [], { ...valid, firstName: 42 }, { ...valid, phone: null }, { ...valid, website: "bot" }]) {
    const h = harness();
    const res = await h.submit(body);
    assert.ok([400, 422].includes(res.status));
    assert.equal(res.body.ok, false);
    assert.equal(h.calls.length, 0);
  }
});

test("server configuration and secret stay outside payloads/logs", async () => {
  const env = { VIZEDRAW_CONTACT_API_URL: "http://localhost:9000/contact", VIZEDRAW_CONTACT_SOURCE: " partner-site ", WEBSITE_CONTACT_SECRET: "test-only-secret" };
  const h = harness({ env, status: 403, response: { error: env.WEBSITE_CONTACT_SECRET } });
  const res = await h.submit();
  assert.equal(h.calls[0].url, env.VIZEDRAW_CONTACT_API_URL);
  assert.equal(h.calls[0].headers["X-Contact-Secret"], env.WEBSITE_CONTACT_SECRET);
  assert.equal(h.calls[0].body.source, "partner-site");
  assert.equal(JSON.stringify([res, h.calls[0].body, h.logs]).includes(env.WEBSITE_CONTACT_SECRET), false);
  for (const length of [64, 65]) {
    const sized = harness({ env: { VIZEDRAW_CONTACT_SOURCE: "x".repeat(length) } });
    assert.equal((await sized.submit()).status, length === 64 ? 200 : 503);
    assert.equal(sized.calls.length, length === 64 ? 1 : 0);
  }
});

test("422 maps documented validation details and handles non-visible/malformed errors", async () => {
  const h = harness({ status: 422, response: { detail: [
    { loc: ["body", "first_name"], msg: "First name rule" },
    { loc: ["body", "reason"], msg: "Reason rule" },
  ] } });
  const res = await h.submit();
  assert.equal(res.status, 422);
  assert.deepEqual(res.body.fieldErrors, { firstName: "First name rule", reason: "Reason rule" });
  for (const detail of ["unexpected", [{ loc: ["body", "source"], msg: "Source rule" }]]) {
    const res = await harness({ status: 422, response: { detail } }).submit();
    assert.equal(res.status, 422);
    assert.match(res.body.error, /sales@vizedraw\.com/);
  }
});

test("403/503/unexpected status and network failure show fallback without retries", async () => {
  for (const status of [403, 503, 500, 200]) {
    const h = harness({ status });
    const res = await h.submit();
    assert.equal(res.status, 503);
    assert.match(res.body.error, /sales@vizedraw\.com/);
    assert.equal(h.calls.length, 1);
    assert.ok(h.logs.some((line) => line.endsWith(String(status))));
  }
  const h = harness({ fail: true });
  assert.match((await h.submit()).body.error, /sales@vizedraw\.com/);
  assert.equal(h.calls.length, 1);
  assert.equal(h.logs.join().includes("private transport detail"), false);
});

test("429 shows documented wait and never retries automatically", async () => {
  const h = harness({ status: 429, headers: { "Retry-After": "120" } });
  const res = await h.submit();
  assert.equal(res.status, 429);
  assert.match(res.body.error, /120 seconds/);
  assert.equal(h.calls.length, 1);
});
