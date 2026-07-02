"use client";

import CircularCardGallery from "./CircularCardGallery";

export default function Products() {
  return (
    <section
      className="section products-section"
      id="products"
      style={{
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      {/* Hidden SVG Gradient Definitions for Card Illustrations */}
      <svg style={{ height: 0, width: 0, position: "absolute" }}>
        <defs>
          <linearGradient id="prod-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0C2D89" />
            <stop offset="100%" stopColor="#4A6FC8" />
          </linearGradient>
          <linearGradient id="prod-orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#FFB347" />
          </linearGradient>
          <linearGradient id="card-inner-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Glow Orbs for Visual Depth */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(12, 45, 137, 0.08) 0%, rgba(12, 45, 137, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 166, 35, 0.06) 0%, rgba(245, 166, 35, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="e-dot"></span> Our Products
          </div>
          <h2 className="section-title">
            Unified Products Built for
            <br />
            the Entire Financial Lifecycle
          </h2>
        </div>
      </div>

      {/* Curved DOM slider for interactive product cards */}
      <div className="products-gallery-container z-100">
        <CircularCardGallery
          bend={3.2}
          scrollSpeed={1.4}
          scrollEase={0.07}
          cardWidth={310}
          cardGap={22}
          items={[
            <div className="card" key="1">
              <svg className="card-img" viewBox="0 0 320 180" fill="none">
                <rect width="320" height="180" rx="12" fill="url(#card-inner-grad)" />
                <rect x="30" y="30" width="180" height="50" rx="12" fill="url(#prod-blue-grad)" />
                <circle cx="54" cy="55" r="14" fill="white" fillOpacity="0.2" />
                <path d="M50 55h8M54 51v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <rect x="80" y="48" width="100" height="6" rx="3" fill="white" fillOpacity="0.9" />
                <rect x="80" y="60" width="70" height="4" rx="2" fill="white" fillOpacity="0.6" />
                
                <rect x="110" y="95" width="180" height="50" rx="12" fill="url(#prod-orange-grad)" />
                <circle cx="266" cy="120" r="14" fill="white" fillOpacity="0.25" />
                <path d="M260 120h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <rect x="130" y="113" width="110" height="6" rx="3" fill="white" fillOpacity="0.9" />
                <rect x="130" y="125" width="80" height="4" rx="2" fill="white" fillOpacity="0.6" />
              </svg>
              <h3>Customer Engagement Platform</h3>
              <p>
                AI-powered customer engagement that unifies campaigns across WhatsApp,
                SMS, Email, and interactive video, for personalized experiences that
                drive stronger connections and measurable results.
              </p>
            </div>,
            <div className="card" key="2">
              <svg className="card-img" viewBox="0 0 320 180" fill="none">
                <rect width="320" height="180" rx="12" fill="url(#card-inner-grad)" />
                <circle cx="160" cy="85" r="50" stroke="#e2e8f0" strokeWidth="8" />
                <path d="M117 113a50 50 0 1 1 86 0" stroke="url(#prod-blue-grad)" strokeWidth="8" strokeLinecap="round" />
                <circle cx="160" cy="85" r="12" fill="#0C2D89" />
                <line x1="160" y1="85" x2="195" y2="60" stroke="#F5A623" strokeWidth="4" strokeLinecap="round" />
                <rect x="70" y="145" width="180" height="8" rx="4" fill="#e2e8f0" />
                <rect x="70" y="145" width="130" height="8" rx="4" fill="url(#prod-orange-grad)" />
              </svg>
              <h3>Digital Lending Platform</h3>
              <p>
                End-to-end digital lending designed for modern financial institutions,
                bringing together intelligent underwriting, automated workflows, and
                seamless credit delivery.
              </p>
            </div>,
            <div className="card" key="3">
              <svg className="card-img" viewBox="0 0 320 180" fill="none">
                <rect width="320" height="180" rx="12" fill="url(#card-inner-grad)" />
                <rect x="40" y="30" width="240" height="120" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
                <circle cx="70" cy="55" r="10" fill="url(#prod-blue-grad)" />
                <path d="M67 55l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="95" y="52" width="150" height="6" rx="3" fill="#0C2D89" fillOpacity="0.8" />
                
                <circle cx="70" cy="90" r="10" fill="url(#prod-blue-grad)" />
                <path d="M67 90l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="95" y="87" width="120" height="6" rx="3" fill="#0C2D89" fillOpacity="0.8" />

                <circle cx="70" cy="125" r="10" fill="url(#prod-orange-grad)" />
                <path d="M67 125l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="95" y="122" width="100" height="6" rx="3" fill="#F5A623" fillOpacity="0.8" />
              </svg>
              <h3>Loan Origination System (LOS)</h3>
              <p>
                A fully digital loan origination experience powered by automated KYC,
                OCR, and bureau integrations, enabling faster application processing,
                smarter decisioning, and seamless customer onboarding.
              </p>
            </div>,
            <div className="card" key="4">
              <svg className="card-img" viewBox="0 0 320 180" fill="none">
                <rect width="320" height="180" rx="12" fill="url(#card-inner-grad)" />
                <rect x="30" y="30" width="120" height="120" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
                <circle cx="90" cy="75" r="30" stroke="#e2e8f0" strokeWidth="6" />
                <circle cx="90" cy="75" r="30" stroke="url(#prod-blue-grad)" strokeWidth="6" strokeDasharray="120 180" />
                <rect x="50" y="120" width="80" height="6" rx="3" fill="#94a3b8" />

                <rect x="170" y="30" width="120" height="120" rx="10" fill="url(#prod-blue-grad)" />
                <rect x="190" y="55" width="80" height="8" rx="4" fill="white" fillOpacity="0.9" />
                <rect x="190" y="75" width="50" height="6" rx="3" fill="white" fillOpacity="0.6" />
                <rect x="190" y="105" width="80" height="20" rx="4" fill="url(#prod-orange-grad)" />
              </svg>
              <h3>Loan Management System (LMS)</h3>
              <p>
                Real-time portfolio visibility powered by automated loan servicing and
                credit monitoring, helping institutions identify risks early and
                strengthen collection outcomes.
              </p>
            </div>,
            <div className="card" key="5">
              <svg className="card-img" viewBox="0 0 320 180" fill="none">
                <rect width="320" height="180" rx="12" fill="url(#card-inner-grad)" />
                <rect x="30" y="30" width="260" height="120" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
                <path d="M40 120 L80 95 L120 105 L160 65 L200 80 L240 45 L280 50" stroke="url(#prod-blue-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40 120 L80 95 L120 105 L160 65 L200 80 L240 45 L280 50 L280 140 L40 140 Z" fill="url(#prod-blue-grad)" fillOpacity="0.05" />
                <circle cx="160" cy="65" r="5" fill="#F5A623" stroke="white" strokeWidth="1.5" />
                <circle cx="240" cy="45" r="5" fill="#F5A623" stroke="white" strokeWidth="1.5" />
                <line x1="30" y1="90" x2="290" y2="90" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>
              <h3>Credit Monitoring</h3>
              <p>
                Designed to keep institutions ahead of delinquency trends, with
                continuous portfolio oversight and actionable risk intelligence.
              </p>
            </div>,
            <div className="card" key="6">
              <svg className="card-img" viewBox="0 0 320 180" fill="none">
                <rect width="320" height="180" rx="12" fill="url(#card-inner-grad)" />
                <rect x="40" y="30" width="240" height="120" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
                <circle cx="90" cy="90" r="30" fill="url(#prod-blue-grad)" />
                <circle cx="90" cy="80" r="10" fill="white" fillOpacity="0.9" />
                <path d="M72 105a20 20 0 0 1 36 0" fill="white" fillOpacity="0.9" />
                
                <rect x="140" y="65" width="110" height="8" rx="4" fill="#1e293b" />
                <rect x="140" y="85" width="80" height="6" rx="3" fill="#64748b" />
                
                <rect x="140" y="105" width="80" height="24" rx="12" fill="url(#prod-orange-grad)" />
                <path d="M153 117l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>Digital Onboarding</h3>
              <p>
                Faster onboarding from application to activation, with secure
                identity verification, streamlined workflows, and reduced manual
                intervention.
              </p>
            </div>,
            <div className="card" key="7">
              <svg className="card-img" viewBox="0 0 320 180" fill="none">
                <rect width="320" height="180" rx="12" fill="url(#card-inner-grad)" />
                <rect x="40" y="30" width="240" height="120" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
                <rect x="60" y="55" width="70" height="50" rx="6" fill="url(#prod-blue-grad)" />
                <path d="M60 60l35 20 35-20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="210" cy="90" r="28" fill="url(#prod-orange-grad)" />
                <path d="M200 90l7 7 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="60" y="115" width="100" height="6" rx="3" fill="#e2e8f0" />
                <rect x="180" y="130" width="60" height="6" rx="3" fill="#e2e8f0" />
              </svg>
              <h3>Digital Debt Collection</h3>
              <p>
                A unified recovery platform that blends AI, automation, and human
                expertise, delivering compliant collections experiences that improve
                efficiency and portfolio performance.
              </p>
            </div>,
            <div className="card" key="8">
              <svg className="card-img" viewBox="0 0 320 180" fill="none">
                <rect width="320" height="180" rx="12" fill="url(#card-inner-grad)" />
                <line x1="80" y1="90" x2="160" y2="50" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="80" y1="90" x2="160" y2="130" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="160" y1="50" x2="240" y2="90" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="160" y1="130" x2="240" y2="90" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="160" y1="50" x2="160" y2="130" stroke="#cbd5e1" strokeWidth="2" />
                
                <circle cx="80" cy="90" r="16" fill="url(#prod-blue-grad)" />
                <circle cx="80" cy="90" r="6" fill="white" />
                
                <circle cx="160" cy="50" r="12" fill="url(#prod-orange-grad)" />
                <circle cx="160" cy="50" r="4" fill="white" />
                
                <circle cx="160" cy="130" r="12" fill="url(#prod-orange-grad)" />
                <circle cx="160" cy="130" r="4" fill="white" />
                
                <circle cx="240" cy="90" r="16" fill="url(#prod-blue-grad)" />
                <circle cx="240" cy="90" r="6" fill="white" />
              </svg>
              <h3>Integrated Communication Platform</h3>
              <p>
                Enterprise-grade communication infrastructure designed for reliability,
                scale, and control, connecting every customer touchpoint through a
                single API-driven ecosystem.
              </p>
            </div>
          ]}
        />
      </div>

      {/* Scroll Progress Bar */}
      <div className="products-progress-container">
        <div className="products-progress-bar"></div>
      </div>
    </section>
  );
}
