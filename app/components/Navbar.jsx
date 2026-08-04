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
      {/* Unified full-width navbar */}
      <div className="navbar-shell">
        {/* Logo — left-aligned in header */}
        <a
          className="nav-pill-logo"
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          <img src="/gts.png" alt="GTS Finlabs" className="nav-pill-logo-img nav-pill-logo-img--desktop" />
          <img src="/gts-finlabs-logo-2.png" alt="GTS Finlabs" className="nav-pill-logo-img nav-pill-logo-img--mobile" />
        </a>

        <nav className="nav-pill">
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
