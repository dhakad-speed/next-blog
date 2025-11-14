"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Grid, Container } from "@mui/material";
import Text from "../common/Text";
import BaseBox from "../common/BaseBox";
import Link from "next/link";
import { DiagonalDiv } from "../Constants";
import BaseButton from "../common/BaseButton";
import "./Signup.scss";
const SignupPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isHovered, setIsHovered] = useState(false);
  const vectorImage = "https://images.tryspeed.dev/app/vector.png";
  useEffect(() => {
    if (status === "loading") return;

    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router, session]);
  const handleSignIn = () => {
    signIn("google");
  };
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
          <BaseBox className="sign-up-app-root">
            <BaseBox component={"main"} className="section-container">
              <BaseBox className="backdrop">
                <Grid direction={"column"} alignItems={"center"}>
                  <BaseBox className="social-title" marginBottom={"20px"}>
                    <Text variant="h4" fontWeight={"700"}>
                      Welcome to{" "}
                      <Text variant="h4" component={"span"} fontWeight={"bold"}>
                        Blog.
                      </Text>
                    </Text>
                  </BaseBox>
                  <BaseBox className="social" component="section">
                    <BaseBox
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      gap={3}
                    >
                      <BaseBox className="social-providers">
                        <BaseButton className="btn" onClick={handleSignIn}>
                          <Image
                            src="https://images.tryspeed.dev/app/google-icon.svg"
                            alt="google-log"
                            width={20}
                            height={20}
                          />
                          <Text> Continue With Google</Text>
                        </BaseButton>
                      </BaseBox>
                      <BaseBox display={"flex"} alignItems={"center"} gap={1}>
                        {" "}
                        <Text variant="body1">
                          Do you already have an account?
                        </Text>
                        <Link
                          href="/auth/sign-in"
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
                  </BaseBox>
                </Grid>
              </BaseBox>
            </BaseBox>
          </BaseBox>
        </Container>
      </DiagonalDiv>
    </Grid>
  );
};

export default SignupPage;
