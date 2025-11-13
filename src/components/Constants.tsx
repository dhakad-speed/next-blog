"use client";
import BaseBox from "./common/BaseBox";
import "./diagonal.scss";
import { SxProps, Theme } from "@mui/material";
interface DiagonalDivTypes {
  children: React.ReactNode;
  mainDivSx?: SxProps<Theme>;
  previewColor?: string;
}
export const DiagonalDiv: React.FC<DiagonalDivTypes> = ({
  children,
  mainDivSx = {} as SxProps<Theme>,
  previewColor = "#fff",
}) => {
  return (
    <>
      <BaseBox
        className="vector-diagonal-div"
        sx={{
          ...mainDivSx,
        }}
      />
      <BaseBox
        className="vector-diagonal-sub-div"
        sx={{
          backgroundColor: previewColor && `${previewColor} !important`,
        }}
      />
      <BaseBox className="overlay-container">{children}</BaseBox>
    </>
  );
};
