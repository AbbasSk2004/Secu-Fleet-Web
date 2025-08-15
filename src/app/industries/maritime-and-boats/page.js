import React from 'react';
import Layout from '../../../components/layout/Layout';
import Hero from '../../../components/industries/maritime-and-boats/Hero';
import SeaTrackingAndMonitoring from '../../../components/industries/maritime-and-boats/SeaTrackingAndMonitoring';
import FishingBoatsTracking from '../../../components/industries/maritime-and-boats/FishingBoatsTracking';
import CharterYachtTheftPrevention from '../../../components/industries/maritime-and-boats/CharterYachtTheftPrevention';
import ComparativeSolutionsTable from '../../../components/industries/maritime-and-boats/ComparativeSolutionsTable';


const MaritimeAndBoatsPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <SeaTrackingAndMonitoring />
        <FishingBoatsTracking />
        <CharterYachtTheftPrevention />
        <ComparativeSolutionsTable />
      </Layout>
    </>
  );
};

export default MaritimeAndBoatsPage;

