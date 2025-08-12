'use client'
import React, { useEffect, useState, useRef } from 'react'

const OverView = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      icon: "⛽",
      title: "Reduce Fuel Costs",
      subtitle: "Up to 30% Savings",
      description: "AI-powered route optimization cuts fuel consumption and operational expenses significantly."
    },
    {
      icon: "📦",
      title: "Delivery Excellence",
      subtitle: "Standards Improved",
      description: "Real-time tracking and automated workflows ensure consistent, reliable delivery performance."
    },
    {
      icon: "🎛️",
      title: "Complete Control",
      subtitle: "Full Fleet Management",
      description: "Centralized dashboard provides comprehensive oversight of your entire vehicle fleet operations."
    },
    {
      icon: "📍",
      title: "Enhanced Traceability",
      subtitle: "End-to-End Visibility",
      description: "Track every package, vehicle, and driver with precision GPS monitoring and reporting."
    }
  ]

  return (
    <>
      {/* Bootstrap CSS and Icons */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css" 
        rel="stylesheet" 
      />
      
      <style jsx>{`
        .overview-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1a2f47 100%);
          position: relative;
          padding: 6rem 0;
          overflow: hidden;
        }
        
        .overview-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(0, 123, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 123, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 123, 255, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .section-intro {
          max-width: 800px;
          margin: 0 auto 4rem;
          text-align: center;
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s ease-out;
        }
        
        .intro-text {
          font-size: 1.3rem;
          color: #e8e9ea;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 0;
        }
        
        .cards-container {
          position: relative;
          z-index: 2;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.98);
          border: none;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          height: 100%;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(50px)'};
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #007bff, #0056b3);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 123, 255, 0.15);
        }
        
        .feature-card:hover::before {
          transform: scaleX(1);
        }
        
        .card-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          display: inline-block;
          position: relative;
          transition: all 0.4s ease;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }
        
        .feature-card:hover .card-icon {
          transform: rotateY(360deg) scale(1.1);
        }
        
        .card-title {
          color: #0b1a2e;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          position: relative;
        }
        
        .card-subtitle {
          color: #007bff;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }
        
        .card-description {
          color: #6c757d;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 0;
        }
        
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(0, 123, 255, 0.05);
          animation: float 6s ease-in-out infinite;
        }
        
        .shape:nth-child(1) {
          width: 60px;
          height: 60px;
          top: 10%;
          left: 10%;
          animation-delay: -2s;
        }
        
        .shape:nth-child(2) {
          width: 40px;
          height: 40px;
          top: 70%;
          right: 15%;
          animation-delay: -4s;
        }
        
        .shape:nth-child(3) {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 5%;
          animation-delay: -1s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        /* Staggered animation delays for cards */
        .feature-card:nth-child(1) {
          transition-delay: 0.1s;
        }
        
        .feature-card:nth-child(2) {
          transition-delay: 0.2s;
        }
        
        .feature-card:nth-child(3) {
          transition-delay: 0.3s;
        }
        
        .feature-card:nth-child(4) {
          transition-delay: 0.4s;
        }
        
        @media (max-width: 768px) {
          .overview-section {
            padding: 4rem 0;
          }
          
          .section-intro {
            margin-bottom: 3rem;
          }
          
          .intro-text {
            font-size: 1.1rem;
          }
          
          .feature-card {
            padding: 2rem 1.5rem;
            margin-bottom: 1rem;
          }
          
          .card-icon {
            font-size: 3rem;
          }
          
          .card-title {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 576px) {
          .feature-card {
            padding: 1.5rem 1rem;
          }
          
          .card-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
        }
      `}</style>

      <section className="overview-section" ref={sectionRef}>
        {/* Floating background shapes */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <div className="container">
          {/* Section Introduction */}
          <div className="section-intro">
            <p className="intro-text">
              Modern logistics face unprecedented challenges: rising fuel costs, complex routes, 
              and demanding customer expectations. <strong>SecuFleet</strong> transforms these obstacles 
              into opportunities through intelligent fleet management, delivering measurable results 
              that drive your business forward.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="cards-container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {cards.map((card, index) => (
                <div key={index} className="col">
                  <div className="card feature-card h-100">
                    <div className="card-body">
                      <div className="card-icon">
                        {card.icon}
                      </div>
                      <h5 className="card-title">{card.title}</h5>
                      <div className="card-subtitle">{card.subtitle}</div>
                      <p className="card-description">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OverView