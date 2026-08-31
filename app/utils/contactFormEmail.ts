interface ContactFormEmailInput {
  name: string;
  email: string;
  phone: string | null;
  message: string;
}

const BRAND_GREEN = "#00823b";
const BRAND_NAVY = "#1b365d";
const BRAND_ORANGE = "#f37021";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildContactFormSubject(name: string): string {
  const safeName = name.trim();
  return `[TECHHIND CONTACT] ★ NEW WEBSITE INQUIRY ★ — ${safeName}`;
}

export function buildContactFormEmailText({
  name,
  email,
  phone,
  message,
}: ContactFormEmailInput): string {
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return [
    "TECHHIND — NEW CONTACT FORM SUBMISSION",
    "========================================",
    "",
    `Submitted: ${submittedAt}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Contact Number: ${phone ?? "Not provided"}`,
    "",
    "Message:",
    message,
    "",
    "—",
    "Sent from techhind.in contact form",
  ].join("\n");
}

export function buildContactFormEmailHtml({
  name,
  email,
  phone,
  message,
}: ContactFormEmailInput): string {
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone ?? "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TECHHIND Contact Form</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f6f4;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f3f6f4;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #dbe5df;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
            <tr>
              <td style="background:linear-gradient(135deg, ${BRAND_GREEN} 0%, ${BRAND_NAVY} 100%);padding:28px 32px;text-align:center;">
                <p style="margin:0 0 8px;font-size:13px;line-height:1.4;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#d1fae5;">
                  techHind Website
                </p>
                <h1 style="margin:0;font-size:30px;line-height:1.2;font-weight:800;color:#ffffff;">
                  ★ NEW CONTACT FORM ★
                </h1>
                <p style="margin:12px 0 0;font-size:16px;line-height:1.5;color:#ecfdf5;">
                  A new inquiry was submitted on the website
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#fff7ed;border:2px solid ${BRAND_ORANGE};border-radius:12px;">
                  <tr>
                    <td style="padding:16px 18px;">
                      <p style="margin:0 0 6px;font-size:12px;line-height:1.4;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND_ORANGE};">
                        Priority Lead
                      </p>
                      <p style="margin:0;font-size:22px;line-height:1.3;font-weight:800;color:${BRAND_NAVY};">
                        ${safeName}
                      </p>
                      <p style="margin:8px 0 0;font-size:14px;line-height:1.5;color:#4b5563;">
                        Submitted on ${escapeHtml(submittedAt)}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-size:14px;font-weight:700;color:${BRAND_GREEN};width:140px;vertical-align:top;">
                      Name
                    </td>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-size:15px;color:#111827;vertical-align:top;">
                      ${safeName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-size:14px;font-weight:700;color:${BRAND_GREEN};vertical-align:top;">
                      Email
                    </td>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-size:15px;color:#111827;vertical-align:top;">
                      <a href="mailto:${safeEmail}" style="color:${BRAND_NAVY};font-weight:700;text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-size:14px;font-weight:700;color:${BRAND_GREEN};vertical-align:top;">
                      Contact Number
                    </td>
                    <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;font-size:15px;color:#111827;vertical-align:top;">
                      ${safePhone}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 0;font-size:14px;font-weight:700;color:${BRAND_GREEN};vertical-align:top;">
                      Message
                    </td>
                    <td style="padding:14px 0;font-size:15px;line-height:1.6;color:#111827;vertical-align:top;">
                      ${safeMessage}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 24px;background-color:#f8fafc;border-top:1px solid #e5e7eb;text-align:center;">
                <p style="margin:0;font-size:12px;line-height:1.5;color:#6b7280;">
                  Reply directly to this notification or contact the sender at
                  <a href="mailto:${safeEmail}" style="color:${BRAND_GREEN};font-weight:700;text-decoration:none;">${safeEmail}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}
