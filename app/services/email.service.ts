import nodemailer from "nodemailer";

interface SendEmailOptions {
  from: string;
  brevoUser: string;
  brevoMasterKey: string;
}

export async function sendEmail(
  to: string | string[],
  subject: string,
  text: string,
  html: string | undefined,
  options: SendEmailOptions
) {
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
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
