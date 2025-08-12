'use client'
import React, { useEffect, useState, useRef } from 'react'

const Technology = () => {
  const [visibleTechs, setVisibleTechs] = useState(new Set())
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger sequential animations
          technologies.forEach((_, index) => {
            setTimeout(() => {
              setVisibleTechs(prev => new Set([...prev, index]))
            }, index * 300)
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

  const technologies = [
    {
      id: 1,
      icon: "📡",
      title: "GPS Trackers",
      description: "High-precision satellite positioning with real-time location updates and geofencing capabilities for complete fleet visibility.",
      features: ["Real-time tracking", "Geofencing alerts", "Route optimization", "Historical data"],
      color: "#007bff"
    },
    {
      id: 2,
      icon: "📶",
      title: "BLE Sensors",
      description: "Advanced Bluetooth Low Energy sensors for asset monitoring, temperature tracking, and proximity detection with extended battery life.",
      features: ["Low power consumption", "Asset monitoring", "Temperature sensing", "Proximity alerts"],
      color: "#28a745"
    },
    {
      id: 3,
      icon: "🛰️",
      title: "Satellite Modules",
      description: "Global communication modules ensuring connectivity in remote areas with reliable data transmission and emergency features.",
      features: ["Global coverage", "Emergency SOS", "Remote connectivity", "Reliable transmission"],
      color: "#ffc107"
    },
    {
      id: 4,
      icon: "🔌",
      title: "CAN-CONTROL Adapters",
      description: "Direct vehicle integration adapters for accessing engine diagnostics, fuel consumption, and maintenance data from your fleet.",
      features: ["Engine diagnostics", "Fuel monitoring", "Maintenance alerts", "Performance data"],
      color: "#dc3545"
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
        .technology-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1a2f47 50%, #0b1a2e 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .technology-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(0, 123, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 123, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .tech-grid {
          position: relative;
          z-index: 2;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          color: white;
        }
        
        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #e8e9ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #007bff, #00d4ff);
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(0, 123, 255, 0.5);
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: #c7c8ca;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 300;
        }
        
        .tech-column {
          padding: 2rem 1.5rem;
          text-align: center;
          position: relative;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .tech-column.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .tech-column:hover {
          transform: translateY(-10px);
        }
        
        .column-divider {
          border-right: 2px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }
        
        .column-divider::before {
          content: '';
          position: absolute;
          top: 20%;
          right: -1px;
          height: 60%;
          width: 2px;
          background: linear-gradient(180deg, transparent, rgba(0, 123, 255, 0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tech-column:hover .column-divider::before {
          opacity: 1;
        }
        
        .tech-icon-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto 2rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
        }
        
        .tech-column.visible .tech-icon-wrapper {
          animation: iconPulse 2s ease-in-out infinite;
        }
        
        .tech-column:hover .tech-icon-wrapper {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(0, 123, 255, 0.5);
          box-shadow: 0 0 30px rgba(0, 123, 255, 0.3);
          transform: scale(1.1);
        }
        
        .tech-icon {
          font-size: 2.8rem;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
        }
        
        .glow-ring {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: linear-gradient(45deg, rgba(0, 123, 255, 0.3), rgba(255, 255, 255, 0.1)) border-box;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tech-column:hover .glow-ring {
          opacity: 1;
        }
        
        .tech-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }
        
        .tech-column:hover .tech-title {
          color: #00d4ff;
          transform: scale(1.05);
        }
        
        .tech-description {
          color: #c7c8ca;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          transition: color 0.3s ease;
        }
        
        .tech-column:hover .tech-description {
          color: #e8e9ea;
        }
        
        .tech-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .tech-feature {
          font-size: 0.9rem;
          color: #9ca3af;
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .tech-feature::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #007bff;
          font-weight: bold;
          font-size: 1rem;
        }
        
        .tech-column:hover .tech-feature {
          color: #d1d5db;
          transform: translateX(5px);
        }
        
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        
        .shape {
          position: absolute;
          background: rgba(0, 123, 255, 0.1);
          border-radius: 50%;
          animation: floatShape 12s linear infinite;
        }
        
        .shape:nth-child(1) {
          width: 60px;
          height: 60px;
          left: 10%;
          animation-delay: -2s;
        }
        
        .shape:nth-child(2) {
          width: 40px;
          height: 40px;
          left: 30%;
          animation-delay: -6s;
        }
        
        .shape:nth-child(3) {
          width: 80px;
          height: 80px;
          left: 50%;
          animation-delay: -4s;
        }
        
        .shape:nth-child(4) {
          width: 50px;
          height: 50px;
          left: 70%;
          animation-delay: -8s;
        }
        
        .shape:nth-child(5) {
          width: 70px;
          height: 70px;
          left: 90%;
          animation-delay: -1s;
        }
        
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(0, 123, 255, 0.3); }
        }
        
        @keyframes floatShape {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .stats-row {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .stat-item {
          text-align: center;
          color: white;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        
        .stat-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          display: block;
          background: linear-gradient(135deg, #007bff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .technology-section {
            padding: 4rem 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .section-header {
            margin-bottom: 3rem;
          }
          
          .tech-column {
            padding: 2rem 1rem;
            margin-bottom: 2rem;
          }
          
          .column-divider {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 2rem;
            margin-bottom: 2rem;
          }
          
          .column-divider:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          
          .tech-icon-wrapper {
            width: 80px;
            height: 80px;
          }
          
          .tech-icon {
            font-size: 2.2rem;
          }
          
          .stats-row {
            margin-top: 3rem;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .tech-column {
            padding: 1.5rem 0.75rem;
          }
          
          .tech-title {
            font-size: 1.4rem;
          }
          
          .tech-description {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="technology-section" ref={sectionRef}>
        {/* Floating background shapes */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Advanced Technology Stack</h2>
            <p className="section-subtitle">
              Cutting-edge hardware and software solutions designed to revolutionize 
              fleet management through intelligent monitoring, precise tracking, and seamless integration.
            </p>
          </div>

          {/* Technology Grid */}
          <div className="row row-cols-1 row-cols-md-4 tech-grid">
            {technologies.map((tech, index) => (
              <div key={tech.id} className="col">
                <div className={`tech-column ${visibleTechs.has(index) ? 'visible' : ''} ${index < 3 ? 'column-divider' : ''}`}>
                  <div className="tech-icon-wrapper">
                    <div className="glow-ring"></div>
                    <span className="tech-icon">{tech.icon}</span>
                  </div>
                  
                  <h4 className="tech-title">{tech.title}</h4>
                  <p className="tech-description">{tech.description}</p>
                  
                  <ul className="tech-features">
                    {tech.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="tech-feature"
                        style={{
                          transitionDelay: visibleTechs.has(index) ? `${0.5 + (featureIndex * 0.1)}s` : '0s'
                        }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stats */}
          <div className="row row-cols-2 row-cols-md-4 stats-row">
            <div className="col">
              <div className={`stat-item ${visibleTechs.size >= 2 ? 'visible' : ''}`} style={{ transitionDelay: '1.2s' }}>
                <span className="stat-number">50K+</span>
                <div className="stat-label">Devices Deployed</div>
              </div>
            </div>
            <div className="col">
              <div className={`stat-item ${visibleTechs.size >= 2 ? 'visible' : ''}`} style={{ transitionDelay: '1.4s' }}>
                <span className="stat-number">99.8%</span>
                <div className="stat-label">Accuracy Rate</div>
              </div>
            </div>
            <div className="col">
              <div className={`stat-item ${visibleTechs.size >= 2 ? 'visible' : ''}`} style={{ transitionDelay: '1.6s' }}>
                <span className="stat-number">24/7</span>
                <div className="stat-label">Monitoring</div>
              </div>
            </div>
            <div className="col">
              <div className={`stat-item ${visibleTechs.size >= 2 ? 'visible' : ''}`} style={{ transitionDelay: '1.8s' }}>
                <span className="stat-number">Global</span>
                <div className="stat-label">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Technology