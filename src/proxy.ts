import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const secretToken = String(process.env.NEXT_PUBLIC_BETTER_AUTH_SECRET);
  const token = await getToken({ req: request, secret: secretToken });
  console.log(token);

  const protectedRoutes = ["/dashboard", "/profile", "/write"];
  const publicRoutes = ["/login", "/register"];

  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (publicRoutes.some((route) => pathname.startsWith(route)) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: [
    "/dashboard",
    "/profile",
    "/write",
    "/login",
    "/register",
    "/me/notification",
  ],
};
