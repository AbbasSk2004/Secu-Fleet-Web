import React from 'react';
import Layout from '@/components/layout/Layout';
import FleetHero from '@/components/fleetmanagement/FleetHero';
import FleetSchedule from '@/components/fleetmanagement/FleetSchedule';
import OperationalControl from '@/components/fleetmanagement/OperationalControl';
import SafetyCompliance from '@/components/fleetmanagement/SafetyCompliance';
import EcoFleet from '@/components/fleetmanagement/EcoFleet';
import RealTimeTracking from '@/components/fleetmanagement/RealTimeTracking';
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
        <FleetSchedule />
        <OperationalControl />
        <SafetyCompliance />
        <EcoFleet />
        <RealTimeTracking />
      </div>
    </Layout>
  );
} 