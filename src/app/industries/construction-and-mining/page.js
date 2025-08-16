import React from 'react';
import Layout from '../../../components/layout/Layout';
import Hero from '../../../components/industries/construction-and-mining/Hero';
import AboutMining from '../../../components/industries/construction-and-mining/AboutMining';
import FeatureGroupBleAccessories from '../../../components/industries/construction-and-mining/FeatureGroupBleAccessories';
import FeatureGroupGpsConstruction from '../../../components/industries/construction-and-mining/FeatureGroupGpsConstruction';
import FeatureGroupBeaconTools from '../../../components/industries/construction-and-mining/FeatureGroupBeaconTools';
import FeatureGroupMiningControl from '../../../components/industries/construction-and-mining/FeatureGroupMiningControl';

export const metadata = {
	title: 'Construction & Mining | SecuFleet Industries',
	description: 'Fleet solutions tailored for construction and mining: asset tracking, safety, and real-time operational control.',
}

const ConstructionAndMiningPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <AboutMining />
        <FeatureGroupBleAccessories />
        <FeatureGroupGpsConstruction />
        <FeatureGroupBeaconTools />
        <FeatureGroupMiningControl />
      </Layout>
    </>
  );
};

export default ConstructionAndMiningPage;
