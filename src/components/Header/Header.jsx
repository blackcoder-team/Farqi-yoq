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

  return (
    <header>
      <nav>
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
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Musics</a></li>
            <li><a href="">Quotes</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">Twits</a></li>
            <li><a href="">Contact Us</a></li>
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
      <div className="hero">
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

