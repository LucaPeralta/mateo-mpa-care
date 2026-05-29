import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Paint Correction",
      desc: "We remove scratches, swirl marks, and restore the factory shine.",
    },
    {
      title: "Ceramic Coating",
      desc: "Provides long-lasting protection and a mirror-like gloss.",
    },
    {
      title: "Interior Deep Clean",
      desc: "We clean, disinfect, and renew every part of your interior.",
    },
    {
      title: "Engine Bay Detail",
      desc: "Full engine bay cleaning and dressing for a professional finish.",
    },
    {
      title: "Headlight Restoration",
      desc: "Restores clarity and improves night visibility.",
    },
    {
      title: "Hand Wash & Wax",
      desc: "Gentle wash and wax using high-end detailing products.",
    },
  ];

  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-text">
        We provide a wide range of car detailing services designed to make your
        vehicle look brand new — inside and out.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
