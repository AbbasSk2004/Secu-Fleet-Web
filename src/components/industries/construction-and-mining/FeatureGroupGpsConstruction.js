'use client'
import React from 'react';
import '../../../assets/css/industries/construction-and-mining/feature-group-gps.css';

const features = [
  {
    icon: '💧',
    title: 'IP67 Waterproof & Dustproof',
    description:
      'Rugged casing built to withstand water, dust, and harsh conditions on site.',
  },
  {
    icon: '🔌',
    title: '2-in-1 CAN Bus Integration',
    description: 'Fast and seamless setup integrating directly with vehicle systems.',
  },
  {
    icon: '🛠️',
    title: 'Snap-Lock Design',
    description: 'No tools needed for quick installation and removal.',
  },
  {
    icon: '📏',
    title: 'Flexible Mounting Options',
    description: 'Mount with tape or straps, inside or outside the vehicle.',
  },
  {
    icon: '🌡️',
    title: 'Built for Any Climate',
    description:
      'Reliable performance in all weather conditions expands business opportunities.',
  },
];

const FeatureGroupGpsConstruction = () => {
  return (
    <section className="gps-construction-hero">
      {/* Video Background */}
      <div className="video-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          suppressHydrationWarning
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://player.vimeo.com/external/371433807.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae355420b425c&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="dark-overlay"></div>

      <div className="container-fluid position-relative" style={{zIndex: 10}}>
        <div className="container py-5">
          {/* Section Title */}
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-primary text-uppercase">GPS Tracking Solutions</h5>
            <h1 className="mb-0" style={{ color: 'white' }}>Built for Construction & Mining</h1>
          </div>

          {/* Features Grid */}
          <div className="row g-5 justify-content-center">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="col-lg-4 col-md-6 wow zoomIn mb-4"
                data-wow-delay={`${(index + 1) * 0.2}s`}
              >
                <div className="feature-card-home">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon-display" role="img" aria-label={feature.title}>
                      {feature.icon}
                    </span>
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-lg-8">
              <div className="cta-section text-center">
                <h3 className="cta-title">Ready to Transform Your Construction Fleet?</h3>
                <p className="cta-description">
                  Get professional-grade GPS tracking that's built to last in the harshest environments. 
                  Contact us today for a customized solution.
                </p>
                <div className="cta-buttons">
                  <button className="btn btn-primary btn-lg me-3">
                    <i className="fas fa-phone me-2"></i>
                    Get Free Quote
                  </button>
                  <button className="btn btn-outline-primary btn-lg">
                    <i className="fas fa-play me-2"></i>
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGroupGpsConstruction;