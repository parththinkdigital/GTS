"use client";

import ColorBends from "./ColorBends";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-container">
        <ColorBends
          colors={["#0C2D89", "#F5A623"]}
          rotation={0}
          speed={0.13}
          scale={0.9}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
          autoRotate={2}
        />
      </div>
      <div className="hero-grid">
        <h1>
          Powering Smarter
          <br />
          <span className="accent">Financial Journeys</span>
        </h1>
        <p>
          Transforming financial services through intelligent customer engagement,
          digital lending, and automated lifecycle management.
        </p>
        <div className="hero-actions">
          <span className="btn btn-primary">
            Schedule a Demo <span className="arrow">→</span>
          </span>
        </div>
      </div>
    </section>
  );
}
