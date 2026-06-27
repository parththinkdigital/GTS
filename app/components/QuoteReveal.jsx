"use client";

import { useEffect, useRef } from "react";
import "./QuoteReveal.css";

export default function QuoteReveal() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const quote = "Operating a global business in a fast-changing world, you have to be grounded real-time in the external environment, have complete transparency, be fact-based and working with a great, collaborative team.";
  const words = quote.split(" ");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const gsap = require("gsap").default;
    const ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const section = containerRef.current;
    const textSpans = textRef.current?.querySelectorAll(".reveal-char");
    if (!section || !textSpans?.length) return;

    const media = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // Desktop / Tablet Landscape: Scrub reveal (NO pinning, completely free scroll)
      media.add("(min-width: 769px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // starts when section enters viewport
            end: "bottom 30%", // ends before section leaves viewport
            scrub: 1.2, // smooth scroll catch-up
            invalidateOnRefresh: true,
          }
        });

        tl.fromTo(textSpans,
          { 
            color: "rgba(12, 45, 137, 0.06)", 
            opacity: 0.12,
            y: 15,
          },
          {
            color: "#0c2d89", // Solid GTS Brand Blue
            opacity: 1,
            y: 0,
            stagger: 0.02,
            ease: "power2.out",
          }
        );

        tl.fromTo(".quote-author",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
          "-=0.15"
        );
      });

      // Mobile / Tablet Portrait: Smooth scroll entry reveal
      media.add("(max-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 40%",
            scrub: 0.8,
          }
        });

        tl.fromTo(textSpans,
          { 
            color: "rgba(12, 45, 137, 0.1)", 
            opacity: 0.18,
            y: 10,
          },
          {
            color: "#0c2d89",
            opacity: 1,
            y: 0,
            stagger: 0.008,
            ease: "power1.out",
          }
        );

        tl.fromTo(".quote-author",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" },
          "-=0.1"
        );
      });
    }, section);

    return () => {
      media.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section className="quote-reveal-section" ref={containerRef} id="quote-reveal">
      <div className="container quote-container">
        <div className="quote-text-wrap" ref={textRef}>
          {words.map((word, wIdx) => (
            <span key={wIdx} style={{ display: "contents" }}>
              <span className="reveal-word">
                {word.split("").map((char, cIdx) => (
                  <span key={cIdx} className="reveal-char">
                    {char}
                  </span>
                ))}
              </span>
              {wIdx < words.length - 1 && (
                <span className="reveal-char reveal-space"> </span>
              )}
            </span>
          ))}
        </div>
        <div className="quote-author">
          <span className="author-name">— Bob Shanks</span>
          <span className="author-title">CFO at Ford</span>
        </div>
      </div>
    </section>
  );
}
