import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('en');

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

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // Here you would typically trigger a language change in your i18n setup
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo fade-in">SwissHealthAI</Link>
        <nav className="header__nav">
          <Link to="/features" className="header__nav-item slide-in">Features</Link>
          <Link to="/data-security" className="header__nav-item slide-in">Data Security</Link>
          <Link to="/case-studies" className="header__nav-item slide-in">Case Studies</Link>
          <Link to="/about" className="header__nav-item slide-in">About Us</Link>
        </nav>
        <div className="header__actions">
          <select 
            value={language} 
            onChange={handleLanguageChange}
            className="header__language-select fade-in"
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="fr">FR</option>
            <option value="it">IT</option>
          </select>
          <Link to="/demo" className="header__cta pulse">Request Demo</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
