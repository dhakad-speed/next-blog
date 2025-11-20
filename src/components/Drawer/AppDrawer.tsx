import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";
import { RootState } from "@/redux/store";
import BaseBox from "../common/BaseBox";
import Link from "next/link";
import HomeIcon from "../common/home/HomeIcon";
import ProfileIcon from "../common/profile/ProfileIcon";
import Text from "../common/Text";

import { Fragment } from "react/jsx-runtime";
import "./Drawer.scss";

const drawerWidth = 240;
const AppDrawer = () => {
  const open = useSelector(
    (state: RootState) => state.openReducer.drawers.sideBar
  );

  const DrawerContent = (
    <BaseBox className="drawer-element">
      <BaseBox className="drawer-content">
        <Fragment>
          <Link href={"/"}>
            <HomeIcon />
            <Text variant="h5">Home</Text>
          </Link>

          <Link href={"/profile"}>
            <ProfileIcon />
            <Text variant="h5">Profile</Text>
          </Link>
        </Fragment>
      </BaseBox>
    </BaseBox>
  );

  return (
    <Drawer
      variant="persistent"
      open={open}
      anchor="left"
      PaperProps={{
        sx: {
          position: "fixed",
          top: 60,
          left: 0,
          width: drawerWidth,
          height: "calc(100vh - 60px)",
          overflowY: "auto",
        },
      }}
      ModalProps={{ keepMounted: true }}
    >
      {DrawerContent}
    </Drawer>
  );
};

export default AppDrawer;
