import React from "react";
import SignupPage from "@/src/components/AuthParent/SignupPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog: Sign up",
  description: "Create a new account to get started with MyApp.",
};
function Signup() {
  return <SignupPage />;
}

export default Signup;
