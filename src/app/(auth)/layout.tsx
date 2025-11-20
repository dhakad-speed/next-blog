import React, { ReactNode } from "react";
import "./auth.scss";
import { Inter } from "next/font/google";
import Hydration from "@/components/Hydration/Hydration";
interface AuthLayoutProps {
  children: ReactNode;
}
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
function layout({ children }: AuthLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Hydration>{children}</Hydration>
      </body>
    </html>
  );
}

export default layout;
