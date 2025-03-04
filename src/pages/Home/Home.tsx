import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>AI-Powered Hospital Management Tool</h1>
          <p>Streamline patient care with intelligent automation</p>
          <Link to="/contact" className="btn btn-primary">Start Your Free Trial</Link>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>Key Features</h2>
          {/* Add feature list here */}
        </div>
      </section>
      
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          {/* Add steps here */}
        </div>
      </section>
      
      <section className="cta">
        <div className="container">
          <h2>Ready to transform your hospital management?</h2>
          <Link to="/contact" className="btn btn-primary">Start Your Free Trial</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
