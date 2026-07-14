import "./Faq.css";

const faqs = [
  {
    q: "¿Cuánto dura un detailing completo?",
    a: "Depende del estado del vehículo y del servicio: un lavado premium lleva medio día, mientras que un paint correction con ceramic coating puede llevar de 2 a 3 días para asegurar el mejor resultado.",
  },
  {
    q: "¿Qué es el ceramic coating y cuánto dura?",
    a: "Es una protección nano-cerámica que se adhiere a la pintura formando una capa dura, hidrofóbica y con brillo espejo. Según el producto y el mantenimiento, dura entre 2 y 5 años.",
  },
  {
    q: "¿Trabajan con turnos? ¿Cómo reservo?",
    a: "Sí, trabajamos únicamente con turnos para dedicarle a cada auto el tiempo que merece. Escribinos por WhatsApp y coordinamos día y horario.",
  },
  {
    q: "¿El paint correction elimina cualquier rayadura?",
    a: "Elimina rayaduras superficiales del clear coat, marcas de remolino y hologramas. Las rayas profundas que llegan a la base se pueden mejorar notablemente, pero requieren repintado.",
  },
  {
    q: "¿Qué productos usan?",
    a: "Trabajamos exclusivamente con productos premium de marcas reconocidas de la industria del detailing, tanto para exterior como para interior.",
  },
];

export default function Faq() {
  return (
    <section className="faq section section--alt" id="faq">
      <div className="container faq-inner">
        <div className="faq-header reveal">
          <span className="section-label">Dudas Frecuentes</span>
          <h2 className="section-title">
            Preguntas &amp; <span className="text-red">Respuestas</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} className={`faq-item reveal reveal-delay-${(i % 3) + 1}`}>
              <summary>
                {f.q}
                <span className="faq-item__icon" aria-hidden="true">+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
