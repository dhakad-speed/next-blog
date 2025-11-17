import "./globals.css";
import "./Layout.scss";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Providers from "./Providers";
import { auth } from "../../auth";
import { redirect } from "next/navigation";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: ReactNode }) {
  const session = auth();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
