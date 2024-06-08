import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

const AuthRoutes = ["/login", "/register"];

const CustomerRoutes = [
  "/dashboard/customer",
  "/dashboard/customer/pet-adaption",
  "/dashboard/customer/my-adaption",
  "/dashboard/customer/settings",
];

const AdminRoutes = [
  "/dashboard/admin",
  "/dashboard/admin/pet-management",
  "/dashboard/admin/user-management",
  "/dashboard/admin/settings",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const accessToken = req.cookies.get("accessToken")?.value || "";

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  try {
    const user = verifyToken(accessToken);

    if (CustomerRoutes.includes(pathname) && user.role !== "CUSTOMER") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (AdminRoutes.includes(pathname) && user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/customer",
    "/dashboard/customer/pet-adaption",
    "/dashboard/customer/my-adaption",
    "/dashboard/customer/settings",
    "/dashboard/admin",
    "/dashboard/admin/pet-management",
    "/dashboard/admin/user-management",
    "/dashboard/admin/settings",
  ],
};
