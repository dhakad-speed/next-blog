import { Metadata } from "next";
import SignInPage from "@/components/AuthParent/SigninPage";
export const metadata: Metadata = {
  title: "Blog: Sign in",
  description: "Create a new account to get started with MyApp.",
};
const Signin = () => {
  return <SignInPage />;
};

export default Signin;
