"use client";
import React from "react";
import { Box, BoxProps } from "@mui/material";

const BaseBox: React.FC<BoxProps> = (props) => {
  return <Box {...props}>{props.children}</Box>;
};

export default BaseBox;
