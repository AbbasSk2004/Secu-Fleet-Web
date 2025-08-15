import React from 'react';
import Layout from '../../../components/layout/Layout';
import HeroSection from '../../../components/products/digital-reports/HeroSection';
import ServiceSection from '../../../components/products/digital-reports/ServiceSection';
import LightweightFormatsSection from '../../../components/products/digital-reports/LightweightFormatsSection';
import MinimalArchivingSection from '../../../components/products/digital-reports/MinimalArchivingSection';





export const metadata = {
  title: 'Digital Reports - SecuFleet',
  description: 'Optimizing for mobile devices with lightweight reporting formats and minimal archiving for seamless user experiences.',
};

const DigitalReportsPage = () => {
  return (
    <Layout>
      <HeroSection />
     
      <ServiceSection />
      <LightweightFormatsSection />
      <MinimalArchivingSection />
    </Layout>
  );
};

export default DigitalReportsPage; 