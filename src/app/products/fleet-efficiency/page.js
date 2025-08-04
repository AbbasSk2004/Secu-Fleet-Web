"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import ScheduleSection from '@/components/products/fleet-efficiency/ScheduleSection';
import OptimizedOperationsSection from '@/components/products/fleet-efficiency/OptimizedOperationsSection';
import FuelEfficiencySection from '@/components/products/fleet-efficiency/FuelEfficiencySection';
import DataDrivenSection from '@/components/products/fleet-efficiency/DataDrivenSection';
import EcoFriendlySection from '@/components/products/fleet-efficiency/EcoFriendlySection';
import '@/assets/css/products.css';
import '@/assets/css/animation.css';

export default function FleetEfficiencyPage() {
  return (
    <Layout>
      <div 
        className="fleeteffBack"
        style={{
          background: "url('https://i.ibb.co/KmVqS95/Fleet-Management-66.webp')",
          backgroundPosition: "center 85%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          animation: "bounce-in-right 0.8s ease-in-out both"
        }}
      ></div>
      
      <ScheduleSection />
      <OptimizedOperationsSection />
      <FuelEfficiencySection />
      <DataDrivenSection />
      <EcoFriendlySection />
    </Layout>
  );
} 