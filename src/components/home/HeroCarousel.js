import React from 'react';

const HeroCarousel = () => {
  return (
    <div className="container-fluid position-relative p-0">
      {/* HTML */}
      <div className="whatsapp-icon">
        <a href="https://wa.me/+96170677712" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i>
        </a> 
      </div>

      {/* slider */}
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ zIndex: -1 }}>
            <div style={{ padding: '51.37% 0 0 0', position: 'relative' }}>
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
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