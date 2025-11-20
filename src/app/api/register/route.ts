import { dbConnect } from "@/lib/dbConnect";
import { encryptPassword } from "@/utils/encrypt";
import SendVerificationEmail from "@/helpers/SendVerificationEmail";
import UserModel from "@/model/User";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { username, email, password } = await request.json();
  const existingUserVerifiedByUsername = await UserModel.findOne({
    username,
    isVerified: true,
  });
  if (existingUserVerifiedByUsername) {
    return { success: false, message: "username is already taken" };
  }

  const existingUserByEmail = await UserModel.findOne({
    email,
  });
  const codeExpiry = new Date();
  codeExpiry.setHours(codeExpiry.getHours() + 1);
  const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
  if (existingUserByEmail) {
    if (existingUserByEmail.isVerified) {
      return NextResponse.json({
        success: false,
        message: "user is already verified",
      });
    } else {
      const hashPassword = await encryptPassword(password);
      existingUserByEmail.password = hashPassword;
      existingUserByEmail.verifyCode = verifyCode;
      existingUserByEmail.verifyCodeExpiry = codeExpiry;
      await existingUserByEmail.save();
    }
  } else {
    const hashPassword = await encryptPassword(password);
    const newRegisteredUser = await UserModel.create({
      username,
      email,
      password: hashPassword,
      verifyCode,
      verifyCodeExpiry: codeExpiry,
    });
    return NextResponse.json({
      newRegisteredUser,
    });
  }
  const sendVerification = await SendVerificationEmail(
    username,
    email,
    verifyCode
  );
  if (!sendVerification.success) {
    return NextResponse.json({
      succsess: false,
      message: "failed to send verification",
    });
  }
  return;
}
