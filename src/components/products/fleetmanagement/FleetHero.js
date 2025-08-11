import React from 'react';

const FleetHero = () => {
  return (
    <a href="https://fleet.activi.link/login/38" target="_blank" rel="noopener noreferrer">
      <div 
        className="fleetBack"
        style={{
          background: "url('https://i.ibb.co/tPvv0c5/Fleet-Management-103.png')",
          backgroundPosition: "center 75%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          minHeight: "80vh",
          animation: "bounce-in-right 0.8s ease-in-out both"
        }}
      />
    </a>
  );
};

export default FleetHero; 