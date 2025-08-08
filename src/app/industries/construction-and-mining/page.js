import React from 'react';
import Layout from '../../../components/layout/Layout';
import Hero from '../../../components/industries/construction-and-mining/Hero';
import AboutMining from '../../../components/industries/construction-and-mining/AboutMining';
import FeatureGroupBleAccessories from '../../../components/industries/construction-and-mining/FeatureGroupBleAccessories';
import FeatureGroupGpsConstruction from '../../../components/industries/construction-and-mining/FeatureGroupGpsConstruction';
import FeatureGroupBeaconTools from '../../../components/industries/construction-and-mining/FeatureGroupBeaconTools';
import FeatureGroupMiningControl from '../../../components/industries/construction-and-mining/FeatureGroupMiningControl';

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
