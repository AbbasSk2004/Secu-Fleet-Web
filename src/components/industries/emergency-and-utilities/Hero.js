'use client'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0b1a2e 0%, #1a2f47 100%);
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(135deg, rgba(11, 26, 46, 0.85) 0%, rgba(26, 47, 71, 0.9) 100%),
            url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: 1;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(220, 53, 69, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0, 123, 255, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%);
          z-index: 2;
        }
        
        .hero-content {
          position: relative;
          z-index: 3;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .company-logo {
          position: absolute;
          top: 2rem;
          left: 2rem;
          z-index: 10;
          opacity: ${isLoaded ? '1' : '0'};
          transform: ${isLoaded ? 'translateY(0)' : 'translateY(-20px)'};
          transition: all 0.8s ease;
          transition-delay: 0.3s;
        }
        
        .logo-text {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        
        .text-content {
          opacity: ${isLoaded ? '1' : '0'};
          transform: ${isLoaded ? 'translateY(0)' : 'translateY(50px)'};
          transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transition-delay: 0.5s;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(220, 53, 69, 0.1);
          border: 1px solid rgba(220, 53, 69, 0.3);
          color: #ff6b7a;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }
        
        .badge-icon {
          margin-right: 0.5rem;
          font-size: 1rem;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .hero-title .accent-word {
          background: linear-gradient(135deg, #007bff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.4rem;
          color: #e8e9ea;
          font-weight: 300;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 500px;
        }
        
        .cta-container {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .cta-button {
          background: white;
          color: #0b1a2e;
          border: 2px solid white;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
        }
        
        .cta-button:hover {
          background: transparent;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.3);
        }
        
        .secondary-button {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.6);
          color: white;
          transform: translateY(-2px);
        }
        
        .hero-image {
          opacity: ${isLoaded ? '1' : '0'};
          transform: ${isLoaded ? 'scale(1)' : 'scale(1.1)'};
          transition: all 1.2s ease;
          transition-delay: 0.8s;
        }
        
        .image-container {
          position: relative;
          text-align: center;
        }
        
        .main-image {
          max-width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
          filter: drop-shadow(0 10px 20px rgba(0, 123, 255, 0.2));
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .floating-icon {
          position: absolute;
          color: rgba(255, 255, 255, 0.1);
          font-size: 2rem;
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-icon:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: -1s;
        }
        
        .floating-icon:nth-child(2) {
          top: 60%;
          right: 15%;
          animation-delay: -3s;
        }
        
        .floating-icon:nth-child(3) {
          bottom: 30%;
          left: 20%;
          animation-delay: -2s;
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          cursor: pointer;
          opacity: ${isLoaded ? '1' : '0'};
          transition: all 0.8s ease;
          transition-delay: 1.5s;
        }
        
        .scroll-arrow {
          width: 50px;
          height: 50px;
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          animation: bounce 2s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        
        .scroll-arrow:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: white;
          transform: scale(1.1);
        }
        
        .stats-overlay {
          position: absolute;
          top: 50%;
          right: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 1.5rem;
          opacity: ${isLoaded ? '1' : '0'};
          transform: ${isLoaded ? 'translateX(0)' : 'translateX(50px)'};
          transition: all 1s ease;
          transition-delay: 1.2s;
        }
        
        .stat-item {
          text-align: center;
          margin-bottom: 1rem;
        }
        
        .stat-item:last-child {
          margin-bottom: 0;
        }
        
        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #007bff;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.8rem;
          color: #c7c8ca;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @media (max-width: 992px) {
          .hero-image {
            margin-top: 3rem;
          }
          
          .stats-overlay {
            position: relative;
            top: auto;
            right: auto;
            margin: 2rem auto 0;
            max-width: 300px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .company-logo {
            top: 1rem;
            left: 1rem;
          }
          
          .cta-container {
            flex-direction: column;
            align-items: stretch;
          }
          
          .cta-button,
          .secondary-button {
            text-align: center;
            justify-content: center;
          }
          
          .hero-background {
            background-attachment: scroll;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .text-content {
            padding: 0 1rem;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Background with overlay */}
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        
        {/* Floating background elements */}
        <div className="floating-elements">
          <div className="floating-icon">🚨</div>
          <div className="floating-icon">🚑</div>
          <div className="floating-icon">🏥</div>
        </div>

        {/* Company Logo */}
        <div className="company-logo">
          <a href="#" className="logo-text">
            <div className="logo-icon">🛡️</div>
            SecuFleet
          </a>
        </div>

        {/* Main Content */}
        <div className="container-fluid hero-content">
          <div className="row align-items-center">
            {/* Left Column - Text Content */}
            <div className="col-lg-6">
              <div className="text-content">
                <div className="hero-badge">
                  <span className="badge-icon">⚡</span>
                  Critical Response Solutions
                </div>
                
                <h1 className="hero-title">
                  Emergency Services & <span className="accent-word">Utilities</span> Solutions
                </h1>
                
                <p className="hero-subtitle">
                  Optimize operations, boost response speed, protect assets. 
                  Advanced fleet management for first responders and utility services.
                </p>
                
                <div className="cta-container">
                  <a href="#services" className="cta-button">
                    Learn More
                    <span>→</span>
                  </a>
                  <a href="#demo" className="secondary-button">
                    Request Demo
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Emergency Services Vehicle"
                    className="main-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overlay */}
        <div className="stats-overlay d-none d-lg-block">
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <div className="stat-label">Monitoring</div>
          </div>
          <div className="stat-item">
            <span className="stat-number">50%</span>
            <div className="stat-label">Faster Response</div>
          </div>
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <div className="stat-label">Uptime</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToContent}>
          <div className="scroll-arrow">
            ↓
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero