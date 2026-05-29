import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src="/logo.png" alt="MPA Detailer Logo" className="hero-logo" />
      <h1 className="hero-title">Precision. Passion. Perfection.</h1>
      <p className="hero-text">Professional Car Detailing & Care</p>
      <button className="hero-btn">View Our Work</button>
    </section>
  );
}
