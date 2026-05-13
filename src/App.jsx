import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Factory,
  Handshake,
  HardHat,
  Landmark,
  Mail,
  Menu,
  Phone,
  PlugZap,
  Sprout,
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

const companies = [
  {
    name: "Uhuru Trading 2004",
    text: "Integrated property maintenance, facilities management and construction services across insurance, corporate and retail environments.",
  },
  {
    name: "Uhuru Academy",
    text: "Artisan development and enterprise readiness platform for skills development, operational excellence and economic participation.",
  },
  {
    name: "Top Building Investment",
    text: "Property investment and development through acquisition, redevelopment and value creation across selected sectors.",
  },
  {
    name: "Uhuru Consortium",
    text: "Special-purpose partnership platform for joint ventures, strategic collaborations and infrastructure project delivery.",
  },
];

const services = [
  {
    icon: Building2,
    title: "Facilities Management",
    text: "Integrated FM solutions supporting operational continuity and long-term asset maintenance across commercial and retail environments.",
  },
  {
    icon: HardHat,
    title: "Construction Services",
    text: "Renovations, refurbishments, general building works and project execution across residential, commercial and institutional environments.",
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    text: "Planned, preventative and reactive maintenance that preserves infrastructure quality and reduces operational downtime.",
  },
  {
    icon: PlugZap,
    title: "Electrical & Plumbing",
    text: "Electrical, plumbing and technical services aligned with quality, safety and compliance standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    text: "Structured planning, coordination and execution with quality oversight and stakeholder engagement throughout.",
  },
  {
    icon: Landmark,
    title: "Property Investment",
    text: "Strategic property acquisition, redevelopment and value creation across selected South African property sectors.",
  },
  {
    icon: Sprout,
    title: "Enterprise Development",
    text: "Artisan development, enterprise readiness and economic participation through practical skills and operational exposure.",
  },
  {
    icon: Handshake,
    title: "Joint Venture Solutions",
    text: "Structured partnership and project collaboration for infrastructure, construction and strategic development opportunities.",
  },
];

const impactPoints = [
  "Transformation-aligned operations",
  "Skills development and artisan enablement",
  "Community participation and local procurement",
  "Operational excellence as a delivery standard",
  "Responsible and ethical business conduct",
];

const metrics = [
  ["10+", "Years Operational Experience"],
  ["Level 1", "B-BBEE Contributor"],
  ["100+", "Deployable Workforce Capacity"],
  ["Multi-Disc.", "Service Capability Across Trades"],
  ["Corporate & Retail", "Client Exposure"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="Uhuru Group home" onClick={closeMenu}>
          <img src={logoUrl} alt="Uhuru Group logo" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            Contact Us
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Contact Us
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero section-pad" id="hero">
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="section-kicker">South African Infrastructure Group</p>
              <h1>
                Building Infrastructure.{" "}
                Enabling Enterprise.{" "}
                Creating Sustainable Opportunity.
              </h1>
              <p className="hero-text">
                Uhuru Group is a diversified South African infrastructure,
                property and enterprise development group delivering integrated
                construction, facilities management, property investment and
                artisan enablement solutions.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#services">
                  Our Services <ArrowRight size={18} />
                </a>
                <a className="button secondary" href="#contact">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="hero-panel" aria-label="Uhuru Group capability summary">
              <div className="mark-card">
                <img src={logoUrl} alt="" aria-hidden="true" />
              </div>
              <div className="capability-grid">
                <span>Construction</span>
                <span>Facilities</span>
                <span>Property</span>
                <span>Enterprise</span>
              </div>
              <div className="signal-strip">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-grid">
            <div>
              <p className="section-kicker">About Uhuru Group</p>
              <h2>Integrated Infrastructure & Enterprise Solutions</h2>
              <p>
                Uhuru Group is a South African holding company operating across property
                maintenance, construction, facilities management, property investment and enterprise
                development.
              </p>
              <p>
                Through its group companies, Uhuru delivers practical, scalable and operationally
                driven solutions to corporate, commercial, public sector and retail clients across
                South Africa.
              </p>
            </div>

            <div className="company-grid">
              {companies.map((company) => (
                <article className="company-card" key={company.name}>
                  <ChevronRight size={18} aria-hidden="true" />
                  <h3>{company.name}</h3>
                  <p>{company.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <p className="section-kicker">Services</p>
            <h2>What We Do</h2>
            <p>
              Practical, accountable delivery across the infrastructure, property and enterprise
              value chain.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="icon-box">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="impact section-pad" id="impact">
          <div className="section-grid impact-grid">
            <div>
              <p className="section-kicker">ESG & Impact</p>
              <h2>Building Sustainable Impact</h2>
              <p>
                Uhuru Group believes infrastructure development and economic participation should
                move together. Operations are grounded in transformation, skills development and
                responsible business practice.
              </p>
              <p>
                Through Uhuru Academy and enterprise enablement initiatives, the group supports the
                development of commercially ready artisan enterprises capable of participating
                meaningfully in the South African economy.
              </p>
            </div>

            <div className="impact-panel">
              {impactPoints.map((point) => (
                <div className="impact-point" key={point}>
                  <BadgeCheck size={20} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="academy-callout">
            <div className="icon-box">
              <UsersRound size={24} />
            </div>
            <div>
              <h3>Uhuru Academy</h3>
              <p>
                A dedicated artisan development and enterprise readiness platform, building
                commercially capable enterprises from the ground up.
              </p>
            </div>
          </div>
        </section>

        <section className="metrics section-pad" id="metrics">
          <div className="metrics-inner">
            <p className="section-kicker">Metrics</p>
            <h2>Capability With Operational Depth</h2>
            <div className="metric-row">
              {metrics.map(([figure, label]) => (
                <article className="metric-card" key={label}>
                  <strong>{figure}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h2>Let's Build Something Together</h2>
            <p>
              For business inquiries, partnerships, procurement opportunities or project discussions,
              contact the Uhuru Group team.
            </p>
          </div>

          <div className="contact-grid">
            <aside className="contact-panel">
              <h3>Group Contact Details</h3>
              <a href="tel:+27814616953">
                <Phone size={19} /> 081 461 6953
              </a>
              <a href="mailto:info@uhurugroup.co.za">
                <Mail size={19} /> info@uhurugroup.co.za
              </a>
              <p>
                <Factory size={19} /> 45 Tambotie Avenue, Pretoria, South Africa, 0184
              </p>
              <div className="contact-note">
                <CircleDollarSign size={22} />
                <p>
                  Partnership, procurement and project opportunities are routed through the group
                  office for review.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src={logoUrl} alt="Uhuru Group logo" />
        <p>Building Infrastructure. Enabling Enterprise. Creating Sustainable Opportunity.</p>
        <small>© 2026 Uhuru Group. All rights reserved.</small>
      </footer>
    </>
  );
}

export default App;
