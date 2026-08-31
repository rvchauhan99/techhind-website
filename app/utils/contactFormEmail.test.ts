import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buildContactFormEmailHtml,
  buildContactFormEmailText,
  buildContactFormSubject,
} from "./contactFormEmail.ts";

describe("buildContactFormSubject", () => {
  it("uses a highlighted TECHHIND prefix and sender name", () => {
    assert.equal(
      buildContactFormSubject("Ravi Chauhan"),
      "[TECHHIND CONTACT] ★ NEW WEBSITE INQUIRY ★ — Ravi Chauhan"
    );
  });
});

describe("buildContactFormEmailHtml", () => {
  it("includes a prominent header and escaped user content", () => {
    const html = buildContactFormEmailHtml({
      name: "Ravi <script>",
      email: "ravi@techhind.in",
      phone: "+91 9876543210",
      message: "Hello\nWorld",
    });

    assert.match(html, /★ NEW CONTACT FORM ★/);
    assert.match(html, /Ravi &lt;script&gt;/);
    assert.match(html, /Hello<br>World/);
    assert.doesNotMatch(html, /<script>/);
  });
});

describe("buildContactFormEmailText", () => {
  it("includes a clear plain-text heading", () => {
    const text = buildContactFormEmailText({
      name: "Ravi Chauhan",
      email: "ravi@techhind.in",
      phone: null,
      message: "Need a demo",
    });

    assert.match(text, /TECHHIND — NEW CONTACT FORM SUBMISSION/);
    assert.match(text, /Contact Number: Not provided/);
    assert.match(text, /Need a demo/);
  });
});
