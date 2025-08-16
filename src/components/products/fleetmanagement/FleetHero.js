import React from 'react';
import Image from 'next/image';

const FleetHero = () => {
  return (
    <a href="https://fleet.activi.link/login/38" target="_blank" rel="noopener noreferrer">
      <div 
        className="fleetBack"
        style={{
          minHeight: "80vh",
          animation: "bounce-in-right 0.8s ease-in-out both",
          position: "relative"
        }}
      >
        <Image
          src="https://i.ibb.co/tPvv0c5/Fleet-Management-103.png"
          alt="Fleet Management"
          fill
          unoptimized
          style={{
            objectPosition: "center 75%",
            objectFit: "fill"
          }}
        />
      </div>
    </a>
  );
};

export default FleetHero; 