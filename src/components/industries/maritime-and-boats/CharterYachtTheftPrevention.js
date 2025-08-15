'use client'
import React, { useEffect, useState, useRef } from 'react';

const CharterYachtTheftPrevention = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const features = [
    {
      id: 1,
      title: "IP67 Casing + Iridium Edge",
      description: "Military-grade protection with Iridium satellite connectivity for the harshest marine conditions and extreme weather scenarios.",
      icon: "🛡️",
      image: "linear-gradient(135deg, #0b1a2e 0%, #1e3a5f 100%)"
    },
    {
      id: 2,
      title: "Global Coverage",
      description: "Worldwide tracking coverage including remote oceans and polar regions where cellular networks are unavailable.",
      icon: "🌍",
      image: "linear-gradient(135deg, #1e3a5f 0%, #4a9eff 100%)"
    },
    {
      id: 3,
      title: "Cellular + Satellite Integration",
      description: "Seamless switching between cellular and satellite networks ensuring continuous connectivity and data transmission.",
      icon: "📡",
      image: "linear-gradient(135deg, #2c5282 0%, #0b1a2e 100%)"
    },
    {
      id: 4,
      title: "Real-time Monitoring",
      description: "Live tracking and monitoring with instant updates on vessel location, status, and operational parameters.",
      icon: "⏱️",
      image: "linear-gradient(135deg, #4a9eff 0%, #2c5282 100%)"
    },
    {
      id: 5,
      title: "Fuel & Asset Protection",
      description: "Advanced fuel theft prevention and comprehensive onboard asset protection with intelligent monitoring systems.",
      icon: "⛽",
      image: "linear-gradient(135deg, #0b1a2e 0%, #4a9eff 100%)"
    },
    {
      id: 6,
      title: "Emergency Panic Button",
      description: "Instant emergency response with panic button activation and precise location data transmission to authorities.",
      icon: "🚨",
      image: "linear-gradient(135deg, #1e3a5f 0%, #0b1a2e 100%)"
    },
    {
      id: 7,
      title: "Operational Efficiency",
      description: "Enhanced route optimization, fuel management, and predictive maintenance scheduling for improved operations.",
      icon: "📈",
      image: "linear-gradient(135deg, #4a9eff 0%, #1e3a5f 100%)"
    },
    {
      id: 8,
      title: "Movement & Jamming Alerts",
      description: "Intelligent alerts for unexpected movement, signal jamming attempts, and suspicious activity around your vessel.",
      icon: "⚠️",
      image: "linear-gradient(135deg, #2c5282 0%, #4a9eff 100%)"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Start carousel auto-slide
            startAutoSlide();
            // Stagger mobile card animations
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % features.length);
    }, 5000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startAutoSlide(); // Reset the timer
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % features.length);
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + features.length) % features.length);
    startAutoSlide();
  };

  return (
    <>
      <style jsx>{`
        .yacht-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1e3a5f 50%, #0b1a2e 100%);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        
        .luxury-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(74, 158, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
          background-size: 200px 200px;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
          z-index: 2;
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 30px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }
        
        .section-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section-intro {
          font-size: 1.2rem;
          color: #e8f4fd;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out 0.3s;
        }
        
        .section-intro.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .carousel-container {
          position: relative;
          max-width: 1000px;
          height: 500px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
          opacity: 0;
          transform: scale(0.9);
          transition: all 1s ease-out 0.6s;
        }
        
        .carousel-container.visible {
          opacity: 1;
          transform: scale(1);
        }
        
        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 500px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }
        
        .carousel-slide.active {
          opacity: 1;
        }
        
        .slide-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(11, 26, 46, 0.9));
          padding: 40px;
          backdrop-filter: blur(10px);
        }
        
        .slide-content {
          background: rgba(11, 26, 46, 0.85);
          backdrop-filter: blur(15px);
          border-radius: 15px;
          padding: 40px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .slide-icon {
          font-size: 4rem;
          margin-bottom: 20px;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3));
        }
        
        .slide-title {
          font-size: 2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 15px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .slide-description {
          font-size: 1.1rem;
          color: #e8f4fd;
          line-height: 1.6;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        
        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.2rem;
          z-index: 3;
          backdrop-filter: blur(10px);
        }
        
        .carousel-nav:hover {
          background: #4a9eff;
          border-color: #4a9eff;
          transform: translateY(-50%) scale(1.1);
        }
        
        .carousel-nav.prev {
          left: 20px;
        }
        
        .carousel-nav.next {
          right: 20px;
        }
        
        .carousel-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 3;
        }
        
        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          background: #4a9eff;
          transform: scale(1.2);
        }
        
        .mobile-cards {
          display: none;
        }
        
        @media (max-width: 768px) {
          .yacht-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .section-intro {
            font-size: 1.1rem;
          }
          
          .carousel-container {
            display: none;
          }
          
          .mobile-cards {
            display: block;
            margin-top: 40px;
          }
          
          .static-yacht {
            height: 300px;
            background: linear-gradient(135deg, #1e3a5f 0%, #4a9eff 100%);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          }
          
          .yacht-icon {
            font-size: 6rem;
            color: #ffffff;
            text-shadow: 0 4px 20px rgba(0,0,0,0.5);
          }
          
          .feature-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 20px;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          
          .feature-card.visible {
            opacity: 1;
            transform: translateY(0);
          }
          
          .feature-card:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-5px);
          }
          
          .card-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
            text-align: center;
          }
          
          .card-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 10px;
            text-align: center;
          }
          
          .card-description {
            font-size: 1rem;
            color: #e8f4fd;
            line-height: 1.5;
            text-align: center;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 1.9rem;
          }
          
          .section-intro {
            font-size: 1rem;
          }
          
          .static-yacht {
            height: 250px;
          }
          
          .yacht-icon {
            font-size: 4.5rem;
          }
          
          .feature-card {
            padding: 20px;
          }
        }
      `}</style>
      
      <section className="yacht-section" ref={sectionRef}>
        <div className="luxury-pattern"></div>
        
        <div className="container">
          <div className="section-header">
            <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
              Charter Yacht Theft Prevention & Monitoring
            </h2>
            <p className={`section-intro ${isVisible ? 'visible' : ''}`}>
              Chartering yachts offers exclusivity and flexibility, but also theft and accident risks. 
              SecuFleet's water-resistant GPS trackers with satellite connectivity protect against losses 
              and ensure complete peace of mind for luxury vessel operations.
            </p>
          </div>
          
          {/* Desktop Carousel */}
          <div className={`carousel-container d-none d-md-block ${isVisible ? 'visible' : ''}`}>
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ background: feature.image }}
              >
                <div className="slide-content">
                  <div className="slide-icon">{feature.icon}</div>
                  <h3 className="slide-title">{feature.title}</h3>
                  <p className="slide-description">{feature.description}</p>
                </div>
              </div>
            ))}
            
            <button className="carousel-nav prev" onClick={prevSlide}>
              ‹
            </button>
            <button className="carousel-nav next" onClick={nextSlide}>
              ›
            </button>
            
            <div className="carousel-indicators">
              {features.map((_, index) => (
                <div 
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Mobile Cards */}
          <div className="mobile-cards d-md-none">
            <div className="static-yacht">
              <div className="yacht-icon">🛥️</div>
            </div>
            
            <div className="row">
              {features.map((feature, index) => (
                <div key={feature.id} className="col-12">
                  <div 
                    className={`feature-card ${visibleCards.includes(index) ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="card-icon">{feature.icon}</div>
                    <h3 className="card-title">{feature.title}</h3>
                    <p className="card-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CharterYachtTheftPrevention;