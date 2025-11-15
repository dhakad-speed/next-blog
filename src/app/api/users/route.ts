import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/src/model/User";
import { dbConnect } from "@/src/lib/dbConnect";

import { hashPassword } from "@/src/utils/encrypt";

export async function POST(request: NextRequest) {
  const { username, email, password } = await request.json();

  await dbConnect();

  try {
    const isExistingUserByEmail = await UserModel.findOne({
      username,
    });
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    if (isExistingUserByEmail) {
      if (isExistingUserByEmail.isVerified) {
        return NextResponse.json(
          { success: false, message: "Username is Already Taken" },
          { status: 400 }
        );
      } else {
        const hashedPassword = await hashPassword(password);
        isExistingUserByEmail.password = hashedPassword;
        isExistingUserByEmail.verifyCode = verifyCode;
        isExistingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);
        await isExistingUserByEmail.save();
      }
    } else {
      const hashedPassword = await hashPassword(password);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1);
      const newLoginedUser = await UserModel.create({
        username: username,
        email: email,
        password: hashedPassword,
        isVerified: false,
        verifyCode: verifyCode,
        verifyCodeExpiry: expiryDate,
      });
      await newLoginedUser.save();
      return NextResponse.json(
        { success: true, message: "New User Registered Successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log("Error in registering User", error);
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 }
    );
  }
  return NextResponse.json({ username, email, password });
}

export async function GET() {
  await dbConnect();
  const users = await UserModel.find();
  return NextResponse.json(users);
}
