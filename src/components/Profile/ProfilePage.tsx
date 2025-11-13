"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import BaseBox from "../common/BaseBox";
import Text from "../common/Text";
import Image from "next/image";
import "./Profile.scss";
import BaseButton from "../common/BaseButton";
// import { useRouter } from "next/navigation";
const ProfilePage = () => {
  const { data: session } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!session && status === "unauthenticated") {
  //     router.push("/auth/sign-in");
  //   }
  // }, [session, status, router]);
  const ProfileContent = (
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
            <Image
              src={session?.user?.image || "/logo.png"}
              alt="profile"
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
            <Text
              variant="h5"
              sx={{ fontWeight: "500", textTransform: "none" }}
            >
              {session?.user?.email}
            </Text>
          </BaseBox>
          <Text variant="body1">Welcome Back 🫶🏻 , {session?.user?.name}</Text>
        </BaseBox>
      </BaseBox>
      <BaseBox
        sx={{ borderColor: "#e4e9ee", borderTopWidth: "1px", height: "0" }}
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
            <Text variant="body1" sx={{ fontWeight: "400", color: "#666" }}>
              &quot;Your space, your stories — make it shine.&quot;
            </Text>
          </BaseBox>
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
        </BaseBox>
      </BaseBox>
    </BaseBox>
  );
  return (
    // <BaseBox sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
    <BaseBox component={"section"} className="profile-section">
      {ProfileContent}
    </BaseBox>
    // </BaseBox>
  );
};

export default ProfilePage;
