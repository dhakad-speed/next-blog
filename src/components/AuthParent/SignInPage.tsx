"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import BaseBox from "../common/BaseBox";
import { Grid, InputBase, Container } from "@mui/material";
import BaseButton from "../common/BaseButton";
import Text from "../common/Text";
import "./Signin.scss";
import { DiagonalDiv } from "../Constants";
import { signIn } from "next-auth/react";
import { SignInSchema } from "@/src/schemas/AuthSchema";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import createUser from "@/PostUser";

function SignInPage() {
  const { status, data: session } = useSession();
  const router = useRouter();
  const vectorImage = "https://images.tryspeed.dev/app/vector.png";

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      try {
        console.log("Form submitted successfully:", values);
        createUser({
          username: values.username,
          email: values.email,
          password: values.password,
        });

        const performLogin = await signIn("credentials", {
          username: values.username,
          email: values.email,
          password: values.password,
          redirect: false,
        });
        if (!performLogin.error) {
          console.log("error in authentication");
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      }
    },
  });

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated" && !session) {
      router.push("/auth/sign-in");
    }
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router, session]);

  return (
    <Grid display={"grid"}>
      <DiagonalDiv
        mainDivSx={{
          backgroundImage: `url(
      ${vectorImage}
    )`,
        }}
        previewColor=""
      >
        <Container sx={{ padding: "0 !important" }}>
          <BaseBox className="sign-in-app-root">
            <BaseBox component={"main"} className="section-container">
              <BaseBox className="backdrop">
                <Grid direction={"column"}>
                  <BaseBox className="form-title" marginBottom={"20px"}>
                    <Text variant="h4" fontWeight={"700"}>
                      Sign in to your account
                    </Text>
                    <Text sx={{ color: "#666" }}>
                      It&apos;s great to have you here again. Kindly provide
                      your registered email address.
                    </Text>
                  </BaseBox>
                  <BaseBox
                    className="form"
                    component="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      formik.handleSubmit(
                        e as unknown as React.FormEvent<HTMLFormElement>
                      );
                    }}
                  >
                    <InputBase
                      placeholder={
                        formik.errors.username
                          ? formik.errors.username
                          : "Enter Your Username"
                      }
                      value={formik.values.username}
                      className={
                        formik.errors.username && formik.touched.username
                          ? "error-input"
                          : ""
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="username"
                    />
                    <InputBase
                      className={
                        formik.errors.email && formik.touched.email
                          ? "error-input"
                          : ""
                      }
                      placeholder={
                        formik.errors.email
                          ? formik.errors.email
                          : "Enter Your Email"
                      }
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="email"
                    />
                    <InputBase
                      className={
                        formik.errors.password && formik.touched.password
                          ? "error-input"
                          : ""
                      }
                      placeholder={
                        formik.errors.password
                          ? formik.errors.password
                          : "Enter Your Password"
                      }
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="password"
                    />
                    <BaseButton className="btn" type="submit">
                      Sign in
                    </BaseButton>
                    <BaseBox
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <Text variant="body1">Don&apos;t have an Account</Text>
                      <Link
                        href="/auth/sign-up"
                        style={{
                          fontSize: "15px",
                          color: "#2a67ff",
                          marginTop: "4px",
                        }}
                      >
                        Sign up
                      </Link>
                    </BaseBox>
                  </BaseBox>
                </Grid>
              </BaseBox>
            </BaseBox>
          </BaseBox>
        </Container>
      </DiagonalDiv>
    </Grid>
  );
}

export default SignInPage;
