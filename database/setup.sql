-- GTS Finlabs database setup (XAMPP MySQL)
-- Run: /opt/lampp/bin/mysql -u root < database/setup.sql

CREATE DATABASE IF NOT EXISTS gts
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE gts;

-- Lead form submissions
CREATE TABLE IF NOT EXISTS leads (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(190) NOT NULL,
  company VARCHAR(190) DEFAULT NULL,
  phone VARCHAR(50) DEFAULT NULL,
  message TEXT NOT NULL,
  status ENUM('read','unread') NOT NULL DEFAULT 'unread',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_created_at (created_at),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Admin accounts
CREATE TABLE IF NOT EXISTS admins (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(190) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin','superadmin') NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default admin: admin@example.com / GTSadmin2026
INSERT INTO admins (email, password, role) VALUES
  ('admin@example.com', '$2b$10$TaYqC7lqnGoO924bsyn2B.gqPMy8l9BH6uIInZwl9WlQMQBSoNINq', 'admin')
ON DUPLICATE KEY UPDATE email = email;
