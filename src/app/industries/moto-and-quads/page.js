import React from 'react';
import Layout from '../../../components/layout/Layout';
import Hero from '../../../components/industries/moto-and-quads/Hero';
import OverView from '../../../components/industries/moto-and-quads/OverView';
import BleFeaturs from '../../../components/industries/moto-and-quads/BleFeaturs';
import MiningStats from '../../../components/industries/moto-and-quads/MiningStats';

const MotoAndQuadsPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <OverView />
        <BleFeaturs />
        <MiningStats />
      </Layout>
    </>
  );
};

export default MotoAndQuadsPage;

