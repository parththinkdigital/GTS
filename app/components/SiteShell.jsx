"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../v2.css";

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const [activeSection, setActiveSection] = useState(() => (pathname === "/" ? "hero" : null));

  useEffect(() => {
    if (pathname !== "/" || typeof window === "undefined") {
      setActiveSection(null);
      return;
    }

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
  }, [pathname]);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="v2-body-wrap">
      <Navbar activeSection={activeSection} />
      {children}
      <Footer />
    </div>
  );
}
