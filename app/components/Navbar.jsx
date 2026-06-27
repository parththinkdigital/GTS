/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "products", label: "Products" },
  { id: "services", label: "Services" },
  { id: "solutions", label: "Solutions" },
  { id: "impact", label: "Impact" },
];

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
  </svg>
);

const FaqIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const InboxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

const SettingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export default function Navbar({ activeSection }) {
  const [blobStyle, setBlobStyle] = useState({ left: 0, right: 0, opacity: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const dockRef = useRef(null);
  const menuRef = useRef(null);

  const updateBlob = useCallback((element) => {
    if (!element || !dockRef.current) return;
    const rect = element.getBoundingClientRect();
    const dockRect = dockRef.current.getBoundingClientRect();
    setBlobStyle({
      left: rect.left - dockRect.left,
      right: dockRect.right - rect.right,
      opacity: 1,
    });
  }, []);

  const handleMouseEnter = (e) => updateBlob(e.currentTarget);
  const handleMouseLeave = () => {
    const activeEl = dockRef.current?.querySelector("a.active");
    if (activeEl) updateBlob(activeEl);
    else setBlobStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const activeEl = dockRef.current?.querySelector("a.active");
      if (activeEl) updateBlob(activeEl);
    }, 100);
    return () => clearTimeout(timeout);
  }, [activeSection, updateBlob]);

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
      <header className="site-header">
        <div className="container header-container">
          <img src="/gts-logo.png" alt="GTS Finlabs" className="site-logo" />
          <div className="header-right">
            <a href="#" className="header-cta-btn">Schedule a Demo</a>
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
            </button>
          </div>
        </div>
      </header>

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
          </nav>
        </div>
      </div>

      {/* Desktop dock */}
      <nav className="glass-dock" ref={dockRef} onMouseLeave={handleMouseLeave}>
        <div
          className="dock-blob"
          style={{
            left: `${blobStyle.left}px`,
            right: `${blobStyle.right}px`,
            opacity: blobStyle.opacity,
          }}
        />
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            onMouseEnter={handleMouseEnter}
          >
            <div className="dock-item">
              {item.id === "hero" && <HomeIcon />}
              {item.id === "products" && <FolderIcon />}
              {item.id === "services" && <FaqIcon />}
              {item.id === "solutions" && <InboxIcon />}
              {item.id === "impact" && <SettingIcon />}
              <span>{item.label}</span>
            </div>
          </a>
        ))}
      </nav>
    </>
  );
}
