import React from 'react';
import SEO from '../../components/SEO/SEO';

const DataSecurity: React.FC = () => {
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
    <div className="data-security-page">
      <SEO 
        title="Data Security"
        description="Learn about SwissHealthAI's robust data security measures. We prioritize the protection of your sensitive healthcare information with end-to-end encryption, Swiss data centers, and regular security audits."
      />
      <div className="container">
        <h1>Data Security</h1>
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
    </div>
  );
};

export default DataSecurity;
