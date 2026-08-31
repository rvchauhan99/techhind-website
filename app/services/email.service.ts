import nodemailer from "nodemailer";
import { normalizeRecipientList } from "@/app/utils/parseRecipientEmails";

interface SendEmailOptions {
  from: string;
  brevoUser: string;
  brevoMasterKey: string;
  priority?: "high" | "normal";
}

export async function sendEmail(
  to: string | string[],
  subject: string,
  text: string,
  html: string | undefined,
  options: SendEmailOptions
) {
  const recipients = normalizeRecipientList(to);

  if (recipients.length === 0) {
    throw new Error("At least one valid recipient email is required");
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: options.brevoUser,
        pass: options.brevoMasterKey,
      },
    });

    const mailOptions = {
      from: `'techHind Website' <${options.from}>`,
      to: recipients,
      subject,
      text,
      html,
      ...(options.priority === "high"
        ? {
            priority: "high" as const,
            headers: {
              "X-Priority": "1",
              "X-MSMail-Priority": "High",
              Importance: "high",
            },
          }
        : {}),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(
      `Email sent successfully to ${recipients.length} recipient(s):`,
      info.messageId
    );
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
