require('dotenv').config({ path: '.env.local' });
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

async function migrateAndSeed() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || "3306", 10),
  });

  try {
    console.log("Creating admins table...");
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        role VARCHAR(50) DEFAULT 'admin',
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Admins table created successfully.");

    console.log("Creating leads table...");
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS leads (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        message TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'unread',
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Leads table created successfully.");

    const email = "admin@gts.com";
    const plainTextPassword = "admin123";
    
    // Check if admin already exists
    const [rows] = await pool.execute("SELECT id FROM admins WHERE email = ?", [email]);
    if (rows.length > 0) {
      console.log(`Admin user ${email} already exists in DB. Skipping seed.`);
    } else {
      console.log(`Seeding admin user: ${email}...`);
      const hash = await bcrypt.hash(plainTextPassword, 12);
      await pool.execute(
        "INSERT INTO admins (email, password, name) VALUES (?, ?, ?)",
        [email, hash, "Super Admin"]
      );
      console.log("Admin user seeded successfully!");
    }
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    await pool.end();
  }
}

migrateAndSeed();
