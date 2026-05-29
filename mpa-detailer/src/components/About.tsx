import "./About.css";

export default function About() {
  return (
    <section className="about">
      <h2 className="about-title">About Us</h2>
      <p className="about-text">
        At <strong>MPA Detailer</strong>, we specialize in professional car detailing and restoration. 
        Our mission is to bring back the factory shine of your vehicle using premium products 
        and advanced techniques. Every car we work on is treated with precision, passion, and care.
      </p>

      <div className="about-grid">
        <div className="about-item">
          <h3>Polishing</h3>
          <p>Restore gloss and remove imperfections from the paint.</p>
        </div>
        <div className="about-item">
          <h3>Interior Care</h3>
          <p>Deep cleaning and detailing for a fresh, like-new interior.</p>
        </div>
        <div className="about-item">
          <h3>Ceramic Coating</h3>
          <p>Long-lasting protection and a mirror finish for your vehicle.</p>
        </div>
        <div className="about-item">
          <h3>Hand Wash</h3>
          <p>Gentle and precise exterior wash that preserves your car’s shine.</p>
        </div>
      </div>
    </section>
  );
}
