import React from 'react';
import Layout from '@/components/layout/Layout';
import VehicleInspectionHero from '@/components/products/vehicle-inspection/VehicleInspectionHero';
import VehicleInspectionServices from '@/components/products/vehicle-inspection/VehicleInspectionServices';
import VehicleInspectionAbout from '@/components/products/vehicle-inspection/VehicleInspectionAbout';
import VehicleInspectionMaintenance from '@/components/products/vehicle-inspection/VehicleInspectionMaintenance';
import '@/assets/css/animation.css';

export const metadata = {
	title: 'Vehicle Inspection - SecuFleet',
	description: 'Digitize vehicle inspection workflows with checklists, maintenance schedules, and real-time compliance.',
}

const VehicleInspectionPage = () => {
  return (
    <Layout>
      <VehicleInspectionHero />
      <VehicleInspectionServices />
      <VehicleInspectionAbout />
      <VehicleInspectionMaintenance />
    </Layout>
  );
};

export default VehicleInspectionPage; 