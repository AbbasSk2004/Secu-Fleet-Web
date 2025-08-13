'use client'
import React, { useEffect, useState, useRef } from 'react';

const BleFeaturs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const accessories = [
    {
      title: "Motorcycle Tracking Solutions",
      description: "Compact and robust tracking designed specifically for motorcycles",
      features: ["IP67 waterproof casing for all weather conditions", "Large capacity internal battery with sleep mode", "Click-type casing with no tools required", "Up to 30 days battery life for parked vehicles"]
    },
    {
      title: "ATV & Recreational Vehicle Tracking",
      description: "All-arounder water-resistant GPS tracker for off-road adventures",
      features: ["Advanced helmet detection technology", "Panic button for emergency assistance", "Multi-functional digital outputs (LED, buzzers)", "FOTA remote firmware updates"]
    },
    {
      title: "E-Scooter Fleet Management",
      description: "Optimized fleet operations for electric scooter sharing services",
      features: ["Battery level monitoring and alerts", "User behavior analytics and data collection", "Multi-brand compatibility support", "Real-time maintenance requirement tracking"]
    }
  ];

  const motorcycleBenefits = [
    "Designed specifically with motorcycles in mind with compact and robust casing",
    "IP67-rated waterproof protection for challenging environments",
    "Innovative click-type casing closing with no additional tools required",
    "All-in-one solution for fleet operations, asset protection, and rider safety",
    "High-capacity internal battery with unique sleep mode for 30-day operation"
  ];

  const atvBenefits = [
    "Ultimate safety assurance with IP67-rated water-resistant and dustproof casing",
    "Extended battery life with up to 30 days of uninterrupted use",
    "Helmet detection technology to minimize accident risks",
    "Multi-functional digital outputs for panic buttons and LED notifications",
    "Remote emergency assistance with accurate location data for distressed adventurers",
    "Seamless firmware updates using FOTA WEB tool for optimal performance"
  ];

  const escooterBenefits = [
    "Optimized fleet management to track battery levels and maintenance requirements",
    "Data analytics to monitor user behavior, speeding, and safety parameters",
    "Expanded business opportunities with multi-brand e-scooter compatibility",
    "Increased fleet reliability with IP67-rated water and dust resistance"
  ];

  return (
    <>
      <style jsx>{`
        .ble-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1e3a5f 50%, #0b1a2e 100%);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        
        .ble-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 30% 40%, rgba(74, 158, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          background-size: 300px 300px;
        }
        
        .section-content {
          position: relative;
          z-index: 2;
        }
        
        .ble-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease-out;
        }
        
        .ble-title.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .ble-description {
          font-size: 1.2rem;
          color: #e8f4fd;
          line-height: 1.7;
          margin-bottom: 40px;
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease-out 0.2s;
        }
        
        .ble-description.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .image-container {
          position: relative;
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease-out 0.4s;
        }
        
        .image-container.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .feature-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #2c5282, #4a9eff);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .feature-image::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #4a9eff, #2c5282, #4a9eff, #2c5282);
          border-radius: 22px;
          z-index: -1;
          animation: borderGlow 3s ease-in-out infinite;
        }
        
        @keyframes borderGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .image-icon {
          font-size: 8rem;
          color: #ffffff;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .accessories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin: 40px 0;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out 0.6s;
        }
        
        .accessories-grid.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .accessory-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 25px;
          transition: all 0.3s ease;
        }
        
        .accessory-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 30px rgba(74, 158, 255, 0.2);
        }
        
        .accessory-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #4a9eff;
          margin-bottom: 8px;
        }
        
        .accessory-desc {
          font-size: 1rem;
          color: #b8d4ea;
          margin-bottom: 15px;
        }
        
        .accessory-features {
          list-style: none;
          padding: 0;
        }
        
        .accessory-features li {
          color: #e8f4fd;
          font-size: 0.9rem;
          margin-bottom: 6px;
          padding-left: 20px;
          position: relative;
        }
        
        .accessory-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #4a9eff;
          font-weight: bold;
        }
        
        .benefits-section {
          margin-top: 50px;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out 0.8s;
        }
        
        .benefits-section.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .benefits-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 25px;
        }
        
        .benefits-subtitle {
          font-size: 1.4rem;
          font-weight: 600;
          color: #4a9eff;
          margin-bottom: 15px;
          margin-top: 30px;
        }
        
        .benefits-list {
          list-style: none;
          padding: 0;
          margin-bottom: 25px;
        }
        
        .benefits-list li {
          background: rgba(255, 255, 255, 0.05);
          border-left: 4px solid #4a9eff;
          padding: 15px 20px;
          margin-bottom: 12px;
          color: #e8f4fd;
          font-size: 1rem;
          border-radius: 0 10px 10px 0;
          transition: all 0.3s ease;
        }
        
        .benefits-list li:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
        }
        
        .intro-text {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 30px;
          color: #e8f4fd;
          font-size: 1.1rem;
          line-height: 1.6;
        }
        
        .cta-button {
          background: linear-gradient(45deg, #4a9eff, #2c5282);
          border: none;
          color: #ffffff;
          font-weight: 600;
          padding: 15px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          margin-top: 30px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(74, 158, 255, 0.3);
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out 1s;
        }
        
        .cta-button.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(74, 158, 255, 0.5);
          background: linear-gradient(45deg, #2c5282, #4a9eff);
        }
        
        @media (max-width: 768px) {
          .ble-section {
            padding: 60px 0;
          }
          
          .ble-title {
            font-size: 2.2rem;
            text-align: center;
          }
          
          .ble-description {
            font-size: 1.1rem;
            text-align: center;
          }
          
          .feature-image {
            height: 300px;
            margin-bottom: 40px;
          }
          
          .image-icon {
            font-size: 6rem;
          }
          
          .accessories-grid {
            grid-template-columns: 1fr;
          }
          
          .benefits-title {
            text-align: center;
          }
        }
        
        @media (max-width: 576px) {
          .ble-title {
            font-size: 1.9rem;
          }
          
          .feature-image {
            height: 250px;
          }
          
          .image-icon {
            font-size: 4.5rem;
          }
        }
      `}</style>
      
      <section className="ble-section" ref={sectionRef}>
        <div className="ble-bg-pattern"></div>
        
        <div className="container section-content">
          <div className="row align-items-center">
            {/* Text Content - Left Side */}
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className={`ble-title ${isVisible ? 'visible' : ''}`}>
                Motorcycles, ATVs & Quads Tracking Solutions
              </h2>
              
              <p className={`ble-description ${isVisible ? 'visible' : ''}`}>
                Motorsports are popular events all over the world, with millions of motorcycles, ATVs, and e-scooters 
                requiring advanced tracking solutions. SecuFleet provides comprehensive protection, safety, and fleet 
                management solutions for over 200 million motorcycles globally and the growing recreational vehicle market.
              </p>
              
              <div className={`intro-text ${isVisible ? 'visible' : ''}`}>
                Track and monitor motorcycles, ATVs, and e-scooters with relevant data tracking to ensure accuracy, 
                timely technical assistance, proper safety measures, and protection against theft-related crimes and safety challenges.
              </div>
              
              <div className={`accessories-grid ${isVisible ? 'visible' : ''}`}>
                {accessories.map((accessory, index) => (
                  <div key={index} className="accessory-card">
                    <h3 className="accessory-title">{accessory.title}</h3>
                    <p className="accessory-desc">{accessory.description}</p>
                    <ul className="accessory-features">
                      {accessory.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className={`benefits-section ${isVisible ? 'visible' : ''}`}>
                <h3 className="benefits-title">Comprehensive Tracking Benefits</h3>
                
                <h4 className="benefits-subtitle">Motorcycle Tracking & Protection</h4>
                <ul className="benefits-list">
                  {motorcycleBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                
                <h4 className="benefits-subtitle">ATV & Recreational Vehicle Safety</h4>
                <ul className="benefits-list">
                  {atvBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                
                <h4 className="benefits-subtitle">E-Scooter Fleet Management</h4>
                <ul className="benefits-list">
                  {escooterBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <button className={`btn cta-button ${isVisible ? 'visible' : ''}`}>
                Explore All Tracking Solutions
              </button>
            </div>
            
            {/* Image - Right Side */}
            <div className="col-lg-6 order-1 order-lg-2">
              <div className={`image-container ${isVisible ? 'visible' : ''}`}>
                <div className="feature-image">
                  <div className="image-icon">🏍️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BleFeaturs;