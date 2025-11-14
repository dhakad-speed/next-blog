"use client";

import Link from "next/link";
import BaseBox from "../common/BaseBox";
// import Image from "next/image";
import "./Navbar.scss";
import BaseIconButton from "../common/BaseIconButton";
import WriteIcon from "../BlogIcons/WriteIcon/WriteIcon";
import NotificationIcon from "../BlogIcons/NotificationIcon/NotificationIcon";
import { useDispatch } from "react-redux";
import Menu from "../Menu/Menu";
import { setDrawer } from "@/src/redux/slices/OpenSlices";
import TextLogo from "../TextLogo/TextLogo";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <BaseBox component={"nav"}>
      <BaseBox className="nav-content">
        <BaseBox className="left">
          <BaseBox
            display={"flex"}
            alignItems={"center"}
            className="left-content"
          >
            <Menu
              onClick={() => dispatch(setDrawer("sideBar"))}
              className="menu"
            />
            <TextLogo className="logo" />
          </BaseBox>
        </BaseBox>
        <BaseBox className="right">
          <BaseBox className="right-content">
            <Link href="/write">
              <BaseBox
                sx={{
                  color: "#6b6b6b",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "0",
                }}
              >
                <WriteIcon />
                Write
              </BaseBox>
            </Link>
            <Link href={"/me/notification"}>
              <BaseIconButton>
                <NotificationIcon />
              </BaseIconButton>
            </Link>
            {/* <BaseIconButton>
              <Image
                src="https://lh3.googleusercontent.com/a/ACg8ocK7H3RKvfU6UIUajnPoXYL8ixQDhHwg_dK_3h7ppxzPGBnJajo=s288-c-no"
                width={40}
                height={40}
                alt="avatar"
                style={{ borderRadius: "50%" }}
              />
            </BaseIconButton> */}
          </BaseBox>
        </BaseBox>
      </BaseBox>
    </BaseBox>
  );
}

export default Navbar;
