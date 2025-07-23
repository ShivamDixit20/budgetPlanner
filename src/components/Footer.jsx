import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>FinMate</h2>
          <p>Track, save, and stay in control of your finances.</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-expense">Add Expense</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FinMate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
