import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { contactDetails } from "../data";

const navItems = [
  ["About", "/"],
  ["Services", "/services"],
  ["ESG & Impact", "/esg-impact"],
  ["Metrics", "/#metrics"],
  ["Contact", "/contact"],
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
          <a className="nav-cta" href="/contact">Contact Us</a>
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
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href="/contact" onClick={closeMenu}>Contact Us</a>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

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
