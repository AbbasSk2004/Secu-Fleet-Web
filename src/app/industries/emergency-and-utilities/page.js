import React from 'react';
import Layout from '../../../components/layout/Layout';
import Hero from '../../../components/industries/emergency-and-utilities/Hero';
import About from '../../../components/industries/emergency-and-utilities/About';
import Features from '../../../components/industries/emergency-and-utilities/Features';
import LiveStats from '../../../components/industries/emergency-and-utilities/LiveStats';
import ProductAndSolutions from '../../../components/industries/emergency-and-utilities/ProductAndSolutions';




const EmergencyAndUtilitiesPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Features />
        <LiveStats />
        <ProductAndSolutions />
      </Layout>
    </>
  );
};

export default EmergencyAndUtilitiesPage;

