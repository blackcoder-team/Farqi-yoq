import '../Footer/Footer.css'

function Footer() {
  return (
    <footer className="footer-boss-div">
      <div className="footer-text">
        © {new Date().getFullYear()} Bu sayt o'g'irlanadimi bizga "Farqi Yo'q" <br /> Made by <a href="">Made by BlackTeam</a>.
      </div>
    </footer>
  );
}

export default Footer;