'use client';
import React from 'react';
import '../../../assets/css/products/digital-reports/hero.css';

const HeroSection = () => {
  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.querySelector('.digital-reports-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="digitalBack">
      <div className="hero-content">
        <h1 className="hero-title">
          Digital Reports
        </h1>
        <h2 className="hero-subtitle">
          Lightweight & Mobile-Optimized Fleet Analytics
        </h2>
        <p className="hero-description">
          Streamline your fleet operations with intelligent digital reporting. 
          Our mobile-optimized platform delivers comprehensive analytics, 
          lightweight formats, and minimal archiving for seamless user experiences.
        </p>
        <a href="#services" className="hero-cta" onClick={scrollToServices}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HeroSection; 