"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

// Line Art SVG Illustrations in Sepia/Brown tone (~140-160px, thin stroke)
const LineArtIllustration = ({ type }) => {
  const strokeColor = "#6b5e52"; // Sepia/brown monochrome tone
  const accentColor = "#9c8b7d"; // Light sepia accent

  if (type === 0) {
    // Intelligent Customer Engagement SVG
    return (
      <svg
        width="145"
        height="145"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto select-none"
      >
        <circle cx="80" cy="80" r="68" stroke={strokeColor} strokeWidth="1.25" strokeDasharray="4 4" opacity="0.4" />
        <circle cx="80" cy="80" r="52" stroke={strokeColor} strokeWidth="1.25" opacity="0.6" />
        <circle cx="80" cy="80" r="28" stroke={strokeColor} strokeWidth="1.5" />
        <path d="M80 35 V20 M80 125 V140 M35 80 H20 M125 80 H140" stroke={strokeColor} strokeWidth="1.25" strokeLinecap="round" />
        <path d="M48 48 L38 38 M112 112 L122 122 M112 48 L122 38 M48 112 L38 122" stroke={strokeColor} strokeWidth="1.25" strokeLinecap="round" />
        <circle cx="80" cy="80" r="10" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        <circle cx="80" cy="80" r="4" fill={strokeColor} />
        <path d="M62 65 C68 55 92 55 98 65" stroke={accentColor} strokeWidth="1.25" strokeLinecap="round" />
        <path d="M62 95 C68 105 92 105 98 95" stroke={accentColor} strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 1) {
    // Digital Credit SVG
    return (
      <svg
        width="145"
        height="145"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto select-none"
      >
        <rect x="25" y="45" width="110" height="70" rx="12" stroke={strokeColor} strokeWidth="1.5" />
        <line x1="25" y1="65" x2="135" y2="65" stroke={strokeColor} strokeWidth="1.25" />
        <rect x="38" y="78" width="22" height="16" rx="3" stroke={strokeColor} strokeWidth="1.25" fill="none" />
        <line x1="72" y1="84" x2="115" y2="84" stroke={strokeColor} strokeWidth="1.25" strokeLinecap="round" />
        <line x1="72" y1="92" x2="98" y2="92" stroke={accentColor} strokeWidth="1.25" strokeLinecap="round" />
        <circle cx="118" cy="40" r="18" stroke={strokeColor} strokeWidth="1.25" fill="#ffffff" />
        <path d="M112 40 L116 44 L124 35" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 2) {
    // Digital Debt Collection SVG
    return (
      <svg
        width="145"
        height="145"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto select-none"
      >
        <circle cx="80" cy="80" r="58" stroke={strokeColor} strokeWidth="1.25" opacity="0.3" />
        <path d="M35 110 L65 80 L90 98 L125 50" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M110 50 H125 V65" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="65" cy="80" r="4" fill={strokeColor} />
        <circle cx="90" cy="98" r="4" fill={strokeColor} />
        <circle cx="125" cy="50" r="5" fill={strokeColor} />
        <rect x="40" y="115" width="80" height="12" rx="6" stroke={accentColor} strokeWidth="1.25" />
        <path d="M48 121 H92" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Legal Recovery SVG
  return (
    <svg
      width="145"
      height="145"
      viewBox="0 0 160 160"
      fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto select-none"
      >
        <path d="M80 30 V125" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M50 125 H110" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M40 50 H120" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        {/* Left scale pan */}
        <path d="M40 50 L25 85 H55 Z" stroke={strokeColor} strokeWidth="1.25" fill="none" strokeLinejoin="round" />
        {/* Right scale pan */}
        <path d="M120 50 L105 85 H135 Z" stroke={strokeColor} strokeWidth="1.25" fill="none" strokeLinejoin="round" />
        <circle cx="80" cy="30" r="5" stroke={strokeColor} strokeWidth="1.5" fill="#ffffff" />
        <path d="M65 105 L95 105" stroke={accentColor} strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    );
};

// Internal Component for individual Flip Card
const ServiceCard = ({ service, idx, isMobile }) => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFlip = (toBack) => {
    setIsFlipped(toBack);
    gsap.to(cardRef.current, {
      rotateY: toBack ? 180 : 0,
      duration: 0.55,
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
      handleFlip(!isFlipped);
    }
  };

  return (
    <div
      className="w-full [perspective:1200px] cursor-pointer"
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      onClick={onCardClick}
    >
      <div
        ref={cardRef}
        className="relative w-full h-[570px] max-w-[340px] sm:max-w-[350px] mx-auto rounded-[28px] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_45px_rgba(0,0,0,0.1)] transition-shadow duration-300"
        style={{
          transformStyle: "preserve-3d",
          height: "570px",
          borderRadius: "28px",
          backgroundColor: "#ffffff",
          boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
        }}
      >
        {/* FRONT FACE */}
        <div
          className={`absolute inset-0 w-full h-full bg-white rounded-[28px] p-8 sm:p-9 flex flex-col items-center justify-center text-center box-border ${
            isFlipped ? "pointer-events-none" : "pointer-events-auto"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "28px",
            backgroundColor: "#ffffff",
            padding: "36px 32px",
          }}
        >
          {/* Top Line-Art Icon / Illustration Slot */}
          <div className="w-[140px] h-[140px] flex items-center justify-center mb-6">
            <LineArtIllustration type={idx} />
          </div>

          {/* Title */}
          <h3 className="font-extrabold text-[#000000] text-base sm:text-lg tracking-wider uppercase mb-3 px-1 leading-snug" style={{ color: "#000000", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {service.title}
          </h3>

          {/* 2-line Description */}
          <p className="text-gray-500 font-outfit text-sm leading-relaxed max-w-[270px] line-clamp-3" style={{ color: "#6b7280" }}>
            {service.back.description}
          </p>
        </div>

        {/* BACK FACE (Exact Pixel Match to Reference Image) */}
        <div
          className={`absolute inset-0 w-full h-full bg-white rounded-[28px] p-8 sm:p-9 flex flex-col text-left justify-start items-stretch box-border ${
            isFlipped ? "pointer-events-auto" : "pointer-events-none"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "28px",
            backgroundColor: "#ffffff",
            padding: "32px 28px",
          }}
        >
          {/* Header Row */}
          <div className="flex justify-between items-center mb-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <h3 className="font-extrabold text-[#000000] text-base sm:text-lg tracking-wider uppercase truncate pr-2" style={{ fontWeight: 800, color: "#000000", fontSize: "18px", letterSpacing: "0.05em", textTransform: "uppercase", margin: 0 }}>
              {service.title}
            </h3>
            <ArrowRight size={20} className="text-[#8e8e93] shrink-0" strokeWidth={1.5} style={{ color: "#8e8e93" }} />
          </div>

          {/* Thin Horizontal Divider Line */}
          <div className="w-full border-b border-[#eaeaea] mb-5" style={{ width: "100%", borderBottom: "1px solid #eaeaea", marginBottom: "20px" }} />

          {/* Sub-item List Stack */}
          <ul className="flex flex-col gap-3 flex-1 overflow-y-auto custom-scrollbar pr-0.5" style={{ display: "flex", flexDirection: "column", gap: "12px", margin: 0, padding: 0, listStyle: "none" }}>
            {service.items.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <li key={i} style={{ margin: 0, padding: 0 }}>
                  <a
                    href={item.href}
                    onMouseEnter={() => setActiveIndex(i)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "14px 24px",
                      borderRadius: "18px",
                      fontSize: "15px",
                      fontWeight: isActive ? 600 : 500,
                      lineHeight: "1.35",
                      letterSpacing: "-0.01em",
                      backgroundColor: isActive ? "#000000" : "#f7f6f4",
                      color: isActive ? "#ffffff" : "#2c3038",
                      transition: "all 0.2s ease",
                      textDecoration: "none",
                      boxSizing: "border-box",
                      boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                    }}
                    className={`block w-full text-left py-3.5 px-6 rounded-[18px] text-[15px] leading-snug tracking-[-0.01em] transition-all duration-200 ${
                      isActive
                        ? "bg-[#000000] text-white font-semibold shadow-sm"
                        : "bg-[#f7f6f4] text-[#2c3038] font-medium hover:bg-[#000000] hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
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
      ],
      back: {
        title: "INTELLIGENT CUSTOMER ENGAGEMENT",
        description:
          "Empower customer engagement with AI-driven segmentation, personalised workflows and omnichannel campaign intelligence.",
      },
    },
    {
      title: "DIGITAL CREDIT",
      items: [
        { name: "Loan Origination System (LOS)", href: "#" },
        { name: "Loan Management System (LMS)", href: "#" },
        { name: "Credit Monitoring & Analytics", href: "#" },
        { name: "Business Rules Engine (BRE)", href: "#" },
        { name: "Alternate Credit Model", href: "#" },
      ],
      back: {
        title: "DIGITAL CREDIT",
        description:
          "Accelerate digital lending with intelligent onboarding, automated credit decisioning, and end-to-end loan lifecycle management.",
      },
    },
    {
      title: "DIGITAL DEBT COLLECTION",
      items: [
        { name: "IRAC Compliant", href: "#" },
        { name: "Aging-based Bucketing", href: "#" },
        { name: "Automated Borrower Nudging", href: "#" },
        { name: "Omnichannel Communication", href: "#" },
        { name: "Real-Time Recovery Analytics", href: "#" },
      ],
      back: {
        title: "DIGITAL DEBT COLLECTION",
        description:
          "Streamline debt recovery with AI-powered borrower journeys, intelligent automation, and real-time recovery insights.",
      },
    },
    {
      title: "LEGAL RECOVERY",
      items: [
        { name: "Integrated Legal Recovery (ILRM)", href: "#" },
        { name: "Online Dispute Resolution (ODR)", href: "#" },
        { name: "Mediation and Conciliation", href: "#" },
        { name: "Legal Advisory", href: "#" },
        { name: "Lok Adalat", href: "#" },
        { name: "Legal Dashboard & Analytics", href: "#" },
      ],
      back: {
        title: "LEGAL RECOVERY",
        description:
          "Digitise legal recovery with integrated case management, arbitration workflows, and intelligent recovery platforms.",
      },
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 0",
        boxSizing: "border-box",
      }}
      className="w-full box-border py-4 flex justify-center items-center"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
        }}
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 box-border flex justify-center items-center"
      >
        {/* Responsive Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div
          style={{
            display: "grid",
            width: "100%",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-center justify-items-center mx-auto"
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