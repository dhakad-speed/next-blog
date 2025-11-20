import { Metadata } from "next";
import Register from "@/components/AuthParent/Register";
export const metadata: Metadata = {
  title: "Blog: Sign up",
  description: "Create a new account to get started with MyApp.",
};
function RegisterComponent() {
  return <Register />;
}

export default RegisterComponent;
