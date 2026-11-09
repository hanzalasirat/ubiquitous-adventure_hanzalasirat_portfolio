import test from "node:test";
import assert from "node:assert/strict";
import { contactMailto, filterProjects } from "../src/lib/helpers.js";
import { projects } from "../src/content/portfolio.js";
import { copy } from "../src/content/copy.js";

test("contact draft safely preserves Dari, punctuation and line breaks", () => {
  const url = contactMailto("owner@example.com", {
    name: "حنظله",
    sender: "me@example.com",
    subject: "Hello & help? #1",
    message: "سلام\nA&B + C",
  });
  const query = new URLSearchParams(url.split("?")[1]);
  assert.equal(query.get("subject"), "Hello & help? #1");
  assert.equal(query.get("body"), "سلام\nA&B + C\n\nحنظله\nme@example.com");
  assert.equal(query.size, 2);
});
test("project filtering returns only the selected category", () => {
  assert.equal(filterProjects(projects, "all").length, 3);
  assert.deepEqual(
    filterProjects(projects, "education").map((p) => p.id),
    ["school-management"],
  );
  assert.equal(filterProjects(projects, "missing").length, 0);
});
test("both languages cover every interface label", () => {
  assert.deepEqual(Object.keys(copy.fa).sort(), Object.keys(copy.en).sort());
  for (const project of projects) {
    for (const field of [
      "title",
      "description",
      "problem",
      "approach",
      "features",
    ]) {
      assert.ok(project[field].fa.length);
      assert.ok(project[field].en.length);
    }
  }
});
