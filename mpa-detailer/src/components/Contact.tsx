import { useState } from "react";
import { BUSINESS, whatsappLink } from "../config";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [car, setCar] = useState("");
  const [message, setMessage] = useState("");

  /* Sin backend: el formulario arma un mensaje y lo abre en WhatsApp. */
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hola! Soy ${name.trim()}.` +
      (car.trim() ? ` Tengo un ${car.trim()}.` : "") +
      ` ${message.trim()}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="contact section" id="contact">
      <div className="container contact-inner">
        {/* Izquierda — info */}
        <div className="contact-left reveal">
          <span className="section-label">Hablemos</span>
          <h2 className="section-title">
            ¿Listo para <span className="text-red">transformar</span>
            <br />tu auto?
          </h2>
          <p className="contact-sub">
            Escribinos y coordinamos un turno. Respondemos en menos de 24 horas.
          </p>

          <ul className="contact-info">
            <li>
              <span className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <span>{BUSINESS.city}</span>
            </li>
            <li>
              <span className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                </svg>
              </span>
              <a href={whatsappLink("Hola! Quiero hacer una consulta.")} target="_blank" rel="noopener noreferrer">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </li>
            <li>
              <span className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
                </svg>
              </span>
              <span>{BUSINESS.hours}</span>
            </li>
          </ul>

          <div className="contact-socials">
            <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="contact-social" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="contact-social" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 8h3V5h-3a4 4 0 00-4 4v3H7v3h3v6h3v-6h3l1-3h-4V9a1 1 0 011-1z" />
              </svg>
            </a>
            <a href={BUSINESS.youtube} target="_blank" rel="noopener noreferrer" className="contact-social" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="6" width="19" height="12" rx="4" /><path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Derecha — formulario */}
        <div className="contact-right reveal reveal-delay-2">
          <form className="contact-form card" onSubmit={onSubmit}>
            <h3 className="contact-form__title">Pedí tu presupuesto</h3>
            <p className="contact-form__hint">
              Completá el formulario y el mensaje se abre directo en nuestro WhatsApp.
            </p>

            <div className="form-group">
              <label htmlFor="cf-name">Nombre</label>
              <input
                id="cf-name"
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-car">Vehículo (opcional)</label>
              <input
                id="cf-car"
                type="text"
                placeholder="Marca, modelo y año"
                value={car}
                onChange={(e) => setCar(e.target.value)}
                maxLength={80}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-msg">Mensaje</label>
              <textarea
                id="cf-msg"
                placeholder="Contanos qué servicio necesitás..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={600}
                required
              />
            </div>

            <button type="submit" className="btn btn--whatsapp contact-submit">
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="contact-bottom">
        <div className="container contact-bottom__inner">
          <p className="contact-bottom__brand">
            <strong>MPA</strong> Detailer
          </p>
          <p>© {new Date().getFullYear()} {BUSINESS.name} Car Care. Todos los derechos reservados.</p>
          <div className="contact-bottom__socials">
            <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={BUSINESS.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
