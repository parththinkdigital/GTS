"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
      ".hero-trust-pill",
    ];

    if (reduceMotion) {
      gsap.set(contentTargets, { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      gsap.set(".hero-title", {
        "--hero-title-radius": "220%",
        "--hero-title-x": "50%",
        "--hero-title-y": "50%",
      });
      gsap.set(".hero-fintech-bg", { autoAlpha: 1 });
      return;
    }

    gsap.set(contentTargets, { autoAlpha: 0, y: 16, filter: "blur(4px)" });
    gsap.set(".hero-title", {
      "--hero-title-radius": "0%",
      "--hero-title-x": "0%",
      "--hero-title-y": "0%",
    });
    gsap.set(".hero-fintech-bg", { autoAlpha: 0 });

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .to(".hero-fintech-bg", { autoAlpha: 1, duration: 0.8 })
      .to(".hero-eyebrow", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.45 }, 0.12)
      .to(".hero-title-line", {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.72,
        stagger: 0.08,
      }, 0.2)
      .to(".hero p", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.58 }, 0.44)
      .to(".hero-actions", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.5 }, 0.58)
      .to(".hero-trust-pill", {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.42,
        stagger: 0.06,
      }, 0.68);

    const mm = gsap.matchMedia(root);

    mm.add("(min-width: 769px)", () => {
      gsap.to(".hero-title", {
        "--hero-title-radius": "220%",
        "--hero-title-x": "100%",
        "--hero-title-y": "100%",
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=120%",
          pin: true,
          anticipatePin: 1,
          scrub: 0.8,
        },
      });
    });

    mm.add("(max-width: 768px)", () => {
      gsap.to(".hero-title", {
        "--hero-title-radius": "220%",
        "--hero-title-x": "100%",
        "--hero-title-y": "100%",
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=160%", // Extended end threshold for mobile viewports
          pin: true,
          anticipatePin: 1,
          scrub: 0.8,
        },
      });
    });

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
        <h1 className="hero-title" data-title={"Powering Smarter\nFinancial Journeys"}>
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
              document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
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
