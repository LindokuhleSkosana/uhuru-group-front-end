import { useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CircleDollarSign,
  ClipboardCheck,
  Eye,
  Factory,
  Globe,
  GraduationCap,
  HardHat,
  Handshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  PlugZap,
  Settings,
  ShieldCheck,
  Sprout,
  Target,
  UsersRound,
  Wrench,
  X,
} from "lucide-react";
import logoUrl from "../Logo.jpeg";

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["ESG & Impact", "#impact"],
  ["Metrics", "#metrics"],
  ["Contact", "#contact"],
];

const subsidiaries = [
  { icon: HardHat, name: "UHURU TRADING 2004", suffix: "(PTY) LTD" },
  { icon: Factory, name: "TOP BUILDING", suffix: "(PTY) LTD" },
  { icon: Building2, name: "TOP BUILDING INVESTMENTS", suffix: "(PTY) LTD" },
  { icon: Handshake, name: "UHURU CONSORTIUM", suffix: "(PTY) LTD" },
  { icon: GraduationCap, name: "UHURU ACADEMY", suffix: "NPC" },
];

const mvv = [
  {
    icon: Target,
    title: "OUR MISSION",
    text: "To provide sustainable, reliable and cost-effective solutions that create lasting value for our clients, partners and communities.",
  },
  {
    icon: Eye,
    title: "OUR VISION",
    text: "To be a leading African infrastructure and enterprise development group recognised for operational excellence, transformation and sustainable growth.",
  },
  {
    icon: UsersRound,
    title: "OUR VALUES",
    text: "Integrity. Excellence. Collaboration. Innovation. Sustainability.",
  },
];

const services = [
  { icon: Building2, title: "Facilities Management", text: "Integrated FM solutions that support operational continuity across corporate and retail environments." },
  { icon: HardHat, title: "Construction Services", text: "Renovations, refurbishments and general building works for commercial and institutional clients." },
  { icon: Wrench, title: "Property Maintenance", text: "Planned, preventative and reactive maintenance that protects assets and reduces downtime." },
  { icon: PlugZap, title: "Electrical & Plumbing", text: "Technical trades delivered with quality, compliance and safety as the operating standard." },
  { icon: ClipboardCheck, title: "Project Management", text: "Structured project planning, coordination, quality oversight and stakeholder communication." },
  { icon: Landmark, title: "Property Investment", text: "Strategic property acquisition, redevelopment and selected sector investment opportunities." },
  { icon: Sprout, title: "Enterprise Development", text: "Artisan development and enterprise readiness that expands economic participation." },
  { icon: Handshake, title: "Joint Venture Solutions", text: "Partnership-led delivery for infrastructure, construction and strategic development projects." },
];

const impactPoints = [
  "Transformation-aligned operations",
  "Skills development and artisan enablement",
  "Community participation and local procurement",
  "Operational excellence as a delivery standard",
  "Responsible and ethical business conduct",
];

const metrics = [
  { icon: Award, figure: "10+", label: "YEARS", sublabel: "Operational Experience" },
  { icon: UsersRound, figure: "100+", label: "DEPLOYABLE", sublabel: "WORKFORCE CAPACITY" },
  { icon: Award, figure: "LEVEL 1", label: "B-BBEE", sublabel: "CONTRIBUTOR" },
  { icon: Settings, figure: null, label: "MULTI-DISCIPLINARY", sublabel: "SERVICE CAPABILITY" },
  { icon: Building2, figure: null, label: "CORPORATE & RETAIL", sublabel: "CLIENT EXPOSURE" },
];

const contactDetails = [
  { icon: Phone, label: "+27 86 111 8139", href: "tel:+27861118139" },
  { icon: Mail, label: "info@uhuruafrica.co.za", href: "mailto:info@uhuruafrica.co.za" },
  { icon: MapPin, label: "Midrand, Gauteng, South Africa", href: "https://maps.google.com/?q=Midrand%2C+Gauteng%2C+South+Africa" },
  { icon: Globe, label: "www.uhuruafrica.co.za", href: "https://www.uhuruafrica.co.za" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNotice, setFormNotice] = useState("");

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = () =>
    setFormNotice("Your email app will open with the enquiry details ready to send.");

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="Uhuru Group home" onClick={closeMenu}>
          <img src={logoUrl} alt="Uhuru Group logo" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact">Contact Us</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact Us</a>
          </nav>
        )}
      </header>

      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="hero" id="hero">
          <div className="hero-inner">
            <div className="hero-logo-card">
              <img src={logoUrl} alt="Uhuru Africa Holdings" />
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
        <nav className="subs-bar" aria-label="Group companies">
          <div className="sub-about-cell">
            <UsersRound size={32} strokeWidth={1.5} />
            <span>ABOUT US</span>
          </div>
          {subsidiaries.map(({ icon: Icon, name, suffix }) => (
            <div className="sub-cell" key={name}>
              <Icon size={30} strokeWidth={1.5} />
              <span className="sub-name">{name}</span>
              <span className="sub-suffix">{suffix}</span>
            </div>
          ))}
        </nav>

        {/* ── ABOUT ────────────────────────────────────────────── */}
        <section className="about section-pad" id="about">
          <div className="about-grid">
            <div className="about-col">
              <h2 className="about-title">ABOUT US</h2>
              <div className="section-accent-line" />
              <p>
                Uhuru Africa is a South African holding company operating across infrastructure,
                property, enterprise development and strategic partnerships.
              </p>
              <p>
                Our purpose is to connect capability, opportunity and investment to deliver
                sustainable solutions that drive economic participation and long-term value creation.
              </p>
              <a className="btn-outline" href="#contact">
                READ MORE <ArrowRight size={14} />
              </a>
            </div>

            <div className="mvv-col">
              {mvv.map(({ icon: Icon, title, text }, i) => (
                <div
                  className={`mvv-item${i < mvv.length - 1 ? " mvv-divider" : ""}`}
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

        {/* ── SERVICES ─────────────────────────────────────────── */}
        <section className="services section-pad" id="services">
          <div className="section-heading">
            <p className="section-kicker">Services</p>
            <h2>What We Do</h2>
            <p>Practical, accountable delivery across the infrastructure, property and enterprise value chain.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="card-icon-box"><Icon size={23} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── ESG & IMPACT ─────────────────────────────────────── */}
        <section className="impact section-pad" id="impact">
          <div className="impact-grid">
            <div className="about-col">
              <p className="section-kicker">ESG & Impact</p>
              <h2>Building Sustainable Impact</h2>
              <p>
                Uhuru Group believes infrastructure development and economic participation should
                move together. Operations are grounded in transformation, skills development,
                responsible procurement and ethical business conduct.
              </p>
              <p>
                Through Uhuru Academy and enterprise enablement initiatives, the group supports
                commercially ready artisan enterprises that can participate meaningfully in the
                South African economy.
              </p>
            </div>

            <div className="impact-points-col">
              {impactPoints.map((point) => (
                <div className="impact-point" key={point}>
                  <BadgeCheck size={18} />
                  <span>{point}</span>
                </div>
              ))}
              <div className="academy-box">
                <GraduationCap size={24} />
                <div>
                  <h3>Uhuru Academy</h3>
                  <p>
                    A dedicated artisan development and enterprise readiness platform focused on
                    skills, operational excellence and sustainable enterprise participation.
                  </p>
                </div>
              </div>
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
            <a className="btn-schedule" href="#contact">
              SCHEDULE AN APPOINTMENT WITH US <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section className="contact section-pad" id="contact">
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h2>Start A Conversation</h2>
            <p>
              For business inquiries, partnerships, procurement opportunities or project
              discussions, contact the Uhuru Group team.
            </p>
          </div>

          <div className="contact-grid">
            <form
              className="enquiry-form"
              action="mailto:info@uhuruafrica.co.za"
              method="post"
              encType="text/plain"
              onSubmit={handleSubmit}
            >
              <label>Name<input name="Name" type="text" autoComplete="name" required /></label>
              <label>Company<input name="Company" type="text" autoComplete="organization" /></label>
              <label>Email<input name="Email" type="email" autoComplete="email" required /></label>
              <label>Phone<input name="Phone" type="tel" autoComplete="tel" /></label>
              <label className="span-2">
                Enquiry Type
                <select name="Enquiry Type" defaultValue="Partnerships">
                  <option>Partnerships</option>
                  <option>Procurement</option>
                  <option>Project Discussion</option>
                  <option>Enterprise Development</option>
                  <option>General Enquiry</option>
                </select>
              </label>
              <label className="span-2">
                Message
                <textarea name="Message" rows="6" required />
              </label>
              <button className="form-submit span-2" type="submit">
                Submit Enquiry <ArrowRight size={18} />
              </button>
              {formNotice && <p className="form-notice span-2">{formNotice}</p>}
            </form>

            <aside className="contact-panel">
              <div className="contact-panel-header">
                <ShieldCheck size={28} />
                <h3>Group Contact Details</h3>
              </div>
              {contactDetails.map(({ icon: Icon, label, href }) => (
                <a href={href} key={label}>
                  <Icon size={17} /><span>{label}</span>
                </a>
              ))}
              <div className="contact-note">
                <CircleDollarSign size={22} />
                <p>
                  Partnership, procurement and project opportunities are routed through the group
                  office for review.
                </p>
              </div>
            </aside>
          </div>

          <div className="map-frame">
            <iframe
              title="Uhuru Group location in Midrand, Gauteng"
              src="https://www.google.com/maps?q=Midrand%2C+Gauteng%2C+South+Africa&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="footer-bar">
          {contactDetails.map(({ icon: Icon, label, href }) => (
            <a href={href} key={label} className="footer-item">
              <Icon size={15} />
              <span>{label}</span>
            </a>
          ))}
        </div>
        <p className="footer-copy">Copyright 2026 Uhuru Group. All rights reserved.</p>
      </footer>

    </>
  );
}

export default App;
