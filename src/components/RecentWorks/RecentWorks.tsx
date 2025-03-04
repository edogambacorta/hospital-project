import React from 'react';

interface Work {
  title: string;
  description: string;
  image: string;
  impact: string;
}

interface RecentWorksProps {
  id?: string;
}

const RecentWorks: React.FC<RecentWorksProps> = ({ id }) => {
  const works: Work[] = [
    {
      title: "AI-Powered Patient Triage",
      description: "Implemented an AI system that revolutionized patient triage, reducing wait times and improving care prioritization.",
      image: "/images/patient-triage.jpg",
      impact: "34% reduction in emergency room wait times"
    },
    {
      title: "Predictive Maintenance for Medical Equipment",
      description: "Developed a machine learning model to predict equipment failures, minimizing downtime and reducing maintenance costs.",
      image: "/images/predictive-maintenance.jpg",
      impact: "47% decrease in unexpected equipment downtime"
    },
    {
      title: "Automated Medical Imaging Analysis",
      description: "Created an AI-driven system for rapid analysis of medical images, improving diagnosis speed and accuracy.",
      image: "/images/medical-imaging.jpg",
      impact: "28% increase in early disease detection rates"
    }
  ];

  return (
    <section id={id} className="recent-works">
      <div className="container">
        <h2>Recent Works, Notable Impact</h2>
        <div className="works-grid">
          {works.map((work, index) => (
            <div key={index} className="work-card">
              <img src={work.image} alt={work.title} className="work-image" />
              <div className="work-content">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <div className="work-impact">{work.impact}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
