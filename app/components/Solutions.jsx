"use client";

import { useEffect } from "react";

export default function Solutions() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const gsap = require("gsap").default;
    const ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector("#solutions");
    const grid = document.querySelector(".solutions-grid");
    if (!section || !grid) return;

    const leftCards = grid.querySelectorAll(".solutions-col:nth-child(1) .solution-item");
    const centerCards = grid.querySelectorAll(".solutions-col:nth-child(2) .solution-item");
    const rightCards = grid.querySelectorAll(".solutions-col:nth-child(3) .solution-item");
    const header = section.querySelector(".section-header");

    const ctx = gsap.context(() => {
      // Create a time-based timeline that triggers automatically on scroll entry
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        }
      });

      // 1. Animate header fade-in (1.0s duration)
      if (header) {
        tl.fromTo(header, 
          { opacity: 0, y: -40 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
          0
        );
      }

      // 2. Animate left column cards in 3D (1.6s duration per card, staggered)
      if (leftCards.length) {
        tl.fromTo(leftCards,
          { opacity: 0, x: -180, rotateY: -35, scale: 0.82 },
          { opacity: 1, x: 0, rotateY: 0, scale: 1, duration: 1.6, stagger: 0.35, ease: "power3.out" },
          0.1
        );
      }

      // 3. Animate center column cards (1.6s duration per card, staggered)
      if (centerCards.length) {
        tl.fromTo(centerCards,
          { opacity: 0, y: 180, scale: 0.82 },
          { opacity: 1, y: 0, scale: 1, duration: 1.6, stagger: 0.35, ease: "power3.out" },
          0.4
        );
      }

      // 4. Animate right column cards in 3D (1.6s duration per card, staggered)
      if (rightCards.length) {
        tl.fromTo(rightCards,
          { opacity: 0, x: 180, rotateY: 35, scale: 0.82 },
          { opacity: 1, x: 0, rotateY: 0, scale: 1, duration: 1.6, stagger: 0.35, ease: "power3.out" },
          0.7
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="solutions">
      <div className="container">
        <div className="section-header" style={{ paddingBottom: "20px" }}>
          <div className="section-eyebrow">
            <span className="e-dot"></span> Our Solutions
          </div>
          <h2 className="section-title">
            End-to-End Solutions for
            <br />
            Every Stage of Credit
          </h2>
        </div>

        <div className="solutions-grid">
          <div className="solutions-col">
            <div className="solutions-col-header">
              <div className="cat-num">01</div>
              <h4>Acquisition &amp; Engagement</h4>
            </div>
            
            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Seamless Customer Journey</h4>
              </div>
              <p>
                A unified credit ecosystem connecting acquisition, onboarding, lending,
                monitoring, and collections.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <path d="M3 15V7l6-4 6 4v8a1 1 0 01-1 1H4a1 1 0 01-1-1z" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M7 15v-4h4v4" stroke="currentColor" strokeWidth={1.5} />
                  </svg>
                </div>
                <h4>Customer Acquisition</h4>
              </div>
              <p>
                AI-driven customer intelligence and personalized engagement that turn
                prospects into long-term relationships.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <rect x="3" y="2" width="12" height="14" rx="2" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M6 6h6M6 9h4M6 12h3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Digital Onboarding and LOS</h4>
              </div>
              <p>
                A paperless onboarding and origination experience powered by digital identity
                verification and real-time decisioning.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M5 5V4a2 2 0 012-2h4a2 2 0 012 2v1" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M6 10h2M10 10h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Business Rule Engine</h4>
              </div>
              <p>
                No-code decisioning framework, transforming credit policies into automated
                and explainable outcomes.
              </p>
            </div>
          </div>

          <div className="solutions-col">
            <div className="solutions-col-header">
              <div className="cat-num">02</div>
              <h4>Credit &amp; Decisioning</h4>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <path d="M2 16l4-6 3 2 4-5 3 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                    <circle cx="14" cy="6" r="2" stroke="currentColor" strokeWidth={1.5} />
                  </svg>
                </div>
                <h4>Alternative Credit Modelling</h4>
              </div>
              <p>
                Behavior-driven credit intelligence built on alternative data sources beyond
                traditional bureau scores.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M6 6h2v6H6z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth={1.5} />
                  </svg>
                </div>
                <h4>Comprehensive LMS</h4>
              </div>
              <p>
                End-to-end loan lifecycle management with automation, portfolio visibility,
                and proactive risk monitoring.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <path d="M9 2l5 4v5l-5 4-5-4V6l5-4z" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Digital Debt Collection</h4>
              </div>
              <p>
                An intelligent collections framework combining predictive insights, omnichannel
                outreach, and compliance-first recovery.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M3 15c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                  </svg>
                </div>
                <h4>Intelligent Engagement</h4>
              </div>
              <p>
                Personalized customer engagement powered by AI, real-time insights, and
                omnichannel orchestration.
              </p>
            </div>
          </div>

          <div className="solutions-col">
            <div className="solutions-col-header">
              <div className="cat-num">03</div>
              <h4>Operations &amp; Communication</h4>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <path d="M2 4h14v10H2z" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M5 8h8M5 11h5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                    <circle cx="4" cy="6" r="0.5" fill="currentColor" />
                  </svg>
                </div>
                <h4>Digital Content Management</h4>
              </div>
              <p>
                Data-driven content experiences that combine personalization, interactivity,
                and measurable engagement.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <svg viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M3 9h12M9 3a11 11 0 010 12 11 11 0 010-12z" stroke="currentColor" strokeWidth={1.5} />
                  </svg>
                </div>
                <h4>CPaaS</h4>
              </div>
              <p>
                A unified communication infrastructure connecting Voice, WhatsApp, RCS,
                SMS, and Email through a single platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
