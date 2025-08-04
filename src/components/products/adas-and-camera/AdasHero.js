"use client";

import React from 'react';

const AdasHero = () => {
  return (
    <div className="hero-section">
      <video 
        className="adasVD" 
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
        <source src="/assets/videos/animationCropped.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default AdasHero; 