import React from "react";
import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";
import { RootState } from "@/src/redux/store";
import BaseBox from "../common/BaseBox";
import Link from "next/link";
import HomeIcon from "../common/home/HomeIcon";
import ProfileIcon from "../common/profile/ProfileIcon";
import Text from "../common/Text";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const drawerWidth = 240;

const drawerStyle = {
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-docked": {},
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    transition: "width 0.3s ease",
    top: "60px",
  },
};

const DrawerContentStyles = {
  drawerContent: {
    paddingTop: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    DrawerLink: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "0 28px 0 24px",
      borderLeft: "1px solid transparent",
      transition: "border-color 0.3s ease",
    },
  },
};

const AppDrawer = () => {
  const { status } = useSession();
  const pathname = usePathname();

  const open = useSelector(
    (state: RootState) => state.openReducer.drawers.sideBar
  );

  const DrawerContent = (
    <BaseBox sx={DrawerContentStyles}>
      <BaseBox
        sx={DrawerContentStyles.drawerContent}
        className="Drawer-Content"
      >
        {status === "unauthenticated" && (
          <React.Fragment>
            <Link
              href={"/"}
              style={{
                ...DrawerContentStyles.drawerContent.DrawerLink,
                borderLeftColor: pathname === "/" ? "#000" : "transparent",
              }}
            >
              <HomeIcon />
              <Text variant="h5">Home</Text>
            </Link>

            <Link
              href={"/profile"}
              style={{
                ...DrawerContentStyles.drawerContent.DrawerLink,
                borderLeftColor: pathname === "/write" ? "#000" : "transparent",
              }}
            >
              <ProfileIcon />
              <Text variant="h5">Profile</Text>
            </Link>
          </React.Fragment>
        )}
      </BaseBox>
    </BaseBox>
  );

  return (
    <Drawer variant="persistent" open={open} anchor="left" sx={drawerStyle}>
      {DrawerContent}
    </Drawer>
  );
};

export default AppDrawer;
