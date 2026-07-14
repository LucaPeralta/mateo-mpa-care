import "./Process.css";

const steps = [
  {
    num: "01",
    title: "Contactanos",
    desc: "Escribinos por WhatsApp contándonos qué auto tenés y qué necesita. Te respondemos en el día.",
  },
  {
    num: "02",
    title: "Diagnóstico",
    desc: "Evaluamos el estado de la pintura y el interior, y te pasamos un presupuesto claro y sin sorpresas.",
  },
  {
    num: "03",
    title: "Manos a la obra",
    desc: "Trabajamos tu auto con productos premium y procesos probados. Te mandamos avances del trabajo.",
  },
  {
    num: "04",
    title: "Entrega",
    desc: "Retirás tu auto con brillo de fábrica, junto con consejos de mantenimiento para que dure.",
  },
];

export default function Process() {
  return (
    <section className="process section section--alt" id="process">
      <div className="container">
        <div className="process-header reveal">
          <span className="section-label">Cómo Trabajamos</span>
          <h2 className="section-title">
            Simple, claro y <span className="text-red">sin vueltas</span>
          </h2>
        </div>

        <ol className="process-grid">
          {steps.map((s, i) => (
            <li key={s.num} className={`pstep reveal reveal-delay-${i + 1}`}>
              <span className="pstep__num">{s.num}</span>
              <div className="pstep__line" aria-hidden="true" />
              <h3 className="pstep__title">{s.title}</h3>
              <p className="pstep__desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
