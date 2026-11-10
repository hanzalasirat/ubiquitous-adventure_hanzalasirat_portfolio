import test from "node:test";
import assert from "node:assert/strict";
import {
  validateContact,
  validEndpoint,
  submitContact,
} from "../../src/lib/contact";
const valid = {
  name: "حنظله",
  email: "visitor@example.com",
  subject: "Project & collaboration",
  message: "سلام\nA project idea.",
};
test("validation handles required fields, invalid emails, bounds and honeypot", () => {
  assert.equal(validateContact(valid), null);
  assert.equal(validateContact({ ...valid, name: "  " }), "required");
  assert.equal(validateContact({ ...valid, email: "invalid" }), "email");
  assert.equal(
    validateContact({ ...valid, message: "x".repeat(4001) }),
    "length",
  );
  assert.equal(validateContact({ ...valid, website: "spam" }), "spam");
  assert.equal(validEndpoint("http://example.com"), false);
  assert.equal(validEndpoint("https://example.com/forms/contact"), true);
});
test("real submission preserves payload and accepts successful responses", async () => {
  let submitted = false;
  const fetcher: typeof fetch = async (input, init) => {
    assert.equal(input, "https://example.com/contact");
    assert.equal(init?.method, "POST");
    assert.deepEqual(JSON.parse(String(init?.body)), valid);
    submitted = true;
    return new Response("{}", { status: 200 });
  };
  await submitContact("https://example.com/contact", valid, fetcher);
  assert.equal(submitted, true);
});
test("missing config, service failure and network failure never become success", async () => {
  await assert.rejects(() => submitContact("", valid), /not-configured/);
  await assert.rejects(
    () =>
      submitContact(
        "https://example.com",
        valid,
        async () => new Response("", { status: 500 }),
      ),
    /delivery-failed/,
  );
  await assert.rejects(
    () =>
      submitContact("https://example.com", valid, async () => {
        throw new Error("offline");
      }),
    /offline/,
  );
});
