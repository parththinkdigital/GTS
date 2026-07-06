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
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
  </svg>
);

const FaqIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-pill-icon">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const InboxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-pill-icon">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
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

  return (
    <>
      {/* Floating pill navbar — visible at all sizes */}
      <nav className="nav-pill">
        {/* Logo badge */}
        <a
          className="nav-pill-logo"
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          <img src="/gts-logo.png" alt="GTS Finlabs" className="nav-pill-logo-img" />
        </a>

        {/* Tabs group: Home button + nav links */}
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

        {/* Right side: CTA + hamburger */}
        <div className="nav-pill-right">
          <a
            href="#"
            className="nav-pill-cta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Schedule a Demo
          </a>
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="hamburger-btn"
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? "visible" : ""}`}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="mobile-menu-inner">
          <button
            onClick={() => setMenuOpen(false)}
            className="mobile-close"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="20" height="20">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img src="/gts-logo.png" alt="GTS Finlabs" className="mobile-menu-logo" />
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
