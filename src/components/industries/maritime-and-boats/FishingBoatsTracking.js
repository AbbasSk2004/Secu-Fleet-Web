'use client'
import React, { useEffect, useState, useRef } from 'react';

const FishingBoatsTracking = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger feature animations
            setTimeout(() => setVisibleFeatures(prev => [...prev, 0]), 300);
            setTimeout(() => setVisibleFeatures(prev => [...prev, 1]), 500);
            setTimeout(() => setVisibleFeatures(prev => [...prev, 2]), 700);
            setTimeout(() => setVisibleFeatures(prev => [...prev, 3]), 900);
            setTimeout(() => setVisibleFeatures(prev => [...prev, 4]), 1100);
            setTimeout(() => setVisibleFeatures(prev => [...prev, 5]), 1300);
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
    "IP67 casing + LTE Cat 1 connectivity for challenging climates",
    "Certified click-type casing with TPE gasket (salt water resistant)",
    "Static Navigation mode for accurate drift tracking",
    "Multiple mounting options for various vessel types",
    "Helps prevent theft of motorboats and vessels",
    "Ready-to-use for large telematics projects"
  ];

  return (
    <>
      <style jsx>{`
        .fishing-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1e3a5f 50%, #0b1a2e 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .wave-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background: linear-gradient(135deg, #4a9eff 0%, #2c5282 100%);
          clip-path: polygon(0 0, 100% 0, 100% 40px, 0 60px);
          z-index: 1;
        }
        
        .wave-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background: linear-gradient(135deg, #2c5282 0%, #4a9eff 100%);
          clip-path: polygon(0 20px, 100% 0, 100% 100%, 0 100%);
          z-index: 1;
        }
        
        .wave-pattern {
          position: absolute;
          top: 0;
          width: 100%;
          height: 4px;
          background: repeating-linear-gradient(
            90deg,
            #4a9eff 0px,
            #4a9eff 20px,
            #2c5282 20px,
            #2c5282 40px
          );
          animation: waveMove 3s linear infinite;
        }
        
        .wave-pattern-bottom {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 4px;
          background: repeating-linear-gradient(
            90deg,
            #2c5282 0px,
            #2c5282 20px,
            #4a9eff 20px,
            #4a9eff 40px
          );
          animation: waveMove 3s linear infinite reverse;
        }
        
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(40px); }
        }
        
        .section-content {
          position: relative;
          z-index: 2;
          padding: 100px 0;
          width: 100%;
        }
        
        .text-content {
          padding-right: 40px;
          position: relative;
          z-index: 3;
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 30px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          opacity: 0;
          transform: translateX(-50px);
          transition: all 1s ease-out;
        }
        
        .section-title.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .section-intro {
          font-size: 1.2rem;
          color: #e8f4fd;
          line-height: 1.7;
          margin-bottom: 40px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
          opacity: 0;
          transform: translateX(-50px);
          transition: all 1s ease-out 0.3s;
        }
        
        .section-intro.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
        }
        
        .feature-item {
          color: #ffffff;
          font-size: 1.1rem;
          margin-bottom: 20px;
          padding: 15px 20px 15px 50px;
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          border-left: 4px solid #4a9eff;
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out;
        }
        
        .feature-item.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .feature-item::before {
          content: '⚓';
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2rem;
          color: #4a9eff;
        }
        
        .feature-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(10px);
          border-left-color: #ffffff;
        }
        
        .cta-button {
          background: transparent;
          color: #ffffff;
          border: 3px solid #4a9eff;
          font-weight: 600;
          padding: 15px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          transition: all 0.4s ease;
          text-decoration: none;
          display: inline-block;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 1s ease-out 1.5s;
        }
        
        .cta-button.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .cta-button:hover {
          background: #4a9eff;
          border-color: #4a9eff;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(74, 158, 255, 0.3);
          text-decoration: none;
          color: #ffffff;
        }
        
        .image-container {
          position: relative;
          height: 600px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: translateX(50px);
          transition: all 1s ease-out 0.6s;
        }
        
        .image-container.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .boat-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(11, 26, 46, 0.7) 0%,
            rgba(30, 58, 95, 0.5) 50%,
            rgba(74, 158, 255, 0.3) 100%
          ),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><pattern id="waves" patternUnits="userSpaceOnUse" width="100" height="50"><path d="M0 25 Q25 10 50 25 T100 25" stroke="%23ffffff" stroke-width="1" fill="none" opacity="0.1"/></pattern></defs><rect width="800" height="600" fill="%232c5282"/><rect width="800" height="300" y="300" fill="url(%23waves)"/><path d="M200 350 L300 340 L350 320 L380 320 L400 340 L500 350 L520 360 L180 360 Z" fill="%23ffffff" opacity="0.8"/><rect x="320" y="200" width="8" height="120" fill="%23ffffff" opacity="0.9"/><polygon points="328,200 328,160 380,180" fill="%23ffffff" opacity="0.7"/></svg>');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .boat-icon {
          font-size: 8rem;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        
        .floating-fish {
          position: absolute;
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.1);
          animation: swim 8s ease-in-out infinite;
        }
        
        .floating-fish:nth-child(1) {
          top: 20%;
          left: 5%;
          animation-delay: 0s;
        }
        
        .floating-fish:nth-child(2) {
          top: 60%;
          left: 10%;
          animation-delay: 3s;
        }
        
        .floating-fish:nth-child(3) {
          top: 80%;
          right: 15%;
          animation-delay: 6s;
        }
        
        @keyframes swim {
          0%, 100% { transform: translateX(0) rotateY(0deg); }
          25% { transform: translateX(30px) rotateY(180deg); }
          50% { transform: translateX(60px) rotateY(0deg); }
          75% { transform: translateX(30px) rotateY(180deg); }
        }
        
        @media (max-width: 768px) {
          .section-content {
            padding: 60px 0;
          }
          
          .text-content {
            padding-right: 0;
            margin-bottom: 40px;
            text-align: center;
          }
          
          .section-title {
            font-size: 2.2rem;
            transform: translateY(-30px);
          }
          
          .section-title.visible {
            transform: translateY(0);
          }
          
          .section-intro {
            font-size: 1.1rem;
            transform: translateY(30px);
          }
          
          .section-intro.visible {
            transform: translateY(0);
          }
          
          .feature-item {
            text-align: left;
            transform: translateY(30px);
          }
          
          .feature-item.visible {
            transform: translateY(0);
          }
          
          .image-container {
            height: 400px;
            margin-bottom: 30px;
            transform: translateY(-30px);
          }
          
          .image-container.visible {
            transform: translateY(0);
          }
          
          .cta-button {
            width: 100%;
            max-width: 300px;
            transform: translateY(30px);
          }
          
          .cta-button.visible {
            transform: translateY(0);
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 1.9rem;
          }
          
          .section-intro {
            font-size: 1rem;
          }
          
          .feature-item {
            font-size: 1rem;
            padding: 12px 15px 12px 40px;
          }
          
          .image-container {
            height: 300px;
          }
          
          .boat-icon {
            font-size: 6rem;
          }
        }
      `}</style>
      
      <section className="fishing-section" ref={sectionRef}>
        <div className="wave-top">
          <div className="wave-pattern"></div>
        </div>
        
        <div className="floating-elements">
          <div className="floating-fish">🐟</div>
          <div className="floating-fish">🐠</div>
          <div className="floating-fish">🐡</div>
        </div>
        
        <div className="section-content">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="text-content">
                  <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
                    Fishing Boats Tracking – IP67 GPS Devices
                  </h2>
                  
                  <p className={`section-intro ${isVisible ? 'visible' : ''}`}>
                    Global seafood consumption has doubled in 50 years. Overfishing and illegal fishing demand monitoring. 
                    SecuFleet's GPS trackers preserve aquaculture by helping enforce regulations and ensure sustainable fishing practices.
                  </p>
                  
                  <ul className="features-list">
                    {features.map((feature, index) => (
                      <li 
                        key={index} 
                        className={`feature-item ${visibleFeatures.includes(index) ? 'visible' : ''}`}
                        style={{ transitionDelay: `${0.1 * index}s` }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#learn-more" className={`cta-button ${isVisible ? 'visible' : ''}`}>
                    Learn More
                  </a>
                </div>
              </div>
              
              <div className="col-lg-6 order-1 order-lg-2">
                <div className={`image-container ${isVisible ? 'visible' : ''}`}>
                  <div className="boat-image">
                    <div className="boat-icon">🚤</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wave-bottom">
          <div className="wave-pattern-bottom"></div>
        </div>
      </section>
    </>
  );
};

export default FishingBoatsTracking;