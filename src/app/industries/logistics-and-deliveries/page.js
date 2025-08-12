import React from 'react';
import Layout from '../../../components/layout/Layout';
import Hero from '../../../components/industries/logistics-and-deliveries/Hero';
import OverView from '../../../components/industries/logistics-and-deliveries/OverView';
import ServicesAndSolutions from '../../../components/industries/logistics-and-deliveries/ServicesAndSolutions';
import DetailedService from '../../../components/industries/logistics-and-deliveries/DetailedService';
import Features from '../../../components/industries/logistics-and-deliveries/Features';
import Technology from '../../../components/industries/logistics-and-deliveries/Technology';


const LogisticsAndDeliveriesPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <OverView />
        <ServicesAndSolutions />
        <DetailedService />
        <Features />
        <Technology />
        
      </Layout>
    </>
  );
};

export default LogisticsAndDeliveriesPage;

