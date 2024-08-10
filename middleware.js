import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");

  if (!token) {
    console.log("Redirecting to /auth/login");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  console.log("Token found, proceeding to next response");
  return NextResponse.next();
}

export const config = {
  matcher: ["/cms/profiledetail", "/cms/productlist", "/cms/createdata","/cms/productlist/[slug]","/" ],
};
