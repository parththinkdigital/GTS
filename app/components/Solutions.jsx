"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BrainCircuit,
  Briefcase,
  Coins,
  Layers,
  LayoutTemplate,
  Magnet,
  MessagesSquare,
  Milestone,
  UserCheck,
  Workflow,
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
            duration: 0.45,
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
              duration: 0.625,
              stagger: 0.07,
              ease: "power3.out",
            },
            0.08,
          )
          .fromTo(
            icons,
            { scale: 0.78, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.29,
              stagger: 0.0175,
              ease: "back.out(1.5)",
            },
            0.28,
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
          <div className="section-eyebrow">
            <span className="e-dot"></span> Our Solutions
          </div>
          <h2 className="section-title">
            End-to-End Solutions for
            <br />
            Every Stage of Credit
          </h2>
        </div>

        <div className="solutions-grid">
          <div className="solutions-col solutions-col-acquisition">
            <div className="solutions-col-header">
              <div className="cat-num">01</div>
              <h4>Acquisition &amp; Engagement</h4>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <Milestone size={18} strokeWidth={1.7} />
                </div>
                <h4>Seamless Customer Journey</h4>
              </div>
              <p>
                A unified credit ecosystem connecting acquisition, onboarding,
                lending, monitoring, and collections.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <Magnet size={18} strokeWidth={1.7} />
                </div>
                <h4>Customer Acquisition</h4>
              </div>
              <p>
                AI-driven customer intelligence and personalized engagement that
                turn prospects into long-term relationships.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <UserCheck size={18} strokeWidth={1.7} />
                </div>
                <h4>Digital Onboarding and LOS</h4>
              </div>
              <p>
                A paperless onboarding and origination experience powered by
                digital identity verification and real-time decisioning.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <Workflow size={18} strokeWidth={1.7} />
                </div>
                <h4>Business Rule Engine</h4>
              </div>
              <p>
                No-code decisioning framework, transforming credit policies into
                automated and explainable outcomes.
              </p>
            </div>
          </div>

          <div className="solutions-col solutions-col-credit">
            <div className="solutions-col-header">
              <div className="cat-num">02</div>
              <h4>Credit &amp; Decisioning</h4>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <Layers size={18} strokeWidth={1.7} />
                </div>
                <h4>Alternative Credit Modelling</h4>
              </div>
              <p>
                Behavior-driven credit intelligence built on alternative data
                sources beyond traditional bureau scores.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <Briefcase size={18} strokeWidth={1.7} />
                </div>
                <h4>Comprehensive LMS</h4>
              </div>
              <p>
                End-to-end loan lifecycle management with automation, portfolio
                visibility, and proactive risk monitoring.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <Coins size={18} strokeWidth={1.7} />
                </div>
                <h4>Digital Debt Collection</h4>
              </div>
              <p>
                An intelligent collections framework combining predictive
                insights, omnichannel outreach, and compliance-first recovery.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <BrainCircuit size={18} strokeWidth={1.7} />
                </div>
                <h4>Intelligent Engagement</h4>
              </div>
              <p>
                Personalized customer engagement powered by AI, real-time
                insights, and omnichannel orchestration.
              </p>
            </div>
          </div>

          <div className="solutions-col solutions-col-operations">
            <div className="solutions-col-header">
              <div className="cat-num">03</div>
              <h4>Operations &amp; Communication</h4>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <LayoutTemplate size={18} strokeWidth={1.7} />
                </div>
                <h4>Digital Content Management</h4>
              </div>
              <p>
                Data-driven content experiences that combine personalization,
                interactivity, and measurable engagement.
              </p>
            </div>

            <div className="solution-item">
              <div className="solution-item-header">
                <div className="solution-icon">
                  <MessagesSquare size={18} strokeWidth={1.7} />
                </div>
                <h4>CPaaS</h4>
              </div>
              <p>
                A unified communication infrastructure connecting Voice,
                WhatsApp, RCS, SMS, and Email through a single platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
