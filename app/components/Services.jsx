"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const q = gsap.utils.selector(section);
      const cards = q(".service-card");
      const cardDetails = q(".service-visual, .service-content");
      const animatedSvgDetails = q(
        ".service-flow-line, .service-chart-line, .service-kpi-ring",
      );
      const reducedMotionDetails = q(
        ".service-visual, .service-content, .service-flow-line, .service-chart-line, .service-kpi-ring, .service-status-pulse",
      );
      if (!cards.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(cards, {
          opacity: 1,
          x: 0,
          y: 0,
          rotateY: 0,
          filter: "blur(0px)",
        });
        gsap.set(reducedMotionDetails, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        });
        return;
      }

      gsap.set(cards, {
        transformPerspective: 1200,
        transformOrigin: "center center",
        willChange: "transform, opacity, filter",
      });
      gsap.set(cardDetails, { willChange: "transform, opacity, filter" });
      gsap.set(animatedSvgDetails, {
        willChange: "stroke-dashoffset, opacity",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 68%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .fromTo(
          cards[0],
          { autoAlpha: 0, x: -190, y: 54, rotateY: -8, filter: "blur(12px)" },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            filter: "blur(0px)",
            duration: 1.45,
            ease: "power4.out",
          },
        )
        .fromTo(
          cards[1],
          { autoAlpha: 0, x: 190, y: 54, rotateY: 8, filter: "blur(12px)" },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            filter: "blur(0px)",
            duration: 1.45,
            ease: "power4.out",
          },
          "<0.16",
        )
        .fromTo(
          cardDetails,
          { autoAlpha: 0, y: 16, filter: "blur(5px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.72,
            stagger: 0.055,
            ease: "power3.out",
          },
          "-=0.78",
        )
        .fromTo(
          animatedSvgDetails,
          { opacity: 0.35, strokeDashoffset: 18 },
          {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.52",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="section services-section"
      id="services"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* SVGs removed */}

      {/* Floating Glow Orbs for Visual Depth */}
      <div className="services-orb services-orb-blue" />
      <div className="services-orb services-orb-orange" />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          {/* <div className="section-eyebrow">
            <span className="e-dot"></span> Our Services
          </div> */}
          <h2 className="section-title" style={{ background: 'linear-gradient(135deg, #7A9FE8, #0C2D89, #0a1a4a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Expert Services for
            <br />
            simplifying lending journeys
          </h2>
          <p className="section-intro" style={{ margin: "16px 0 clamp(24px, 3vw, 40px) 0", padding: 0, textAlign: "left", maxWidth: "680px" }}>
            Domain expertise backed by technology to help financial institutions scale
            lending, collections, and customer engagement with confidence.
          </p>
        </div>

        <div className="services-grid">
              <div className="service-card service-card-implementation">
            <div className="service-card-glow" />
            <div className="service-visual">
              <div className="service-img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <DotLottieReact src="/assets/implementation services.lottie" loop autoplay style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="service-content">
              <div className="service-card-head">
                <div className="num">01</div>
                <div>
                  <h3>Digital Onboarding Service</h3>
                </div>
              </div>
              <p>
                Streamlined digital onboarding journeys designed to simplify
                loan and CASA account activation with secure, frictionless experiences.
              </p>
              <div className="service-sub-items">
                <span className="service-sub-item">Loan Journeys</span>
                <span className="service-sub-item">CASA Journeys</span>
              </div>
            </div>
          </div>

          <div className="service-card service-card-managed">
            <div className="service-card-glow" />
            <div className="service-visual">
              <div className="service-img" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                <DotLottieReact src="/assets/mnaged services.lottie" loop autoplay style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="service-content">
              <div className="service-card-head">
                <div className="num">02</div>
                <div>
                  <h3>Managed Services</h3>
                </div>
              </div>
              <p>
                Dedicated operational support for monitoring, reporting,
                compliance, and continuous optimization across every deployed
                platform.
              </p>
              <div className="service-sub-items">
                <span className="service-sub-item">Marketing Automation</span>
                <span className="service-sub-item">Debt Collection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
