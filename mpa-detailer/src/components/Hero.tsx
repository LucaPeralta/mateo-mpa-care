import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <img src="/logo.png" alt="MPA Detailer Logo" className="hero-logo" />
        <p className="hero-eyebrow">Professional Car Detailing</p>
        <h1 className="hero-title">
          Precision.<br />
          <span className="hero-accent">Passion.</span><br />
          Perfection.
        </h1>
        <p className="hero-sub">
          Devolvemos el brillo de fábrica de tu vehículo usando productos premium
          y técnicas avanzadas de detailing.
        </p>
        <div className="hero-actions">
          <a href="#gallery" className="btn btn--primary">Ver Galería</a>
          <a href="#contact" className="btn btn--outline">Reservar Turno</a>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll hacia abajo">
        <span />
      </a>
    </section>
  );
}
