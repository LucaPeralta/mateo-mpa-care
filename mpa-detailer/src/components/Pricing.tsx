import { whatsappLink } from "../config";
import "./Pricing.css";

/*
  Editá los planes acá. Si querés mostrar precios,
  cambiá price: "Consultar" por el valor (ej. "$45.000").
*/
const plans = [
  {
    name: "Essential",
    price: "Consultar",
    tag: "Mantenimiento",
    featured: false,
    items: [
      "Lavado a mano two-bucket",
      "Descontaminación con arcilla",
      "Cera carnauba premium",
      "Limpieza de llantas y neumáticos",
      "Vidrios y detalles finales",
    ],
  },
  {
    name: "Premium",
    price: "Consultar",
    tag: "El más elegido",
    featured: true,
    items: [
      "Todo lo de Essential",
      "Paint correction 1 etapa",
      "Interior deep clean completo",
      "Acondicionado de plásticos y cueros",
      "Sellador sintético 6 meses",
    ],
  },
  {
    name: "Signature",
    price: "Consultar",
    tag: "Protección total",
    featured: false,
    items: [
      "Todo lo de Premium",
      "Paint correction multietapa",
      "Ceramic coating 2–5 años",
      "Engine bay detail",
      "Restauración de faros",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing-header reveal">
          <span className="section-label">Planes</span>
          <h2 className="section-title">
            Elegí tu <span className="text-red">nivel de detalle</span>
          </h2>
          <p className="section-desc">
            Tres paquetes pensados para cada necesidad. Todos incluyen productos
            premium y el mismo estándar de calidad.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`plan card reveal reveal-delay-${i + 1}${p.featured ? " plan--featured" : ""}`}
            >
              <span className="plan__tag">{p.tag}</span>
              <h3 className="plan__name">{p.name}</h3>
              <p className="plan__price">{p.price}</p>

              <ul className="plan__items">
                {p.items.map((item) => (
                  <li key={item}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`Hola! Quiero consultar por el plan ${p.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${p.featured ? "btn--primary" : "btn--outline"} plan__btn`}
              >
                Consultar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
