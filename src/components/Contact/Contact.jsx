import './Contact.css';

function Contact() {
  return (
    <div className="contact-boss-div">
      <div className="contact-card">
        <h1>Bizga Aloqaga Chiqing</h1>
        <form className="contact-form">
          <input type="text" placeholder="Ismingiz" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Xabaringiz" rows={5} required />
          <button type="submit">Yuborish</button>
        </form>
        <div className="contact-info">
          <p><b>Email:</b> info@example.com</p>
          <p><b>Telefon:</b> +998 90 123 45 67</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;