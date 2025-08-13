'use client'
import React, { useEffect, useState, useRef } from 'react';

const MiningStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    coverage: 0,
    responseTime: 0,
    efficiency: 0,
    fleets: 0
  });
  const sectionRef = useRef(null);

  const targetValues = {
    coverage: 200,
    responseTime: 30,
    efficiency: 67,
    fleets: 98
  };

  const animateCounter = (key, target, duration = 2000) => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCounters(prev => ({ ...prev, [key]: currentValue }));
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            // Start counter animations with staggered delays
            setTimeout(() => animateCounter('coverage', targetValues.coverage), 200);
            setTimeout(() => animateCounter('responseTime', targetValues.responseTime), 400);
            setTimeout(() => animateCounter('efficiency', targetValues.efficiency), 600);
            setTimeout(() => animateCounter('fleets', targetValues.fleets), 800);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const stats = [
    {
      id: 'coverage',
      value: counters.coverage,
      suffix: 'M+',
      label: 'Motorcycles Worldwide',
      description: 'Including Mopeds & E-Scooters',
      icon: '🏍️',
      color: '#4a9eff'
    },
    {
      id: 'responseTime',
      value: counters.responseTime,
      suffix: ' Days',
      label: 'Battery Life',
      description: 'With Unique Sleep Mode',
      icon: '🔋',
      color: '#2c5282'
    },
    {
      id: 'efficiency',
      value: counters.efficiency,
      suffix: '',
      label: 'IP67 Protection',
      description: 'Water & Dust Resistant',
      icon: '🛡️',
      color: '#4a9eff'
    },
    {
      id: 'fleets',
      value: counters.fleets,
      suffix: '%',
      label: 'Safety Reliability',
      description: 'Helmet Detection & Alerts',
      icon: '⚡',
      color: '#2c5282'
    }
  ];

  return (
    <>
      <style jsx>{`
        .stats-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1e3a5f 50%, #0b1a2e 100%);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        
        .stats-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(11, 26, 46, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(30, 58, 95, 0.04) 0%, transparent 50%);
          background-size: 150px 150px;
        }
        
        .section-content {
          position: relative;
          z-index: 2;
        }
        
        .stats-header {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .stats-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .stats-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stats-subtitle {
          font-size: 1.2rem;
          color: #e8f4fd;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out 0.2s;
        }
        
        .stats-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stat-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(11, 26, 46, 0.08);
          border: 1px solid rgba(30, 58, 95, 0.1);
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px) scale(0.9);
          height: 100%;
        }
        
        .stat-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .stat-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(11, 26, 46, 0.15);
        }
        
        .stat-card::before {
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
        
        .stat-card:hover::before {
          transform: scaleX(1);
        }
        
        .stat-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover .stat-icon {
          transform: scale(1.1);
          opacity: 1;
        }
        
        .stat-number {
          font-size: 3.5rem;
          font-weight: 800;
          color: #0b1a2e;
          line-height: 1;
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }
        
        .stat-suffix {
          color: #4a9eff;
          font-size: 2.5rem;
        }
        
        .stat-label {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1e3a5f;
          margin-bottom: 12px;
        }
        
        .stat-description {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.5;
        }
        
        .features-section {
          margin-top: 80px;
          text-align: center;
        }
        
        .features-title {
          font-size: 2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out 0.4s;
        }
        
        .features-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .feature-item {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(30, 58, 95, 0.1);
          border-radius: 15px;
          padding: 30px 25px;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .feature-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .feature-item:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(11, 26, 46, 0.1);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        
        .feature-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #0b1a2e;
          margin-bottom: 10px;
        }
        
        .feature-desc {
          font-size: 1rem;
          color: #1e3a5f;
          line-height: 1.5;
        }
        
        .intro-section {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 60px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out 0.3s;
        }
        
        .intro-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .intro-text {
          color: #e8f4fd;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .stats-section {
            padding: 60px 0;
          }
          
          .stats-title {
            font-size: 2.2rem;
          }
          
          .stats-subtitle {
            font-size: 1.1rem;
          }
          
          .stat-card {
            margin-bottom: 30px;
            padding: 30px 20px;
          }
          
          .stat-number {
            font-size: 2.8rem;
          }
          
          .stat-suffix {
            font-size: 2rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        
        @media (max-width: 576px) {
          .stats-title {
            font-size: 1.9rem;
          }
          
          .stat-number {
            font-size: 2.4rem;
          }
          
          .stat-icon {
            font-size: 2.5rem;
          }
        }
      `}</style>
      
      <section className="stats-section" ref={sectionRef}>
        <div className="stats-bg-pattern"></div>
        
        <div className="container section-content">
          <div className="stats-header">
            <h2 className={`stats-title ${isVisible ? 'visible' : ''}`}>
              Motorcycles, ATVs & Quads by the Numbers
            </h2>
            <p className={`stats-subtitle ${isVisible ? 'visible' : ''}`}>
              Proven tracking solutions for the world's most popular motorsports vehicles. 
              SecuFleet delivers reliable protection, safety, and fleet management across all terrains and weather conditions.
            </p>
          </div>
          
          <div className={`intro-section ${isVisible ? 'visible' : ''}`}>
            <p className="intro-text">
              Motorsports are popular events all over the world. With millions of motorcycles, ATVs, and e-scooters used daily, 
              SecuFleet provides comprehensive tracking solutions to combat theft-related crimes, enhance safety measures, 
              and ensure accurate data monitoring for recreational and commercial vehicle operations.
            </p>
          </div>
          
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={stat.id} className="col-lg-3 col-md-6">
                <div 
                  className={`stat-card ${isVisible ? 'visible' : ''}`}
                  style={{ 
                    transitionDelay: `${0.6 + index * 0.2}s`,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)'
                  }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">
                    {stat.value}
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>
                  <h3 className="stat-label">{stat.label}</h3>
                  <p className="stat-description">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="features-section">
            <h3 className={`features-title ${isVisible ? 'visible' : ''}`}>
              Advanced Tracking Features & Capabilities
            </h3>
            
            <div className="features-grid">
              <div className={`feature-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '1.4s' }}>
                <div className="feature-icon">🏍️</div>
                <h4 className="feature-title">Motorcycle-Specific Design</h4>
                <p className="feature-desc">Compact, robust casing with click-type closing requiring no tools for installation</p>
              </div>
              
              <div className={`feature-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '1.6s' }}>
                <div className="feature-icon">🛡️</div>
                <h4 className="feature-title">Ultimate Weather Protection</h4>
                <p className="feature-desc">IP67-rated waterproof and dustproof casing for reliable operation in harsh conditions</p>
              </div>
              
              <div className={`feature-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '1.8s' }}>
                <div className="feature-icon">🪖</div>
                <h4 className="feature-title">Helmet Detection Technology</h4>
                <p className="feature-desc">Advanced safety monitoring to minimize accident risks and ensure rider protection</p>
              </div>
              
              <div className={`feature-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '2s' }}>
                <div className="feature-icon">🚨</div>
                <h4 className="feature-title">Emergency Response System</h4>
                <p className="feature-desc">Built-in panic button with immediate emergency service alerts and accurate location data</p>
              </div>
              
              <div className={`feature-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '2.2s' }}>
                <div className="feature-icon">📱</div>
                <h4 className="feature-title">Remote Updates & Configuration</h4>
                <p className="feature-desc">FOTA WEB tool for seamless firmware updates ensuring optimal performance</p>
              </div>
              
              <div className={`feature-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '2.4s' }}>
                <div className="feature-icon">📊</div>
                <h4 className="feature-title">Fleet Analytics & Insights</h4>
                <p className="feature-desc">Data collection on user behavior, maintenance needs, and operational optimization</p>
              </div>
              
              <div className={`feature-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '2.6s' }}>
                <div className="feature-icon">🔄</div>
                <h4 className="feature-title">Multi-Brand Compatibility</h4>
                <p className="feature-desc">Versatile solutions supporting various e-scooter and vehicle manufacturer brands</p>
              </div>
              
              <div className={`feature-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '2.8s' }}>
                <div className="feature-icon">⚡</div>
                <h4 className="feature-title">Multi-Functional Outputs</h4>
                <p className="feature-desc">Digital outputs for panic buttons, LED notifications, and buzzer alerts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiningStats;