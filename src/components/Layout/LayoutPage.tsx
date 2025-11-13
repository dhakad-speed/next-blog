"use client";
import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import AppDrawer from "../Drawer/AppDrawer";
import BaseBox from "../common/BaseBox";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
interface LayoutPage {
  children: React.ReactNode;
}

const LayoutPage = ({ children }: LayoutPage) => {
  const { data: session, status } = useSession();
  const drawerOpen = useSelector(
    (state: RootState) => state.openReducer.drawers.sideBar
  );
  const router = useRouter();
  const drawerWidth = 240;
  const ContentStyle = {
    flexGrow: 1,
    p: 3,
    transition: "margin 0.3s ease, width 0.3s ease",
    marginLeft: drawerOpen ? ` ${drawerWidth}px` : 0,
    width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
    display: "flex",
    justifyContent: "center",
  };
  useEffect(() => {
    if (status === "loading") return;
    if (!session && status === "unauthenticated") {
      router.push("/auth/sign-in");
    }
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, session, router]);
  return (
    <React.Fragment>
      <BaseBox>
        <Navbar />
        <AppDrawer />
        <BaseBox component="main" sx={ContentStyle}>
          {children}
        </BaseBox>
      </BaseBox>
    </React.Fragment>
  );
};

export default LayoutPage;
