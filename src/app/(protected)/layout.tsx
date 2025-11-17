import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import Providers from "../Providers";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  return <Providers>{children}</Providers>;
}
