import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  isValidRecipientEmail,
  normalizeRecipientList,
  parseRecipientEmails,
} from "./parseRecipientEmails.ts";

describe("parseRecipientEmails", () => {
  it("parses a single email", () => {
    assert.deepEqual(parseRecipientEmails("contact@techhind.in"), [
      "contact@techhind.in",
    ]);
  });

  it("parses comma-separated emails", () => {
    assert.deepEqual(
      parseRecipientEmails("contact@techhind.in,owner@techhind.in"),
      ["contact@techhind.in", "owner@techhind.in"]
    );
  });

  it("parses semicolon-separated emails", () => {
    assert.deepEqual(
      parseRecipientEmails("contact@techhind.in; owner@techhind.in"),
      ["contact@techhind.in", "owner@techhind.in"]
    );
  });

  it("trims spaces around separators", () => {
    assert.deepEqual(
      parseRecipientEmails(" contact@techhind.in , owner@techhind.in "),
      ["contact@techhind.in", "owner@techhind.in"]
    );
  });

  it("ignores trailing commas", () => {
    assert.deepEqual(parseRecipientEmails("contact@techhind.in,"), [
      "contact@techhind.in",
    ]);
  });

  it("filters invalid entries", () => {
    assert.deepEqual(
      parseRecipientEmails("valid@techhind.in,not-an-email,owner@techhind.in"),
      ["valid@techhind.in", "owner@techhind.in"]
    );
  });

  it("returns an empty array for empty input", () => {
    assert.deepEqual(parseRecipientEmails(""), []);
    assert.deepEqual(parseRecipientEmails("   "), []);
  });

  it("deduplicates recipients case-insensitively", () => {
    assert.deepEqual(
      parseRecipientEmails("Owner@techhind.in,owner@techhind.in"),
      ["Owner@techhind.in"]
    );
  });
});

describe("normalizeRecipientList", () => {
  it("normalizes string input", () => {
    assert.deepEqual(normalizeRecipientList("a@x.com,b@x.com"), [
      "a@x.com",
      "b@x.com",
    ]);
  });

  it("normalizes array input", () => {
    assert.deepEqual(normalizeRecipientList(["a@x.com", "b@x.com"]), [
      "a@x.com",
      "b@x.com",
    ]);
  });
});

describe("isValidRecipientEmail", () => {
  it("accepts valid emails", () => {
    assert.equal(isValidRecipientEmail("user@example.com"), true);
  });

  it("rejects invalid emails", () => {
    assert.equal(isValidRecipientEmail("not-an-email"), false);
    assert.equal(isValidRecipientEmail("@example.com"), false);
  });
});
