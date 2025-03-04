import React from 'react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import WhyUs from '../../components/WhyUs/WhyUs';
import OurServices from '../../components/OurServices/OurServices';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className="home">
      <SEO 
        title="Home"
        description="SwissHealthAI - Revolutionizing healthcare with AI-powered patient data management. Discover how our innovative solutions can transform your healthcare institution."
      />
      <Hero />
      <WhyUs />
      <OurServices />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
