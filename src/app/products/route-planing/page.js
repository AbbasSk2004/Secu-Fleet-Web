"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import RoutePlanningHero from '@/components/products/route-planing/RoutePlanningHero';
import RoutePlanningSchedule from '@/components/products/route-planing/RoutePlanningSchedule';
import RoutePlanningServices from '@/components/products/route-planing/RoutePlanningServices';
import RoutePlanningSafety from '@/components/products/route-planing/RoutePlanningSafety';
import RoutePlanningIntelligent from '@/components/products/route-planing/RoutePlanningIntelligent';
import '@/assets/css/products.css';
import '@/assets/css/animation.css';
const RoutePlanningPage = () => {
  return (
    <Layout>
      <RoutePlanningHero />
      <RoutePlanningSchedule />
      <RoutePlanningServices />
      <RoutePlanningSafety />
      <RoutePlanningIntelligent />
    </Layout>
  );
};

export default RoutePlanningPage; 