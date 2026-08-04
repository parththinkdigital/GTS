"use client";

import { Globe } from "lucide-react";
import Image from "next/image";

const ASSOCIATE_COMPANIES = [
  { name: "Globe Teleservices", url: "https://globeteleservices.com", logo: "/assets/Global-Services-logo.png" },
  { name: "New Vision", url: "https://newvision-software.com", logo: "/assets/New-Vision-logo (2).png" },
  { name: "CERF", url: "https://cerfgs.com", logo: "/assets/CERF-logo.png" },
  { name: "VSPAGY", url: "https://vspagy.com", logo: "/assets/VSPAGY-logo (1).png" },
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
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={160}
                height={60}
                style={{ objectFit: "contain", maxHeight: "60px", width: "auto" }}
              />
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
