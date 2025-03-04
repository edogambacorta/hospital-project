import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo fade-in">
            <Link to="/">SwissHealthAI</Link>
          </div>
          <nav className="footer-nav">
            <ul>
              <li className="slide-in"><Link to="/features">Features</Link></li>
              <li className="slide-in"><Link to="/data-security">Data Security</Link></li>
              <li className="slide-in"><Link to="/case-studies">Case Studies</Link></li>
              <li className="slide-in"><Link to="/about">About Us</Link></li>
              <li className="slide-in"><Link to="/demo">Request Demo</Link></li>
            </ul>
          </nav>
          <div className="footer-social fade-in">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        <div className="footer-bottom fade-in">
          <p>&copy; 2025 SwissHealthAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
