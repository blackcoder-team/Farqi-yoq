import React, { useState } from 'react';
import './Auth.css';

const AuthModal = ({ isOpen, onClose, onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isSignUp && username.trim().length === 0) {
      setError('Username kiritilishi shart.');
      return;
    }

    if (!email.endsWith('@gmail.com')) {
      setError('Email @gmail.com bilan tugashi kerak.');
      return;
    }

    if (password.length < 8) {
      setError('Parol kamida 8 ta belgidan iborat bo‘lishi kerak.');
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setError('Parollar mos emas.');
      return;
    }

    setSuccess(true);
    onSuccess(isSignUp ? username : email.split('@')[0]);

    // Formani tozalash
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            onClose();
            setSuccess(false);
            setError('');
          }}
        >
          &times;
        </span>
        {!success ? (
          <>
            <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isSignUp && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              )}
              {error && <p className="error">{error}</p>}
              <button type="submit" className="primary-btn">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>
            <p>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                className="link-btn"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError('');
                }}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </>
        ) : (
          <div className="success-message">
            <i className="fas fa-circle-check checkmark"></i>
            <p>Siz muvaffaqiyatli {isSignUp ? "ro'yxatdan o'tdingiz" : 'kirdingiz'}!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
