"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const root = containerRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const contentTargets = [
      ".hero-eyebrow",
      ".hero-title-line",
      ".hero p",
      ".hero-actions",
    ];

    if (reduceMotion) {
      gsap.set(contentTargets, { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      gsap.set(".hero-fintech-bg", { autoAlpha: 1 });
      return;
    }

    gsap.set(contentTargets, { autoAlpha: 0, y: 24, filter: "blur(8px)" });
    gsap.set(".hero-fintech-bg", { autoAlpha: 0 });

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .to(".hero-fintech-bg", { autoAlpha: 1, duration: 1.0 })
      .to(".hero-eyebrow", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.5 }, 0.15)
      .to(".hero-title-line", {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.12,
      }, 0.25)
      .to(".hero p", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.6 }, 0.55)
      .to(".hero-actions", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.5 }, 0.7);

  }, { scope: containerRef });

  return (
    <section className="hero" id="hero" ref={containerRef}>
      <div className="hero-fintech-bg" aria-hidden="true">
        <video className="hero-bg-video" autoPlay muted loop playsInline preload="auto">
          <source src="/videos/hero-finance-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-grid">
        <div className="hero-eyebrow">AI-led fintech infrastructure</div>
        <h1 className="hero-title">
          <span className="hero-title-line">Powering Smarter</span>
          <span className="hero-title-line accent">Financial Journeys</span>
        </h1>
        <p>
          Transform financial services with intelligent customer engagement,
          digital lending workflows, and automated lifecycle management built for scale.
        </p>
        <div className="hero-actions">
          <a
            href="#"
            className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Schedule a Demo <span className="arrow">→</span>
          </a>
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
