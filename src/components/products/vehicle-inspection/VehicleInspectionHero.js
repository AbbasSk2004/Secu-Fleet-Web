"use client";

import React from 'react';
import Image from 'next/image';
import '../../../assets/css/products/vehicle-inspection/vehicle-inspection-hero.css';
import '../../../assets/css/animation.css';

const VehicleInspectionHero = () => {
  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.querySelector('.vehicle-inspection-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="vehicle-inspection-hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Advanced Vehicle Inspection
        </h1>
        <h2 className="hero-subtitle">
          AI-Powered Fleet Safety & Compliance
        </h2>
        <p className="hero-description">
          Transform your fleet operations with cutting-edge vehicle inspection technology. 
          Our AI-driven system ensures comprehensive safety checks, regulatory compliance, 
          and real-time monitoring for optimal fleet performance.
        </p>
        <a href="#services" className="hero-cta" onClick={scrollToServices}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default VehicleInspectionHero; 