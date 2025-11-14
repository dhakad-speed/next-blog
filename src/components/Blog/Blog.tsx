import BaseBox from "../common/BaseBox";
import Text from "../common/Text";
import "./Blog.scss";
import Image from "next/image";
import { BoxProps } from "@mui/material";
interface BlogProps extends BoxProps {
  avtarImg?: string | undefined;
  username?: string;
  title?: string;
  content: string;
  blogImg: string;
}
const Blog: React.FC<BlogProps> = (props) => {
  console.log("hello");
  return (
    <BaseBox display={"flex"} justifySelf={"center"}>
      <BaseBox
        className="blog"
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        justifySelf={"center"}
        maxWidth={"1000px"}
        padding={"20px"}
      >
        <BaseBox
          className="user"
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={1}
        >
          <BaseBox
            className="avtar"
            width={30}
            height={30}
            position={"relative"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {" "}
            <Image
              src={
                props.avtarImg ||
                "https://lh3.googleusercontent.com/a/ACg8ocIManjR7Trfhb_N_P4_3NIbDNngzS8-aFshFD10TJmoDuUghJU=s288-c-no"
              }
              fill
              alt="user"
              style={{ borderRadius: "50%" }}
            />
          </BaseBox>
          <Text
            variant="body2"
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#6b6b6b" }}
          >
            {props.username}
          </Text>
        </BaseBox>
        <BaseBox className="blog-content" display={"flex"} gap={1}>
          <BaseBox
            className="blog-body"
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <BaseBox>
              <BaseBox className="blog-text-block">
                <Text variant="h5" fontWeight={"bolder"}>
                  {props.title}
                </Text>
                <Text variant="body1" sx={{ color: "#6b6b6b" }}>
                  {props.content}
                </Text>
              </BaseBox>
            </BaseBox>
            {/* <BaseBox display={"flex"} gap={1}>
              <BaseBox
                className="likes"
                fontSize={"14px"}
                display={"flex"}
                gap={1}
              >
                <BaseButton
                  disableTouchRipple
                  sx={{
                    display: "flex",
                    textTransform: "none",
                    color: "#6b6b6b",
                    gap: "8px",
                  }}
                >
                  {" "}
                  <Likeicon />
                  5.8K
                </BaseButton>
              </BaseBox>
              <BaseBox
                className="comment"
                display={"flex"}
                gap={1}
                fontSize={"14px"}
              >
                <BaseButton
                  disableTouchRipple
                  sx={{
                    display: "flex",
                    textTransform: "none",
                    color: "#6b6b6b",
                    gap: "8px",
                  }}
                >
                  {" "}
                  <Commenticon />
                  61
                </BaseButton>
              </BaseBox>
            </BaseBox> */}
          </BaseBox>
          <BaseBox className="blog-img">
            <Image src={props.blogImg} width={280} height={280} alt="blogimg" />
          </BaseBox>
        </BaseBox>
      </BaseBox>
    </BaseBox>
  );
};

export default Blog;
