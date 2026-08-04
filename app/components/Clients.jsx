"use client";

import { Globe } from "lucide-react";
const ASSOCIATE_COMPANIES = [
  { name: "Globe Teleservices", url: "https://globeteleservices.com" },
  { name: "New Vision", url: "https://newvision-software.com" },
  { name: "CERF", url: "https://cerfgs.com" },
  { name: "VSPAGY", url: "https://vspagy.com" },
];

const BANKS = [
  "The Dombivli Nagari Sahakari Bank Co-op Bank Ltd.",
  "The Maharashtra State Co-op. Bank Ltd.",
  "PaySwitch",
  "Sampada Sahakari Bank Ltd.",
];

const CERTIFICATIONS = [
  { name: "ISO 27001", status: "pending" },
  { name: "DPDP Compliant", status: "pending" },
  { name: "VAPT Certification", status: "pending" },
];

export default function Clients() {
  return (
    <section className="section trust-section" id="clients">
      <div className="container">
        <div className="section-header">

          <h2
            className="section-title"
            style={{
              background:
                "linear-gradient(135deg, #7A9FE8, #0C2D89, #0a1a4a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Trusted Partners &amp;
            <br />
            Associate Companies
          </h2>
        </div>

        <div className="trust-companies">
          {ASSOCIATE_COMPANIES.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="trust-company-card"
            >
              <span className="trust-company-name">{company.name}</span>
            </a>
          ))}
        </div>

        <div className="trust-stats">
          <div className="trust-stat">
            <span className="trust-stat-number">30+</span>
            <span className="trust-stat-label">Banks</span>
            <ul className="trust-stat-list">
              {BANKS.map((bank) => (
                <li key={bank}>{bank}</li>
              ))}
              <li>and more...</li>
            </ul>
          </div>
          <div className="trust-stat-blue">
            <Globe
              style={{ width: '64px', height: '64px', color: '#F5A623', margin: '0 auto 16px', opacity: 0.9 }}
            />
            <span className="trust-stat-number">1000+</span>
            <span className="trust-stat-label-blue">Branches Nationwide</span>
          </div>
        </div>

        <div className="trust-certs">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="trust-cert">
              <span className="trust-cert-name">{cert.name}</span>
              {cert.status === "pending" && (
                <span className="trust-cert-badge">Badge Pending</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
