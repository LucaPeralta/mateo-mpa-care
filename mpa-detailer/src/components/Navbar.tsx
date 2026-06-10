import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { label: "Inicio",    href: "#hero" },
  { label: "Nosotros",  href: "#about" },
  { label: "Galería",   href: "#gallery" },
  { label: "Servicios", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contacto",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <a href="#hero" className="navbar-brand">
        <img src="/logo.png" alt="MPA Detailer" className="navbar-logo" />
      </a>

      <ul className={`navbar-links${menuOpen ? " navbar-links--open" : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`navbar-burger${menuOpen ? " navbar-burger--open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
