"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  Coins,
  Layers,
  LayoutTemplate,
  Magnet,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Solutions() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const q = gsap.utils.selector(section);
      const header = q(".section-header");
      const columns = q(".solutions-col");
      const cards = q(".solution-item");
      const icons = q(".solution-icon");
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!cards.length) return;

      if (reduceMotion) {
        gsap.set([header, columns, cards, icons], {
          opacity: 1,
          x: 0,
          y: 0,
          rotateY: 0,
          scale: 1,
          filter: "blur(0px)",
        });
        return;
      }

      gsap.set(columns, {
        transformPerspective: 1200,
        transformOrigin: "center center",
      });
      gsap.set(cards, { willChange: "transform, opacity, filter" });
      gsap.set(icons, { willChange: "transform, opacity" });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          header,
          { autoAlpha: 0, y: -28, filter: "blur(8px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.0,
            ease: "power2.out",
          },
          0,
        )
          .fromTo(
            columns[0],
            {
              autoAlpha: 0,
              x: -360,
              y: 20,
              rotateY: -12,
              filter: "blur(16px)",
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              rotateY: 0,
              filter: "blur(0px)",
              duration: 1.5,
              ease: "power2.out",
            },
            0.14,
          )
          .fromTo(
            columns[1],
            { autoAlpha: 0, y: 300, scale: 0.92, filter: "blur(16px)" },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.5,
              ease: "power2.out",
            },
            0.25,
          )
          .fromTo(
            columns[2],
            { autoAlpha: 0, x: 360, y: 20, rotateY: 12, filter: "blur(16px)" },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              rotateY: 0,
              filter: "blur(0px)",
              duration: 1.5,
              ease: "power2.out",
            },
            0.36,
          )
          .fromTo(
            icons,
            { scale: 0.68, rotate: -10, opacity: 0 },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.525,
              stagger: 0.0275,
              ease: "back.out(1.45)",
            },
            0.81,
          );
      });

      mm.add("(max-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          header,
          { autoAlpha: 0, y: -18, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.2,
            ease: "power2.out",
          },
          0,
        )
          .fromTo(
            columns,
            { autoAlpha: 0, y: 92, filter: "blur(10px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.25,
              stagger: 0.02,
              ease: "power3.out",
            },
            0.03,
          )
          .fromTo(
            icons,
            { scale: 0.78, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.15,
              stagger: 0.005,
              ease: "back.out(1.5)",
            },
            0.1,
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      className="section solutions-section"
      id="solutions"
      ref={sectionRef}
    >
      <div className="solutions-orb solutions-orb-blue" />
      <div className="solutions-orb solutions-orb-orange" />

      <div className="container">
        <div className="section-header">
          {/* <div className="section-eyebrow">
            <span className="e-dot"></span> Our Solutions
          </div> */}
          <h2 className="section-title" style={{ background: 'linear-gradient(135deg, #7A9FE8, #0C2D89, #0a1a4a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Purpose-Built Solutions for  
            <br />
            Modern Financial Institutions
          </h2>
            <p className="section-intro" style={{ margin: "16px 0 clamp(24px, 3vw, 40px) 0", padding: 0, textAlign: "left", maxWidth: "680px" }}>
           Integrated solutions that help banks and NBFCs streamline customer engagement, lending, collections, and legal recovery.
          </p>
          
        </div>

        <div className="solutions-grid">
          <div className="solutions-col solutions-col-acquisition">
            <div className="solutions-col-header">
              <div className="cat-num">01</div>
              <h4>Intelligent Customer Engagement Platform as-a-Service</h4>
              <p>A cloud-agnostic and on-premise ready campaign intelligence platform with an integrated communication layer, 
                built in line with banking and financial industry regulations.</p>
            </div>

            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/SeamlessCustomerJourney.png" alt="Seamless Customer Journey" width="18" height="18" />
                </div>
                <h4>Data contracts with native sources </h4>
              </div>
              
            </div>

            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <Magnet size={18} />
                </div>
                <h4>AI-powered segmentation engine </h4>
              </div>
             
            </div>

            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/digitalonboarding.png" alt="Digital Onboarding" width="18" height="18" />
                </div>
                <h4>Multi-media content Intelligence </h4>
              </div>
              
            </div>

            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/businessruleengine.png" alt="Business Rule Engine" width="18" height="18" />
                </div>
                <h4>Omnichannel delivery</h4>
              </div>
              
            </div>
            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/businessruleengine.png" alt="Business Rule Engine" width="18" height="18" />
                </div>
                <h4>CPaaS journey builder </h4>
              </div>
              
            </div>
            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/businessruleengine.png" alt="Business Rule Engine" width="18" height="18" />
                </div>
                <h4>Web & app personalisation  </h4>
              </div>
              
            </div>
            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/businessruleengine.png" alt="Business Rule Engine" width="18" height="18" />
                </div>
                <h4>Unified reporting & MIS </h4>
              </div>
              
            </div>

          </div>

          <div className="solutions-col solutions-col-credit">
            <div className="solutions-col-header">
              <div className="cat-num">02</div>
              <h4>End-to-End Lending Stack </h4>
              <p>A unified lending ecosystem managing the complete customer journey - from 
                engagement and digital onboarding to credit origination, servicing & monitoring</p>
            </div>

 







  
            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <Layers size={18} />
                </div>
                <h4>Qualified Lead generation</h4>
              </div>
              
            </div>

            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <Briefcase size={18} />
                </div>
                <h4>Customer conversion </h4>
              </div>
              
            </div>

            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <Coins size={18} />
                </div>
                <h4>Digital onboarding & LOS </h4>
              </div>
              
            </div>

            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/intelligentenagement.png" alt="Intelligent Engagement" width="18" height="18" />
                </div>
                <h4>LMS – Digitised lending lifecycle </h4>
              </div>
              
            </div>
            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/intelligentenagement.png" alt="Intelligent Engagement" width="18" height="18" />
                </div>
                <h4>Servicing & Credit monitoring </h4>
              </div>
              
            </div>
          </div>

          <div className="solutions-col solutions-col-operations">
            <div className="solutions-col-header">
              <div className="cat-num">03</div>
              <h4>Collection-as-a-Service </h4>
              <p>A comprehensive collections solution that supports the entire recovery lifecycle - 
                from payment reminders and delinquency management to legal recovery and case closure.</p>
            </div>
 

 

 

 

  
            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <LayoutTemplate size={18} />
                </div>
                <h4>Segmented collection strategy</h4>
              </div>
              
            </div>

            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/cpaas.png" alt="CPaaS" width="18" height="18" />
                </div>
                <h4>Automated reminder sequences</h4>
              </div>
              
            </div>
             <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/cpaas.png" alt="CPaaS" width="18" height="18" />
                </div>
                <h4>Omni-channel outreach</h4>
              </div>
            </div>
            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/cpaas.png" alt="CPaaS" width="18" height="18" />
                </div>
                <h4>Multi-lingual support</h4>
              </div>
            </div>
            <div className="solution-item glass-hover">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <img src="/icons/cpaas.png" alt="CPaaS" width="18" height="18" />
                </div>
                <h4>Conversational AI & chatbot</h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
