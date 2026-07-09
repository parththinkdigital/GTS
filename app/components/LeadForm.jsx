"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Zap,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  ShieldCheck,
  UserRound,
  Users
} from "lucide-react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const nameInputRef = useRef(null);
  const cardRef = useRef(null);

  const onCardMove = (e) => {
    const el = cardRef.current;
    if (!el || submitted) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    const shadowX = x * -12;
    const shadowY = y * -12;
    el.style.setProperty('--shadow-x', `${shadowX}px`);
    el.style.setProperty('--shadow-y', `${shadowY}px`);
  };

  const onCardLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--shadow-x', `0px`);
    el.style.setProperty('--shadow-y', `0px`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    setLoading(true);

    const form = event.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setFormError(json.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setFormError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const focusForm = () => {
    nameInputRef.current?.focus();
  };

  return (
    <section className="section lead-section" id="contact">
      <div className="lead-orb lead-orb-blue" />
      <div className="lead-orb lead-orb-orange" />

      <div className="container">
        <div className="lead-container">
          <div className="lead-copy">
            <div className="section-eyebrow">
              <span className="e-dot"></span> Talk to GTS Finlabs
            </div>
            <h2 className="section-title" style={{ background: 'linear-gradient(135deg, #7A9FE8, #0C2D89, #0a1a4a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Ready to modernize your financial stack?
            </h2>
            <p>
              Share a few details and our team will map the right product, implementation,
              and managed-service path for your business.
            </p>

            <div className="lead-proof-grid" aria-label="What happens next">
              <div className="lead-proof-chip">
                <ShieldCheck size={15} />
                Secure discovery
              </div>
              <div className="lead-proof-chip">
                <Zap size={15} />
                Fast follow-up
              </div>
              <div className="lead-proof-chip">
                <Users size={15} />
                Expert-led review
              </div>
            </div>
          </div>

          <div ref={cardRef} className={`lead-form-card${submitted ? " is-submitted" : ""}`} onMouseMove={onCardMove} onMouseLeave={onCardLeave}>
            <div className="lead-form-glow" />
            <form className="lead-form-fields" onSubmit={handleSubmit}>
              <div className="lead-form-head">
                <span>Request consultation</span>
                <strong>Tell us where to start</strong>
              </div>
              <div className="lead-form-row">
                <label className="lead-field">
                  Name
                  <span className="lead-field-control">
                    <UserRound size={15} aria-hidden="true" />
                    <input ref={nameInputRef} name="name" type="text" placeholder="Your name" required />
                  </span>
                </label>
                <label className="lead-field">
                  Work email
                  <span className="lead-field-control">
                    <Mail size={15} aria-hidden="true" />
                    <input name="email" type="email" placeholder="you@company.com" required />
                  </span>
                </label>
              </div>

              <div className="lead-form-row">
                <label className="lead-field">
                  Company
                  <span className="lead-field-control">
                    <Building2 size={15} aria-hidden="true" />
                    <input name="company" type="text" placeholder="Company name" required />
                  </span>
                </label>
                <label className="lead-field">
                  Phone
                  <span className="lead-field-control">
                    <Phone size={15} aria-hidden="true" />
                    <input name="phone" type="tel" placeholder="Contact number" />
                  </span>
                </label>
              </div>

              <label className="lead-field">
                What can we help with?
                <span className="lead-field-control lead-field-control-textarea">
                  <span className="icon-wrap"><MessageSquareText size={15} aria-hidden="true" /></span>
                  <textarea name="message" rows="4" placeholder="Tell us about your use case" required />
                </span>
              </label>

              {formError && (
                <p role="alert" style={{
                  color: "#dc2626",
                  fontSize: "0.82rem",
                  marginTop: "-4px",
                  marginBottom: "4px",
                  padding: "8px 12px",
                  background: "rgba(220,38,38,0.07)",
                  borderRadius: "8px",
                  border: "1px solid rgba(220,38,38,0.18)",
                }}>
                  {formError}
                </p>
              )}

              <button className="lead-submit" type="submit" disabled={loading} aria-busy={loading}>
                {loading ? "Sending…" : "Submit request"}
                {!loading &&
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
                    <path d="M4 4 C10 6.5, 16 9.5, 21 11.5 C21.5 11.7, 21.5 12.3, 21 12.5 C16 14.5, 10 17.5, 4 20 C5.5 17, 6.5 14.5, 6.5 12 C6.5 9.5, 5.5 7, 4 4 Z"/>
                  </svg>
                }
              </button>
            </form>

            <div className="lead-success" aria-live="polite">
              <div className="lead-success-mark"><CheckCircle2 size={22} /></div>
              <h3>Thank you.</h3>
              <p>Our team shortly will connect with you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
