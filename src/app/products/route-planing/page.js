import React from 'react';
import Layout from '@/components/layout/Layout';
import RoutePlanningHero from '@/components/products/route-planing/RoutePlanningHero';
import RoutePlanningServices from '@/components/products/route-planing/RoutePlanningServices';
import RoutePlanningSafety from '@/components/products/route-planing/RoutePlanningSafety';
import RoutePlanningIntelligent from '@/components/products/route-planing/RoutePlanningIntelligent';
import '@/assets/css/animation.css';

export const metadata = {
	title: 'Route Planning - SecuFleet',
	description: 'Advanced route planning to optimize delivery routes, reduce fuel costs, and improve fleet efficiency.',
}

const RoutePlanningPage = () => {
  return (
    <Layout>
      <RoutePlanningHero />
      <RoutePlanningServices />
      <RoutePlanningSafety />
      <RoutePlanningIntelligent />
    </Layout>
  );
};

export default RoutePlanningPage; 