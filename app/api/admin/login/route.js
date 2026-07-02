import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";
import pool from "@/lib/db";

/**
 * POST /api/admin/login
 * Authenticates admin using env-configured credentials.
 * Sets an httpOnly JWT cookie on success.
 */
export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Query the database for the user
    const [rows] = await pool.execute(
      "SELECT id, email, password, role FROM admins WHERE email = ?",
      [email.trim().toLowerCase()]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const admin = rows[0];

    // Compare credentials
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Sign JWT
    const token = signToken({ id: admin.id, email: admin.email, role: admin.role });

    // Set httpOnly cookie (not accessible from JS)
    const response = NextResponse.json({ success: true });
    response.cookies.set("gts_admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8, // 8 hours
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("[/api/admin/login] Error:", error);
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
