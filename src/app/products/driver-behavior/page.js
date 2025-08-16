import React from 'react';
import Layout from '@/components/layout/Layout';
import ScheduleSection from '@/components/products/driver-behavior/ScheduleSection';
import DrivingPerformanceSection from '@/components/products/driver-behavior/DrivingPerformanceSection';
import DriverMonitoringSection from '@/components/products/driver-behavior/DriverMonitoringSection';
import DriverFeedbackSection from '@/components/products/driver-behavior/DriverFeedbackSection';
import '@/assets/css/products.css';

export const metadata = {
	title: 'Driver Behavior - SecuFleet',
	description: 'Improve safety and efficiency with driver behavior monitoring, feedback, and analytics.',
}

export default function DriverBehaviorPage() {
  return (
    <Layout>
      <div className="driverBack"></div>
      
      <ScheduleSection />
      <DrivingPerformanceSection />
      <DriverMonitoringSection />
      <DriverFeedbackSection />
    </Layout>
  );
} 