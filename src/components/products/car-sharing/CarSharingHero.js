"use client";

import React from 'react';

const CarSharingHero = () => {
  return (
    <div 
      className="carBack"
      style={{
        background: "url('https://i.ibb.co/NW374FV/g-fleet.jpg')",
        backgroundPosition: 'center 60%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        animation: 'bounce-in-right 0.8s ease-in-out both'
      }}
    ></div>
  );
};

export default CarSharingHero; 