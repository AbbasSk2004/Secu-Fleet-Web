'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ConsultingExpertise = () => {
  const expertiseLinks = [
    { href: '/Service/consulting/strategy-service.html', text: 'Business Strategy' },
    { href: '/Service/consulting/customer-strategy.html', text: 'Customer Strategy' },
    { href: '/Service/consulting/Operations-Strategy-Consulting.html', text: 'Operations Strategy' },
    { href: '/Service/consulting/Consulting Organizational Stratetgy.html', text: 'Organizational Strategy' },
    { href: '/Service/consulting/consulting&Innovation.html', text: 'Consulting innovation' },
    { href: '/Service/consulting/Technology-strategies-services.html', text: 'Technology Strategy' },
    { href: '/Service/consulting/Product-&-innovation-Strategy-Services.html', text: 'Digital Marketing Strategies' },
    { href: '/Service/consulting/case-study.html', text: 'Case Studies' }
  ];

  return (
    <section className="py-5 wow fadeInUp" data-wow-delay="0.1s" style={{ backgroundColor: '#091E3E' }}>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Image Column */}
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-3 opacity-10" style={{ transform: 'rotate(-2deg)' }}></div>
              <Image 
                src="https://i.ibb.co/KL70MQJ/filen.png" 
                alt="Consulting Expertise"
                width={600}
                height={400}
                className="img-fluid rounded-3 shadow-lg position-relative"
                style={{ zIndex: 2 }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient rounded-3 opacity-10" style={{ 
                background: 'linear-gradient(45deg, rgba(6, 163, 218, 0.1), rgba(52, 173, 84, 0.1))',
                zIndex: 1 
              }}></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.5s">
            <div className="section-title position-relative pb-3 mb-4">
              <h5 className="fw-bold text-primary text-uppercase mb-2">
                <i className="fas fa-star me-2"></i>
                Our Expertise
              </h5>
              <h1 className="display-5 fw-bold text-white mb-4">
                Consulting Expertise
              </h1>
            </div>
            
            <div className="mb-5">
              <p className="lead text-light mb-4">
                We help our clients build frameworks based on understanding their unique
                strengths while increasing their supply chains and assets sustainability, ensuring scale to
                think and deliver big.
              </p>
            </div>

            {/* Expertise Links */}
            <div className="row g-3">
              {expertiseLinks.map((link, index) => (
                <div key={index} className="col-12">
                  <Link 
                    href={link.href} 
                    className="d-flex align-items-center p-3 rounded-3 bg-dark bg-opacity-25 border border-primary border-opacity-25 text-decoration-none text-light hover-lift"
                    style={{ 
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = 'rgba(6, 163, 218, 0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(6, 163, 218, 0.1)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(6, 163, 218, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(6, 163, 218, 0.25)';
                      e.currentTarget.style.backgroundColor = 'rgba(33, 37, 41, 0.25)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="me-3">
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        <i className="bi bi-arrow-right text-white"></i>
                      </div>
                    </div>
                    <span className="fw-semibold">{link.text}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingExpertise; 