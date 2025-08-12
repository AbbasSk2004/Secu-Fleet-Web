'use client'
import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    // Create Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elementId = entry.target.dataset.animateId
          if (elementId) {
            setAnimatedElements(prev => new Set([...prev, elementId]))
          }
        }
      })
    }, observerOptions)

    // Observe all elements with animation
    const elementsToObserve = document.querySelectorAll('[data-animate-id]')
    elementsToObserve.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const AnimatedSVG = () => (
    <svg width="100%" height="300" viewBox="0 0 400 300" className="w-100">
      {/* Background */}
      <rect width="400" height="300" fill="#1a2332"/>
      
      {/* Emergency Vehicle */}
      <rect x="50" y="180" width="120" height="60" rx="8" fill="#ffffff"/>
      <rect x="60" y="190" width="100" height="20" rx="4" fill="#dc2626"/>
      <text x="110" y="205" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">EMERGENCY</text>
      
      {/* Utility Truck */}
      <rect x="230" y="160" width="140" height="80" rx="8" fill="#ffffff"/>
      <rect x="240" y="170" width="120" height="25" rx="4" fill="#0b1a2e"/>
      <text x="300" y="188" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">UTILITIES</text>
      
      {/* GPS Signals - Animated */}
      <circle cx="110" cy="150" r="3" fill="#10b981">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="110" cy="150" r="8" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.5">
        <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      <circle cx="300" cy="130" r="3" fill="#10b981">
        <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="300" cy="130" r="8" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.5">
        <animate attributeName="r" values="8;20;8" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      {/* Buildings */}
      <rect x="80" y="80" width="40" height="80" fill="#a0aec0"/>
      <rect x="130" y="60" width="35" height="100" fill="#a0aec0"/>
      <rect x="175" y="90" width="45" height="70" fill="#a0aec0"/>
      <rect x="270" y="70" width="50" height="90" fill="#a0aec0"/>
      
      {/* Route Lines - Animated */}
      <path d="M110,180 Q150,120 200,140 Q250,160 300,180" stroke="#ffffff" strokeWidth="3" fill="none" strokeDasharray="5,5">
        <animate attributeName="strokeDashoffset" values="0;-20" dur="3s" repeatCount="indefinite"/>
      </path>
    </svg>
  )

  const keyPoints = [
    {
      icon: "fas fa-tachometer-alt",
      title: "Faster Response Times",
      description: "Real-time GPS tracking and optimized routing reduce emergency response times by up to 40%, potentially saving lives and minimizing property damage."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Enhanced Fleet Discipline", 
      description: "Advanced telematics monitoring ensures drivers follow safety protocols, maintain appropriate speeds, and use authorized routes for maximum safety."
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Significant Cost Reduction",
      description: "Optimized fuel consumption, reduced maintenance costs, and improved operational efficiency deliver measurable ROI and budget savings."
    },
    {
      icon: "fas fa-lock",
      title: "Superior Asset Protection",
      description: "24/7 vehicle monitoring, theft prevention, and maintenance alerts protect valuable emergency and utility fleet assets from damage and loss."
    }
  ]

  return (
    <>
      <style jsx>{`
        :root {
          --navy-blue: #0b1a2e;
          --accent-primary: #0b1a2e;
          --accent-secondary: #1a2332;
          --accent-light: #e8eaed;
          --text-light: #4a5568;
          --border-light: #e2e8f0;
        }
        
        .about-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1a2332 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.7;
          color: white;
        }
        
        .about-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ffffff, #e2e8f0);
        }
        
        .section-title {
          color: white;
          font-weight: 700;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        
        .title-divider {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #ffffff, #e2e8f0);
          margin: 1rem 0 2rem 0;
          border-radius: 2px;
        }
        
        .service-description {
          font-size: 1.1rem;
          color: #cbd5e0;
          margin-bottom: 2rem;
          font-weight: 400;
        }
        
        .key-points {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
          border-left: 4px solid white;
          backdrop-filter: blur(10px);
        }
        
        .key-point {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.6s ease;
        }
        
        .key-point.animate {
          opacity: 1;
          transform: translateX(0);
        }
        
        .key-point:last-child {
          margin-bottom: 0;
        }
        
        .key-point-icon {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          font-size: 1.2rem;
          flex-shrink: 0;
          backdrop-filter: blur(10px);
        }
        
        .key-point-content h5 {
          color: white;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        
        .key-point-content p {
          color: #cbd5e0;
          margin-bottom: 0;
          font-size: 0.95rem;
        }
        
        .service-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .service-image:hover {
          transform: scale(1.02);
        }
        
        .service-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
          pointer-events: none;
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .fade-in.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stats-badge {
          background: rgba(255, 255, 255, 0.15);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-block;
          margin: 1rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .highlight-text {
          background: rgba(255, 255, 255, 0.15);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-weight: 500;
          color: white;
          backdrop-filter: blur(10px);
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .service-description {
            font-size: 1rem;
          }
          
          .key-points {
            padding: 1.5rem;
          }
          
          .key-point-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>
      
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className={`fade-in ${animatedElements.has('main-content') ? 'animate' : ''}`}
                data-animate-id="main-content"
              >
                <h2 className="section-title">About Emergency Services & Utilities Solutions</h2>
                <div className="title-divider"></div>
                
                <p className="service-description">
                  Emergency and utility fleets operating in urban environments often face <span className="highlight-text">critical challenges</span> associated with controlled obstacles in public spaces, leading to costly delays and serious safety issues that can impact entire communities.
                </p>
                
                <p className="service-description">
                  By leveraging <span className="highlight-text">smart GPS tracking and advanced telematics</span>, emergency response agencies and utility companies can dramatically improve response efficiency, enhance operational safety, and provide unprecedented transparency to the communities they serve.
                </p>
                
                <div className="stats-badge">
                  <i className="fas fa-chart-line me-2"></i>
                  Proven 40% improvement in response times
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 d-none d-lg-block">
              <div 
                className={`fade-in service-image ${animatedElements.has('service-image') ? 'animate' : ''}`}
                data-animate-id="service-image"
              >
                <AnimatedSVG />
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12">
              <div 
                className={`key-points fade-in ${animatedElements.has('key-points') ? 'animate' : ''}`}
                data-animate-id="key-points"
              >
                <h4 className="mb-4" style={{color: 'white', fontWeight: 600}}>
                  <i className="fas fa-star me-2" style={{color: 'white'}}></i>
                  Key Advantages & Benefits
                </h4>
                
                <div className="row">
                  {keyPoints.map((point, index) => (
                    <div key={index} className="col-md-6">
                      <div 
                        className={`key-point ${animatedElements.has('key-points') ? 'animate' : ''}`}
                        style={{
                          transitionDelay: animatedElements.has('key-points') ? `${index * 200}ms` : '0ms'
                        }}
                      >
                        <div className="key-point-icon">
                          <i className={point.icon}></i>
                        </div>
                        <div className="key-point-content">
                          <h5>{point.title}</h5>
                          <p>{point.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About