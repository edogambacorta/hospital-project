import React from 'react';
import SEO from '../../components/SEO/SEO';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sophie Mueller",
      role: "Founder & CEO",
      image: "/images/team/sophie-mueller.jpg"
    },
    {
      name: "Marc Dubois",
      role: "CTO",
      image: "/images/team/marc-dubois.jpg"
    },
    {
      name: "Dr. Elena Rossi",
      role: "Chief Medical Officer",
      image: "/images/team/elena-rossi.jpg"
    },
    {
      name: "Thomas Keller",
      role: "Head of Data Security",
      image: "/images/team/thomas-keller.jpg"
    }
  ];

  return (
    <div className="about">
      <SEO 
        title="About Us"
        description="Learn about SwissHealthAI, a leading provider of AI-powered patient data management solutions in Switzerland. Discover our mission, history, and meet our expert team."
      />
      <h1>About SwissHealthAI</h1>
      <div className="about-content">
        <p>
          SwissHealthAI is a leading provider of AI-powered patient data management solutions for healthcare institutions in Switzerland. Our mission is to streamline healthcare processes, improve patient outcomes, and ensure the highest standards of data security and privacy.
        </p>
        <p>
          Founded in 2022 by a team of healthcare professionals and AI experts, SwissHealthAI combines cutting-edge artificial intelligence technology with a deep understanding of the Swiss healthcare system. We are committed to revolutionizing patient data management while adhering to the strictest data protection regulations.
        </p>
        <p>
          Our team of dedicated professionals works tirelessly to develop and improve our AI solutions, ensuring that healthcare providers across Switzerland can focus on what matters most: providing exceptional patient care.
        </p>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
