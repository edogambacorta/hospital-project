import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const OurServices: React.FC = () => {
  const services: Service[] = [
    {
      title: "AI-Powered Diagnostics",
      description: "Leverage advanced machine learning algorithms to assist in accurate and rapid disease diagnosis.",
      icon: "🔬"
    },
    {
      title: "Intelligent Patient Monitoring",
      description: "Real-time monitoring and predictive analytics for improved patient care and early intervention.",
      icon: "📊"
    },
    {
      title: "Automated Administrative Tasks",
      description: "Streamline hospital operations with AI-driven automation of routine administrative processes.",
      icon: "🤖"
    },
    {
      title: "Personalized Treatment Plans",
      description: "Utilize AI to create tailored treatment plans based on individual patient data and medical history.",
      icon: "📋"
    },
    {
      title: "Predictive Resource Management",
      description: "Optimize resource allocation and staffing with AI-powered predictive analytics.",
      icon: "📈"
    },
    {
      title: "Secure Health Data Management",
      description: "Ensure patient data privacy and security with advanced AI-driven encryption and access control.",
      icon: "🔒"
    }
  ];

  return (
    <section className="our-services">
      <div className="container">
        <h2>Expertise That Drives Quality</h2>
        <p className="section-description">With deep expertise in AI and healthcare, we deliver quality solutions that drive success and exceed industry standards consistently.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
