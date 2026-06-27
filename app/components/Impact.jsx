"use client";

import { useEffect } from "react";

export default function Impact() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const gsap = require("gsap").default;
    const ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll(".stat-card");
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      // Staggered fade/slide-in entry animation for stats cards
      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#impact",
            start: "top 80%",
            toggleActions: "restart none restart reset"
          }
        }
      );

      // Stat numbers counting animation
      const stats = [
        { id: "stat-credit", value: 12, suffix: "B+" },
        { id: "stat-customers", value: 40, suffix: "M+" },
        { id: "stat-uptime", value: 99.99, suffix: "%", decimals: 2 },
        { id: "stat-speed", value: 2.4, suffix: "s", prefix: "< " }
      ];

      stats.forEach((stat) => {
        const obj = { val: 0 };
        const el = document.getElementById(stat.id);
        if (!el) return;

        gsap.to(obj, {
          val: stat.value,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#impact",
            start: "top 75%",
            toggleActions: "restart none restart reset"
          },
          onUpdate: () => {
            let text = obj.val.toFixed(stat.decimals || 0);
            if (stat.prefix) text = stat.prefix + text;
            if (stat.suffix) text = text + stat.suffix;
            el.innerText = text;
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="section"
      id="impact"
      style={{
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Floating Glow Orbs for Visual Depth */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 166, 35, 0.05) 0%, rgba(245, 166, 35, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "8%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(12, 45, 137, 0.04) 0%, rgba(12, 45, 137, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="e-dot"></span> Our Impact
          </div>
          <h2 className="section-title">
            Proven Enterprise Scale
            <br />
            Engineered for High Performance
          </h2>
        </div>

        <div className="impact-grid">
          {/* Card 1 */}
          <div className="stat-card">
            <div className="stat-visual">
              {/* Mini bar chart */}
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                <rect x="0" y="15" width="8" height="15" rx="2" fill="#0C2D89" fillOpacity="0.3" />
                <rect x="13" y="10" width="8" height="20" rx="2" fill="#0C2D89" fillOpacity="0.5" />
                <rect x="26" y="18" width="8" height="12" rx="2" fill="#0C2D89" fillOpacity="0.4" />
                <rect x="39" y="5" width="8" height="25" rx="2" fill="#0C2D89" fillOpacity="0.7" />
                <rect x="52" y="0" width="8" height="30" rx="2" fill="#F5A623" />
              </svg>
            </div>
            <div className="stat-number" id="stat-credit">0B+</div>
            <div className="stat-label">Total Credit Disbursed</div>
            <p className="stat-desc">Secure and audited digital disbursements globally.</p>
          </div>

          {/* Card 2 */}
          <div className="stat-card">
            <div className="stat-visual">
              {/* Pulsing Concentric Nodes */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="4" fill="#F5A623" />
                <circle cx="20" cy="20" r="10" stroke="#0C2D89" strokeWidth="1.5" strokeOpacity="0.8" />
                <circle cx="20" cy="20" r="16" stroke="#0C2D89" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
              </svg>
            </div>
            <div className="stat-number" id="stat-customers">0M+</div>
            <div className="stat-label">Customers Engaged</div>
            <p className="stat-desc">Unified conversations across omni-channel campaigns.</p>
          </div>

          {/* Card 3 */}
          <div className="stat-card">
            <div className="stat-visual">
              {/* Circular Dashboard */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="15" stroke="#e2e8f0" strokeWidth="4" />
                <circle cx="18" cy="18" r="15" stroke="#0C2D89" strokeWidth="4" strokeDasharray="80 100" strokeLinecap="round" />
                <circle cx="18" cy="18" r="2" fill="#F5A623" />
              </svg>
            </div>
            <div className="stat-number" id="stat-uptime">0%</div>
            <div className="stat-label">Platform Uptime</div>
            <p className="stat-desc">High-availability cloud container infrastructure.</p>
          </div>

          {/* Card 4 */}
          <div className="stat-card">
            <div className="stat-visual">
              {/* Speedometer line */}
              <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
                <path d="M5 25 A 20 20 0 0 1 45 25" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
                <path d="M5 25 A 20 20 0 0 1 35 10" stroke="#0C2D89" strokeWidth="4" strokeLinecap="round" />
                <line x1="25" y1="25" x2="33" y2="12" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="25" cy="25" r="3" fill="#0C2D89" />
              </svg>
            </div>
            <div className="stat-number" id="stat-speed">0s</div>
            <div className="stat-label">Underwriting Speed</div>
            <p className="stat-desc">Average automated processing and decisioning latency.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
