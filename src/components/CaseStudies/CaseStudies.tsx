import React from 'react';

interface CaseStudiesProps {
  id?: string;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ id }) => {
  const caseStudies = [
    {
      id: 1,
      title: "Streamlining Patient Data at Zurich General Hospital",
      description: "How SwissHealthAI reduced administrative workload by 40% and improved patient care coordination.",
      image: "/images/case-study-1.jpg",
      results: ["40% reduction in administrative workload", "Improved patient care coordination", "Faster decision-making process"]
    },
    {
      id: 2,
      title: "Enhancing Research Capabilities at Basel University Hospital",
      description: "SwissHealthAI's impact on accelerating medical research through efficient data management and analysis.",
      image: "/images/case-study-2.jpg",
      results: ["50% faster data analysis", "Improved collaboration between researchers", "More accurate research outcomes"]
    },
    {
      id: 3,
      title: "Improving Patient Outcomes in Geneva's Clinics Network",
      description: "How our AI-driven insights led to a 25% reduction in hospital readmissions.",
      image: "/images/case-study-3.jpg",
      results: ["25% reduction in hospital readmissions", "Improved patient follow-up process", "Enhanced predictive care capabilities"]
    }
  ];

  return (
    <section id={id} className="case-studies">
      <div className="container">
        <h2>Case Studies</h2>
        <p className="case-studies-intro">Discover how SwissHealthAI has transformed patient data management for healthcare institutions across Switzerland.</p>
        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              <img src={study.image} alt={study.title} />
              <div className="case-study-content">
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <ul>
                  {study.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
