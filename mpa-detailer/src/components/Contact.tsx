import "./Contact.css";

export default function Contact() {
  return (
    <footer className="contact">
      <img src="/logo.png" alt="MPA Detailer Logo" className="contact-logo" />

      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-text">
        Have questions or want to book an appointment?  
        Send us a message — we’ll get back to you as soon as possible.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" rows={4} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-footer">
        <p>© 2025 MPA Detailer Car Care. All rights reserved.</p>
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
