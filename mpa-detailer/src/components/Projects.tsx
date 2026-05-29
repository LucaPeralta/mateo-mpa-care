import "./Projects.css";
import { useState, useEffect } from "react";

// Usaremos imágenes desde `public/img` para facilitar subir/editar sin tocar código.
// Coloca tus archivos en `public/img` con estos nombres (sin espacios):
// `projecto1.jpg` ... `projecto6.jpg`.
// Esto evita recompilar cuando sólo cambias las fotos.

export default function Projects() {
  // Lista de 6 proyectos que usan imports estáticos desde `src/img`.
  const projects = [
    { id: 1, name: "Proyecto 1", img: "/img/projecto1.jpg" },
    { id: 2, name: "Proyecto 2", img: "/img/projecto2.jpg" },
    { id: 3, name: "Proyecto 3", img: "/img/projecto3.jpg" },
    { id: 4, name: "Proyecto 4", img: "/img/projecto4.jpg" },
    { id: 5, name: "Proyecto 5", img: "/img/projecto5.jpg" },
    { id: 6, name: "Proyecto 6", img: "/img/projecto6.jpg" },
  ];

  // Estado para el lightbox
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    if (index < 0 || index >= projects.length) return;
    setSelectedIndex(index);
    // evitar scroll del body cuando está abierto
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + projects.length - 1) % projects.length);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % projects.length);
  };

  // Teclas: ESC para cerrar, flechas para navegar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  return (
    <section className="projects">
      <h2 className="projects-title">Nuestros Proyectos</h2>
      <p className="projects-text">
        Cada proyecto refleja nuestra pasión por la precisión y la excelencia.
        Aquí puedes ver 6 ejemplos; reemplaza las imágenes en `src/img` cuando subas las tuyas.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-overlay">
              <h3>{project.name}</h3>
              <p>Detalle completo</p>
            </div>
            {/* Click en la imagen abre la versión en grande (lightbox). Si la imagen falla,
                se usa Unsplash como fallback. */}
            <img
              src={project.img}
              alt={project.name}
              role="button"
              tabIndex={0}
              loading="lazy"
              decoding="async"
              onClick={() => openLightbox(project.id - 1)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLightbox(project.id - 1);
              }}
              onError={(e: any) => {
                // @ts-ignore set fallback src
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://source.unsplash.com/600x400/?car,detail,${project.id}`;
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox / modal */}
      {selectedIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Cerrar imagen">
            ×
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Imagen anterior">‹</button>
            <img
              src={projects[selectedIndex].img}
              alt={projects[selectedIndex].name}
              className="lightbox-img"
              onError={(e: any) => {
                // @ts-ignore
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://source.unsplash.com/1200x800/?car,detail,${projects[selectedIndex].id}`;
              }}
            />
            <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Siguiente imagen">›</button>
          </div>
        </div>
      )}
    </section>
  );
}

// --------------------- Hooks y helpers ---------------------
// Colocados al final para mantener el JSX arriba claro. Usa closure vars desde el componente.
