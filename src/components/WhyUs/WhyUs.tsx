import React from 'react';

interface WhyUsProps {
  id?: string;
}

const WhyUs: React.FC<WhyUsProps> = ({ id }) => {
  const benefits = [
    {
      title: 'Swiss Data Security',
      description: 'Our AI tool adheres to strict Swiss data protection laws, ensuring the highest level of security for patient information.',
      icon: '🔒'
    },
    {
      title: 'Efficiency Boost',
      description: 'Streamline patient data management and reporting, saving time and reducing errors for healthcare professionals.',
      icon: '⚡'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Stay compliant with Swiss healthcare regulations through our continuously updated AI-driven system.',
      icon: '✅'
    },
    {
      title: 'Multi-language Support',
      description: "Seamlessly operate in German, French, Italian, and English, catering to Switzerland's multilingual healthcare environment.",
      icon: '🌐'
    }
  ];

  return (
    <section id={id} className="why-us">
      <div className="container">
        <h2>Why Choose SwissHealthAI?</h2>
        <p className="subtitle">Experience the future of healthcare data management in Switzerland</p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
