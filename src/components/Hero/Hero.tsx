import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    const elements = [titleRef, subtitleRef, ctaRef];
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} id={id} className="hero">
      <div className="hero__container">
        <h1 ref={titleRef} className="hero__title">
          <span className="hero__title-line">AI Powered</span>
          <span className="hero__title-line">Beyond<span className="highlight">✦</span>Limits</span>
          <span className="hero__title-line">Patient Reporting</span>
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
      </div>
    </section>
  );
};

export default Hero;
