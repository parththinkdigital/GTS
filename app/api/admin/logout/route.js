import { NextResponse } from "next/server";

/**
 * POST /api/admin/logout
 * Clears the admin auth cookie.
 */
export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("gts_admin_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
  return response;
}
