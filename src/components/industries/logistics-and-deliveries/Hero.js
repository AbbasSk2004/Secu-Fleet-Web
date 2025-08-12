'use client'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

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
          background: linear-gradient(135deg, #0b1a2e 0%, #1a2f47 50%, #0b1a2e 100%);
        }
        
        .hero-left {
          background: linear-gradient(135deg, #0b1a2e 0%, #1a2f47 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 4rem 2rem;
          position: relative;
        }
        
        .hero-left::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(0, 123, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 123, 255, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .hero-right {
          position: relative;
          min-height: 100vh;
          padding: 0;
          background-image: linear-gradient(135deg, rgba(11, 26, 46, 0.7) 0%, rgba(26, 47, 71, 0.8) 100%),
                           url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: ${isLoaded ? 'scale(1)' : 'scale(1.1)'};
          transition: transform 1.2s ease-out;
        }
        
        .hero-right::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(11, 26, 46, 0.6) 0%, rgba(26, 47, 71, 0.4) 100%);
          pointer-events: none;
        }
        
        .hero-content {
          opacity: ${isLoaded ? '1' : '0'};
          transform: ${isLoaded ? 'translateX(0)' : 'translateX(-50px)'};
          transition: all 1s ease-out;
          transition-delay: 0.3s;
          position: relative;
          z-index: 2;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #e8e9ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          position: relative;
        }
        
        .hero-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #007bff, #00d4ff);
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
        }
        
        .hero-subtitle {
          color: #e8e9ea;
          font-weight: 400;
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
        }
        
        .hero-description {
          color: #c7c8ca;
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }
        
        .btn-custom {
          padding: 0.75rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 8px;
          margin-right: 1rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          border: 2px solid transparent;
        }
        
        .btn-custom:hover {
          transform: scale(1.05);
          text-decoration: none;
        }
        
        .btn-primary-custom {
          background: linear-gradient(135deg, #007bff, #0056b3);
          border: 2px solid #007bff;
          color: white;
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }
        
        .btn-primary-custom:hover {
          background: linear-gradient(135deg, #0056b3, #004085);
          border-color: #0056b3;
          color: white;
          box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
        }
        
        .btn-outline-custom {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          backdrop-filter: blur(10px);
        }
        
        .btn-outline-custom:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          color: white;
        }
        
        /* Floating shapes animation */
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .shape {
          position: absolute;
          background: rgba(0, 123, 255, 0.1);
          border-radius: 50%;
          animation: floatShape 15s linear infinite;
        }
        
        .shape:nth-child(1) {
          width: 40px;
          height: 40px;
          left: 10%;
          animation-delay: -2s;
        }
        
        .shape:nth-child(2) {
          width: 60px;
          height: 60px;
          left: 80%;
          animation-delay: -8s;
        }
        
        .shape:nth-child(3) {
          width: 30px;
          height: 30px;
          left: 60%;
          animation-delay: -12s;
        }
        
        @keyframes floatShape {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @media (max-width: 767.98px) {
          .hero-section {
            min-height: auto;
          }
          
          .hero-left, .hero-right {
            min-height: 50vh;
          }
          
          .hero-left {
            text-align: center;
            padding: 3rem 1.5rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .btn-custom {
            margin-right: 0.5rem;
            padding: 0.6rem 1.5rem;
            font-size: 1rem;
          }
          
          .hero-right {
            order: -1;
          }
        }
        
        @media (max-width: 575.98px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .btn-custom {
            display: block;
            width: 100%;
            margin-right: 0;
            margin-bottom: 0.75rem;
          }
        }
      `}</style>

      <div className="hero-section">
        {/* Floating background shapes */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <div className="container-fluid p-0 h-100">
          <div className="row g-0 m-0 h-100">
            {/* Left Column - Content */}
            <div className="col-md-6 hero-left">
              <div className="hero-content">
                <h1 className="hero-title">
                  Complete Fleet & Delivery Solutions
                </h1>
                <h4 className="hero-subtitle">
                  Optimize routes, protect assets, and monitor performance in real time.
                </h4>
                <p className="hero-description">
                  Reduce costs, prevent theft, and deliver with precision.
                </p>
                <div className="hero-buttons">
                  <a href="#demo" className="btn btn-custom btn-primary-custom">
                    Request a Demo
                  </a>
                  <a href="#learn" className="btn btn-custom btn-outline-custom">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-md-6 hero-right"></div>
          </div>
        </div>
      </div>

      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  )
}

export default Hero