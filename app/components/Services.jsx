"use client";

import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const gsap = require("gsap").default;
    const ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll(".service-card");
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      // Left service card slides in from the left side
      if (cards[0]) {
        gsap.fromTo(cards[0],
          { opacity: 0, x: -150 },
          {
            opacity: 1,
            x: 0,
            duration: 1.0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#services",
              start: "top 25%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Right service card slides in from the right side
      if (cards[1]) {
        gsap.fromTo(cards[1],
          { opacity: 0, x: 150 },
          {
            opacity: 1,
            x: 0,
            duration: 1.0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: "#services",
              start: "top 25%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="section"
      id="services"
      style={{
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Hidden SVG Gradient Definitions for Service Illustrations */}
      <svg style={{ height: 0, width: 0, position: "absolute" }}>
        <defs>
          <linearGradient id="serv-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0C2D89" />
            <stop offset="100%" stopColor="#4A6FC8" />
          </linearGradient>
          <linearGradient id="serv-orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#FFB347" />
          </linearGradient>
          <linearGradient id="serv-inner-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Glow Orbs for Visual Depth */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(12, 45, 137, 0.05) 0%, rgba(12, 45, 137, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="e-dot"></span> Our Services
          </div>
          <h2 className="section-title">
            Expert Services That
            <br />
            Maximize Your Impact
          </h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <svg className="service-img" viewBox="0 0 640 200" fill="none">
              <rect width="640" height="200" rx="12" fill="url(#serv-inner-grad)" />
              {/* Central database icon */}
              <rect x="270" y="30" width="100" height="130" rx="16" fill="url(#serv-blue-grad)" />
              <ellipse cx="320" cy="55" rx="30" ry="10" fill="white" fillOpacity="0.2" />
              <ellipse cx="320" cy="85" rx="30" ry="10" fill="white" fillOpacity="0.2" />
              <ellipse cx="320" cy="115" rx="30" ry="10" fill="white" fillOpacity="0.2" />
              
              {/* Left flow card */}
              <rect x="70" y="45" width="140" height="100" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
              <rect x="90" y="70" width="70" height="8" rx="4" fill="#0C2D89" fillOpacity="0.7" />
              <rect x="90" y="85" width="100" height="6" rx="3" fill="#cbd5e1" />
              <circle cx="100" cy="115" r="10" fill="url(#serv-orange-grad)" />
              <path d="M97 115l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Right flow card */}
              <rect x="430" y="45" width="140" height="100" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
              <rect x="450" y="70" width="70" height="8" rx="4" fill="#0C2D89" fillOpacity="0.7" />
              <rect x="450" y="85" width="100" height="6" rx="3" fill="#cbd5e1" />
              {/* Status button */}
              <rect x="450" y="105" width="70" height="20" rx="10" fill="url(#serv-orange-grad)" />
              <rect x="465" y="112" width="40" height="6" rx="3" fill="white" />
              
              {/* Connecting flow lines */}
              <path d="M220 95 C 240 95, 245 65, 265 65" stroke="#F5A623" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M420 95 C 400 95, 395 125, 375 125" stroke="#0C2D89" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
            <div className="num">01</div>
            <h3>Implementation Services</h3>
            <p>
              Comprehensive onboarding and deployment services spanning system integration,
              data migration, and go-live support, ensuring every implementation is
              seamless, scalable, and future-ready.
            </p>
          </div>

          <div className="service-card">
            <svg className="service-img" viewBox="0 0 640 200" fill="none">
              <rect width="640" height="200" rx="12" fill="url(#serv-inner-grad)" />
              <rect x="40" y="30" width="560" height="140" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
              
              {/* Dashboard Header */}
              <rect x="60" y="48" width="100" height="8" rx="4" fill="#0C2D89" />
              <circle cx="530" cy="52" r="6" fill="#10b981" /> {/* Glowing status dot */}
              <circle cx="530" cy="52" r="10" stroke="#10b981" strokeWidth="2" strokeOpacity="0.4" />
              <rect x="550" y="48" width="30" height="8" rx="4" fill="#cbd5e1" />

              {/* Left Panel: Metrics line graph */}
              <rect x="60" y="75" width="280" height="80" rx="8" fill="#f8fafc" stroke="#f1f5f9" />
              <path d="M70 140 L110 110 L150 120 L190 95 L230 105 L270 85 L310 90" stroke="url(#serv-blue-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M70 140 L110 110 L150 120 L190 95 L230 105 L270 85 L310 90 L310 150 L70 150 Z" fill="url(#serv-blue-grad)" fillOpacity="0.05" />
              <circle cx="270" cy="85" r="4" fill="#F5A623" stroke="white" strokeWidth="1" />

              {/* Right Panel: Operations KPIs */}
              <rect x="360" y="75" width="220" height="80" rx="8" fill="#f8fafc" stroke="#f1f5f9" />
              <circle cx="410" cy="115" r="24" stroke="#e2e8f0" strokeWidth="5" />
              <circle cx="410" cy="115" r="24" stroke="url(#serv-orange-grad)" strokeWidth="5" strokeDasharray="100 150" />
              
              <rect x="455" y="95" width="90" height="8" rx="4" fill="#0C2D89" fillOpacity="0.8" />
              <rect x="455" y="110" width="100" height="6" rx="3" fill="#cbd5e1" />
              <rect x="455" y="122" width="60" height="6" rx="3" fill="#cbd5e1" />
            </svg>
            <div className="num">02</div>
            <h3>Managed Services</h3>
            <p>
              Dedicated operational support that keeps platforms running at peak
              performance, through proactive monitoring, reporting, compliance management,
              and continuous optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
