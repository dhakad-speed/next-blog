// src/app/layout.tsx
import "./globals.css";
import "./Layout.scss";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
