"use client";

import { Box, BoxProps } from "@mui/material";

interface BaseBoxProps extends BoxProps {
  children?: React.ReactNode;
}
const BaseBox: React.FC<BaseBoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default BaseBox;
