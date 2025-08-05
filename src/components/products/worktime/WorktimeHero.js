"use client";

import React from 'react';

const WorktimeHero = () => {
  return (
    <video 
      className="workBack" 
      autoPlay 
      loop 
      muted
      suppressHydrationWarning
      style={{
        objectFit: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        animation: 'bounce-in-right 0.8s ease-in-out both'
      }}
    >
      <source src="/assets/videos/Animation 5.mp4" type="video/mp4" />
    </video>
  );
};

export default WorktimeHero; 