import React from 'react';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      title: 'Innovative Approach',
      description: 'Our AI-driven solutions reflect a unique character and differentiate your hospital in a crowded healthcare marketplace.',
      icon: '🚀'
    },
    {
      title: 'Seamless Experience',
      description: 'Enjoy a seamless user experience across all devices, ensuring every interaction enhances patient care and staff efficiency.',
      icon: '🔄'
    },
    {
      title: 'Ongoing Partnership',
      description: "We're not just providers; we're partners who offer ongoing support and updates to keep your hospital at the forefront of AI innovation.",
      icon: '🤝'
    }
  ];

  return (
    <section className="why-us">
      <div className="container">
        <h2>Experience the Benefits of Our Expertise</h2>
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
