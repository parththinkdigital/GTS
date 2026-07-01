import { NextResponse } from "next/server";
import pool from "@/lib/db";
import { getAdminFromRequest } from "@/lib/auth";

/**
 * GET /api/admin/submissions?page=1&search=&sort=desc
 * Returns paginated form submissions. Requires valid admin cookie.
 */
export async function GET(request) {
  const admin = getAdminFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const search = (searchParams.get("search") || "").trim();
  const sort = searchParams.get("sort") === "asc" ? "ASC" : "DESC";
  const pageSize = 20;
  const offset = (page - 1) * pageSize;

  try {
    let whereClause = "";
    const params = [];

    if (search) {
      whereClause = "WHERE name LIKE ? OR email LIKE ?";
      params.push(`%${search}%`, `%${search}%`);
    }

    // Total count for pagination
    const [countRows] = await pool.execute(
      `SELECT COUNT(*) AS total FROM leads ${whereClause}`,
      params
    );
    const total = countRows[0].total;

    // Paginated rows
    const [rows] = await pool.execute(
      `SELECT id, name, email, company, phone, message, status, created_at
       FROM leads ${whereClause}
       ORDER BY created_at ${sort}
       LIMIT ${pageSize} OFFSET ${offset}`,
      params
    );

    return NextResponse.json({
      submissions: rows,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("[/api/admin/submissions GET] Error:", error);
    return NextResponse.json({ error: "Database error." }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/submissions
 * Toggles read/unread status for a submission.
 * Body: { id: number, status: "read" | "unread" }
 */
export async function PATCH(request) {
  const admin = getAdminFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();
    if (!id || !["read", "unread"].includes(status)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    await pool.execute("UPDATE leads SET status = ? WHERE id = ?", [status, id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[/api/admin/submissions PATCH] Error:", error);
    return NextResponse.json({ error: "Database error." }, { status: 500 });
  }
}

/**
 * DELETE /api/admin/submissions
 * Permanently deletes a submission.
 * Body: { id: number }
 */
export async function DELETE(request) {
  const admin = getAdminFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID required." }, { status: 400 });
    }

    await pool.execute("DELETE FROM leads WHERE id = ?", [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[/api/admin/submissions DELETE] Error:", error);
    return NextResponse.json({ error: "Database error." }, { status: 500 });
  }
}
