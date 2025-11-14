"use client";
import { Button, ButtonProps } from "@mui/material";
const BaseButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default BaseButton;
