"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GRADIENT_TITLE = {
  background: "linear-gradient(135deg, #7A9FE8, #0C2D89, #0a1a4a)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const q = gsap.utils.selector(section);
      const header = q(".section-header");
      const text = q(".about-text");
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set([header, text], {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
        });
        return;
      }

      gsap.set([header, text], { willChange: "transform, opacity, filter" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        header,
        { autoAlpha: 0, y: -28, filter: "blur(8px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.0,
          ease: "power2.out",
        },
        0,
      ).fromTo(
        text,
        { autoAlpha: 0, y: 32, filter: "blur(8px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
        },
        0.14,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section className="section about-section" id="about" ref={sectionRef}>
      <div className="about-orb about-orb-blue" aria-hidden="true" />
      <div className="about-orb about-orb-orange" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <h2 className="section-title" style={GRADIENT_TITLE}>
            About Us
          </h2>
        </div>
        <div className="about-text">
          <p>
            GTS Finlabs Pvt. Ltd. delivers an AI-powered platform that unifies
            customer engagement, digital lending, collections, and legal
            recovery for Banks, NBFCs, Card Issuers, and Program Managers.
          </p>
          <p>
            From acquiring customers and accelerating onboarding to enabling
            smarter credit decisions, intelligent engagement, and efficient
            collections, our integrated technology stack simplifies every stage
            of the lending lifecycle.
          </p>
          <p>
            By bringing critical customer engagement, lending, and collections
            capabilities onto a single integrated platform, GTS Finlabs
            eliminates the complexity of managing multiple technology vendors
            while enabling faster decisions, smarter operations, and better
            customer experiences.
          </p>
          <p>
            Combining advanced technology with deep industry expertise, we
            empower financial institutions to grow efficiently, strengthen
            customer relationships, and drive sustainable business outcomes in
            an increasingly digital financial ecosystem.
          </p>
            </div>
      </div>
    </section>
  );
}
