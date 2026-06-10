import "./Projects.css";
import { useState, useEffect } from "react";

/*
  Colocá tus imágenes en: public/img/
  Nombres: projecto1.jpg … projecto6.jpg
  (sin espacios, sin recompilar al cambiar fotos)
*/
const projects = [
  { id: 1, name: "Proyecto 1", img: "/img/projecto1.jpg" },
  { id: 2, name: "Proyecto 2", img: "/img/projecto2.jpg" },
  { id: 3, name: "Proyecto 3", img: "/img/projecto3.jpg" },
  { id: 4, name: "Proyecto 4", img: "/img/projecto4.jpg" },
  { id: 5, name: "Proyecto 5", img: "/img/projecto5.jpg" },
  { id: 6, name: "Proyecto 6", img: "/img/projecto6.jpg" },
];

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  const open  = (i: number) => { setSelected(i); document.body.style.overflow = "hidden"; };
  const close = ()           => { setSelected(null); document.body.style.overflow = ""; };
  const prev  = () => selected !== null && setSelected((selected + projects.length - 1) % projects.length);
  const next  = () => selected !== null && setSelected((selected + 1) % projects.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === "Escape")      close();
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <div className="projects-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Nuestros <span className="text-red">Trabajos</span>
          </h2>
          <p className="section-desc">
            Cada proyecto refleja nuestra pasión por la precisión y la excelencia.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="pcard"
              onClick={() => open(i)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open(i)}
              role="button"
              tabIndex={0}
              aria-label={`Ver ${p.name} en grande`}
            >
              <img src={p.img} alt={p.name} loading="lazy" decoding="async" />
              <div className="pcard__overlay">
                <h3>{p.name}</h3>
                <span>Ver en grande</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox__close" onClick={close} aria-label="Cerrar">×</button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Anterior">‹</button>
            <img
              className="lightbox__img"
              src={projects[selected].img}
              alt={projects[selected].name}
            />
            <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Siguiente">›</button>
          </div>
        </div>
      )}
    </section>
  );
}
