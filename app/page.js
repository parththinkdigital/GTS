"use client";

import { useEffect, useState } from "react";
import "./v2.css";

// Import custom page components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuoteReveal from "./components/QuoteReveal";
import Products from "./components/Products";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Impact from "./components/Impact";
import Footer from "./components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Intersection observer for spying the current section
    const sectionIds = ["hero", "products", "services", "solutions", "impact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.4, 0.6, 0.8] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="v2-body-wrap">
      <Navbar activeSection={activeSection} />
      <Hero />
      <QuoteReveal />
      <Products />
      <Services />
      <Solutions />
      <Impact />
      <Footer />
    </div>
  );
}
