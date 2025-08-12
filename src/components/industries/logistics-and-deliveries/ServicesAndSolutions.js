'use client'
import React, { useEffect, useState, useRef } from 'react'

const ServicesAndSolutions = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      id: 1,
      title: "Delivery Services & Parcels",
      description: "Streamline last-mile delivery operations with real-time tracking, route optimization, and automated dispatch management for maximum efficiency.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "📦",
      color: "#28a745"
    },
    {
      id: 2,
      title: "Goods Tracking (BLE)",
      description: "Advanced Bluetooth Low Energy tracking system provides precise location data and inventory management with extended battery life.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "📡",
      color: "#007bff"
    },
    {
      id: 3,
      title: "Vaccine Distribution",
      description: "Specialized cold chain logistics ensuring vaccines maintain optimal temperature throughout the entire distribution network.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "💉",
      color: "#dc3545"
    },
    {
      id: 4,
      title: "Satellite Tracking",
      description: "Global GPS satellite monitoring delivers precise location data and comprehensive fleet visibility across any geographic region.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "🛰️",
      color: "#6610f2"
    },
    {
      id: 5,
      title: "Trailer Security",
      description: "Comprehensive security monitoring with motion detection, door sensors, and immediate alerts for unauthorized access attempts.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "🔒",
      color: "#fd7e14"
    },
    {
      id: 6,
      title: "Temperature Tracking BLE 4.0",
      description: "Precision temperature monitoring using BLE 4.0 technology ensures product integrity with continuous data logging and alerts.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "🌡️",
      color: "#20c997"
    },
    {
      id: 7,
      title: "Cold Chain Monitoring",
      description: "End-to-end temperature-controlled logistics with automated compliance reporting and critical threshold alerting systems.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "❄️",
      color: "#17a2b8"
    }
  ]

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <style jsx>{`
        .services-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }
        
        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(0, 123, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(11, 26, 46, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: 700;
          color: #0b1a2e;
          margin-bottom: 1rem;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #007bff, #0056b3);
          border-radius: 2px;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .service-card {
          background: white;
          border: 2px solid #0b1a2e;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(60px)'};
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(11, 26, 46, 0.15);
          border-color: #007bff;
        }
        
        .card-image-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        
        .service-card:hover .card-image {
          transform: scale(1.05);
        }
        
        .service-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: white;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }
        
        .card-content {
          padding: 2rem;
        }
        
        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0b1a2e;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        
        .card-description {
          color: #6c757d;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 0;
        }
        
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.9), rgba(11, 26, 46, 0.8));
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          text-align: center;
          padding: 2rem;
        }
        
        .service-card:hover .card-overlay {
          opacity: 1;
        }
        
        /* Staggered animation delays */
        .service-card:nth-child(1) { transition-delay: 0.1s; }
        .service-card:nth-child(2) { transition-delay: 0.15s; }
        .service-card:nth-child(3) { transition-delay: 0.2s; }
        .service-card:nth-child(4) { transition-delay: 0.25s; }
        .service-card:nth-child(5) { transition-delay: 0.3s; }
        .service-card:nth-child(6) { transition-delay: 0.35s; }
        .service-card:nth-child(7) { transition-delay: 0.4s; }
        
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .floating-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #007bff;
          border-radius: 50%;
          opacity: 0.3;
          animation: float 4s ease-in-out infinite;
        }
        
        .floating-dot:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: -1s;
        }
        
        .floating-dot:nth-child(2) {
          top: 60%;
          right: 15%;
          animation-delay: -2s;
        }
        
        .floating-dot:nth-child(3) {
          bottom: 30%;
          left: 20%;
          animation-delay: -3s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-15px); opacity: 0.8; }
        }
        
        @media (max-width: 768px) {
          .services-section {
            padding: 4rem 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .section-header {
            margin-bottom: 3rem;
          }
          
          .card-content {
            padding: 1.5rem;
          }
          
          .card-image-wrapper {
            height: 180px;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .card-content {
            padding: 1.25rem;
          }
          
          .card-title {
            font-size: 1.2rem;
          }
          
          .card-image-wrapper {
            height: 160px;
          }
        }
      `}</style>

      <section className="services-section" ref={sectionRef}>
        {/* Floating background elements */}
        <div className="floating-elements">
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
        </div>

        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Services & Solutions</h2>
            <p className="section-subtitle">
              Comprehensive fleet management solutions tailored to meet diverse industry needs, 
              from local deliveries to global supply chain operations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {services.map((service, index) => (
              <div key={service.id} className="col">
                <div className="card service-card h-100">
                  <div className="card-image-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="card-image"
                      loading="lazy"
                    />
                    <div 
                      className="service-badge" 
                      style={{ backgroundColor: service.color }}
                    >
                      {service.badge}
                    </div>
                    <div className="card-overlay">
                      <div>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                          {service.badge}
                        </div>
                        Learn More About {service.title}
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-description">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesAndSolutions