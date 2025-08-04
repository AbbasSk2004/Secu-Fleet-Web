import React from 'react';
import Layout from '@/components/layout/Layout';
import ScheduleSection from '@/components/products/gps-tracking/ScheduleSection';
import ServiceSection from '@/components/products/gps-tracking/ServiceSection';
import AboutSection from '@/components/products/gps-tracking/AboutSection';
import AnalyticsSection from '@/components/products/gps-tracking/AnalyticsSection';
import '@/assets/css/products.css';

export const metadata = {
  title: 'GPS Tracking - SecuFleet',
  description: 'Advanced GPS tracking solutions with real-time location monitoring, route optimization, and comprehensive fleet analytics.',
  keywords: 'GPS tracking, real-time location, fleet monitoring, route optimization, telematics, vehicle tracking',
};

export default function GPSTrackingPage() {
  return (
    <Layout>
      <video className="gpsBackVd" autoPlay muted loop>
        <source src="/assets/videos/Animation 5.mp4" />
      </video>
      
      <ScheduleSection />
      <ServiceSection />
      <AboutSection />
      <AnalyticsSection />
    </Layout>
  );
} 