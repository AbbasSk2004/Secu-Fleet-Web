import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/about/Hero';
import AboutSection from '../../components/about/AboutSection';
import Part2 from '../../components/about/Part2';
import Part3 from '../../components/about/Part3';
import '../../assets/css/aboutUS.css';
import '../../assets/css/animation.css';

export const metadata = {
	title: 'About SecuFleet',
	description: 'Learn about SecuFleet – our mission, values, and the team delivering leading fleet management and telematics solutions.',
	keywords: 'About SecuFleet, telematics company, fleet management company, SecuFleet team, mission and values',
}

const AboutPage = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <Part2 />
      <Part3 />
    </Layout>
  );
};

export default AboutPage; 