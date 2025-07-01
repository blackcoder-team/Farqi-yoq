import "./Contact.css";

function Contact() {
  return (
    <div className="contact-boss-div" id="contact">
      <div className="contact-card">
        <h1>Bizga Aloqaga Chiqing</h1>
        <form className="contact-form">
          <input type="text" placeholder="Ismingiz" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Xabaringiz" rows={5} required />
          <button type="submit">Yuborish</button>
        </form>
        <div className="contact-info">
          <p>
            <b>Email:</b> info@example.com
          </p>
          <p>
            <b>Telefon:</b> +998 90 123 45 67
          </p>
        </div>
      </div>
      <div className="contact-icons">
        <a
          href="https://t.me/IBRAG1M0FFF"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <i className="fab fa-telegram-plane"></i>
          <span className="icon-label">Telegram</span>
        </a>
        <a
          href="https://instagram.com/_jony7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
          <span className="icon-label">Instagram</span>
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox" aria-label="Email">
          <i className="far fa-envelope"></i>
          <span className="icon-label">Email</span>
        </a>
        <a
          href="https://github.com/qoramen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
          <span className="icon-label">GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
