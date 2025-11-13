import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const PUBLIC_PATHS = [
  "/auth/sign-in",
  "/auth/sign-up",
  "/favicon.ico",
  "/api/auth",
];

export async function proxy(req: Request) {
  const { pathname } = new URL(req.url);

  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const token = await getToken({ req });

  if (!token) {
    const signInUrl = new URL("/auth/sign-in", req.url);
    signInUrl.searchParams.set("callbackUrl", req.url); // optional
    return NextResponse.redirect(signInUrl);
  }
  if (token && pathname.startsWith("/")) {
    const authenticatedUrl = new URL("/dashboard", req.url);
    authenticatedUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(authenticatedUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
