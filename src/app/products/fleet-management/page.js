import React from 'react';
import Layout from '@/components/layout/Layout';
import FleetHero from '@/components/products/fleetmanagement/FleetHero';
import FleetSchedule from '@/components/products/fleetmanagement/FleetSchedule';
import OperationalControl from '@/components/products/fleetmanagement/OperationalControl';
import SafetyCompliance from '@/components/products/fleetmanagement/SafetyCompliance';
import EcoFleet from '@/components/products/fleetmanagement/EcoFleet';
import RealTimeTracking from '@/components/products/fleetmanagement/RealTimeTracking';
import '@/assets/css/products.css';
import '@/assets/css/animation.css';

export const metadata = {
  title: 'Fleet Management - SecuFleet',
  description: 'Comprehensive fleet management solutions including operational control, safety compliance, eco-fleet initiatives, and real-time tracking with advanced analytics.',
  keywords: 'fleet management, GPS tracking, driver monitoring, ADAS, safety compliance, eco-fleet, sustainability, telematics, fleet analytics',
};

export default function FleetManagementPage() {
  return (
    <Layout>
      <div className="fleet-management-page" style={{ overflow: 'hidden' }}>
        <FleetHero />
        
        <OperationalControl />
        <SafetyCompliance />
        <EcoFleet />
        <RealTimeTracking />
      </div>
    </Layout>
  );
} 