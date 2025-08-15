'use client'
import React, { useEffect, useState, useRef } from 'react';

const SeaTrackingAndMonitoring = () => {
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
            setTimeout(() => setVisibleCards(prev => [...prev, 0]), 300);
            setTimeout(() => setVisibleCards(prev => [...prev, 1]), 500);
            setTimeout(() => setVisibleCards(prev => [...prev, 2]), 700);
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

  const features = [
    {
      id: 1,
      title: "Long Battery Life",
      description: "Ultra-low-power Bluetooth BlueNRG-232 chipset with 1 report per day providing up to 3 years of continuous operation without battery replacement.",
      icon: "🔋",
      bootstrapIcon: "battery-full",
      color: "#4a9eff",
      details: ["3-year battery life", "1 report per day", "BlueNRG-232 chipset", "Ultra-low power consumption"]
    },
    {
      id: 2,
      title: "Safe Collection of Records",
      description: "High gain antennas and 128MB memory ensure reliable data collection and storage, maintaining functionality even without GSM signal coverage.",
      icon: "🛡️",
      bootstrapIcon: "database",
      color: "#2c5282",
      details: ["128MB memory storage", "High gain antennas", "Works without GSM", "Secure data collection"]
    },
    {
      id: 3,
      title: "Easy Installation",
      description: "Water and dust resistant design with simple installation process. Built to withstand harsh maritime environments and extreme weather conditions.",
      icon: "🔧",
      bootstrapIcon: "tools",
      color: "#4a9eff",
      details: ["Water resistant", "Dust resistant", "Simple installation", "Maritime grade durability"]
    }
  ];

  return (
    <>
      <style jsx>{`
        .sea-tracking-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1e3a5f 50%, #0b1a2e 100%);
          padding: 100px 0;
          position: relative;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 30px;
          position: relative;
          display: inline-block;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .section-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #4a9eff, #2c5282);
          border-radius: 2px;
        }
        
        .section-intro {
          font-size: 1.2rem;
          color: #e8f4fd;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out 0.2s;
        }
        
        .section-intro.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .feature-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          padding: 40px 30px;
          height: 100%;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px);
          box-shadow: 0 5px 15px rgba(11, 26, 46, 0.08);
        }
        
        .feature-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(11, 26, 46, 0.15);
          border-color: #4a9eff;
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #4a9eff, #2c5282);
          transform: scaleX(0);
          transition: transform 0.4s ease;
          transform-origin: left;
        }
        
        .feature-card:hover::before {
          transform: scaleX(1);
        }
        
        .icon-container {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4a9eff, #2c5282);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .icon-container {
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(74, 158, 255, 0.3);
        }
        
        .icon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2c5282, #4a9eff);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .feature-card:hover .icon-container::before {
          opacity: 1;
        }
        
        .feature-icon {
          font-size: 2.5rem;
          position: relative;
          z-index: 2;
        }
        
        .bootstrap-icon {
          font-size: 2rem;
          color: #ffffff;
          position: relative;
          z-index: 2;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #0b1a2e;
          margin-bottom: 15px;
          text-align: center;
        }
        
        .feature-description {
          color: #4a5568;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 25px;
          text-align: center;
        }
        
        .feature-details {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .feature-details li {
          color: #2d3748;
          font-size: 0.95rem;
          margin-bottom: 8px;
          padding-left: 25px;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .feature-details li::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          color: #4a9eff;
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        .feature-card:hover .feature-details li {
          transform: translateX(5px);
        }
        
        .tech-specs {
          background: linear-gradient(135deg, #f8fbff 0%, #e8f4fd 100%);
          border-radius: 15px;
          padding: 40px;
          margin-top: 80px;
          border: 1px solid rgba(74, 158, 255, 0.1);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out 0.9s;
        }
        
        .tech-specs.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .tech-title {
          font-size: 1.8rem;
          font-weight: 600;
          color:rgb(22, 21, 124);
          text-align: center;
          margin-bottom: 30px;
        }
        
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }
        
        .tech-item {
          background: #ffffff;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          border: 1px solid rgba(74, 158, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .tech-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(74, 158, 255, 0.1);
        }
        
        .tech-label {
          font-size: 0.9rem;
          color: #718096;
          margin-bottom: 5px;
        }
        
        .tech-value {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0b1a2e;
        }
        
        @media (max-width: 768px) {
          .sea-tracking-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .section-intro {
            font-size: 1.1rem;
          }
          
          .feature-card {
            margin-bottom: 30px;
            padding: 30px 25px;
          }
          
          .icon-container {
            width: 70px;
            height: 70px;
          }
          
          .feature-icon {
            font-size: 2rem;
          }
          
          .bootstrap-icon {
            font-size: 1.6rem;
          }
          
          .tech-specs {
            padding: 30px 20px;
            margin-top: 60px;
          }
          
          .tech-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 1.9rem;
          }
          
          .section-intro {
            font-size: 1rem;
          }
          
          .feature-card {
            padding: 25px 20px;
          }
        }
      `}</style>
      
      <section className="sea-tracking-section" ref={sectionRef}>
        <div className="container">
          <div className="section-header">
            <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
              Sea Container Tracking & Monitoring Solution
            </h2>
            <p className={`section-intro ${isVisible ? 'visible' : ''}`}>
              Due to globalization and booming international trade, sea container shipping is a key freight method. 
              Increased cargo flow raises theft risks, requiring countermeasures to protect goods and supply chain operations. 
              SecuFleet offers a smart solution to track and monitor containers with advanced technology and reliability.
            </p>
          </div>
          
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={feature.id} className="col-lg-4 col-md-6">
                <div className={`feature-card ${visibleCards.includes(index) ? 'visible' : ''}`}>
                  <div className="icon-container">
                    <div className="feature-icon">{feature.icon}</div>
                  </div>
                  
                  <h3 className="feature-title">{feature.title}</h3>
                  
                  <p className="feature-description">
                    {feature.description}
                  </p>
                  
                  <ul className="feature-details">
                    {feature.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`tech-specs ${isVisible ? 'visible' : ''}`}>
            <h3 className="tech-title ">Technical Specifications</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <div className="tech-label">Chipset</div>
                <div className="tech-value">BlueNRG-232</div>
              </div>
              <div className="tech-item">
                <div className="tech-label">Memory</div>
                <div className="tech-value">128MB</div>
              </div>
              <div className="tech-item">
                <div className="tech-label">Battery Life</div>
                <div className="tech-value">Up to 3 Years</div>
              </div>
              <div className="tech-item">
                <div className="tech-label">Reporting</div>
                <div className="tech-value">1 Report/Day</div>
              </div>
              <div className="tech-item">
                <div className="tech-label">Connectivity</div>
                <div className="tech-value">Bluetooth + GSM</div>
              </div>
              <div className="tech-item">
                <div className="tech-label">Rating</div>
                <div className="tech-value">Water/Dust Resistant</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeaTrackingAndMonitoring;