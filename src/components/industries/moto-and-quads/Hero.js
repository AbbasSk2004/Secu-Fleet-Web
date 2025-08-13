'use client'
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1e3a5f 50%, #0b1a2e 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }
        
        .hero-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.03) 0%, transparent 50%);
          background-size: 100px 100px;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: #e8f4fd;
          font-weight: 400;
          margin-bottom: 2rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        
        .hero-tagline {
          font-size: 1.1rem;
          color: #b8d4ea;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        
        .btn-primary-custom {
          background: linear-gradient(45deg, #1e3a5f, #2c5282);
          border: none;
          color: #ffffff;
          font-weight: 600;
          padding: 15px 35px;
          border-radius: 50px;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(30, 58, 95, 0.3);
          margin: 0 10px 10px 0;
        }
        
        .btn-primary-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(30, 58, 95, 0.5);
          background: linear-gradient(45deg, #2c5282, #1e3a5f);
        }
        
        .btn-outline-custom {
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.8);
          color: #ffffff;
          font-weight: 600;
          padding: 13px 35px;
          border-radius: 50px;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          margin: 0 10px 10px 0;
        }
        
        .btn-outline-custom:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
          color: #ffffff;
          transform: translateY(-2px);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.7);
          animation: bounce 2s infinite;
          cursor: pointer;
        }
        
        .scroll-arrow {
          font-size: 1.5rem;
          margin-bottom: 5px;
        }
        
        .scroll-text {
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 3rem;
        }
        
        .feature-item {
          text-align: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: #4a9eff;
        }
        
        .feature-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 10px;
        }
        
        .feature-desc {
          font-size: 0.95rem;
          color: #b8d4ea;
          line-height: 1.4;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
          }
          .hero-tagline {
            font-size: 1rem;
          }
          .btn-primary-custom,
          .btn-outline-custom {
            padding: 12px 25px;
            font-size: 1rem;
            margin: 5px;
            width: 100%;
            max-width: 280px;
          }
          .features-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
      
      <section className="hero-section d-flex align-items-center">
        <div className="hero-bg-pattern"></div>
        
        <div className="container hero-content">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                <h1 className="hero-title">
                  SecuFleet Telematics Solutions
                </h1>
              </div>
              
              <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <h2 className="hero-subtitle">
                  Smart, Reliable Fleet Tracking for Construction & Mining
                </h2>
              </div>
              
              <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                <p className="hero-tagline">
                  Real-time GPS tracking • BLE accessories • Smart geofencing • Offline tracking
                  <br />
                  Lightweight tracking and safety solutions for powersports fleets and heavy equipment rentals.
                </p>
              </div>
              
              <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.8s' }}>
                <button className="btn btn-primary-custom btn-lg">
                  Learn More
                </button>
                <button className="btn btn-outline-custom btn-lg">
                  Request a Demo
                </button>
              </div>
              
              {/* <div className={`features-grid fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '1s' }}>
                <div className="feature-item">
                  <div className="feature-icon">📍</div>
                  <h3 className="feature-title">Real-time GPS</h3>
                  <p className="feature-desc">Track your entire fleet with pinpoint accuracy</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">📡</div>
                  <h3 className="feature-title">BLE Accessories</h3>
                  <p className="feature-desc">Connect additional sensors and monitoring devices</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🛡️</div>
                  <h3 className="feature-title">Smart Geofencing</h3>
                  <p className="feature-desc">Automated alerts for unauthorized vehicle movement</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">📶</div>
                  <h3 className="feature-title">Offline Tracking</h3>
                  <p className="feature-desc">Continuous monitoring even in remote locations</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
          <div className="scroll-arrow">↓</div>
          <div className="scroll-text">Scroll to explore</div>
        </div>
      </section>
    </>
  );
};

export default Hero;