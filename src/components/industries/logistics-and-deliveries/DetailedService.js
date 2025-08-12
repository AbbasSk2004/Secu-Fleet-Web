'use client'
import React, { useEffect, useState, useRef } from 'react'

const DetailedService = () => {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const sectionRefs = useRef([])

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, index]))
          }
        },
        { threshold: 0.2 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  const services = [
    {
      id: 1,
      title: "Delivery Services & Parcels",
      paragraph: "Transform your last-mile delivery operations with our comprehensive tracking and management system. Monitor every package from dispatch to doorstep with real-time updates and automated notifications.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Prevent theft with real-time security monitoring",
        "Boost driver discipline through performance analytics", 
        "Reduce operational costs by up to 30%",
        "Improve company reputation with reliable delivery",
        "Automated route optimization for efficiency",
        "Customer notification system for transparency"
      ]
    },
    {
      id: 2,
      title: "Goods Tracking (BLE)",
      paragraph: "Advanced Bluetooth Low Energy technology provides precise asset tracking with extended battery life. Monitor high-value goods and inventory with centimeter-level accuracy throughout your supply chain.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Long-range BLE tracking up to 200 meters",
        "Extended battery life lasting up to 2 years",
        "Real-time location updates every 30 seconds",
        "Geofencing alerts for unauthorized movement",
        "Temperature and humidity monitoring",
        "Easy integration with existing systems"
      ]
    },
    {
      id: 3,
      title: "Vaccine Distribution",
      paragraph: "Specialized cold chain logistics ensuring pharmaceutical products maintain optimal conditions throughout distribution. Critical for vaccine integrity and regulatory compliance across the entire supply chain.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Temperature monitoring from 2°C to 8°C",
        "Automated compliance reporting for regulations",
        "Emergency alerts for temperature deviations",
        "Chain of custody documentation",
        "Batch tracking and expiry management",
        "FDA and WHO compliance standards"
      ]
    },
    {
      id: 4,
      title: "Satellite Tracking",
      paragraph: "Global GPS satellite monitoring provides comprehensive fleet visibility across any geographic region. Track vehicles, assets, and personnel with precision location data updated in real-time.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Global coverage with 99.9% uptime reliability",
        "Real-time location updates every 10 seconds",
        "Historical route playback and analysis",
        "Speeding and harsh driving alerts",
        "Maintenance scheduling based on mileage",
        "Integration with dispatch systems"
      ]
    },
    {
      id: 5,
      title: "Trailer Security",
      paragraph: "Comprehensive security monitoring protects valuable cargo with advanced sensor technology. Detect unauthorized access, movement, and environmental changes with immediate alert notifications.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Door and cargo area intrusion detection",
        "Motion sensors for unauthorized movement",
        "Tamper-proof installation and mounting",
        "Instant SMS and email alert notifications",
        "Video verification for security events",
        "Insurance premium reduction opportunities"
      ]
    },
    {
      id: 6,
      title: "Temperature Tracking BLE 4.0",
      paragraph: "Precision temperature monitoring using cutting-edge BLE 4.0 technology ensures product integrity throughout transport. Continuous data logging with customizable alert thresholds for different cargo types.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Precision accuracy within ±0.2°C tolerance",
        "Wireless data transmission up to 100 meters",
        "Customizable temperature alert thresholds",
        "Historical temperature data analytics",
        "Multi-sensor deployment capability",
        "Cloud-based dashboard and reporting"
      ]
    },
    {
      id: 7,
      title: "Cold Chain Monitoring",
      paragraph: "End-to-end temperature-controlled logistics with automated compliance reporting. Ensure pharmaceutical, food, and chemical products maintain required temperatures throughout the entire supply chain journey.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Complete cold chain visibility and control",
        "Automated regulatory compliance reporting",
        "Critical temperature threshold alerting",
        "Quality assurance documentation",
        "Multi-location temperature monitoring",
        "Risk assessment and mitigation tools"
      ]
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
        .detailed-services-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1a2f47 50%, #0b1a2e 100%);
          position: relative;
          overflow: hidden;
        }
        
        .detailed-services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(0, 123, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 123, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .service-section {
          padding: 4rem 0;
          position: relative;
          z-index: 2;
        }
        
        .service-section:nth-child(even) {
          background: linear-gradient(135deg, rgba(26, 47, 71, 0.3) 0%, rgba(11, 26, 46, 0.2) 100%);
        }
        
        .service-content {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 3rem;
          color: white;
          height: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }
        
        .service-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(0, 123, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(0, 123, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .service-content > * {
          position: relative;
          z-index: 2;
        }
        
        .service-image {
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          width: 100%;
          height: 400px;
          object-fit: cover;
          transition: all 0.6s ease;
          opacity: 0;
          transform: translateX(-50px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          filter: brightness(0.8) contrast(1.1);
        }
        
        .service-image.visible {
          opacity: 1;
          transform: translateX(0);
          filter: brightness(0.9) contrast(1.1);
        }
        
        .service-image.from-right {
          transform: translateX(50px);
        }
        
        .service-image.from-right.visible {
          transform: translateX(0);
        }
        
        .service-image:hover {
          filter: brightness(1) contrast(1.2);
          box-shadow: 0 20px 50px rgba(0, 123, 255, 0.2);
        }
        
        .service-title {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #e8e9ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
          transition-delay: 0.2s;
          position: relative;
        }
        
        .service-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #00d4ff);
          border-radius: 2px;
          box-shadow: 0 0 15px rgba(0, 123, 255, 0.4);
        }
        
        .service-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .service-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #c7c8ca;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
          transition-delay: 0.4s;
        }
        
        .service-description.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .features-list {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 15px;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        
        .list-group-item {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #e8e9ea;
          padding: 1rem 1.5rem;
          font-size: 1rem;
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
        }
        
        .list-group-item:last-child {
          border-bottom: none;
        }
        
        .list-group-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .list-group-item::before {
          content: '✓';
          color: #00d4ff;
          font-weight: bold;
          font-size: 1.2rem;
          margin-right: 0.75rem;
          text-shadow: 0 0 8px rgba(0, 212, 255, 0.4);
        }
        
        .list-group-item:hover {
          background: rgba(0, 123, 255, 0.15);
          transform: translateX(8px);
          color: white;
          border-left: 3px solid #00d4ff;
        }
        
        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #007bff, #00d4ff, transparent);
          margin: 2rem 0;
          opacity: 0.6;
          box-shadow: 0 0 10px rgba(0, 123, 255, 0.3);
        }
        
        /* Floating shapes animation */
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .shape {
          position: absolute;
          background: rgba(0, 123, 255, 0.08);
          border-radius: 50%;
          animation: floatShape 20s linear infinite;
        }
        
        .shape:nth-child(1) {
          width: 40px;
          height: 40px;
          left: 10%;
          animation-delay: -2s;
        }
        
        .shape:nth-child(2) {
          width: 60px;
          height: 60px;
          left: 60%;
          animation-delay: -8s;
        }
        
        .shape:nth-child(3) {
          width: 30px;
          height: 30px;
          left: 85%;
          animation-delay: -12s;
        }
        
        @keyframes floatShape {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          .service-section {
            padding: 3rem 0;
          }
          
          .service-content {
            padding: 2rem;
            margin-top: 2rem;
          }
          
          .service-title {
            font-size: 2rem;
          }
          
          .service-image {
            height: 300px;
            margin-bottom: 1rem;
          }
          
          .service-description {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 576px) {
          .service-content {
            padding: 1.5rem;
          }
          
          .service-title {
            font-size: 1.75rem;
          }
          
          .service-image {
            height: 250px;
          }
          
          .list-group-item {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="detailed-services-section">
        {/* Floating background shapes */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        {services.map((service, index) => {
          const isEven = index % 2 === 1
          const isVisible = visibleSections.has(index)
          
          return (
            <div key={service.id} className="service-section">
              <div className="container">
                <div className="row align-items-center">
                  {/* Image Column */}
                  <div 
                    className={`col-md-6 ${isEven ? 'order-md-2' : ''}`}
                    ref={el => sectionRefs.current[index] = el}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`service-image ${isVisible ? 'visible' : ''} ${isEven ? 'from-right' : ''}`}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Content Column */}
                  <div className={`col-md-6 ${isEven ? 'order-md-1' : ''}`}>
                    <div className="service-content">
                      <h2 className={`service-title ${isVisible ? 'visible' : ''}`}>
                        {service.title}
                      </h2>
                      
                      <p className={`service-description ${isVisible ? 'visible' : ''}`}>
                        {service.paragraph}
                      </p>
                      
                      <div className="section-divider"></div>
                      
                      <ul className="list-group features-list">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className={`list-group-item ${isVisible ? 'visible' : ''}`}
                            style={{
                              transitionDelay: isVisible ? `${0.6 + (featureIndex * 0.1)}s` : '0s'
                            }}
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DetailedService