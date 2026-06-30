"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const q = gsap.utils.selector(section);
      const cards = q(".service-card");
      const cardDetails = q(".service-visual, .service-content");
      const animatedSvgDetails = q(
        ".service-flow-line, .service-chart-line, .service-kpi-ring",
      );
      const reducedMotionDetails = q(
        ".service-visual, .service-content, .service-flow-line, .service-chart-line, .service-kpi-ring, .service-status-pulse",
      );
      if (!cards.length) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(cards, {
          opacity: 1,
          x: 0,
          y: 0,
          rotateY: 0,
          filter: "blur(0px)",
        });
        gsap.set(reducedMotionDetails, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        });
        return;
      }

      gsap.set(cards, {
        transformPerspective: 1200,
        transformOrigin: "center center",
        willChange: "transform, opacity, filter",
      });
      gsap.set(cardDetails, { willChange: "transform, opacity, filter" });
      gsap.set(animatedSvgDetails, {
        willChange: "stroke-dashoffset, opacity",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 68%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .fromTo(
          cards[0],
          { autoAlpha: 0, x: -190, y: 54, rotateY: -8, filter: "blur(12px)" },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            filter: "blur(0px)",
            duration: 1.45,
            ease: "power4.out",
          },
        )
        .fromTo(
          cards[1],
          { autoAlpha: 0, x: 190, y: 54, rotateY: 8, filter: "blur(12px)" },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            filter: "blur(0px)",
            duration: 1.45,
            ease: "power4.out",
          },
          "<0.16",
        )
        .fromTo(
          cardDetails,
          { autoAlpha: 0, y: 16, filter: "blur(5px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.72,
            stagger: 0.055,
            ease: "power3.out",
          },
          "-=0.78",
        )
        .fromTo(
          animatedSvgDetails,
          { opacity: 0.35, strokeDashoffset: 18 },
          {
            opacity: 1,
            strokeDashoffset: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.52",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="section services-section"
      id="services"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hidden SVG Gradient Definitions for Service Illustrations */}
      <svg style={{ height: 0, width: 0, position: "absolute" }}>
        <defs>
          <linearGradient
            id="serv-blue-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0C2D89" />
            <stop offset="100%" stopColor="#4A6FC8" />
          </linearGradient>
          <linearGradient
            id="serv-orange-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#F5A623" />
            <stop offset="100%" stopColor="#FFB347" />
          </linearGradient>
          <linearGradient
            id="serv-inner-grad"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Glow Orbs for Visual Depth */}
      <div className="services-orb services-orb-blue" />
      <div className="services-orb services-orb-orange" />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="e-dot"></span> Our Services
          </div>
          <h2 className="section-title">
            Expert Services That
            <br />
            Maximize Your Impact
          </h2>
        </div>

        <div className="services-grid">
          <div className="service-card service-card-implementation">
            <div className="service-card-glow" />
            <div className="service-visual">
              <svg className="service-img" viewBox="0 0 640 200" fill="none">
                <rect
                  width="640"
                  height="200"
                  rx="12"
                  fill="url(#serv-inner-grad)"
                />
                {/* Central database icon */}
                <rect
                  x="270"
                  y="30"
                  width="100"
                  height="130"
                  rx="16"
                  fill="url(#serv-blue-grad)"
                />
                <ellipse
                  cx="320"
                  cy="55"
                  rx="30"
                  ry="10"
                  fill="white"
                  fillOpacity="0.2"
                />
                <ellipse
                  cx="320"
                  cy="85"
                  rx="30"
                  ry="10"
                  fill="white"
                  fillOpacity="0.2"
                />
                <ellipse
                  cx="320"
                  cy="115"
                  rx="30"
                  ry="10"
                  fill="white"
                  fillOpacity="0.2"
                />

                {/* Left flow card */}
                <rect
                  x="70"
                  y="45"
                  width="140"
                  height="100"
                  rx="12"
                  fill="white"
                  stroke="#e2e8f0"
                  strokeWidth="1.5"
                />
                <rect
                  x="90"
                  y="70"
                  width="70"
                  height="8"
                  rx="4"
                  fill="#0C2D89"
                  fillOpacity="0.7"
                />
                <rect
                  x="90"
                  y="85"
                  width="100"
                  height="6"
                  rx="3"
                  fill="#cbd5e1"
                />
                <circle
                  cx="100"
                  cy="115"
                  r="10"
                  fill="url(#serv-orange-grad)"
                />
                <path
                  d="M97 115l2 2 4-4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Right flow card */}
                <rect
                  x="430"
                  y="45"
                  width="140"
                  height="100"
                  rx="12"
                  fill="white"
                  stroke="#e2e8f0"
                  strokeWidth="1.5"
                />
                <rect
                  x="450"
                  y="70"
                  width="70"
                  height="8"
                  rx="4"
                  fill="#0C2D89"
                  fillOpacity="0.7"
                />
                <rect
                  x="450"
                  y="85"
                  width="100"
                  height="6"
                  rx="3"
                  fill="#cbd5e1"
                />
                {/* Status button */}
                <rect
                  x="450"
                  y="105"
                  width="70"
                  height="20"
                  rx="10"
                  fill="url(#serv-orange-grad)"
                />
                <rect
                  x="465"
                  y="112"
                  width="40"
                  height="6"
                  rx="3"
                  fill="white"
                />

                {/* Connecting flow lines */}
                <path
                  className="service-flow-line service-flow-line-orange"
                  d="M220 95 C 240 95, 245 65, 265 65"
                  stroke="#F5A623"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  className="service-flow-line service-flow-line-blue"
                  d="M420 95 C 400 95, 395 125, 375 125"
                  stroke="#0C2D89"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
            <div className="service-content">
              <div className="service-card-head">
                <div className="num">01</div>
                <div>
                  <h3>Implementation Services</h3>
                </div>
              </div>
              <p>
                End-to-end onboarding across integration, migration, and go-live
                support, ensuring every rollout is seamless, scalable, and
                future-ready.
              </p>
            </div>
          </div>

          <div className="service-card service-card-managed">
            <div className="service-card-glow" />
            <div className="service-visual">
              <svg className="service-img" viewBox="0 0 640 200" fill="none">
                <rect
                  width="640"
                  height="200"
                  rx="12"
                  fill="url(#serv-inner-grad)"
                />
                <rect
                  x="40"
                  y="30"
                  width="560"
                  height="140"
                  rx="12"
                  fill="white"
                  stroke="#e2e8f0"
                  strokeWidth="1.5"
                />
                {/* Dashboard Header */}
                <rect
                  x="60"
                  y="48"
                  width="100"
                  height="8"
                  rx="4"
                  fill="#0C2D89"
                />
                <circle
                  className="service-status-dot"
                  cx="530"
                  cy="52"
                  r="6"
                  fill="#10b981"
                />{" "}
                {/* Glowing status dot */}
                <circle
                  className="service-status-pulse"
                  cx="530"
                  cy="52"
                  r="10"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeOpacity="0.4"
                />
                <rect
                  x="550"
                  y="48"
                  width="30"
                  height="8"
                  rx="4"
                  fill="#cbd5e1"
                />
                {/* Left Panel: Metrics line graph */}
                <rect
                  x="60"
                  y="75"
                  width="280"
                  height="80"
                  rx="8"
                  fill="#f8fafc"
                  stroke="#f1f5f9"
                />
                <path
                  className="service-chart-line"
                  d="M70 140 L110 110 L150 120 L190 95 L230 105 L270 85 L310 90"
                  stroke="url(#serv-blue-grad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M70 140 L110 110 L150 120 L190 95 L230 105 L270 85 L310 90 L310 150 L70 150 Z"
                  fill="url(#serv-blue-grad)"
                  fillOpacity="0.05"
                />
                <circle
                  cx="270"
                  cy="85"
                  r="4"
                  fill="#F5A623"
                  stroke="white"
                  strokeWidth="1"
                />
                {/* Right Panel: Operations KPIs */}
                <rect
                  x="360"
                  y="75"
                  width="220"
                  height="80"
                  rx="8"
                  fill="#f8fafc"
                  stroke="#f1f5f9"
                />
                <circle
                  cx="410"
                  cy="115"
                  r="24"
                  stroke="#e2e8f0"
                  strokeWidth="5"
                />
                <circle
                  className="service-kpi-ring"
                  cx="410"
                  cy="115"
                  r="24"
                  stroke="url(#serv-orange-grad)"
                  strokeWidth="5"
                  strokeDasharray="100 150"
                />
                <rect
                  x="455"
                  y="95"
                  width="90"
                  height="8"
                  rx="4"
                  fill="#0C2D89"
                  fillOpacity="0.8"
                />
                <rect
                  x="455"
                  y="110"
                  width="100"
                  height="6"
                  rx="3"
                  fill="#cbd5e1"
                />
                <rect
                  x="455"
                  y="122"
                  width="60"
                  height="6"
                  rx="3"
                  fill="#cbd5e1"
                />
              </svg>
            </div>
            <div className="service-content">
              <div className="service-card-head">
                <div className="num">02</div>
                <div>
                  <h3>Managed Services</h3>
                </div>
              </div>
              <p>
                Dedicated operational support for monitoring, reporting,
                compliance, and continuous optimization across every deployed
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
