"use client";
import { Typography, type TypographyProps } from "@mui/material";

const Text: React.FC<TypographyProps> = (props) => {
  return <Typography {...props}>{props.children}</Typography>;
};
export default Text;
