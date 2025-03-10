import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  id?: string;
}

const Services: React.FC<ServicesProps> = ({ id }) => {
  const services: Service[] = [
    {
      title: "Intelligent Data Extraction",
      description: "Automatically extract and categorize patient data from various sources, reducing manual data entry and errors.",
      icon: "📊"
    },
    {
      title: "Multi-lingual Processing",
      description: "Process and analyze patient data in German, French, Italian, and English, catering to Switzerland's diverse linguistic landscape.",
      icon: "🌐"
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive, customizable reports for healthcare professionals, saving time and improving decision-making.",
      icon: "📄"
    },
    {
      title: "Secure Data Integration",
      description: "Seamlessly integrate with existing hospital systems while ensuring the highest level of data security and privacy.",
      icon: "🔒"
    },
    {
      title: "Predictive Analytics",
      description: "Utilize AI-driven predictive models to identify potential health risks and optimize patient care strategies.",
      icon: "🔮"
    },
    {
      title: "Compliance Management",
      description: "Stay up-to-date with Swiss healthcare regulations through automated compliance checks and updates.",
      icon: "✅"
    }
  ];

  return (
    <section id={id} className="services">
      <div className="container">
        <h2>SwissHealthAI Services</h2>
        <p className="section-description">Our AI-powered services streamline patient data management, enhancing efficiency and accuracy in Swiss healthcare institutions.</p>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
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

export default Services;
