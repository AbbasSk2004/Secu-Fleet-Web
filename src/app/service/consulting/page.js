import React from 'react';
import Layout from '../../../components/layout/Layout';
import ConsultingHero from '../../../components/service/consulting/ConsultingHero';
import ResourcesSection from '../../../components/service/consulting/ResourcesSection';
import ServicesGrid from '../../../components/service/consulting/ServicesGrid';
import GrowthSection from '../../../components/service/consulting/GrowthSection';
import StrategySection from '../../../components/service/consulting/StrategySection';
import FeaturesGrid from '../../../components/service/consulting/FeaturesGrid';
import ConsultingExpertise from '../../../components/service/consulting/ConsultingExpertise';

// Import CSS files
import '../../../assets/css/consulting.css';
import '../../../assets/css/style.css';
import '../../../assets/css/animation.css';

const ConsultingPage = () => {
  return (
    <>
      <Layout>
        <ConsultingHero />
        <ResourcesSection />
        <ServicesGrid />
        <GrowthSection />
        <StrategySection />
        <FeaturesGrid />
        <ConsultingExpertise />
      </Layout>
    </>
  );
};

export default ConsultingPage; 