import '../Footer/Footer.css'

function Footer() {
  return (
    <footer className="footer-boss-div">
      <div className="footer-text">
        © {new Date().getFullYear()} Farqi Yo‘q. O'g'irlamoqchi bo'lganlar Xudo ko'rib turibti. <br /> Maded by BlackTeam.
      </div>
    </footer>
  );
}

export default Footer;