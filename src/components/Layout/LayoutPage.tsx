"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import AppDrawer from "../Drawer/AppDrawer";
import BaseBox from "../common/BaseBox";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

interface LayoutPage {
  children: React.ReactNode;
}

const LayoutPage = ({ children }: LayoutPage) => {
  const drawerOpen = useSelector(
    (state: RootState) => state.openReducer.drawers.sideBar
  );
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
