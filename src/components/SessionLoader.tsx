"use client";
import { useSession } from "next-auth/react";

export default function SessionLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session } = useSession();

  return children;
}
