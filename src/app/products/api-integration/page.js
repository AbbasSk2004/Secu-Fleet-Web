import React from 'react';
import Layout from '@/components/layout/Layout';
import ScheduleSection from '@/components/products/api-integration/ScheduleSection';
import ServiceSection from '@/components/products/api-integration/ServiceSection';
import AboutSection from '@/components/products/api-integration/AboutSection';
import SecuritySection from '@/components/products/api-integration/SecuritySection';
import '@/assets/css/products.css';

export const metadata = {
	title: 'API Integration - SecuFleet',
	description: 'Integrate SecuFleet with your existing systems securely via APIs for analytics, automation, and data synchronization.',
}

export default function APIIntegrationPage() {
  return (
    <Layout>
      <div className="api-integration">
        <div className="apiBack"></div>
        
        <ScheduleSection />
        <ServiceSection />
        <AboutSection />
        <SecuritySection />
      </div>
    </Layout>
  );
} 