import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo">Hospital AI Tool</Link>
        <nav className="header__nav">
          <Link to="/features" className="header__nav-item">Features</Link>
          <Link to="/how-it-works" className="header__nav-item">How It Works</Link>
          <Link to="/resources" className="header__nav-item">Resources</Link>
          <Link to="/contact" className="header__nav-item">Contact</Link>
        </nav>
        <Link to="/contact" className="header__cta">Get Started</Link>
      </div>
    </header>
  );
};

export default Header;
