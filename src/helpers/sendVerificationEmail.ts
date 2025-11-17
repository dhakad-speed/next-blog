import resend from "../lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { Response } from "../types/Response";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<Response> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Verify the user",
      react: VerificationEmail({ username, verifyCode }),
    });
    return { success: true, message: "verification email sent successfully" };
  } catch (error) {
    console.log("Error in sending email", error);
    return { success: false, message: "failed to send verification email" };
  }
}
