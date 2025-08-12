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
        }
        
        .hero-left {
          background-color: #0b1a2e;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 4rem 2rem;
        }
        
        .hero-right {
          position: relative;
          min-height: 100vh;
          padding: 0;
          background-image: linear-gradient(135deg, rgba(11, 26, 46, 0.4) 0%, rgba(11, 26, 46, 0.6) 100%),
                           url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          object-fit: cover;
          transform: ${isLoaded ? 'scale(1)' : 'scale(1.1)'};
          transition: transform 1.2s ease-out;
        }
        
        .hero-content {
          opacity: ${isLoaded ? '1' : '0'};
          transform: ${isLoaded ? 'translateX(0)' : 'translateX(-50px)'};
          transition: all 1s ease-out;
          transition-delay: 0.3s;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .hero-subtitle {
          color: #e8e9ea;
          font-weight: 400;
          margin-bottom: 1.5rem;
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
        }
        
        .btn-custom:hover {
          transform: scale(1.05);
          text-decoration: none;
        }
        
        .btn-primary-custom {
          background-color: #007bff;
          border: 2px solid #007bff;
          color: white;
        }
        
        .btn-primary-custom:hover {
          background-color: #0056b3;
          border-color: #0056b3;
          color: white;
        }
        
        .btn-outline-custom {
          background-color: transparent;
          border: 2px solid white;
          color: white;
        }
        
        .btn-outline-custom:hover {
          background-color: white;
          border-color: white;
          color: #0b1a2e;
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
