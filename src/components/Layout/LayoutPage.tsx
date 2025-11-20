"use client";

import { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import AppDrawer from "../Drawer/AppDrawer";
import BaseBox from "../common/BaseBox";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import "./Layout.scss";

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
    background: "#f7fafc",
    transition: "all 0.3s ease",
    marginLeft: drawerOpen ? ` ${drawerWidth}px` : 0,
    width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
  };

  return (
    <Fragment>
      <BaseBox>
        <Navbar />
        <BaseBox component={"main"}>
          <AppDrawer />
          <BaseBox
            display={"flex"}
            justifyContent={"center"}
            padding={4}
            component="section"
            sx={ContentStyle}
          >
            {children}
          </BaseBox>
        </BaseBox>
      </BaseBox>
    </Fragment>
  );
};

export default LayoutPage;
