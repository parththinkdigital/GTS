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

    // Initial render
    updateCards(0);

    // Track instance of ScrollTrigger to force update on resize
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

    // Listeners
    window.addEventListener("resize", handleResize);
    handleResize();

    const ctx = gsap.context(() => {
      const playhead = { progress: 0 };

      // Scale scroll distance by screen size so the pin doesn't reserve
      // a huge amount of scroll space on mobile (where cards are narrower).
      const getScrollEnd = () => {
        const w = window.innerWidth;
        if (w < 480) {
          // Mobile small: reduce to ~40% of full scroll distance
          return maxScroll * 0.42;
        } else if (w < 768) {
          // Mobile large: reduce to ~55%
          return maxScroll * 0.55;
        }
        // Desktop: full scroll distance
        return maxScroll;
      };

      // Animate progress using a GSAP tween controlled by ScrollTrigger scrub
      mainTween = gsap.to(playhead, {
        progress: 1,
        ease: "none",
        scrollTrigger: {
          id: "products-pin",
          trigger: section,
          pin: true,
          start: "top top",
          end: () => `+=${getScrollEnd()}`,
          scrub: 0.8, // Smooth scrub easing
          invalidateOnRefresh: true,
          onUpdate: () => {
            const currentScrollVal = playhead.progress * maxScroll;
            updateCards(currentScrollVal);
          }
        }
      });


      // Animate section header fade-in when section comes into view
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
      window.removeEventListener("resize", handleResize);
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
