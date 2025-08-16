'use client';
import React from 'react';
import '../../assets/css/home/hero.css';

const HeroCarousel = () => {
  return (
    <div className="container-fluid position-relative p-0 hero-carousel-container">
      {/* slider */}
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="hero-video-wrapper">
              <video 
                className="hero-video"
                autoPlay 
                muted 
                loop 
                playsInline
                suppressHydrationWarning
              >
                <source src="/assets/videos/secuhome.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel; 