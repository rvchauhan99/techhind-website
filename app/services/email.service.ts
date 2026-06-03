import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_MASTER_KEY,
  },
});

export async function sendEmail(
  to: string | string[],
  subject: string,
  text: string,
  html?: string
) {
  try {
    const mailOptions = {
      from: `'techHind Website' <${process.env.BREVO_FROM}>`,
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
