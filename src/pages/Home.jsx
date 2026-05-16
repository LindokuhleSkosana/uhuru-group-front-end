import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { companyTabs, metrics } from "../data";
import logoUrl from "../../Logo.jpeg";

export default function Home() {
  const [activeCompanyTab, setActiveCompanyTab] = useState("about");
  const activeTab = companyTabs.find((t) => t.id === activeCompanyTab) ?? companyTabs[0];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="hero-inner">
          <div className="hero-logo-card">
            <img src={logoUrl} alt="Uhuru Group Holdings" />
          </div>
          <div className="hero-text-block">
            <h1>We have infrastructure to help businesses and communities grow sustainably.</h1>
            <div className="hero-divider" />
            <p className="hero-sub">
              Through partnerships with investors, private and public partnerships, startups,
              and communities to deliver sustainable and scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ── SUBSIDIARIES BAR ─────────────────────────────────── */}
      <div className="subs-bar" role="tablist" aria-label="Group companies">
        {companyTabs.map(({ id, icon: Icon, name, suffix }) => (
          <button
            className={`sub-tab${id === activeCompanyTab ? " is-active" : ""}`}
            id={`${id}-tab`}
            type="button"
            role="tab"
            aria-selected={id === activeCompanyTab}
            aria-controls="company-tab-panel"
            key={id}
            onClick={() => setActiveCompanyTab(id)}
          >
            <Icon size={id === "about" ? 32 : 30} strokeWidth={1.5} />
            <span className="sub-name">{name}</span>
            {suffix && <span className="sub-suffix">{suffix}</span>}
          </button>
        ))}
      </div>

      {/* ── ABOUT / COMPANY TAB PANEL ────────────────────────── */}
      <section className="about section-pad" id="about">
        <div
          className="about-grid"
          id="company-tab-panel"
          role="tabpanel"
          aria-labelledby={`${activeTab.id}-tab`}
          tabIndex="0"
        >
          <div className="about-col">
            <h2 className="about-title">{activeTab.title}</h2>
            <div className="section-accent-line" />
            {activeTab.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a className="btn-outline" href="/contact">
              {activeTab.cta} <ArrowRight size={14} />
            </a>
          </div>

          <div className="mvv-col">
            {activeTab.details.map(({ icon: Icon, title, text }, i) => (
              <div
                className={`mvv-item${i < activeTab.details.length - 1 ? " mvv-divider" : ""}`}
                key={title}
              >
                <div className="mvv-icon-wrap">
                  <Icon size={20} />
                </div>
                <div className="mvv-body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS ──────────────────────────────────────────── */}
      <section className="metrics section-pad" id="metrics">
        <div className="metrics-row">
          {metrics.map(({ icon: Icon, figure, label, sublabel }, i) => (
            <div
              className={`metric-cell${i < metrics.length - 1 ? " metric-border" : ""}`}
              key={label}
            >
              <div className="metric-icon-ring"><Icon size={26} /></div>
              {figure && <strong className="metric-figure">{figure}</strong>}
              <span className="metric-label">{label}</span>
              <span className="metric-sublabel">{sublabel}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section className="cta-band">
        <div className="cta-inner">
          <div className="cta-copy">
            <h2 className="cta-heading">PARTNERING FOR A BETTER FUTURE</h2>
            <p className="cta-sub">
              Let's build sustainable solutions together. We look forward to partnering with you.
            </p>
          </div>
          <a className="btn-schedule" href="/contact">
            SCHEDULE AN APPOINTMENT WITH US <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
