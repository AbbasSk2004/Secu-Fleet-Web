import React from 'react';

const HeroSection = () => {
  return (
    <div 
      className="digitalBack"
      style={{
        background: 'url("https://i.ibb.co/pnKkCyT/Fleet-Management-95.png")',
        backgroundPosition: 'center 25%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        animation: 'bounce-in-right 0.8s ease-in-out both'
      }}
    />
  );
};

export default HeroSection; 