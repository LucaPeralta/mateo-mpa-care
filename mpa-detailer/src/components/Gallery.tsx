import "./Gallery.css";

/*
  Agregá tus fotos en:  public/img/gallery/
  Formato:  1-antes.jpg  /  1-despues.jpg  (hasta el id que quieras)
  Hover sobre cada tarjeta → flip 3D para ver el resultado.
*/
const pairs = [
  { id: 1, name: "Toyota Corolla",    service: "Paint Correction + Ceramic" },
  { id: 2, name: "Ford Mustang",      service: "Full Detail Exterior" },
  { id: 3, name: "Honda Civic",       service: "Interior Deep Clean" },
  { id: 4, name: "BMW Serie 3",       service: "Ceramic Coating" },
  { id: 5, name: "Chevrolet Cruze",   service: "Paint Correction" },
  { id: 6, name: "Volkswagen Vento",  service: "Hand Wash & Wax" },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-header">
          <span className="section-label">Nuestro Trabajo</span>
          <h2 className="section-title">
            Antes &amp; <span className="text-red">Después</span>
          </h2>
          <p className="section-desc">
            Pasá el cursor sobre cada tarjeta para ver la transformación.
            Tus fotos van en <code>public/img/gallery/</code> con los nombres{" "}
            <code>1-antes.jpg</code> / <code>1-despues.jpg</code>.
          </p>
        </div>

        <div className="gallery-grid">
          {pairs.map((p) => (
            <div key={p.id} className="gcard" aria-label={`${p.name} — hover para ver resultado`}>
              <div className="gcard__inner">

                {/* FRONT — antes (sucio) */}
                <div className="gcard__face gcard__face--front">
                  <img
                    src={`/img/gallery/${p.id}-antes.jpg`}
                    alt={`${p.name} antes del detailing`}
                    loading="lazy"
                  />
                  <div className="gcard__overlay" />
                  <span className="gcard__badge gcard__badge--before">ANTES</span>
                  <div className="gcard__info">
                    <p className="gcard__service">{p.service}</p>
                    <h3 className="gcard__name">{p.name}</h3>
                  </div>
                  <span className="gcard__hint">Hover para ver el resultado →</span>
                </div>

                {/* BACK — después (limpio) */}
                <div className="gcard__face gcard__face--back">
                  <img
                    src={`/img/gallery/${p.id}-despues.jpg`}
                    alt={`${p.name} después del detailing`}
                    loading="lazy"
                  />
                  <div className="gcard__overlay gcard__overlay--back" />
                  <span className="gcard__badge gcard__badge--after">DESPUÉS</span>
                  <div className="gcard__info">
                    <p className="gcard__service">{p.service}</p>
                    <h3 className="gcard__name">{p.name}</h3>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
