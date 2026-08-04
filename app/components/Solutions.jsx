"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Briefcase,
  Coins,
  Layers,
  LayoutTemplate,
  Magnet,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SOLUTIONS = [
  {
    id: "01",
    title: "Acquisition & Engagement",
    frontIcon: <Magnet size={22} />,
    items: [
      {
        title: "Seamless Customer Journey",
        icon: (
          <img
            src="/icons/SeamlessCustomerJourney.png"
            alt="Seamless Customer Journey"
            width="18"
            height="18"
          />
        ),
        desc: "A unified credit ecosystem connecting acquisition, onboarding, lending, monitoring, and collections.",
      },
      {
        title: "Customer Acquisition",
        icon: <Magnet size={18} />,
        desc: "AI-driven customer intelligence and personalized engagement that turn prospects into long-term relationships.",
      },
      {
        title: "Digital Onboarding and LOS",
        icon: (
          <img
            src="/icons/digitalonboarding.png"
            alt="Digital Onboarding"
            width="18"
            height="18"
          />
        ),
        desc: "A paperless onboarding and origination experience powered by digital identity verification and real-time decisioning.",
      },
      {
        title: "Business Rule Engine",
        icon: (
          <img
            src="/icons/businessruleengine.png"
            alt="Business Rule Engine"
            width="18"
            height="18"
          />
        ),
        desc: "No-code decisioning framework, transforming credit policies into automated and explainable outcomes.",
      },
    ],
  },
  {
    id: "02",
    title: "Credit & Decisioning",
    frontIcon: <Layers size={22} />,
    items: [
      {
        title: "Alternative Credit Modelling",
        icon: <Layers size={18} />,
        desc: "Behavior-driven credit intelligence built on alternative data sources beyond traditional bureau scores.",
      },
      {
        title: "Comprehensive LMS",
        icon: <Briefcase size={18} />,
        desc: "End-to-end loan lifecycle management with automation, portfolio visibility, and proactive risk monitoring.",
      },
      {
        title: "Digital Debt Collection",
        icon: <Coins size={18} />,
        desc: "An intelligent collections framework combining predictive insights, omnichannel outreach, and compliance-first recovery.",
      },
      {
        title: "Intelligent Engagement",
        icon: (
          <img
            src="/icons/intelligentenagement.png"
            alt="Intelligent Engagement"
            width="18"
            height="18"
          />
        ),
        desc: "Personalized customer engagement powered by AI, real-time insights, and omnichannel orchestration.",
      },
    ],
  },
  {
    id: "03",
    title: "Operations & Communication",
    frontIcon: <LayoutTemplate size={22} />,
    items: [
      {
        title: "Digital Content Management",
        icon: <LayoutTemplate size={18} />,
        desc: "Data-driven content experiences that combine personalization, interactivity, and measurable engagement.",
      },
      {
        title: "CPaaS",
        icon: (
          <img src="/icons/cpaas.png" alt="CPaaS" width="18" height="18" />
        ),
        desc: "A unified communication infrastructure connecting Voice, WhatsApp, RCS, SMS, and Email through a single platform.",
      },
    ],
  },
];

function FlipCard({ card }) {
  const innerRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !innerRef.current) {
      gsap.set(innerRef.current, { rotateY: flipped ? 180 : 0 });
      return;
    }
    gsap.to(innerRef.current, {
      rotateY: flipped ? 180 : 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
    return () => gsap.killTweensOf(innerRef.current);
  }, [flipped]);

  const isDesktop = () =>
    window.matchMedia("(min-width: 1025px)").matches;

  const handleEnter = () => {
    if (isDesktop()) setFlipped(true);
  };
  const handleLeave = () => {
    if (isDesktop()) setFlipped(false);
  };
  const handleClick = () => {
    if (!isDesktop()) setFlipped((f) => !f);
  };

  return (
    <div
      className={flipped ? "flip-card is-flipped" : "flip-card"}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <div className="flip-card-inner" ref={innerRef}>
        <div className="flip-card-face flip-card-front">
          <div className="flip-front-icon">{card.frontIcon}</div>
          <span className="flip-front-num">{card.id}</span>
          <h4 className="flip-front-title">{card.title}</h4>
        </div>

        <div className="flip-card-face flip-card-back">
          <div className="flip-back-header">
            <h4 className="flip-back-title">{card.title}</h4>
            <ArrowRight size={18} />
          </div>
          <ul className="flip-back-list">
            {card.items.map((item) => (
              <li key={item.title}>
                <button type="button" className="flip-pill">
                  <span className="flip-pill-icon">{item.icon}</span>
                  <span className="flip-pill-text">
                    <span className="flip-pill-title">{item.title}</span>
                    <span className="flip-pill-desc">{item.desc}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Solutions() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const q = gsap.utils.selector(section);
      const header = q(".section-header");
      const cards = q(".flip-card");
      const icons = q(".flip-front-icon");
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!cards.length) return;

      if (reduceMotion) {
        gsap.set([header, cards, icons], {
          opacity: 1,
          x: 0,
          y: 0,
          rotateY: 0,
          scale: 1,
          filter: "blur(0px)",
        });
        return;
      }

      gsap.set(cards, {
        transformPerspective: 1200,
        transformOrigin: "center center",
      });
      gsap.set(cards, { willChange: "transform, opacity, filter" });
      gsap.set(icons, { willChange: "transform, opacity" });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
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
        )
          .fromTo(
            cards[0],
            {
              autoAlpha: 0,
              x: -360,
              y: 20,
              rotateY: -12,
              filter: "blur(16px)",
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              rotateY: 0,
              filter: "blur(0px)",
              duration: 1.5,
              ease: "power2.out",
            },
            0.14,
          )
          .fromTo(
            cards[1],
            { autoAlpha: 0, y: 300, scale: 0.92, filter: "blur(16px)" },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.5,
              ease: "power2.out",
            },
            0.25,
          )
          .fromTo(
            cards[2],
            { autoAlpha: 0, x: 360, y: 20, rotateY: 12, filter: "blur(16px)" },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              rotateY: 0,
              filter: "blur(0px)",
              duration: 1.5,
              ease: "power2.out",
            },
            0.36,
          )
          .fromTo(
            icons,
            { scale: 0.68, rotate: -10, opacity: 0 },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.525,
              stagger: 0.0275,
              ease: "back.out(1.45)",
            },
            0.81,
          );
      });

      mm.add("(max-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          header,
          { autoAlpha: 0, y: -18, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.2,
            ease: "power2.out",
          },
          0,
        )
          .fromTo(
            cards,
            { autoAlpha: 0, y: 92, filter: "blur(10px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.25,
              stagger: 0.02,
              ease: "power3.out",
            },
            0.03,
          )
          .fromTo(
            icons,
            { scale: 0.78, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.15,
              stagger: 0.005,
              ease: "back.out(1.5)",
            },
            0.1,
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="section solutions-section"
      id="solutions"
      ref={sectionRef}
    >
      <div className="solutions-orb solutions-orb-blue" />
      <div className="solutions-orb solutions-orb-orange" />

      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="e-dot"></span> Our Solutions
          </div>
          <h2 className="section-title" style={{ background: 'linear-gradient(135deg, #7A9FE8, #0C2D89, #0a1a4a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            End-to-End Solutions for
            <br />
            Every Stage of Credit
          </h2>
        </div>

        <div className="solutions-grid">
          {SOLUTIONS.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
