import React, { useState } from 'react';
import './Header.css';
import '../app/App.css';
import AuthModal from '../Auth/Auth';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAuthSuccess = (name) => {
    setUsername(name);
    setModalOpen(false);
  };

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 200) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
  });

  return (
    <header>
      <nav id='navbar'>
        <div className="container nav-container">
          <div className="logo">
            <h1>FARQI YO'Q</h1>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <i className="fas fa-bars"></i>
          </button>
          <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#musics">Musics</a></li>
            <li><a href="#quote">Quotes</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#twits">Twits</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="sign-in">
              {username ? (
                <a href="" className="username">{username}</a>
              ) : (
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => setModalOpen(true)}
                >
                  Sign In
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div className="hero" id='hero'>
        <div className="container">
          <div className="text">
            <h1>Farqi yo'q</h1>
            <p>Qanaqa qilsang ham farqi yo'q, lekin qil!</p>
          </div>
        </div>
      </div>
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </header>
  );
};

export default Header

