import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

/**
 * Sign a JWT token that expires in 8 hours.
 * @param {object} payload
 * @returns {string} signed token
 */
export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: "8h" });
}

/**
 * Verify a JWT token.
 * @param {string} token
 * @returns {object|null} decoded payload, or null if invalid/expired
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

/**
 * Extract and verify the admin token from a Next.js request's cookies.
 * @param {Request} request
 * @returns {object|null} decoded payload, or null
 */
export function getAdminFromRequest(request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const match = cookieHeader.match(/(?:^|;\s*)gts_admin_token=([^;]+)/);
  if (!match) return null;
  return verifyToken(decodeURIComponent(match[1]));
}
