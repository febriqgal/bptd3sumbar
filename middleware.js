import { NextResponse } from "next/server";

export default function Middleware(request) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // return NextResponse.redirect(new URL("/berita", request.url));
  }
}
