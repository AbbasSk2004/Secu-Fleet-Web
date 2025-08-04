"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import ScheduleSection from '@/components/products/sensor-monitoring/ScheduleSection';
import SensorIntegrationSection from '@/components/products/sensor-monitoring/SensorIntegrationSection';
import DataLoggingSection from '@/components/products/sensor-monitoring/DataLoggingSection';
import ComplianceSection from '@/components/products/sensor-monitoring/ComplianceSection';
import '@/assets/css/products.css';
import '@/assets/css/animation.css';

export default function SensorMonitoringPage() {
  return (
    <Layout>
      <div 
        className="sensorBack"
        style={{
          background: "url('https://i.ibb.co/9V59135/Fleet-Management-69.jpg')",
          backgroundPosition: "center 60%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          animation: "bounce-in-right 0.8s ease-in-out both"
        }}
      ></div>
      
      <ScheduleSection />
      <SensorIntegrationSection />
      <DataLoggingSection />
      <ComplianceSection />
    </Layout>
  );
} 