import { Metadata } from "next";
import SignUpPage from "@/components/AuthParent/SignupPage";
export const metadata: Metadata = {
  title: "Blog: Sign up",
  description: "Create a new account to get started with MyApp.",
};
function Signup() {
  return <SignUpPage />;
}

export default Signup;
