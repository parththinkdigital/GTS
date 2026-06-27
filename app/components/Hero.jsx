"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ColorBends from "./ColorBends";

export default function Hero() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const actionsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    );
    gsap.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2 }
    );
    gsap.fromTo(
      actionsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.4 }
    );
  }, { scope: containerRef });

  return (
    <section className="hero" id="hero" ref={containerRef}>
      <div className="hero-bg-container">
        <ColorBends
          colors={["#0C2D89", "#F5A623"]}
          rotation={0}
          speed={0.13}
          scale={0.9}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
          autoRotate={2}
        />
      </div>
      <div className="hero-grid">
        <h1 ref={headingRef}>
          Powering Smarter
          <br />
          <span className="accent">Financial Journeys</span>
        </h1>
        <p ref={subtitleRef}>
          Transforming financial services through intelligent customer engagement,
          digital lending, and automated lifecycle management.
        </p>
        <div className="hero-actions" ref={actionsRef}>
          <span className="btn btn-primary">
            Schedule a Demo <span className="arrow">→</span>
          </span>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
          <rect x="1.5" y="1.5" width="17" height="29" rx="8.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="10" r="2" fill="currentColor" className="scroll-dot" />
        </svg>
      </div>
    </section>
  );
}
