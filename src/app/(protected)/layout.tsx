import "./globals.css";
import "./Layout.scss";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Providers from "./Provider";
import LayoutPage from "@/components/Layout/LayoutPage";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>
          <LayoutPage>{children}</LayoutPage>
        </Providers>
      </body>
    </html>
  );
}
