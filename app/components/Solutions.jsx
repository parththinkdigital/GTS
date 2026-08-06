"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart3,
  BellRing,
  Bot,
  BrainCircuit,
  Database,
  FileCheck,
  Languages,
  Layers,
  Magnet,
  MessageCircle,
  MessageSquare,
  Phone,
  PlaySquare,
  Scale,
  Send,
  ShieldCheck,
  Smartphone,
  Split,
  Target,
  TrendingUp,
  UserCheck,
  Workflow,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SOLUTIONS = [
  {
    num: "01",
    title: "Intelligent Customer Engagement Platform as-a-Service",
    accent: "solutions-col-acquisition",
    description:
      "A cloud-agnostic and on-premise ready campaign intelligence platform with an integrated communication layer, built in line with banking and financial industry regulations.",
    features: [
      { icon: Database, label: "Data contracts with native sources" },
      { icon: BrainCircuit, label: "AI-powered segmentation engine" },
      { icon: PlaySquare, label: "Multi-media content Intelligence" },
      { icon: Send, label: "Omnichannel delivery" },
      { icon: Workflow, label: "CPaaS journey builder" },
      { icon: Smartphone, label: "Web & app personalisation" },
      { icon: BarChart3, label: "Unified reporting & MIS" },
    ],
  },
  {
    num: "02",
    title: "End-to-End Lending Stack",
    accent: "solutions-col-credit",
    description:
      "A unified lending ecosystem managing the complete customer journey - from engagement and digital onboarding to credit origination, servicing & monitoring",
    features: [
      { icon: Magnet, label: "Qualified Lead generation" },
      { icon: UserCheck, label: "Customer conversion" },
      { icon: FileCheck, label: "Digital onboarding & LOS" },
      { icon: Layers, label: "LMS \u2013 Digitised lending lifecycle" },
      { icon: ShieldCheck, label: "Servicing & Credit monitoring" },
    ],
  },
  {
    num: "03",
    title: "Collection-as-a-Service",
    accent: "solutions-col-operations",
    description:
      "A comprehensive collections solution that supports the entire recovery lifecycle - from payment reminders and delinquency management to legal recovery and case closure.",
    features: [
      { icon: Split, label: "Segmented collection strategy" },
      { icon: BellRing, label: "Automated reminder sequences" },
      { icon: MessageSquare, label: "Omni-channel outreach" },
      { icon: Languages, label: "Multi-lingual support" },
      { icon: Bot, label: "Conversational AI & chatbot" },
      { icon: TrendingUp, label: "Recovery analytics" },
      { icon: Scale, label: "Compliance-first architecture" },
    ],
  },
];

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
          <h2
            className="section-title"
            style={{
              background:
                "linear-gradient(135deg, #7A9FE8, #0C2D89, #0a1a4a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Purpose-Built Solutions for
            <br />
            Modern Financial Institutions
          </h2>
          <p className="section-desc">
            Integrated solutions that help banks and NBFCs streamline customer
            engagement, lending, collections, and legal recovery.
          </p>
        </div>

        <div className="solutions-grid">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.num}
              className={`solutions-col ${solution.accent}`}
            >
              <div className="solutions-col-header">
                <span><div className="cat-num">{solution.num}</div>
                  <h4>{solution.title}</h4>
                </span>
                <p className="solution-desc">{solution.description}</p>
              </div>



              {solution.features.map((feature) => (
                <div className="solution-item glass-hover" key={feature.label}>
                  <div className="solution-item-header">
                    <div className="solution-icon">
                      <feature.icon size={18}/>
                    </div>
                    <h4>{feature.label}</h4>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
