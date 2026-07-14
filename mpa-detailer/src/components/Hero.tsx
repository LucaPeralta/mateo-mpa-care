import { whatsappLink } from "../config";
import "./Hero.css";

const stats = [
  { value: "+250", label: "Autos detallados" },
  { value: "5★",   label: "Calificación clientes" },
  { value: "+5",   label: "Años de experiencia" },
  { value: "100%", label: "Productos premium" },
];

const ticker = [
  "Paint Correction", "Ceramic Coating", "Interior Deep Clean",
  "Hand Wash & Wax", "Engine Bay Detail", "Headlight Restoration",
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-grid" />
        <div className="hero-beam" />
      </div>

      <div className="hero-content container">
        <p className="hero-eyebrow">
          <span className="hero-eyebrow__dot" />
          Detailing profesional · Buenos Aires
        </p>

        <h1 className="hero-title">
          Tu auto, con brillo<br />
          <span className="hero-accent">de fábrica</span> otra vez.
        </h1>

        <p className="hero-sub">
          Estudio de detailing especializado en paint correction, ceramic coating
          y limpieza interior profunda. Productos premium, técnicas avanzadas y
          obsesión por el detalle.
        </p>

        <div className="hero-actions">
          <a
            href={whatsappLink("Hola! Quiero reservar un turno para mi auto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Reservar Turno
          </a>
          <a href="#gallery" className="btn btn--outline">Ver Resultados</a>
        </div>

        <dl className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <dt className="hero-stat__value">{s.value}</dt>
              <dd className="hero-stat__label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Bajar a la siguiente sección">
        <span />
      </a>

      {/* Cinta de servicios */}
      <div className="hero-ticker" aria-hidden="true">
        <div className="hero-ticker__track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="hero-ticker__item">
              {t} <em>✦</em>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
