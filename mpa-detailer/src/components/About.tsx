import "./About.css";

const features = [
  {
    num: "01",
    title: "Polishing",
    desc: "Eliminamos rayaduras, marcas de remolino y oxidación para restaurar el brillo original de la pintura.",
  },
  {
    num: "02",
    title: "Interior Care",
    desc: "Limpieza profunda y desinfección de tapizados, alfombras, tablero y plásticos — como nuevo.",
  },
  {
    num: "03",
    title: "Ceramic Coating",
    desc: "Protección nano-cerámica de larga duración con acabado espejo que repele agua, barro y UV.",
  },
  {
    num: "04",
    title: "Hand Wash",
    desc: "Lavado a mano con método two-bucket y arcilla descontaminante que preserva tu clear coat.",
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-header reveal">
          <span className="section-label">Quiénes Somos</span>
          <h2 className="section-title">
            Sobre <span className="text-red">MPA Detailer</span>
          </h2>
          <p className="section-desc">
            Nos especializamos en detailing profesional y restauración de vehículos.
            Cada auto que trabajamos recibe precisión, pasión y el cuidado que merece —
            con productos premium y técnicas avanzadas.
          </p>
        </div>

        <div className="about-grid">
          {features.map((f, i) => (
            <div key={f.num} className={`about-card card reveal reveal-delay-${i + 1}`}>
              <span className="about-card__num">{f.num}</span>
              <h3 className="about-card__title">{f.title}</h3>
              <p className="about-card__desc">{f.desc}</p>
              <div className="about-card__bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
