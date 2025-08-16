import React from 'react';
import Image from 'next/image';
import '../../assets/css/aboutUS.css';
import '../../assets/css/animation.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <Image
          src="/assets/images/aboutUs/background.png"
          alt="About Us Background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-content">
        <h1>About Us<br />At SecuFleet</h1>
      </div>
    </section>
  );
};

export default Hero; 