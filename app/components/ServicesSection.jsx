"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

// Internal Component to handle individual card logic
const ServiceCard = ({ service, idx, isMobile }) => {
  const cardRef = useRef(null);
  const isFlippedRef = useRef(false);

  const handleFlip = (toBack) => {
    gsap.to(cardRef.current, {
      rotateY: toBack ? 180 : 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  const onHoverEnter = () => {
    if (!isMobile) handleFlip(true);
  };
  const onHoverLeave = () => {
    if (!isMobile) handleFlip(false);
  };
  const onCardClick = () => {
    if (isMobile) {
      isFlippedRef.current = !isFlippedRef.current;
      handleFlip(isFlippedRef.current);
    }
  };

  return (
    <div
      className="w-full h-full [perspective:1000px] cursor-pointer"
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      onClick={onCardClick}
    >
      <div
        ref={cardRef}
        className="relative w-full h-[420px] sm:h-[440px] md:h-[460px] lg:h-[480px]
                   max-w-[320px] sm:max-w-[320px] md:max-w-[320px] lg:max-w-[320px]
                   mx-auto"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Card */}
        <div
          className="absolute inset-0 w-full h-full bg-white rounded-[24px] shadow-[0_2px_20px_rgba(12,45,137,0.08)] p-8 flex flex-col items-center justify-center text-center box-border"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-8 rounded-2xl bg-[#F0F4FD] flex items-center justify-center">
            <span className="text-2xl font-bold text-[#0C2D89]">
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-lg font-sora font-bold mb-3 uppercase tracking-tight text-[#0a1a4a]">
            {service.back.title}
          </h3>
          <p className="text-gray-500 font-outfit text-sm leading-relaxed">
            {service.back.description}
          </p>
        </div>

        {/* Back Card */}
        <div
          className="absolute inset-0 w-full h-full bg-white rounded-[24px] shadow-[0_8px_30px_rgba(12,45,137,0.12)] p-8 flex flex-col box-border"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="flex justify-between items-center mb-5 pb-4 border-b border-gray-100">
            <h3 className="text-lg font-extrabold font-sora text-[#0a1a4a] uppercase tracking-wide pr-2">
              {service.title}
            </h3>
            <ArrowRight size={20} className="text-gray-400 shrink-0" strokeWidth={1.5} />
          </div>
          <ul className="space-y-4 overflow-y-auto custom-scrollbar pr-1 mt-1">
            {service.items.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="block bg-[#F8F9FA] font-outfit px-6 py-3.5 rounded-full text-[15px] font-semibold text-gray-700 hover:bg-[#0C2D89] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    // Fun Heading Animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" },
      );
    }

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const services = [
    {
      title: "INTELLIGENT CUSTOMER ENGAGEMENT",
      items: [
        { name: "Unified Customer Data Platform", href: "#" },
        { name: "AI-powered Segmentation", href: "#" },
        { name: "Gen AI Multimedia Content Engine", href: "#" },
        { name: "CPaaS Journey Builder", href: "#" },
        { name: "Web & App Personalisation", href: "#" },
        { name: "Raw-to-Qualified Lead Validation", href: "#" },
      ],
      back: {
        title: "Intelligent Customer Engagement",
        description:
          "Empower customer engagement with AI-driven segmentation, personalised journeys, and omnichannel campaign intelligence.",
      },
    },
    {
      title: "DIGITAL CREDIT",
      items: [
        { name: "Loan Origination System (LOS)", href: "#" },
        { name: "Loan Management System (LMS)", href: "#" },
        { name: "Credit Monitoring", href: "#" },
        { name: "Business Rules Engine (BRE)", href: "#" },
        { name: "Alternate Credit Model", href: "#" },
      ],
      back: {
        title: "Digital Credit",
        description:
          "Accelerate digital lending with intelligent onboarding, automated credit decisioning, and end-to-end loan lifecycle management.",
      },
    },
    {
      title: "DIGITAL DEBT COLLECTION",
      items: [
        { name: "IRAC Compliance", href: "#" },
        { name: "Aging-based Bucketing", href: "#" },
        { name: "Customer Nudging", href: "#" },
        { name: "Omnichannel Communication", href: "#" },
        { name: "Real-Time Analytics & Dashboards", href: "#" },
      ],
      back: {
        title: "Digital Debt Collection",
        description:
          "Streamline debt recovery with AI-powered borrower journeys, intelligent automation, and real-time recovery insights.",
      },
    },
    {
      title: "LEGAL RECOVERY",
      items: [
        { name: "Integrated Legal Recovery Management (ILRM)", href: "#" },
        { name: "Online Dispute Resolution (ODR)", href: "#" },
      ],
      back: {
        title: "Legal Recovery",
        description:
          "Digitise legal recovery with integrated case management, arbitration workflows, and intelligent recovery platforms.",
      },
    },
  ];
  return (
    <div className="w-full box-border" style={{ overflow: "visible" }}>
      <div className="w-full max-w-[1400px] mx-auto px-6 box-border">
        {/* 4 cards in a single row on desktop, centered */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ justifyItems: "center", justifyContent: "center" }}
        >
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              service={service}
              idx={idx}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}