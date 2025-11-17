import { Metadata } from "next";
import Login from "@/components/AuthParent/Login";
export const metadata: Metadata = {
  title: "Blog: Sign in",
  description: "Sign in to your account to get started with MyApp.",
};
const Signin = () => {
  return <Login />;
};

export default Signin;
