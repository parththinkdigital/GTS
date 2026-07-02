"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import "./CircularCardGallery.css";

export default function CircularCardGallery({
  items = [],
  bend = 3,
  scrollSpeed = 1.6,
  scrollEase = 0.08,
  cardWidth = 330,
  cardGap = 24,
  className = "",
  style = {}
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);

  // Responsive card width calculation
  const [currentCardWidth, setCurrentCardWidth] = useState(cardWidth);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleWidth = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setCurrentCardWidth(275);
      } else if (w < 768) {
        setCurrentCardWidth(295);
      } else if (w < 1024) {
        setCurrentCardWidth(310);
      } else {
        setCurrentCardWidth(cardWidth); // 330
      }
    };

    window.addEventListener("resize", handleWidth);
    handleWidth();
    return () => window.removeEventListener("resize", handleWidth);
  }, [cardWidth]);

  const cardStep = useMemo(() => currentCardWidth + cardGap, [currentCardWidth, cardGap]);

  const handleScroll = (e) => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    const el = e.currentTarget;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const progress = maxScrollLeft > 0 ? el.scrollLeft / maxScrollLeft : 0;
    const progressBar = document.querySelector(".products-progress-bar");
    if (progressBar) {
      progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const gsap = require("gsap").default;
    const ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container || !items.length) return;

    const section = container.closest("#products");
    if (!section) return;

    const maxScroll = (items.length - 1) * cardStep;

    // Helper to calculate card layout based on target scroll position
    const updateCards = (scrollVal) => {
      // 1. Translate the horizontal track
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-scrollVal}px, 0, 0)`;
      }

      // 2. Update bottom progress bar scale
      const progressBar = document.querySelector(".products-progress-bar");
      if (progressBar) {
        const progress = maxScroll > 0 ? scrollVal / maxScroll : 0;
        progressBar.style.transform = `scaleX(${progress})`;
      }

      // 3. Update individual cards (scaling, opacity, zIndex) based on distance to center
      const maxScaleDist = cardStep * 1.5;

      cardsRef.current.forEach((cardEl, idx) => {
        if (!cardEl) return;

        // Horizontal distance from the center of the container
        const distance = idx * cardStep - scrollVal;
        const absDist = Math.abs(distance);

        // Interpolation factor: 1 when perfectly centered, 0 when one cardStep or further away
        const factor = Math.max(0, 1 - absDist / maxScaleDist);

        // Scaling range: 0.82 (inactive) -> 1.08 (active focus)
        const scale = 0.82 + factor * 0.26;

        // 3D Depth: slide cards back in Z space when inactive (up to 160px deep)
        const translateZ = (factor - 1) * 160;

        // Rotate Y: Rotate cards to face inward towards the center
        const angleLimit = 32; // max angle in degrees
        const rotateY = Math.max(-angleLimit, Math.min(angleLimit, (distance / cardStep) * -22));

        // Opacity range: 0.5 (inactive) -> 1.0 (active focus)
        const opacity = 0.5 + factor * 0.5;

        const zIndex = Math.round(scale * 100);

        cardEl.style.transform = `translate3d(0, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        cardEl.style.opacity = opacity;
        cardEl.style.zIndex = zIndex;
      });
    };

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet (>= 768px): Enable scroll-driven 3D pinning gallery
      mm.add("(min-width: 768px)", () => {
        // Initial render layout
        updateCards(0);

        let mainTween;

        const handleResize = () => {
          const w = container.clientWidth;
          if (trackRef.current) {
            const padding = `${w / 2 - currentCardWidth / 2}px`;
            trackRef.current.style.paddingLeft = padding;
            trackRef.current.style.paddingRight = padding;
          }
          if (mainTween && mainTween.scrollTrigger) {
            const currentProgress = mainTween.scrollTrigger.progress;
            updateCards(currentProgress * maxScroll);
          }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const playhead = { progress: 0 };

        mainTween = gsap.to(playhead, {
          progress: 1,
          ease: "none",
          scrollTrigger: {
            id: "products-pin",
            trigger: section,
            pin: true,
            start: "top top",
            end: () => `+=${maxScroll}`,
            scrub: 0.8, // Smooth scrub easing
            invalidateOnRefresh: true,
            onUpdate: () => {
              const currentScrollVal = playhead.progress * maxScroll;
              updateCards(currentScrollVal);
            }
          }
        });

        return () => {
          window.removeEventListener("resize", handleResize);
          // Reset styling to ensure mobile css snaps take over cleanly
          if (trackRef.current) {
            trackRef.current.style.transform = "";
            trackRef.current.style.paddingLeft = "";
            trackRef.current.style.paddingRight = "";
          }
          cardsRef.current.forEach((cardEl) => {
            if (cardEl) {
              cardEl.style.transform = "";
              cardEl.style.opacity = "";
              cardEl.style.zIndex = "";
            }
          });
        };
      });

      // Animate section header fade-in when section comes into view (works everywhere)
      const header = section.querySelector(".section-header");
      if (header) {
        gsap.fromTo(header,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }
    }, container);

    return () => {
      ctx.revert();
    };
  }, [items.length, cardStep, currentCardWidth, cardGap]);

  return (
    <div
      className={`circular-card-gallery ${className}`}
      style={style}
      ref={containerRef}
      role="region"
      aria-label="Interactive scroll-driven circular card gallery."
      onScroll={handleScroll}
    >
      <div className="circular-card-track" ref={trackRef}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="circular-card-wrapper"
            ref={(el) => (cardsRef.current[idx] = el)}
            style={{
              width: `${currentCardWidth}px`,
              marginLeft: `${cardGap / 2}px`,
              marginRight: `${cardGap / 2}px`
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
