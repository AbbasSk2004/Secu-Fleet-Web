'use client'
import React, { useEffect, useState, useRef } from 'react';

const OverView = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger card animations
            setTimeout(() => setVisibleCards(prev => [...prev, 0]), 200);
            setTimeout(() => setVisibleCards(prev => [...prev, 1]), 400);
            setTimeout(() => setVisibleCards(prev => [...prev, 2]), 600);
            setTimeout(() => setVisibleCards(prev => [...prev, 3]), 800);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Motorcycle Tracking & Protection",
      description: "Comprehensive GPS tracking designed specifically for motorcycles with compact, robust casing, IP67 water resistance, and extended 30-day battery life with unique sleep mode.",
      icon: "🏍️",
      color: "#007bff"
    },
    {
      id: 2,
      title: "ATV & Quad Safety Solutions",
      description: "Ultimate safety assurance for off-road adventures with helmet detection technology, panic button emergency assistance, and multi-functional digital outputs for enhanced user experience.",
      icon: "🏁",
      color: "#28a745"
    },
    {
      id: 3,
      title: "E-Scooter Fleet Management",
      description: "Optimized fleet operations for electric scooter sharing services with real-time battery monitoring, maintenance tracking, and data analytics for improved customer experience.",
      icon: "🛴",
      color: "#ffc107"
    },
    {
      id: 4,
      title: "Motorsports Event Tracking",
      description: "Professional tracking solutions for motorsports competitions ensuring accurate race results, timely technical assistance, and proper safety measures for riders and spectators.",
      icon: "🏆",
      color: "#dc3545"
    }
  ];

  return (
    <>
      <style jsx>{`
        .overview-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1a2f47 50%, #0b1a2e 100%);
          padding: 80px 0;
          position: relative;
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
            radial-gradient(circle at 20% 20%, rgba(0, 123, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 123, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .overview-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(0, 123, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 123, 255, 0.08) 0%, transparent 50%);
          background-size: 200px 200px;
        }
        
        .section-content {
          position: relative;
          z-index: 2;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #e8e9ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
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
        
        .section-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section-intro {
          font-size: 1.3rem;
          color: #c7c8ca;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 300;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out 0.2s;
        }
        
        .section-intro.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .service-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 40px 30px;
          height: 100%;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #007bff, #00d4ff);
          transform: scaleX(0);
          transition: transform 0.4s ease;
          transform-origin: left;
          box-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
        }
        
        .service-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(0, 123, 255, 0.3);
        }
        
        .service-card:hover::before {
          transform: scaleX(1);
        }
        
        .service-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #007bff, #0056b3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 2rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .service-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #00d4ff, #007bff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .service-card:hover .service-icon {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(0, 123, 255, 0.4);
        }
        
        .service-card:hover .service-icon::before {
          opacity: 1;
        }
        
        .service-icon span {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        .service-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          text-align: center;
          transition: color 0.3s ease;
        }
        
        .service-card:hover .service-title {
          color: #00d4ff;
        }
        
        .service-description {
          color: #c7c8ca;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 25px;
          text-align: center;
          transition: color 0.3s ease;
        }
        
        .service-card:hover .service-description {
          color: #e8e9ea;
        }
        
        .service-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 25px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          width: 100%;
          max-width: 200px;
          margin: 0 auto;
          backdrop-filter: blur(5px);
        }
        
        .service-link:hover {
          background: rgba(0, 123, 255, 0.2);
          border-color: rgba(0, 212, 255, 0.5);
          color: #00d4ff;
          transform: translateY(-2px);
          text-decoration: none;
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
        }
        
        .service-link::after {
          content: '→';
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        
        .service-link:hover::after {
          transform: translateX(4px);
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
          animation: floatShape 18s linear infinite;
        }
        
        .shape:nth-child(1) {
          width: 50px;
          height: 50px;
          left: 15%;
          animation-delay: -3s;
        }
        
        .shape:nth-child(2) {
          width: 70px;
          height: 70px;
          left: 70%;
          animation-delay: -9s;
        }
        
        .shape:nth-child(3) {
          width: 40px;
          height: 40px;
          left: 45%;
          animation-delay: -15s;
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
        
        @media (max-width: 768px) {
          .overview-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .section-intro {
            font-size: 1.1rem;
          }
          
          .service-card {
            margin-bottom: 30px;
            padding: 30px 25px;
          }
          
          .service-icon {
            width: 70px;
            height: 70px;
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 2rem;
          }
          
          .section-intro {
            font-size: 1rem;
          }
        }
      `}</style>
      
      <section className="overview-section" ref={sectionRef}>
        <div className="overview-bg-pattern"></div>
        
        {/* Floating background shapes */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        <div className="container section-content">
          <div className="section-header">
            <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
              Our Services
            </h2>
            <p className={`section-intro ${isVisible ? 'visible' : ''}`}>
              Track motorcycles, ATVs, and quads in real time, monitor rider behavior, and protect assets with
              comprehensive tracking solutions. Specialized systems for motorsports, rentals, and recreational vehicle fleets.
            </p>
          </div>
          
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={service.id} className="col-lg-3 col-md-6 col-sm-12">
                <div className={`service-card ${visibleCards.includes(index) ? 'visible' : ''}`}>
                  <div className="service-icon" style={{ background: `linear-gradient(135deg, ${service.color}, #0056b3)` }}>
                    <span>{service.icon}</span>
                  </div>
                  
                  <h3 className="service-title">{service.title}</h3>
                  
                  <p className="service-description">
                    {service.description}
                  </p>
                  
                  <a href="#" className="service-link">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OverView;