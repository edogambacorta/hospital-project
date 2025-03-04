import React from 'react';
import Hero from '../../components/Hero/Hero';
import WhyUs from '../../components/WhyUs/WhyUs';
import OurMission from '../../components/OurMission/OurMission';
import RecentWorks from '../../components/RecentWorks/RecentWorks';
import OurServices from '../../components/OurServices/OurServices';
import Pricing from '../../components/Pricing/Pricing';
import Testimonials from '../../components/Testimonials/Testimonials';
import Team from '../../components/Team/Team';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <WhyUs />
      <OurMission />
      <RecentWorks />
      <OurServices />
      <Pricing />
      <Testimonials />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
