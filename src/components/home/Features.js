'use client';
import React from 'react';
import '../../assets/css/home/features.css';

const Features = () => {
  return (
    <section className="Features">
      <video 
        autoPlay 
        muted 
        loop 
        id="featuresVideo" 
        preload="auto" 
        playsInline 
        className="bg-video"
        suppressHydrationWarning
      >
        <source src="/assets/videos/canva.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="container-fluid wow fadeInUp feature" data-wow-delay="0.1s">
        <div className="container">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                      <i className="fa fa-cog w3-xxlarge"></i>
                    </div>
                    <h4>Support</h4>
                  </div>
                  <p className="mb-0">
                    <i className="fa fa-headphones"></i> We take care of everything <br />
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-truck"></i> Streamline workflows and make data-driven decisions
                  </p>
                </div>
                <div className="col-12 wow zoomIn scndRow" data-wow-delay="0.6s">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                      <i className="fa fa-desktop w3-xxlarge"></i>
                    </div>
                    <h4>Real Time Visibility</h4>
                  </div>
                  <p className="mb-0">
                    <i className="fa fa-eye"></i> Monitor your fleet in real-time <br />
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-chart-line"></i> Get insights and analytics instantly
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                      <i className="fa fa-shield-alt w3-xxlarge"></i>
                    </div>
                    <h4>Security</h4>
                  </div>
                  <p className="mb-0">
                    <i className="fa fa-lock"></i> Advanced security features <br />
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-user-shield"></i> Protect your assets and data
                  </p>
                </div>
                <div className="col-12 wow zoomIn scndRow" data-wow-delay="0.8s">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                      <i className="fa fa-rocket w3-xxlarge"></i>
                    </div>
                    <h4>Performance</h4>
                  </div>
                  <p className="mb-0">
                    <i className="fa fa-tachometer-alt"></i> Optimize performance <br />
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-bolt"></i> Boost efficiency and productivity
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                      <i className="fa fa-users w3-xxlarge"></i>
                    </div>
                    <h4>Team Management</h4>
                  </div>
                  <p className="mb-0">
                    <i className="fa fa-user-friends"></i> Manage your team efficiently <br />
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-handshake"></i> Improve collaboration and communication
                  </p>
                </div>
                <div className="col-12 wow zoomIn scndRow" data-wow-delay="1.0s">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                      <i className="fa fa-cogs w3-xxlarge"></i>
                    </div>
                    <h4>Integration</h4>
                  </div>
                  <p className="mb-0">
                    <i className="fa fa-plug"></i> Seamless integration <br />
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-link"></i> Connect with existing systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 