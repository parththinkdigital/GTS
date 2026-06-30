"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const marketCards = [
  { label: "Approval velocity", value: "+38%" },
  { label: "Risk signals", value: "Live" },
  { label: "Journey uptime", value: "24/7" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const visualRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const root = containerRef.current;
    const glow = glowRef.current;
    const visual = visualRef.current;
    const cards = cardsRef.current;
    if (!root || !glow || !visual || !cards) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const contentTargets = [
      ".hero-eyebrow",
      ".hero-title-line",
      ".hero p",
      ".hero-actions",
      ".hero-trust-pill",
      ".hero-market-card",
    ];

    if (reduceMotion) {
      gsap.set(contentTargets, { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      gsap.set(".hero-title", {
        "--hero-title-radius": "220%",
        "--hero-title-x": "50%",
        "--hero-title-y": "50%",
      });
      gsap.set([".hero-fintech-bg", ".hero-flow-line", ".hero-node"], { autoAlpha: 1 });
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
      }, 0.68)
      .to(".hero-market-card", {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.52,
        stagger: 0.08,
      }, 0.72);

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

    gsap.to(".hero-flow-line", {
      xPercent: 8,
      autoAlpha: 0.78,
      duration: 4.8,
      stagger: { each: 0.35, from: "random" },
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-node", {
      scale: 1.35,
      autoAlpha: 0.95,
      duration: 2.8,
      stagger: { each: 0.25, from: "center" },
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-market-card", {
      y: (index) => (index % 2 === 0 ? -8 : 8),
      duration: 3.6,
      delay: 1.15,
      stagger: 0.25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const glowX = gsap.quickTo(glow, "x", { duration: 0.55, ease: "power3.out" });
    const glowY = gsap.quickTo(glow, "y", { duration: 0.55, ease: "power3.out" });
    const visualX = gsap.quickTo(visual, "x", { duration: 0.8, ease: "power3.out" });
    const visualY = gsap.quickTo(visual, "y", { duration: 0.8, ease: "power3.out" });
    const cardsX = gsap.quickTo(cards, "x", { duration: 0.9, ease: "power3.out" });
    const cardsY = gsap.quickTo(cards, "y", { duration: 0.9, ease: "power3.out" });

    const handlePointerMove = (event) => {
      const rect = root.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / (rect.width || 1) - 0.5;
      const relY = (event.clientY - rect.top) / (rect.height || 1) - 0.5;
      glowX(relX * 72);
      glowY(relY * 54);
      visualX(relX * 18);
      visualY(relY * 14);
      cardsX(relX * -12);
      cardsY(relY * -10);
    };

    const resetPointer = () => {
      glowX(0);
      glowY(0);
      visualX(0);
      visualY(0);
      cardsX(0);
      cardsY(0);
    };

    root.addEventListener("pointermove", handlePointerMove);
    root.addEventListener("pointerleave", resetPointer);

    return () => {
      root.removeEventListener("pointermove", handlePointerMove);
      root.removeEventListener("pointerleave", resetPointer);
    };
  }, { scope: containerRef });

  return (
    <section className="hero" id="hero" ref={containerRef}>
      <div className="hero-fintech-bg" aria-hidden="true">
        <div className="hero-grid-lines" />
        <div className="hero-glow" ref={glowRef} />
        <div className="hero-visual-field" ref={visualRef}>
          <svg className="hero-data-map" viewBox="0 0 900 560" fill="none" role="presentation">
            <path className="hero-flow-line" d="M52 326 C174 210 250 408 370 286 C506 148 612 254 842 98" />
            <path className="hero-flow-line hero-flow-line--orange" d="M92 432 C218 348 306 456 442 358 C568 268 662 380 816 288" />
            <path className="hero-flow-line" d="M120 152 C250 106 332 192 440 158 C576 116 660 146 784 82" />
            <path className="hero-flow-line hero-flow-line--muted" d="M66 246 C186 260 278 228 390 238 C540 252 646 210 842 232" />
            <circle className="hero-node" cx="174" cy="210" r="5" />
            <circle className="hero-node" cx="370" cy="286" r="4" />
            <circle className="hero-node hero-node--orange" cx="612" cy="254" r="5" />
            <circle className="hero-node" cx="784" cy="82" r="4" />
            <circle className="hero-node hero-node--orange" cx="568" cy="268" r="4" />
            <circle className="hero-node" cx="816" cy="288" r="5" />
          </svg>
          <div className="hero-market-stack" ref={cardsRef}>
            {marketCards.map((card) => (
              <div className="hero-market-card" key={card.label}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-grid">
        <div className="hero-eyebrow">AI-led fintech infrastructure</div>
        <h1 className="hero-title" data-title={"Powering Smarter Financial Journeys"}>
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
