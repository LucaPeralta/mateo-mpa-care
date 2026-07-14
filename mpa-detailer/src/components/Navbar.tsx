import { useState, useEffect } from "react";
import { whatsappLink } from "../config";
import "./Navbar.css";

const links = [
  { label: "Inicio",    href: "#hero" },
  { label: "Nosotros",  href: "#about" },
  { label: "Galería",   href: "#gallery" },
  { label: "Servicios", href: "#services" },
  { label: "Planes",    href: "#pricing" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contacto",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <nav className="navbar-inner container" aria-label="Navegación principal">
        <a href="#hero" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar-brand__mark">MPA</span>
          <span className="navbar-brand__text">
            Detailer<em>Car Care Studio</em>
          </span>
        </a>

        <ul className={`navbar-links${menuOpen ? " navbar-links--open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="navbar-links__cta">
            <a
              href={whatsappLink("Hola! Quiero reservar un turno para mi auto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary navbar-cta"
              onClick={() => setMenuOpen(false)}
            >
              Reservar
            </a>
          </li>
        </ul>

        <button
          className={`navbar-burger${menuOpen ? " navbar-burger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
