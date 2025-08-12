'use client'
import React, { useState, useEffect, useRef } from 'react';

const ProductAndSolutions = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  const productsData = [
    {
      id: 1,
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced machine learning algorithms. Get real-time analytics that adapt to your business needs and help you make informed decisions faster than ever before.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Real-time data processing",
        "Machine learning predictions",
        "Custom dashboard creation",
        "API integration capabilities",
        "Advanced security protocols"
      ],
      buttonText: "Explore Analytics"
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scale your operations seamlessly with our enterprise-grade cloud solutions. Built for performance, security, and reliability, our infrastructure adapts to your growing business needs with zero downtime.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      features: [
        "99.9% uptime guarantee",
        "Auto-scaling capabilities",
        "Global data centers",
        "24/7 monitoring",
        "Disaster recovery systems"
      ],
      buttonText: "View Infrastructure"
    },
    {
      id: 3,
      title: "Smart Automation",
      description: "Streamline your workflows with intelligent automation that learns and evolves. Reduce manual tasks, minimize errors, and boost productivity while maintaining complete control over your processes.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Workflow optimization",
        "Process automation",
        "Integration hub",
        "Custom rule engine",
        "Performance analytics"
      ],
      buttonText: "Discover Automation"
    }
  ];

  useEffect(() => {
    const observers = [];
    
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set([...prev, index]));
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const setItemRef = (index) => (el) => {
    itemRefs.current[index] = el;
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#0b1a2e', minHeight: '100vh' }}>
      {/* Header Section */}
      <div className="container">
        <div className="text-center mb-5 pb-4">
          <div className="mb-4">
            <span 
              className="badge px-4 py-2 mb-3"
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                color: '#3b82f6',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                fontSize: '0.9rem',
                fontWeight: '500',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}
            >
              Our Solutions
            </span>
          </div>
          <h2 
            className="display-3 fw-bold mb-4"
            style={{ 
              color: 'white',
              fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            Products & Solutions
          </h2>
          <div 
            className="mx-auto mb-4"
            style={{
              width: '120px',
              height: '4px',
              background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)',
              borderRadius: '2px'
            }}
          ></div>
          <p 
            className="lead mx-auto"
            style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              fontSize: '1.2rem',
              lineHeight: '1.6'
            }}
          >
            Discover cutting-edge solutions designed to transform your business and drive innovation forward
          </p>
        </div>

        {/* Products Grid */}
        {productsData.map((product, index) => (
          <div key={product.id}>
            <div 
              ref={setItemRef(index)}
              className="row align-items-center py-5"
              style={{
                opacity: visibleItems.has(index) ? 1 : 0,
                transform: visibleItems.has(index) ? 'translateY(0)' : 'translateY(50px)',
                transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`
              }}
            >
              {/* Image Column */}
              <div 
                className={`col-lg-6 mb-4 mb-lg-0 ${index % 2 === 0 ? 'order-lg-1' : 'order-lg-2'}`}
                style={{
                  transform: visibleItems.has(index) 
                    ? 'translateX(0)' 
                    : `translateX(${index % 2 === 0 ? '-50px' : '50px'})`,
                  transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2 + 0.2}s`
                }}
              >
                <div className="position-relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div 
                    className="position-absolute w-100 h-100"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1))',
                      borderRadius: '20px',
                      zIndex: 1
                    }}
                  ></div>
                  
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid position-relative"
                    style={{
                      borderRadius: '20px',
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      zIndex: 2,
                      filter: 'brightness(0.9) contrast(1.1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.02) translateY(-5px)';
                      e.target.style.boxShadow = '0 35px 70px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)';
                      e.target.style.filter = 'brightness(1) contrast(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1) translateY(0)';
                      e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)';
                      e.target.style.filter = 'brightness(0.9) contrast(1.1)';
                    }}
                  />
                  
                  {/* Floating particles */}
                  <div 
                    className="position-absolute"
                    style={{
                      top: '20%',
                      right: '15%',
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '50%',
                      animation: 'float 3s ease-in-out infinite',
                      opacity: 0.6
                    }}
                  ></div>
                  <div 
                    className="position-absolute"
                    style={{
                      bottom: '25%',
                      left: '10%',
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#06b6d4',
                      borderRadius: '50%',
                      animation: 'float 3s ease-in-out infinite reverse',
                      opacity: 0.4
                    }}
                  ></div>
                </div>
              </div>

              {/* Content Column */}
              <div 
                className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-2 ps-lg-5' : 'order-lg-1 pe-lg-5'}`}
                style={{
                  transform: visibleItems.has(index) 
                    ? 'translateX(0)' 
                    : `translateX(${index % 2 === 0 ? '50px' : '-50px'})`,
                  transition: `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2 + 0.4}s`
                }}
              >
                <div className="position-relative">
                  {/* Background accent */}
                  <div 
                    className="position-absolute"
                    style={{
                      top: '-20px',
                      left: '-20px',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                      borderRadius: '50%',
                      opacity: 0.1,
                      filter: 'blur(20px)'
                    }}
                  ></div>

                  <h3 
                    className="fw-bold mb-4"
                    style={{
                      color: '#3b82f6',
                      fontSize: '2.5rem',
                      fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.2'
                    }}
                  >
                    {product.title}
                  </h3>

                  <p 
                    className="mb-4"
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      letterSpacing: '0.01em'
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul className="list-unstyled mb-5">
                    {product.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="d-flex align-items-center mb-3"
                        style={{
                          opacity: visibleItems.has(index) ? 1 : 0,
                          transform: visibleItems.has(index) ? 'translateX(0)' : 'translateX(20px)',
                          transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2 + featureIndex * 0.1 + 0.6}s`
                        }}
                      >
                        <div 
                          className="me-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: '24px',
                            height: '24px',
                            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                            borderRadius: '50%',
                            fontSize: '12px',
                            color: 'white',
                            fontWeight: 'bold'
                          }}
                        >
                          ✓
                        </div>
                        <span 
                          style={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1rem',
                            fontWeight: '400'
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className="btn btn-lg px-5 py-3 position-relative overflow-hidden"
                    style={{
                      backgroundColor: 'white',
                      color: '#0b1a2e',
                      border: 'none',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '1rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
                      opacity: visibleItems.has(index) ? 1 : 0,
                      transform: visibleItems.has(index) ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: `${index * 0.2 + 0.8}s`
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#3b82f6';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = '#0b1a2e';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    <span className="position-relative z-1">{product.buttonText}</span>
                    
                    {/* Button background animation */}
                    <div 
                      className="position-absolute w-100 h-100 top-0 start-0"
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                        transform: 'translateX(-100%)',
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 0
                      }}
                    ></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index < productsData.length - 1 && (
              <div className="row">
                <div className="col-12">
                  <div 
                    className="mx-auto my-5"
                    style={{
                      width: '60%',
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                      opacity: visibleItems.has(index) ? 1 : 0,
                      transition: `opacity 0.8s ease ${index * 0.2 + 1}s`
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced button hover effects */
        .btn:hover .position-absolute {
          transform: translateX(0) !important;
        }
        
        /* Mobile optimizations */
        @media (max-width: 991px) {
          .display-3 {
            font-size: 2.5rem !important;
          }
          
          .col-lg-6.pe-lg-5,
          .col-lg-6.ps-lg-5 {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }
        }
        
        @media (max-width: 576px) {
          .btn-lg {
            padding: 12px 30px !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductAndSolutions;