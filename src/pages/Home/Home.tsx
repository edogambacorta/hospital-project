import React from 'react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import WhyUs from '../../components/WhyUs/WhyUs';
import OurServices from '../../components/OurServices/OurServices';
import Features from '../../components/Features/Features';
import DataSecurity from '../../components/DataSecurity/DataSecurity';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import About from '../../components/About/About';
import FAQ from '../../components/FAQ/FAQ';
import Demo from '../../components/Demo/Demo';
import OurMission from '../../components/OurMission/OurMission';
import RecentWorks from '../../components/RecentWorks/RecentWorks';
import Pricing from '../../components/Pricing/Pricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import Team from '../../components/Team/Team';

const Home: React.FC = () => {
  return (
    <div className="home">
      <SEO 
        title="SwissHealthAI - AI-Powered Patient Data Management"
        description="SwissHealthAI revolutionizes healthcare with AI-powered patient data management. Discover our features, case studies, and request a demo to transform your healthcare institution."
      />
      <Hero id="top" />
      <WhyUs id="why-us" />
      <OurMission id="our-mission" />
      <Features id="features" />
      <OurServices id="our-services" />
      <RecentWorks id="recent-works" />
      <DataSecurity id="data-security" />
      <CaseStudies id="case-studies" />
      <Pricing id="pricing" />
      <Testimonials id="testimonials" />
      <Team id="team" />
      <About id="about" />
      <FAQ id="faq" />
      <Demo id="demo" />
    </div>
  );
};

export default Home;
