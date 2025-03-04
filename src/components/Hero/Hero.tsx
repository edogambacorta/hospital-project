import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">AI-Powered Hospital Management</h1>
        <p className="hero__subtitle">Streamline patient care with intelligent automation</p>
        <Link to="/contact" className="hero__cta">Start Your Free Trial</Link>
        <div className="hero__featured">
          <p>Our services are featured on</p>
          <div className="hero__logos">
            {/* Add placeholder logos here */}
            <img src="/placeholder-logo1.svg" alt="Featured Logo 1" />
            <img src="/placeholder-logo2.svg" alt="Featured Logo 2" />
            <img src="/placeholder-logo3.svg" alt="Featured Logo 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
