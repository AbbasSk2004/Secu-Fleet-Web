import React from 'react';
import Layout from '../components/layout/Layout';
import HeroCarousel from '../components/home/HeroCarousel';
import Facts from '../components/home/Facts';
import WhoWeAre from '../components/home/WhoWeAre';
import IndustrySlider from '../components/home/IndustrySlider';
import VideoSection from '../components/home/VideoSection';
import AboutSlider from '../components/home/AboutSlider';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Quote from '../components/home/Quote';
import FAQ from '../components/home/FAQ';
import Blogs from '../components/home/Blogs';

// Import CSS files needed for home page components
// Load base styles first, then custom component styles last to ensure proper overrides
import '../assets/css/index.css';
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
        <Testimonials />
        <Quote />
        <FAQ />
        <Blogs />
      </Layout>
    </>
  );
};

export default Home;
