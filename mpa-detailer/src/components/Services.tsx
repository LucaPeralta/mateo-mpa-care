import "./Services.css";

const services = [
  {
    title: "Paint Correction",
    desc: "Eliminamos rayaduras, marcas de remolino y restauramos el brillo original.",
    detail: "Proceso multietapa con pulidoras orbitales y compuestos de corte premium.",
  },
  {
    title: "Ceramic Coating",
    desc: "Protección nano-cerámica de larga duración con acabado espejo.",
    detail: "Protección de 2–5 años contra UV, lluvia ácida, barro y arañazos menores.",
  },
  {
    title: "Interior Deep Clean",
    desc: "Limpieza profunda y desinfección de todo el interior del vehículo.",
    detail: "Extracción al vapor, tapizados, alfombras, tablero y plásticos renovados.",
  },
  {
    title: "Engine Bay Detail",
    desc: "Limpieza y acondicionamiento del compartimento del motor.",
    detail: "Desengrase, lavado, secado y protección de gomas y plásticos.",
  },
  {
    title: "Headlight Restoration",
    desc: "Restauramos la claridad de tus faros para mejor visibilidad nocturna.",
    detail: "Pulido en 3 etapas + sellado UV para duración prolongada.",
  },
  {
    title: "Hand Wash & Wax",
    desc: "Lavado a mano y encerado con productos de alta gama.",
    detail: "Two-bucket method + arcilla descontaminante + cera carnauba pura.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-header">
          <span className="section-label">Lo Que Ofrecemos</span>
          <h2 className="section-title">
            Nuestros <span className="text-red">Servicios</span>
          </h2>
          <p className="section-desc">
            Una gama completa de servicios de detailing para que tu vehículo luzca
            como el primer día — por dentro y por fuera.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="svc">
              <div className="svc__inner">

                {/* Front */}
                <div className="svc__front">
                  <span className="svc__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="svc__title">{s.title}</h3>
                  <p className="svc__desc">{s.desc}</p>
                  <span className="svc__cue">Hover →</span>
                </div>

                {/* Back */}
                <div className="svc__back">
                  <h3 className="svc__title">{s.title}</h3>
                  <p className="svc__detail">{s.detail}</p>
                  <a href="#contact" className="btn btn--primary svc__btn">
                    Consultar
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
