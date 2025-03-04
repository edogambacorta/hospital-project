import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

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
        <HashLink to="#top" className="header__logo fade-in">SwissHealthAI</HashLink>
        <nav className="header__nav">
          <HashLink to="#why-us" className="header__nav-item slide-in">Why Us</HashLink>
          <HashLink to="#our-mission" className="header__nav-item slide-in">Our Mission</HashLink>
          <HashLink to="#features" className="header__nav-item slide-in">Features</HashLink>
          <HashLink to="#our-services" className="header__nav-item slide-in">Services</HashLink>
          <HashLink to="#data-security" className="header__nav-item slide-in">Data Security</HashLink>
          <HashLink to="#case-studies" className="header__nav-item slide-in">Case Studies</HashLink>
          <HashLink to="#about" className="header__nav-item slide-in">About Us</HashLink>
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
          <HashLink to="#demo" className="header__cta pulse">Request Demo</HashLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
