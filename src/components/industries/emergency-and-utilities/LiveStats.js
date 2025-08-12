'use client'
import React, { useState, useEffect, useRef } from 'react';

const LiveStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);

  const statsData = [
    { value: 98, label: 'GPS Coverage', suffix: '%' },
    { value: 15000, label: 'Active Users', suffix: '+' },
    { value: 24, label: 'Support Hours', suffix: '/7' },
    { value: 99, label: 'Uptime', suffix: '%' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    statsData.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / 60; // 60 frames for smooth animation
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = Math.floor(current);
          return newValues;
        });
      }, 25); // ~40fps
    });
  };

  return (
    <div className="py-5" style={{ backgroundColor: '#1a2332' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: 'white' }}>
            Live Performance Stats
          </h2>
          <div 
            className="mx-auto mb-4" 
            style={{ 
              width: '80px', 
              height: '4px', 
              background: 'linear-gradient(90deg, #3b82f6, #ffffff, #3b82f6)',
              borderRadius: '2px'
            }}
          ></div>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Real-time metrics that showcase our excellence</p>
        </div>
        
        <div 
          ref={statsRef}
          className="d-flex justify-content-around flex-wrap align-items-center"
          style={{ minHeight: '250px' }}
        >
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className="text-center mx-3 mb-4 stat-item"
              style={{
                flex: '1 1 200px',
                maxWidth: '250px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${index * 0.15}s`
              }}
            >
              {/* Floating particles background */}
              <div className="position-relative mb-3">
                <div 
                  className="stat-badge mx-auto position-relative overflow-hidden"
                  style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  {/* Animated gradient overlay */}
                  <div 
                    className="position-absolute w-100 h-100"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                      animation: `shimmer 3s ease-in-out infinite ${index * 0.5}s`
                    }}
                  ></div>
                  
                  {/* Main number */}
                  <span 
                    className="fw-bold position-relative"
                    style={{ 
                      fontSize: '2rem',
                      color: '#1e3a8a',
                      textShadow: '0 2px 4px rgba(30, 58, 138, 0.2)',
                      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    {animatedValues[index].toLocaleString()}{stat.suffix}
                  </span>
                  
                  {/* Pulsing ring */}
                  <div 
                    className="position-absolute"
                    style={{
                      width: '140px',
                      height: '140px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%',
                      animation: 'pulse 2s ease-in-out infinite',
                      top: '-10px',
                      left: '-10px'
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Label with enhanced typography */}
              <div>
                <h4 
                  className="fw-semibold mb-2"
                  style={{ 
                    color: '#1e3a8a',
                    fontSize: '1.1rem',
                    letterSpacing: '0.5px',
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  {stat.label}
                </h4>
                <div 
                  className="mx-auto"
                  style={{
                    width: '40px',
                    height: '2px',
                    backgroundColor: '#3b82f6',
                    borderRadius: '1px',
                    opacity: 0.7
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.05);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .stat-item:nth-child(even) .stat-badge {
          animation: float 3s ease-in-out infinite;
        }
        
        .stat-item:nth-child(odd) .stat-badge {
          animation: float 3s ease-in-out infinite reverse;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .stat-badge {
            width: 100px !important;
            height: 100px !important;
          }
          .stat-badge span {
            font-size: 1.5rem !important;
          }
        }
        
        /* Smooth scrollbar for better UX */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default LiveStats;