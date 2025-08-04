import React from 'react';
import Layout from '../components/layout/Layout';
import Topbar from '../components/home/Topbar';
import HeroCarousel from '../components/home/HeroCarousel';
import Facts from '../components/home/Facts';
import WhoWeAre from '../components/home/WhoWeAre';
import IndustrySlider from '../components/home/IndustrySlider';
import VideoSection from '../components/home/VideoSection';
import AboutSlider from '../components/home/AboutSlider';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import Quote from '../components/home/Quote';
import FAQ from '../components/home/FAQ';

// Import CSS files needed for home page components

import '../assets/css/index.css';
import '../assets/css/aboutSlider.css';
import '../assets/css/industrySlider.css';
import '../assets/css/faq.css';
import '../assets/css/animation.css';
import '../assets/css/style.css';

const Home = () => {
  return (
    <>
      
      <Layout>
        <HeroCarousel />
        <Facts />
        <WhoWeAre />
        <IndustrySlider />
        <VideoSection />
        <AboutSlider />
        <Features />
        <Services />
        <Quote />
        <FAQ />
      </Layout>
    </>
  );
};

export default Home;
