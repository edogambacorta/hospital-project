import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
          el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 200);
      }
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 ref={titleRef} className="hero__title">AI-Powered Patient Data Management</h1>
        <p ref={subtitleRef} className="hero__subtitle">Streamline healthcare reporting for Swiss practitioners and hospitals</p>
        <Link ref={ctaRef} to="/demo" className="hero__cta">Request a Demo</Link>
        <div className="hero__features">
          <div className="hero__feature">
            <i className="fas fa-chart-line"></i>
            <span>Efficient Data Analysis</span>
          </div>
          <div className="hero__feature">
            <i className="fas fa-lock"></i>
            <span>Swiss Data Protection Compliant</span>
          </div>
          <div className="hero__feature">
            <i className="fas fa-language"></i>
            <span>Multi-language Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
