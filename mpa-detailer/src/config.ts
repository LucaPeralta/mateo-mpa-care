/*
  Datos del negocio — editá todo desde acá.
  El teléfono va en formato internacional sin "+" ni espacios (para WhatsApp).
*/
export const BUSINESS = {
  name: "MPA Detailer",
  tagline: "Car Care & Detailing Studio",
  city: "Buenos Aires, Argentina",
  phoneDisplay: "+54 9 11 0000-0000",
  phoneWhatsApp: "5491100000000",
  email: "info@mpadetailer.com",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  youtube: "https://www.youtube.com/",
  hours: "Lun a Sáb — 9:00 a 18:00",
} as const;

/* Prefijo correcto de assets en dev y en GitHub Pages */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const whatsappLink = (message: string) =>
  `https://wa.me/${BUSINESS.phoneWhatsApp}?text=${encodeURIComponent(message)}`;
