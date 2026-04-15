import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Backwards-compatible; prefer `/superman.jpeg` directly. */
export function GET(request: NextRequest) {
  const u = request.nextUrl.clone();
  u.pathname = "/superman.jpeg";
  u.search = "";
  return NextResponse.redirect(u, 307);
}
