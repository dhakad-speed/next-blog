"use client";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import BaseBox from "../common/BaseBox";
import Text from "../common/Text";
import Image from "next/image";
import "./Profile.scss";
import { Skeleton } from "@mui/material";
import BaseButton from "../common/BaseButton";

// import { useRouter } from "next/navigation";
const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  // const router = useRouter();

  useEffect(() => {
    setLoading(status === "loading");
  }, [status]);
  // const ProfileContent = (

  // );

  return (
    <React.Fragment>
      <BaseBox sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <BaseBox component={"section"} className="profile-section">
          <BaseBox
            className="content"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <BaseBox className="content-01">
              <BaseBox
                className="header-content"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginBlock: "20px",
                }}
              >
                <BaseBox
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  {" "}
                  {loading ? (
                    <Skeleton width={40} height={40} variant="circular" />
                  ) : (
                    <Image
                      src={session?.user?.image || "/logo.png"}
                      alt="profile"
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%" }}
                    />
                  )}
                  {loading ? (
                    <Skeleton
                      variant="text"
                      width={334}
                      sx={{ borderRadius: "10px", fontSize: "24px" }}
                    />
                  ) : (
                    <Text
                      variant="h5"
                      sx={{ fontWeight: "500", textTransform: "none" }}
                    >
                      {session?.user?.email}
                    </Text>
                  )}
                </BaseBox>
                {loading ? (
                  <Skeleton
                    variant="text"
                    width={256}
                    sx={{ borderRadius: "10px", fontSize: "1rem" }}
                  />
                ) : (
                  <Text variant="body1">
                    Welcome Back 🫶🏻 , {session?.user?.name}
                  </Text>
                )}
              </BaseBox>
            </BaseBox>
            <BaseBox
              sx={{
                borderColor: "#e4e9ee",
                borderTopWidth: "1px",
                height: "0",
              }}
            ></BaseBox>
            <BaseBox className="content-02" sx={{ width: "100%" }}>
              <BaseBox
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <BaseBox sx={{ display: "flex" }}>
                  {loading ? (
                    <Skeleton
                      variant="text"
                      width={326}
                      sx={{ fontSize: "1rem", borderRadius: "10px" }}
                    />
                  ) : (
                    <Text
                      variant="body1"
                      sx={{ fontWeight: "400", color: "#666" }}
                    >
                      &quot;Your space, your stories — make it shine.&quot;
                    </Text>
                  )}
                </BaseBox>
                {loading ? (
                  <Skeleton
                    width={65}
                    height={40}
                    variant="rectangular"
                    sx={{ borderRadius: "10px" }}
                  />
                ) : (
                  <BaseButton
                    onClick={() => signOut()}
                    sx={{
                      background: "#f9f9f9",
                      fontSize: "14px",
                      border: "1px solid #e4e9ee",
                      textTransform: "none",
                      // position: "absolute",
                      // bottom: "30px",
                      // right: "30px",
                      color: "#0a193e",
                    }}
                  >
                    Logout
                  </BaseButton>
                )}
              </BaseBox>
            </BaseBox>
          </BaseBox>
        </BaseBox>
      </BaseBox>
    </React.Fragment>
  );
};

export default ProfilePage;
