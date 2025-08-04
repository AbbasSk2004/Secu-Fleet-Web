"use client";

import React from 'react';

const VehicleInspectionHero = () => {
  return (
    <div className="hero-section">
      <video 
        className="vehicleBackVd" 
        muted 
        autoPlay 
        loop
        style={{
          objectFit: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '80vh'
        }}
      >
        <source src="/assets/images/Animation 5.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VehicleInspectionHero; 