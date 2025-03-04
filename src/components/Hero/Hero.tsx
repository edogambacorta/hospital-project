import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [titleRef, subtitleRef, ctaRef, scrollRef];
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero__container">
        <h1 ref={titleRef} className="hero__title">
          <span className="hero__title-main">AI-Powered Patient Data Management</span>
          <span className="hero__title-sub">Beyond<span className="highlight">✦</span>Limits</span>
        </h1>
        <p ref={subtitleRef} className="hero__subtitle">
          Healthcare services at your fingertips, Pause or cancel anytime.
        </p>
        <div ref={ctaRef} className="hero__cta-container">
          <Link to="/#why-us" className="hero__cta">Learn More</Link>
        </div>
        <div className="hero__featured">
          <p>Our services are featured on</p>
          <div className="hero__logos">
            {/* Add your hospital or healthcare logos here */}
          </div>
        </div>
        <a ref={scrollRef} href="#why-us" className="hero__scroll-down">
          <span>Scroll Down</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
