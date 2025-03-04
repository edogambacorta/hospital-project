import React from 'react';

interface DataSecurityProps {
  id?: string;
}

const DataSecurity: React.FC<DataSecurityProps> = ({ id }) => {
  const securityFeatures = [
    {
      icon: '🔒',
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.'
    },
    {
      icon: '🇨🇭',
      title: 'Swiss Data Centers',
      description: 'Your data is stored exclusively in Swiss data centers, ensuring compliance with strict Swiss data protection laws.'
    },
    {
      icon: '🔐',
      title: 'Access Control',
      description: 'Robust access control mechanisms ensure that only authorized personnel can access sensitive information.'
    },
    {
      icon: '🔍',
      title: 'Regular Audits',
      description: 'We conduct regular security audits and penetration testing to identify and address potential vulnerabilities.'
    }
  ];

  return (
    <section id={id} className="data-security">
      <div className="container">
        <h2>Data Security</h2>
        <p className="security-intro">At SwissHealthAI, we prioritize the security and privacy of your data. Our robust security measures and compliance with Swiss data protection laws ensure that your sensitive healthcare information is always protected.</p>
        <div className="security-features">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="security-feature">
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

export default DataSecurity;
