import Image from "next/image";
import BaseBox from "../common/BaseBox";
import { BoxProps } from "@mui/material";
import Text from "../common/Text";

const TextLogo: React.FC<BoxProps> = (props) => {
  return (
    <BaseBox {...props}>
      <Image src="/logo.png" width={30} height={30} alt="blog-logo" />
      <Text
        variant="h5"
        sx={{ fontWeight: "bolder", display: "flex", color: "#0a193e" }}
      >
        Blog
      </Text>
    </BaseBox>
  );
};

export default TextLogo;
