import React from 'react';

interface FeaturesProps {
  id?: string;
}

const Features: React.FC<FeaturesProps> = ({ id }) => {
  const features = [
    {
      title: "Intelligent Data Extraction",
      description: "Our AI algorithms accurately extract and categorize patient data from various sources, reducing manual data entry and errors.",
      icon: "🧠"
    },
    {
      title: "Multi-lingual Processing",
      description: "Process and analyze patient data in German, French, Italian, and English, catering to Switzerland's diverse linguistic landscape.",
      icon: "🌐"
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive, customizable reports for healthcare professionals, saving time and improving decision-making.",
      icon: "📊"
    },
    {
      title: "Secure Data Integration",
      description: "Seamlessly integrate with existing hospital systems while ensuring the highest level of data security and privacy.",
      icon: "🔒"
    },
    {
      title: "Predictive Analytics",
      description: "Utilize AI-driven predictive models to identify potential health risks and optimize patient care strategies.",
      icon: "📈"
    },
    {
      title: "Compliance Management",
      description: "Stay up-to-date with Swiss healthcare regulations through automated compliance checks and updates.",
      icon: "✅"
    }
  ];

  return (
    <section id={id} className="features">
      <div className="container">
        <h2>SwissHealthAI Features</h2>
        <p className="features-intro">Discover the powerful features of our AI-driven patient data management solution:</p>
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
