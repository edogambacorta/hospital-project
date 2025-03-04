import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl }) => {
  return (
    <Helmet>
      <title>{title} | SwissHealthAI</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={`${title} | SwissHealthAI`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={`${title} | SwissHealthAI`} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
