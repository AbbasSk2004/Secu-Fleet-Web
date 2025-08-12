'use client'
import React, { useEffect, useRef, useState } from 'react'

const Features = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elementId = entry.target.dataset.animateId
          if (elementId) {
            setAnimatedElements(prev => new Set([...prev, elementId]))
          }
        }
      })
    }, observerOptions)

    const elementsToObserve = document.querySelectorAll('[data-animate-id]')
    elementsToObserve.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const features = [
    {
      icon: "📍",
      title: "Exact Location on Multiple Networks",
      description: "Precise GPS tracking across cellular, WiFi, and satellite networks ensuring continuous location monitoring even in challenging environments."
    },
    {
      icon: "⚡",
      title: "Real-Time Fleet Monitoring",
      description: "Live tracking and instant alerts for all vehicle activities, driver behavior, and route optimization with millisecond precision updates."
    },
    {
      icon: "🛡️",
      title: "Advanced Security & Theft Protection",
      description: "Multi-layered security system with geofencing, unauthorized usage alerts, and instant theft recovery capabilities for complete asset protection."
    },
    {
      icon: "📊",
      title: "Comprehensive Analytics Dashboard",
      description: "Detailed insights into fleet performance, fuel efficiency, maintenance schedules, and driver analytics with customizable reporting tools."
    },
    {
      icon: "🔧",
      title: "Predictive Maintenance Alerts",
      description: "AI-powered vehicle diagnostics that predict maintenance needs before issues occur, reducing downtime and repair costs significantly."
    },
    {
      icon: "🌐",
      title: "Cloud-Based Management Platform",
      description: "Access your fleet data anywhere with our secure cloud platform featuring automatic backups, scalability, and 99.9% uptime guarantee."
    }
  ]

  return (
    <>
      <style jsx>{`
        .features-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1a2332 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .features-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .features-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }

        .section-title {
          color: white;
          font-weight: 700;
          font-size: 2.75rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: #cbd5e0;
          font-size: 1.2rem;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.95);
          border: none;
          border-radius: 16px;
          padding: 2.5rem 2rem;
          height: 100%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
        }

        .feature-card.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #0b1a2e, #1a2332, #0b1a2e);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.15),
            0 10px 10px -5px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #0b1a2e 0%, #1a2332 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          position: relative;
          box-shadow: 
            0 8px 16px -4px rgba(11, 26, 46, 0.3),
            0 4px 6px -1px rgba(11, 26, 46, 0.1);
          transition: all 0.4s ease;
        }

        .feature-icon::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent, rgba(255, 255, 255, 0.1));
          border-radius: 50%;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 
            0 12px 20px -4px rgba(11, 26, 46, 0.4),
            0 6px 8px -1px rgba(11, 26, 46, 0.15);
        }

        .feature-card:hover .feature-icon::before {
          opacity: 1;
        }

        .feature-title {
          color: #0b1a2e;
          font-weight: 700;
          font-size: 1.35rem;
          margin-bottom: 1rem;
          text-align: center;
          line-height: 1.4;
        }

        .feature-description {
          color: #4a5568;
          font-size: 1rem;
          line-height: 1.6;
          text-align: center;
          margin-bottom: 0;
          font-weight: 400;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in-up.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .floating-dot:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-dot:nth-child(2) {
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .floating-dot:nth-child(3) {
          bottom: 30%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.3;
          }
        }

        .row.g-4 > * {
          transition-delay: 0ms;
        }

        .row.g-4 > *:nth-child(1) { transition-delay: 100ms; }
        .row.g-4 > *:nth-child(2) { transition-delay: 200ms; }
        .row.g-4 > *:nth-child(3) { transition-delay: 300ms; }
        .row.g-4 > *:nth-child(4) { transition-delay: 400ms; }
        .row.g-4 > *:nth-child(5) { transition-delay: 500ms; }
        .row.g-4 > *:nth-child(6) { transition-delay: 600ms; }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.25rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .feature-card {
            padding: 2rem 1.5rem;
          }
          
          .feature-icon {
            width: 70px;
            height: 70px;
            font-size: 1.75rem;
          }
          
          .feature-title {
            font-size: 1.2rem;
          }
          
          .feature-description {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 576px) {
          .features-section {
            padding: 3rem 0;
          }
          
          .section-header {
            margin-bottom: 3rem;
          }
          
          .feature-card {
            padding: 1.75rem 1.25rem;
          }
        }
      `}</style>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />

      <section className="features-section py-5">
        <div className="floating-elements">
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
          <div className="floating-dot"></div>
        </div>

        <div className="container position-relative">
          <div 
            className={`section-header fade-in-up ${animatedElements.has('header') ? 'animate' : ''}`}
            data-animate-id="header"
          >
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-subtitle">
              Advanced fleet management capabilities designed to optimize operations, enhance security, and drive efficiency across your entire vehicle network.
            </p>
          </div>

          <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {features.map((feature, index) => (
              <div key={index} className="col">
                <div 
                  className={`feature-card h-100 ${animatedElements.has('cards') ? 'animate' : ''}`}
                  data-animate-id="cards"
                  style={{
                    transitionDelay: animatedElements.has('cards') ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features