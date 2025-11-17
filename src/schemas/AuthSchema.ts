import * as Yup from "yup";

export const SignInSchema = Yup.object({
  username: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Please enter your username"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password should be minimum 8 characters")
    .required("Please enter your password"),
});
export const SignUpSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password should be minimum 8 characters")
    .required("Please enter your password"),
});
