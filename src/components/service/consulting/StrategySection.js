'use client'

import React from 'react';
import Image from 'next/image';

const StrategySection = () => {
  const features = [
    {
      title: 'Crafting Strategic Frameworks',
      icon: 'fas fa-sitemap',
      description: 'Building comprehensive strategic frameworks that drive organizational success and sustainable growth.'
    },
    {
      title: 'Organizational Business Strategy Education',
      icon: 'fas fa-graduation-cap',
      description: 'Empowering teams with strategic knowledge and skills through comprehensive business education programs.'
    },
    {
      title: 'Prioritizing Strategic Goals',
      icon: 'fas fa-bullseye',
      description: 'Helping organizations identify and prioritize strategic objectives for maximum impact and efficiency.'
    },
    {
      title: 'Keys to Successful Strategic Formulation',
      icon: 'fas fa-key',
      description: 'Providing essential tools and methodologies for effective strategic planning and implementation.'
    }
  ];

  return (
    <section className="py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ backgroundColor: '#091E3E' }}>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Content Column */}
          <div className="col-lg-7 col-md-6 wow fadeInLeft" data-wow-delay="0.3s">
            <div className="section-title position-relative pb-3 mb-4">
              <h5 className="fw-bold text-primary text-uppercase mb-2">
                <i className="fas fa-lightbulb me-2"></i>
                Sustainable Future
              </h5>
              <h1 className="display-5 fw-bold text-white mb-4">
                Strategy Made Real
              </h1>
            </div>
            
            <div className="mb-5">
              <p className="lead text-light mb-4">
                Unleashing human energy to formulate a successful business strategy and equip your
                business with the tools, frameworks, knowledge to set goals for an inclusive and sustainable
                bright future.
              </p>
            </div>

            {/* Strategy Features */}
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-12">
                  <div 
                    className="d-flex align-items-start p-4 rounded-3 bg-dark bg-opacity-25 border border-primary border-opacity-25 hover-lift"
                    style={{ 
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.borderColor = 'rgba(6, 163, 218, 0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(6, 163, 218, 0.1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(6, 163, 218, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(6, 163, 218, 0.25)';
                      e.currentTarget.style.backgroundColor = 'rgba(33, 37, 41, 0.25)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="me-3 flex-shrink-0">
                      <div 
                        className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                        style={{ 
                          width: '50px', 
                          height: '50px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <i className={`${feature.icon} text-white`}></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="text-primary fw-bold mb-2">{feature.title}</h6>
                      <p className="text-light mb-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-5 col-md-6 wow fadeInRight" data-wow-delay="0.5s">
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-3 opacity-10" style={{ transform: 'rotate(-2deg)' }}></div>
              <Image 
                src="https://i.ibb.co/ZT3Snz9/4.png" 
                alt="Strategy"
                width={600}
                height={600}
                className="img-fluid rounded-3 shadow-lg position-relative"
                style={{ zIndex: 2 }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient rounded-3 opacity-10" style={{ 
                background: 'linear-gradient(45deg, rgba(6, 163, 218, 0.1), rgba(52, 173, 84, 0.1))',
                zIndex: 1 
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;