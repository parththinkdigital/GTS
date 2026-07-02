import { NextResponse } from "next/server";
import pool from "@/lib/db";

/**
 * POST /api/contact
 * Validates and inserts a lead form submission into the database.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Server-side validation
    if (!name?.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    if (!company?.trim()) {
      return NextResponse.json({ error: "Company is required." }, { status: 400 });
    }
    if (!message?.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // Insert into the database
    await pool.execute(
      `INSERT INTO leads (name, email, company, phone, message) VALUES (?, ?, ?, ?, ?)`,
      [
        name.trim(),
        email.trim().toLowerCase(),
        company.trim(),
        (phone || "").trim() || null,
        message.trim(),
      ]
    );

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("[/api/contact] Error:", error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
