import React from 'react';
import Layout from '@/components/layout/Layout';
import CarSharingHero from '@/components/products/car-sharing/CarSharingHero';
import CarSharingSchedule from '@/components/products/car-sharing/CarSharingSchedule';
import CarSharingServices from '@/components/products/car-sharing/CarSharingServices';
import CarSharingAbout from '@/components/products/car-sharing/CarSharingAbout';
import CarSharingAnalytics from '@/components/products/car-sharing/CarSharingAnalytics';
import '@/assets/css/products.css';
import '@/assets/css/animation.css';

export const metadata = {
	title: 'Car Sharing - SecuFleet',
	description: 'Manage shared vehicles efficiently with scheduling, tracking, and analytics for car sharing fleets.',
}

const CarSharingPage = () => {
  return (
    <Layout>
      <CarSharingHero />
      <CarSharingSchedule />
      <CarSharingServices />
      <CarSharingAbout />
      <CarSharingAnalytics />
    </Layout>
  );
};

export default CarSharingPage; 