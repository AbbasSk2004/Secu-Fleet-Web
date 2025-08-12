'use client'
import React, { useEffect, useState, useRef } from 'react'

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(new Set())
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered animations for all features
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFeatures(prev => new Set([...prev, index]))
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      id: 1,
      icon: "⚡",
      title: "Operational Efficiency",
      description: "Streamline workflows and optimize resource allocation with intelligent automation and real-time performance analytics.",
      color: "#007bff",
      bgGradient: "linear-gradient(135deg, #007bff, #0056b3)"
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Asset Security",
      description: "Advanced monitoring systems protect valuable assets with 24/7 surveillance and instant threat detection capabilities.",
      color: "#28a745",
      bgGradient: "linear-gradient(135deg, #28a745, #1e7e34)"
    },
    {
      id: 3,
      icon: "💰",
      title: "Cost Reduction",
      description: "Reduce operational expenses by up to 35% through optimized routing, fuel management, and preventive maintenance.",
      color: "#ffc107",
      bgGradient: "linear-gradient(135deg, #ffc107, #e0a800)"
    },
    {
      id: 4,
      icon: "⭐",
      title: "Customer Satisfaction",
      description: "Enhance customer experience with accurate delivery tracking, proactive communication, and reliable service quality.",
      color: "#dc3545",
      bgGradient: "linear-gradient(135deg, #dc3545, #c82333)"
    }
  ]

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <style jsx>{`
        .features-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .features-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 123, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(11, 26, 46, 0.02) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }
        
        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #0b1a2e, #007bff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          position: relative;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: #6c757d;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 300;
        }
        
        .feature-column {
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0;
          transform: translateY(60px) scale(0.9);
        }
        
        .feature-column.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .feature-column:hover {
          transform: translateY(-15px) scale(1.02);
        }
        
        .feature-card {
          background: white;
          border-radius: 25px;
          padding: 3rem 2rem;
          text-align: center;
          height: 100%;
          position: relative;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          overflow: hidden;
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 249, 250, 0.7));
          z-index: 1;
          transition: opacity 0.3s ease;
        }
        
        .feature-card:hover::before {
          opacity: 0.95;
        }
        
        .feature-card > * {
          position: relative;
          z-index: 2;
        }
        
        .feature-card:hover {
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
          border-color: rgba(0, 123, 255, 0.2);
        }
        
        .icon-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto 2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 15px 35px rgba(11, 26, 46, 0.15);
        }
        
        .feature-column.visible .icon-wrapper {
          animation: bounceIn 0.8s ease-out;
        }
        
        .feature-column:hover .icon-wrapper {
          transform: scale(1.1) rotateY(180deg);
          box-shadow: 0 20px 50px rgba(11, 26, 46, 0.2);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          color: white;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }
        
        .icon-bg-glow {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(15px);
          transition: all 0.3s ease;
        }
        
        .feature-column:hover .icon-bg-glow {
          opacity: 0.5;
          transform: scale(1.2);
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0b1a2e;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .feature-column:hover .feature-title {
          color: #007bff;
          transform: scale(1.05);
        }
        
        .feature-description {
          color: #6c757d;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 0;
          transition: color 0.3s ease;
        }
        
        .feature-column:hover .feature-description {
          color: #495057;
        }
        
        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(0, 123, 255, 0.4);
          border-radius: 50%;
          animation: float 8s linear infinite;
        }
        
        .particle:nth-child(1) {
          left: 10%;
          animation-delay: -2s;
        }
        
        .particle:nth-child(2) {
          left: 30%;
          animation-delay: -4s;
        }
        
        .particle:nth-child(3) {
          left: 50%;
          animation-delay: -6s;
        }
        
        .particle:nth-child(4) {
          left: 70%;
          animation-delay: -1s;
        }
        
        .particle:nth-child(5) {
          left: 90%;
          animation-delay: -3s;
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(-50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }
        
        .stats-bar {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 4rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
          transition-delay: 0.8s;
        }
        
        .stats-bar.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #007bff;
          display: block;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #6c757d;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        @media (max-width: 768px) {
          .features-section {
            padding: 4rem 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .section-header {
            margin-bottom: 3rem;
          }
          
          .feature-card {
            padding: 2.5rem 1.5rem;
            margin-bottom: 2rem;
          }
          
          .icon-wrapper {
            width: 80px;
            height: 80px;
          }
          
          .feature-icon {
            font-size: 2rem;
          }
          
          .stats-bar {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .feature-card {
            padding: 2rem 1.25rem;
          }
          
          .feature-title {
            font-size: 1.3rem;
          }
          
          .feature-description {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="features-section" ref={sectionRef}>
        {/* Floating particles background */}
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Why Choose SecuFleet?</h2>
            <p className="section-subtitle">
              Transform your fleet operations with cutting-edge technology designed to maximize 
              efficiency, security, and profitability while delivering exceptional customer experiences.
            </p>
          </div>

          {/* Features Grid */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {features.map((feature, index) => (
              <div key={feature.id} className={`col feature-column ${visibleFeatures.has(index) ? 'visible' : ''}`}>
                <div className="feature-card">
                  <div 
                    className="icon-wrapper"
                    style={{ background: feature.bgGradient }}
                  >
                    <div 
                      className="icon-bg-glow"
                      style={{ background: feature.bgGradient }}
                    ></div>
                    <span className="feature-icon">{feature.icon}</span>
                  </div>
                  
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Performance Stats */}
          <div className={`stats-bar ${visibleFeatures.size > 0 ? 'visible' : ''}`}>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">35%</span>
              <span className="stat-label">Cost Savings</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Monitoring</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features