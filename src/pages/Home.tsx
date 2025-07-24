import React from 'react';
import Hero from '../components/Hero';
import CardShowcase from '../components/CardShowcase';
import ServicesOverview from '../components/ServicesOverview';
import ApplicationProcess from '../components/ApplicationProcess';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <CardShowcase />
      <ServicesOverview />
      <ApplicationProcess />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;