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
        .maritime-hero {
          background: linear-gradient(135deg, #0b1a2e 0%, #1e3a5f 50%, #4a9eff 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        
        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(135deg, rgba(11, 26, 46, 0.7) 0%, rgba(30, 58, 95, 0.7) 50%, rgba(74, 158, 255, 0.6) 100%),
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="ships" patternUnits="userSpaceOnUse" width="400" height="200"><rect width="400" height="200" fill="%23ffffff" opacity="0.03"/><path d="M50 150 L150 150 L160 140 L180 140 L190 150 L350 150 L360 160 L40 160 Z" fill="%23ffffff" opacity="0.05"/><path d="M200 120 L280 120 L290 110 L310 110 L320 120 L380 120 L390 130 L190 130 Z" fill="%23ffffff" opacity="0.04"/></pattern></defs><rect width="1200" height="800" fill="url(%23ships)"/></svg>');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 1s ease-out;
        }
        
        .hero-title.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          color: #e8f4fd;
          font-weight: 400;
          margin-bottom: 2rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          opacity: 0;
          transform: translateX(50px);
          transition: all 1s ease-out 0.3s;
        }
        
        .hero-subtitle.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin: 3rem 0;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out 0.6s;
        }
        
        .services-grid.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .service-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 25px 20px;
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .service-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .service-item:hover::before {
          left: 100%;
        }
        
        .service-item:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        
        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }
        
        .service-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 10px;
        }
        
        .service-desc {
          font-size: 0.95rem;
          color: #b8d4ea;
          line-height: 1.4;
        }
        
        .cta-button {
          background: #ffffff;
          color: #0b1a2e;
          border: 3px solid #ffffff;
          font-weight: 700;
          padding: 18px 45px;
          border-radius: 50px;
          font-size: 1.2rem;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
          margin-top: 2rem;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out 0.9s;
        }
        
        .cta-button.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .cta-button:hover {
          background: #4a9eff;
          color: #ffffff;
          border-color: #4a9eff;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.4);
          text-decoration: none;
        }
        
        .wave-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 2;
        }
        
        .wave-svg {
          position: relative;
          display: block;
          width: calc(150% + 1.3px);
          height: 80px;
          animation: wave 8s ease-in-out infinite;
        }
        
        .wave-path {
          fill: rgba(255, 255, 255, 0.1);
          animation: waveShift 6s ease-in-out infinite alternate;
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(-25%) rotateY(0deg); }
          50% { transform: translateX(-50%) rotateY(5deg); }
        }
        
        @keyframes waveShift {
          0% { d: path("M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"); }
          100% { d: path("M0,48L48,42.7C96,37,192,27,288,26.7C384,27,480,37,576,42.7C672,48,768,48,864,48C960,48,1056,48,1152,42.7C1248,37,1344,27,1392,21.3L1440,16L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"); }
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        
        .floating-icon {
          position: absolute;
          font-size: 2rem;
          color: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-icon:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .floating-icon:nth-child(2) {
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .floating-icon:nth-child(3) {
          top: 40%;
          left: 80%;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(10px) rotate(-3deg); }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
            text-align: center;
            transform: translateX(0);
            opacity: 0;
            transform: translateY(-30px);
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
            text-align: center;
            transform: translateX(0);
            opacity: 0;
            transform: translateY(30px);
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .cta-button {
            width: 100%;
            max-width: 300px;
            margin: 2rem auto 0;
            display: block;
            text-align: center;
          }
          
          .wave-svg {
            height: 60px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .service-item {
            padding: 20px 15px;
          }
        }
      `}</style>
      
      <section className="maritime-hero">
        <div className="hero-bg-image"></div>
        
        <div className="floating-elements">
          <div className="floating-icon">⚓</div>
          <div className="floating-icon">🚢</div>
          <div className="floating-icon">🛥️</div>
        </div>
        
        <div className="container hero-content">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
                Maritime & Boats Telematics Solutions
              </h1>
              
              <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
                Real-time vessel tracking, safety, and operational visibility on the water. 
                SecuFleet delivers comprehensive monitoring and theft prevention solutions for maritime industries worldwide.
              </p>
              
              <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
                <div className="service-item">
                  <div className="service-icon">📦</div>
                  <h3 className="service-title">Sea Container Tracking</h3>
                  <p className="service-desc">Real-time monitoring and security for cargo containers across global shipping routes</p>
                </div>
                
                <div className="service-item">
                  <div className="service-icon">🎣</div>
                  <h3 className="service-title">Fishing Boats GPS</h3>
                  <p className="service-desc">Comprehensive fleet tracking and safety monitoring for commercial fishing operations</p>
                </div>
                
                <div className="service-item">
                  <div className="service-icon">🛥️</div>
                  <h3 className="service-title">Charter Yacht Protection</h3>
                  <p className="service-desc">Advanced theft prevention and remote monitoring for luxury yacht and charter fleets</p>
                </div>
              </div>
              
              <a href="#solutions" className={`cta-button ${isVisible ? 'visible' : ''}`}>
                Explore Our Solutions
              </a>
            </div>
          </div>
        </div>
        
        <div className="wave-container">
          <svg className="wave-svg" viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path className="wave-path" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;