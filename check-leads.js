require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');

async function checkLeads() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || "3306", 10),
  });

  try {
    const [rows] = await pool.execute("SELECT * FROM leads");
    console.log(`Found ${rows.length} rows in the leads table.`);
    console.log(rows);
  } catch (err) {
    console.error("Query failed:", err);
  } finally {
    await pool.end();
  }
}
checkLeads();
