"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import BaseBox from "../common/BaseBox";
import { Grid, InputBase, Container } from "@mui/material";
import BaseButton from "../common/BaseButton";
import Text from "../common/Text";
import "./Register.scss";
import { DiagonalDiv } from "../Constants";
import { signIn } from "next-auth/react";
import { SignInSchema } from "@/schemas/AuthSchema";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import createUser from "../../../PostUser";

function Register() {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const vectorImage = "https://images.tryspeed.dev/app/vector.png";

  const { handleBlur, handleSubmit, touched, errors, values, handleChange } =
    useFormik({
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
          router.push("/");
        } catch (error) {
          console.error("Unexpected error:", error);
        }
      },
    });

  useEffect(() => {
    if (status === "loading") return;

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
                      Register your account
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
                      handleSubmit(
                        e as unknown as React.FormEvent<HTMLFormElement>
                      );
                    }}
                  >
                    <InputBase
                      name="username"
                      placeholder={
                        errors.username
                          ? errors.username
                          : "Enter Your Username"
                      }
                      value={values.username}
                      className={
                        errors.username && touched.username ? "error-input" : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <InputBase
                      className={
                        errors.email && touched.email ? "error-input" : ""
                      }
                      placeholder={
                        errors.email ? errors.email : "Enter Your Email"
                      }
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                    />
                    <InputBase
                      className={
                        errors.password && touched.password ? "error-input" : ""
                      }
                      placeholder={
                        errors.password
                          ? errors.password
                          : "Enter Your Password"
                      }
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                    />
                    <BaseButton className="btn" type="submit">
                      Sign up
                    </BaseButton>
                    <BaseBox
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                      justifyContent={"center"}
                    >
                      {" "}
                      <Text variant="body1">
                        Do you already have an account?
                      </Text>
                      <Link
                        href="/sign-in"
                        style={{
                          fontSize: "15px",
                          color: "#2a67ff",
                          textDecoration: isHovered ? "underline" : "none",
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        Sign In
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

export default Register;
//https://accounts.google.com/
// v3/
// signin/
// accountchooser
// ?
// access_type=offline
// &client_id=733975958425-3g3r05e3q0j7u5j5jv7u50mktgqbbsqo.apps.googleusercontent.com
// &code_challenge=rdLw_Ktd2LySouvvpknqUWU5Ser58itLxanXXbW0LRI
// &code_challenge_method=S256
// &prompt=consent
// &redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle
// &response_type=code&scope=openid+profile+email&dsh=S-652446199%3A1763100890872961&o2v=2&service=lso&flowName=GeneralOAuthFlow&opparams=%253F&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAPZCGJl6hhlglHRD4S4KwI2bB7iY-ryey3LcR8WjQ5qhkQCF7y1MfomeQqrUTr-k_0Nvq50YKoT41irQknfywKJImz6k1OSdw5Rt-5AKdc_lmbIxjLtU9jagROFd8DNo5qYdNHuqbBuc0VOhOzZCiBR9qHG4d_AG7BJPWpLdUNZ1LvIZzr276sY8u4HLKodQyKLcX6tpY8VCSRw2594Xh_kkV-JQsNOWH-rghfkI4dEyK7HMQ8ArllKIDFw0iXZWcXvPAijg6qKmG1O_LqUbxgyzSoHPBlNgXBDIgR0gn9pd1gn_UF5Hufz5XVIpCz3cToLKKYFHiz1iYltZ5pgEO7vfgP0a4e5CXq0N8Zhk0hrQ4Adx0_ZSqFrqH6LkF1qevD4LD3j_c4QF6IwIBiAQ-K8s05RTHmWC8nImwioWa1qYWA0OKJVV9TvV3pnRFilO1bJqRtOwm6HZdt__DdHp_9WdY_xOw%26flowName%3DGeneralOAuthFlow%26as%3DS-652446199%253A1763100890872961%26client_id%3D733975958425-3g3r05e3q0j7u5j5jv7u50mktgqbbsqo.apps.googleusercontent.com%23&app_domain=http%3A%2F%2Flocalhost%3A3000
