/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useRef } from "react";

const navItems = [
  { id: "products", label: "Products", icon: "folder" },
  { id: "services", label: "Services", icon: "faq" },
  { id: "solutions", label: "Solutions", icon: "inbox" },
];

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-pill-icon">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-pill-icon">
    <rect x="3" y="3" width="7" height="9" rx="1" />
    <rect x="14" y="3" width="7" height="5" rx="1" />
    <rect x="14" y="12" width="7" height="9" rx="1" />
    <rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
);

const FaqIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-pill-icon">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <path d="M10 11h4v2h-4z" fill="currentColor" stroke="none" />
  </svg>
);

const InboxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-pill-icon">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);
const ChevronDown = () => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className="h-[7px] w-2.5 shrink-0">
    <path d="M1 1.25 6 6.25l5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 16 12" fill="none" aria-hidden="true" className="h-3 w-4 shrink-0">
    <path d="M1 6h13M9.5 1.5 14 6l-4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const menuRef = useRef(null);

  const effectiveTab = hoveredTab || activeSection;

  useEffect(() => {
    let tween;
    const init = async () => {
      if (!menuRef.current) return;
      const gsap = (await import("gsap")).default;
      if (menuOpen) {
        tween = gsap.fromTo(
          menuRef.current,
          { clipPath: "circle(0% at 100% 0%)" },
          { clipPath: "circle(150% at 100% 0%)", duration: 0.6, ease: "power3.inOut" }
        );
      } else {
        tween = gsap.to(
          menuRef.current,
          {
            clipPath: "circle(0% at 100% 0%)",
            duration: 0.4,
            ease: "power3.inOut",
            onComplete: () => {
              if (menuRef.current) gsap.set(menuRef.current, { clipPath: "" });
            },
          }
        );
      }
    };
    init();
    return () => { tween?.kill(); };
  }, [menuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = (id) =>
    `inline-flex shrink-0 items-center gap-[7px] text-[0.95rem] font-medium tracking-[-0.01em] no-underline transition-colors duration-200 hover:text-[#00A896] ${effectiveTab === id ? "text-[#00A896]" : "text-[#1A1A1A]"
    }`;

  return (
    <>
      {/* Floating pill navbar — visible at all sizes */}
      <div className="fixed left-1/2 top-0 z-[1000] mx-auto grid min-h-[76px] w-[calc(100%-24px)] -translate-x-1/2 grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-b-[24px] bg-[#EEF0F2] px-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:w-[min(calc(100%-48px),1180px)] sm:min-h-[92px] sm:gap-6 sm:px-10 lg:min-h-[100px]">
        <a
          className="inline-flex shrink-0 items-center justify-self-start no-underline"
          href="#hero"
          style={{ marginLeft: "3vw" }}
          onClick={(e) => handleNavClick(e, "hero")}
          aria-label="GTS Finlabs home"
        >
          <img
            src="/gts-logo-transparant.png"
            alt="GTS Finlabs"
            className="h-9 w-auto object-contain sm:h-10 lg:h-11"
          />
        </a>

        {/* Center: nav links */}
        <nav className="hidden items-center justify-center gap-8 lg:flex xl:gap-12">
          <div className="nav-pill-tabs">
            {/* Home button */}
            <a
              className={`nav-pill-home-btn${effectiveTab === "hero" ? " active" : ""}`}
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              onMouseEnter={() => setHoveredTab("hero")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <HomeIcon />
              <span>Home</span>
            </a>

            {/* Nav links — hidden on mobile */}
            <div className="nav-pill-links">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-pill-link${effectiveTab === item.id ? " active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  onMouseEnter={() => setHoveredTab(item.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  {item.icon === "folder" && <FolderIcon />}
                  {item.icon === "faq" && <FaqIcon />}
                  {item.icon === "inbox" && <InboxIcon />}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center justify-end justify-self-end gap-3" style={{ marginRight: "3vw" }}>
          <a
            href="#"
            className="hidden lg:flex items-center gap-2 bg-[#102B7B] hover:bg-[#0c1f59] text-white rounded-full transition-colors duration-300"
            style={{ padding: "12px 28px" }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="whitespace-nowrap font-semibold text-[15px]">Schedule a Demo</span>
            <ArrowRight />
          </a>
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[rgba(0,168,150,0.25)] bg-[#F5F7F8] transition-colors duration-300 hover:bg-white lg:hidden"
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? "visible" : ""}`}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="mobile-menu-inner">
          <img src="/gts.png" alt="GTS Finlabs" className="mobile-menu-logo" />
          <nav className="mobile-nav-links">
            <a
              href="#hero"
              className={activeSection === "hero" ? "active" : ""}
              onClick={(e) => handleNavClick(e, "hero")}
            >
              Home
            </a>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                marginTop: "12px",
                background: "var(--brand-blue)",
                color: "#fff",
                padding: "12px 32px",
                borderRadius: "9999px",
                fontSize: "1rem",
              }}
            >
              Schedule a Demo
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
