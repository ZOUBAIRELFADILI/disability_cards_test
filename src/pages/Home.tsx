import React from 'react';
import Hero from '../components/Hero';
import CardShowcase from '../components/CardShowcase';
import ServicesOverview from '../components/ServicesOverview';
import Partners from '../components/PartnersSection';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <CardShowcase />
      <ServicesOverview />
      <Partners />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;