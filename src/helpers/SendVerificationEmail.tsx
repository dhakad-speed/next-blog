import resend from "@/lib/resend";
import { EmailResponse } from "@/types/response";
import VerificationEmailTemplate from "../../emails/VerificationEmailTemplate";

export default async function SendVerificationEmail(
  username: string,
  email: string,
  verifyCode: string
): Promise<EmailResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Hello world",
      react: VerificationEmailTemplate({ username, verifyCode }),
    });

    return { success: true, message: "Verification Email Sent" };
  } catch (error) {
    console.error("error in sending verification", error);
    return { success: true, message: "error in sending verification" };
  }
}
