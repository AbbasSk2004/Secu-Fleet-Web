import React from 'react';
import Layout from '@/components/layout/Layout';
import AdasHero from '@/components/products/adas-and-camera/AdasHero';
import AdasSchedule from '@/components/products/adas-and-camera/AdasSchedule';
import AdasSafetySection from '@/components/products/adas-and-camera/AdasSafetySection';
import AdasComplianceSection from '@/components/products/adas-and-camera/AdasComplianceSection';
import AdasIntegrationSection from '@/components/products/adas-and-camera/AdasIntegrationSection';
import '@/assets/css/products.css';
import '@/assets/css/animation.css';

export const metadata = {
	title: 'ADAS & Camera Systems - SecuFleet',
	description: 'Enhance fleet safety with ADAS and camera solutions: monitoring, compliance, integration, and analytics.',
}

const AdasAndCameraPage = () => {
  return (
    <Layout>
      <AdasHero />
      <AdasSchedule />
      <AdasSafetySection />
      <AdasComplianceSection />
      <AdasIntegrationSection />
    </Layout>
  );
};

export default AdasAndCameraPage; 