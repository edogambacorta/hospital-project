import React from 'react';
import { Link } from 'react-router-dom';

interface OurMissionProps {
  id?: string;
}

const OurMission: React.FC<OurMissionProps> = ({ id }) => {
  return (
    <section id={id} className="our-mission">
      <div className="container">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <p className="mission-statement">
            We drive hospitals to the forefront of the industry through comprehensive AI automation.
          </p>
          <p className="mission-description">
            Our mission is to create intelligent, enduring solutions that elevate patient care, streamline operations, and empower healthcare professionals. We leverage cutting-edge AI technology to transform every aspect of hospital management, ensuring efficiency, accuracy, and exceptional care delivery.
          </p>
          <Link to="/contact" className="cta-button">Book A Call</Link>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
