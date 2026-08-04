"use client";

import Image from "next/image";
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
      {/* SVGs removed */}

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
          {/* <div className="section-eyebrow">
            <span className="e-dot"></span> Our Products
          </div> */}
          <h2 className="section-title" style={{ background: 'linear-gradient(135deg, #7A9FE8, #0C2D89, #0a1a4a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Unified Products Built for
            <br />
            the End-End Lending Lifecycle
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
              <Image src="/assets/customer enagagement platform.jpg" alt="Customer Engagement Platform" width={1280} height={720} unoptimized className="card-img" style={{ objectFit: 'contain', backgroundColor: 'transparent' }} />
              <h3>Customer Engagement Platform</h3>
              <p>
                AI-powered customer engagement that unifies campaigns across WhatsApp,
                SMS, Email, and interactive video, for personalized experiences that
                drive stronger connections and measurable results.
              </p>
            </div>,
            <div className="card" key="2">
              <Image src="/assets/Digital lending Platform.jpg" alt="Digital Lending Platform" width={1280} height={720} unoptimized className="card-img" style={{ objectFit: 'contain', backgroundColor: 'transparent' }} />
              <h3>Digital Lending Platform</h3>
              <p>
                End-to-end digital lending designed for modern financial institutions,
                bringing together intelligent underwriting, automated workflows, and
                seamless credit delivery.
              </p>
            </div>,
            <div className="card" key="3">
              <Image src="/assets/loan orientation system.jpg" alt="Loan Origination System" width={1280} height={720} unoptimized className="card-img" style={{ objectFit: 'contain', backgroundColor: 'transparent' }} />
              <h3>Loan Origination System (LOS)</h3>
              <p>
                A fully digital loan origination experience powered by automated KYC,
                OCR, and bureau integrations, enabling faster application processing,
                smarter decisioning, and seamless customer onboarding.
              </p>
            </div>,
            <div className="card" key="4">
              <Image src="/assets/loan management system.jpg" alt="Loan Management System" width={1280} height={720} unoptimized className="card-img" style={{ objectFit: 'contain', backgroundColor: 'transparent' }} />
              <h3>Loan Management System (LMS)</h3>
              <p>
                Real-time portfolio visibility powered by automated loan servicing and
                credit monitoring, helping institutions identify risks early and
                strengthen collection outcomes.
              </p>
            </div>,
            <div className="card" key="5">
              <Image src="/assets/credit monitoring.jpeg" alt="Credit Monitoring" width={1280} height={720} unoptimized className="card-img" style={{ objectFit: 'contain', backgroundColor: 'transparent' }} />
              <h3>Credit Monitoring</h3>
              <p>
                Designed to keep institutions ahead of delinquency trends, with
                continuous portfolio oversight and actionable risk intelligence.
              </p>
            </div>,
            <div className="card" key="6">
              <Image src="/assets/digital onboarding.jpg" alt="Digital Onboarding" width={1280} height={720} unoptimized className="card-img" style={{ objectFit: 'contain', backgroundColor: 'transparent' }} />
              <h3>Digital Onboarding</h3>
              <p>
                Faster onboarding from application to activation, with secure
                identity verification, streamlined workflows, and reduced manual
                intervention.
              </p>
            </div>,
            <div className="card" key="7">
              <Image src="/assets/digital debt colllection.jpg" alt="Digital Debt Collection" width={1280} height={720} unoptimized className="card-img" style={{ objectFit: 'contain', backgroundColor: 'transparent' }} />
              <h3>Digital Debt Collection</h3>
              <p>
                A unified recovery platform that blends AI, automation, and human
                expertise, delivering compliant collections experiences that improve
                efficiency and portfolio performance.
              </p>
            </div>,
            <div className="card" key="8">
              <Image src="/assets/integrated cmmuniction platform.jpg" alt="Integrated Communication Platform" width={1280} height={720} unoptimized className="card-img" style={{ objectFit: 'contain', backgroundColor: 'transparent' }} />
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
