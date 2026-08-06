"use client";

import Image from "next/image";
import CircularCardGallery from "./CircularCardGallery";
import ServicesSection from "./ServicesSection";

export default function Products() {
  return (
    <section
      className="section products-section bg-[#e9e9e7] flex flex-col items-center justify-center w-full"
      id="products"
      style={{
        backgroundColor: "#e9e9e7",
        boxSizing: "border-box",
        position: "relative",
        paddingTop: "4rem",
        paddingBottom: "5rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* SVGs removed */}

      {/* Floating Glow Orbs for Visual Depth */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(12, 45, 137, 0.08) 0%, rgba(12, 45, 137, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 166, 35, 0.06) 0%, rgba(245, 166, 35, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header">
          {/* <div className="section-eyebrow">
            <span className="e-dot"></span> Our Products
          </div> */}
          <h2 className="section-title" style={{ background: 'linear-gradient(135deg, #7A9FE8, #0C2D89, #0a1a4a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Integrated Platform Built for 
            <br />
            Managing BFSI Customer Lifecycle
          </h2>
          <p className="section-intro" style={{ margin: "16px 0 clamp(24px, 3vw, 40px) 0", padding: 0, textAlign: "left", maxWidth: "680px" }}>
            A digital suite of intelligent products designed to simplify journeys for engagement, collection, lending and legal recovery – reimaging the digital ecosystem.
          </p>
        </div>
      </div>

{/* Products cards removed */}
<ServicesSection />
      {/* Scroll Progress Bar */}
      <div className="products-progress-container">
        <div className="products-progress-bar"></div>
      </div>
    </section>
  );
}