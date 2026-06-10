import "./Contact.css";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-inner">

        {/* Left — info */}
        <div className="contact-left">
          <span className="section-label">Hablemos</span>
          <h2 className="section-title">
            ¿Listo para <span className="text-red">transformar</span><br />tu auto?
          </h2>
          <p className="contact-sub">
            Escribinos y coordinamos una visita. Respondemos en menos de 24 horas.
          </p>

          <ul className="contact-info">
            <li>
              <span className="contact-info__icon">📍</span>
              <span>Buenos Aires, Argentina</span>
            </li>
            <li>
              <span className="contact-info__icon">📱</span>
              <span>+54 9 11 0000-0000</span>
            </li>
            <li>
              <span className="contact-info__icon">✉</span>
              <span>info@mpadetailer.com</span>
            </li>
          </ul>

          <div className="contact-socials">
            <a href="#" className="contact-social" aria-label="Instagram">IG</a>
            <a href="#" className="contact-social" aria-label="Facebook">FB</a>
            <a href="#" className="contact-social" aria-label="YouTube">YT</a>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Teléfono (opcional)" />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Contanos sobre tu auto y qué servicio necesitás..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary contact-submit">
              Enviar Mensaje →
            </button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="contact-bottom">
        <img src="/logo.png" alt="MPA Detailer" className="contact-bottom__logo" />
        <p>© 2025 MPA Detailer Car Care. Todos los derechos reservados.</p>
        <div className="contact-bottom__socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
