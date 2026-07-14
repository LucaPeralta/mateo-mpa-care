import { whatsappLink } from "../config";
import "./Services.css";

const icons: Record<string, React.ReactNode> = {
  paint: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  seat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 19h12M8 19v-3a4 4 0 014-4h0a4 4 0 014 4v3" />
      <path d="M9 8V6a3 3 0 016 0v2" />
    </svg>
  ),
  engine: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 9h3l2-2h4l2 2h3v8h-3l-2 2h-4l-2-2H5z" />
      <path d="M2 11v4M22 11v4M12 9v-3M9 6h6" />
    </svg>
  ),
  light: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6c-3 2-4 4-4 6s1 4 4 6c2 1.5 4 2 4 2V4s-2 .5-4 2z" />
      <path d="M15 8h5M15 12h6M15 16h5" />
    </svg>
  ),
  wash: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c3 4 6 7 6 10a6 6 0 01-12 0c0-3 3-6 6-10z" />
      <path d="M9 14a3 3 0 003 3" />
    </svg>
  ),
};

const services = [
  {
    icon: "paint",
    title: "Paint Correction",
    desc: "Proceso multietapa con pulidoras orbitales que elimina rayaduras y marcas de remolino, restaurando el brillo original.",
  },
  {
    icon: "shield",
    title: "Ceramic Coating",
    desc: "Protección nano-cerámica de 2 a 5 años contra UV, lluvia ácida y arañazos menores, con acabado espejo.",
  },
  {
    icon: "seat",
    title: "Interior Deep Clean",
    desc: "Extracción al vapor y desinfección de tapizados, alfombras, tablero y plásticos. El interior queda como de fábrica.",
  },
  {
    icon: "engine",
    title: "Engine Bay Detail",
    desc: "Desengrase, lavado, secado y protección de gomas y plásticos del compartimento del motor.",
  },
  {
    icon: "light",
    title: "Headlight Restoration",
    desc: "Pulido en 3 etapas más sellado UV que devuelve la claridad de tus faros y mejora la visibilidad nocturna.",
  },
  {
    icon: "wash",
    title: "Hand Wash & Wax",
    desc: "Lavado a mano con método two-bucket, arcilla descontaminante y cera carnauba pura de alta gama.",
  },
];

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-header reveal">
          <span className="section-label">Lo Que Ofrecemos</span>
          <h2 className="section-title">
            Nuestros <span className="text-red">Servicios</span>
          </h2>
          <p className="section-desc">
            Una gama completa de servicios de detailing para que tu vehículo
            luzca como el primer día — por dentro y por fuera.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <a
              key={s.title}
              className={`svc card reveal reveal-delay-${(i % 3) + 1}`}
              href={whatsappLink(`Hola! Quiero consultar por el servicio de ${s.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="svc__icon">{icons[s.icon]}</span>
              <h3 className="svc__title">{s.title}</h3>
              <p className="svc__desc">{s.desc}</p>
              <span className="svc__cta">
                Consultar
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
