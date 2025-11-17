import SignInPage from "@/src/components/AuthParent/SigninPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog: Sign in",
  description: "Create a new account to get started with MyApp.",
};
const Signin = () => {
  return <SignInPage />;
};

export default Signin;
