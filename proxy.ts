import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { pathname } = request.nextUrl;

  const publicPaths = ["/auth/sign-in", "/auth/sign-up", "/verify"];

  // If logged in and visiting public route
  if (token && publicPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If not logged in and trying to access protected route
  const isProtected = pathname.startsWith("/dashboard") || pathname === "/";
  if (!token && isProtected) {
    const signInUrl = new URL("/auth/sign-in", request.url);
    signInUrl.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/auth/:path*", "/verify/:path*"],
};
