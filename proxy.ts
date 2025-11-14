import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const PUBLIC_PATHS = [
  "/auth/sign-in",
  "/auth/sign-up",
  "/favicon.ico",
  "/api/auth",
];
const PROTECTED_ROUTES = [
  "/dashboard",
  "/profile",
  "/write",
  "/me/notification",
];

export async function proxy(req: Request) {
  const { pathname } = new URL(req.url);
  const token = await getToken({ req });
  if (
    !token &&
    PROTECTED_ROUTES.some((protect) => pathname.startsWith(protect))
  ) {
    const signInUrl = new URL("/auth/sign-in", req.url);
    signInUrl.searchParams.set("callbackUrl", req.url); // optional
    return NextResponse.redirect(signInUrl);
  }
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    const token = await getToken({ req });
    if (
      token &&
      pathname.startsWith("/auth/sign-in") &&
      pathname.startsWith("/auth/sign-up")
    ) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
