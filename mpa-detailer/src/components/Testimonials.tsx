import "./Testimonials.css";

/* Reemplazá con reseñas reales de tus clientes (Google / Instagram). */
const reviews = [
  {
    name: "Martín G.",
    car: "VW Golf GTI",
    text: "Le hicieron paint correction y ceramic al Golf y quedó mejor que cuando salió de la agencia. El nivel de detalle es otra cosa.",
  },
  {
    name: "Sofía R.",
    car: "Toyota Corolla Cross",
    text: "El interior estaba destruido por los chicos y el perro. Me lo devolvieron impecable, olor a nuevo incluido. Súper recomendables.",
  },
  {
    name: "Diego L.",
    car: "Ford Ranger",
    text: "Atención de 10, me explicaron todo el proceso con fotos del avance. La camioneta quedó espectacular y el precio fue justo.",
  },
];

function Stars() {
  return (
    <span className="trev__stars" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="section-label">Clientes</span>
          <h2 className="section-title">
            Lo que dicen de <span className="text-red">nosotros</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <figure key={r.name} className={`trev card reveal reveal-delay-${i + 1}`}>
              <Stars />
              <blockquote className="trev__text">“{r.text}”</blockquote>
              <figcaption className="trev__author">
                <span className="trev__avatar">{r.name.charAt(0)}</span>
                <span>
                  <strong>{r.name}</strong>
                  <em>{r.car}</em>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
