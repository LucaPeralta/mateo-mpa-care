import BeforeAfter from "./BeforeAfter";
import { asset } from "../config";
import "./Gallery.css";

/*
  Agregá tus fotos en:  public/img/gallery/
  Formato:  1-antes.jpg  /  1-despues.jpg  (hasta el id que quieras)
  Arrastrá el divisor de cada tarjeta para comparar.
*/
const pairs = [
  { id: 1, name: "Toyota Corolla",   service: "Paint Correction + Ceramic" },
  { id: 2, name: "Ford Mustang",     service: "Full Detail Exterior" },
  { id: 3, name: "Honda Civic",      service: "Interior Deep Clean" },
  { id: 4, name: "BMW Serie 3",      service: "Ceramic Coating" },
  { id: 5, name: "Chevrolet Cruze",  service: "Paint Correction" },
  { id: 6, name: "Volkswagen Vento", service: "Hand Wash & Wax" },
];

export default function Gallery() {
  return (
    <section className="gallery section section--alt" id="gallery">
      <div className="container">
        <div className="gallery-header reveal">
          <span className="section-label">Nuestro Trabajo</span>
          <h2 className="section-title">
            Antes &amp; <span className="text-red">Después</span>
          </h2>
          <p className="section-desc">
            Deslizá el divisor sobre cada foto y mirá la transformación real,
            sin filtros ni fotos de stock.
          </p>
        </div>

        <div className="gallery-grid">
          {pairs.map((p, i) => (
            <figure key={p.id} className={`gcard reveal reveal-delay-${(i % 3) + 1}`}>
              <BeforeAfter
                before={asset(`img/gallery/${p.id}-antes.jpg`)}
                after={asset(`img/gallery/${p.id}-despues.jpg`)}
                alt={p.name}
              />
              <figcaption className="gcard__caption">
                <span className="gcard__service">{p.service}</span>
                <h3 className="gcard__name">{p.name}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
