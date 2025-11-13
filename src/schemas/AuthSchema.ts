import * as Yup from "yup";

export const SignInSchema = Yup.object({
  username: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be minimum 8 characters")
    .required("Password is required"),
});
export const SignUpSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be minimum 8 characters")
    .required("Password is required"),
});
