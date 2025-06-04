import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const protectedAdminRoutes = [
  "/admin",
  "admin/clothes",
  "/admin/users",
  "/admin/orders",
];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  // Пример: блокируем доступ к админке, если не админ
  if (protectedAdminRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    if (token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  // Пример: блокировка доступа, если пользователь заблокирован
  if (pathname.startsWith("/")) {
    if (token?.isBlocked) {
      return NextResponse.redirect(new URL("/blocked", req.url));
    }
  }

  return NextResponse.next();
}
