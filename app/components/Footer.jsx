/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import MagnetLines from "./MagnetLines";


export default function Footer() {
  const bigTextRef = useRef(null);

  const onBigTextMove = (e) => {
    const el = bigTextRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    el.style.setProperty('--cursor-x', `${pct}%`);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const gsap = require("gsap").default;
    const ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const footer = document.querySelector("footer.bold-footer");
    if (!footer) return;

    const leftCol = footer.querySelector(".footer-left-col");
    const rightGrid = footer.querySelector(".footer-right-grid");
    const magnetCol = footer.querySelector(".footer-magnet-col");
    const ctx = gsap.context(() => {
      gsap.fromTo([leftCol, rightGrid, magnetCol].filter(Boolean),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="v2-footer-wrapper">
      <footer className="bold-footer">
        {/* Floating outlined top scroll button in top right corner */}
        <div className="footer-top-btn-wrap">
          <button
            className="outlined-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to Top"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>

        <div className="footer-content-wrap">
          <div className="footer-main-grid">
            {/* Left side: logo, description, socials, and copyright */}
            <div className="footer-left-col">
              <a className="footer-brand-link" href="/">
                <img alt="logo" width="30" height="30" src="/gts-logo.png" className="footer-brand-logo" />
                <span className="footer-brand-name">GTS Finlabs</span>
              </a>
              <p className="footer-brand-tagline">
                Next-generation financial technology enabling banks and fintechs to deliver intelligent customer engagement and seamless digital lending experiences.
              </p>
              
              {/* Circular Social Buttons directly below description */}
              <div className="footer-social-mono-row">
                <a href="#" className="social-mono-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-mono-btn" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="social-mono-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="social-mono-btn" aria-label="Twitter X">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
              
              <div className="footer-copyright-text">
                &copy; {new Date().getFullYear()} GTS Finlabs. All rights reserved.
              </div>
            </div>

            {/* Middle: Navigation Grid */}
            <div className="footer-right-grid">
              {/* Pages Column */}
              <div className="footer-link-group">
                <p className="footer-group-title">Pages</p>
                <ul className="footer-group-list">
                  <li><a href="#products">All Products</a></li>
                  <li><a href="#solutions">Solutions</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#impact">Impact</a></li>
                </ul>
              </div>

              {/* Solutions Column */}
              <div className="footer-link-group">
                <p className="footer-group-title">Solutions</p>
                <ul className="footer-group-list">
                  <li><a href="#solutions">Retail Banking</a></li>
                  <li><a href="#solutions">Credit Unions</a></li>
                  <li><a href="#solutions">Fintech Lenders</a></li>
                  <li><a href="#solutions">Embedded Finance</a></li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className="footer-link-group">
                <p className="footer-group-title">Legal</p>
                <ul className="footer-group-list">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Right side: Standalone MagnetLines Grid */}
            <div className="footer-magnet-col">
              <p className="footer-group-title">Field Matrix</p>
              <div className="footer-magnet-sandbox">
                <MagnetLines
                  rows={10}
                  columns={15}
                  containerSize="100%"
                  lineColor="var(--brand-blue, #0C2D89)"
                  lineWidth="2px"
                  lineHeight="14px"
                  baseAngle={-20}
                  style={{ height: "auto", aspectRatio: "1.5 / 1" }}
                />
              </div>
            </div>
          </div>

          {/* Big brand text with cursor-following gradient */}
          <div ref={bigTextRef} className="footer-big-text" onMouseMove={onBigTextMove}>GTS Finlabs</div>
        </div>
      </footer>
    </div>
  );
}
