'use client'
import React from 'react';

const features = [
  {
    icon: '💧',
    title: 'IP67 Waterproof & Dustproof',
    description:
      'Rugged casing built to withstand water, dust, and harsh conditions on site.',
  },
  {
    icon: '🔌',
    title: '2-in-1 CAN Bus Integration',
    description: 'Fast and seamless setup integrating directly with vehicle systems.',
  },
  {
    icon: '🛠️',
    title: 'Snap-Lock Design',
    description: 'No tools needed for quick installation and removal.',
  },
  {
    icon: '📏',
    title: 'Flexible Mounting Options',
    description: 'Mount with tape or straps, inside or outside the vehicle.',
  },
  {
    icon: '🌡️',
    title: 'Built for Any Climate',
    description:
      'Reliable performance in all weather conditions expands business opportunities.',
  },
];

const FeatureGroupGpsConstruction = () => {
  return (
    <section className="gps-construction-hero position-relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles-bg position-absolute w-100 h-100"></div>
      
      {/* Dynamic gradient overlays */}
      <div className="gradient-overlay-1 position-absolute w-100 h-100"></div>
      <div className="gradient-overlay-2 position-absolute w-100 h-100"></div>
      <div className="dark-overlay position-absolute w-100 h-100"></div>

      <div className="container-fluid px-4 py-5 position-relative" style={{zIndex: 10}}>
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-5">
            <h1 className="display-2 fw-black text-gradient mb-3 animate-fade-in">
              GPS TRACKING
              <span className="d-block text-blue glow-text">BUILT FOR CONSTRUCTION</span>
            </h1>
            <div className="accent-line mx-auto mb-4"></div>
            <p className="lead text-light opacity-90 max-w-md mx-auto">
              Professional-grade tracking solutions engineered for the toughest job sites
            </p>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="row g-4 d-none d-lg-flex justify-content-center mb-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="col-lg-4 col-xl-2"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="feature-card-modern h-100 p-4 text-center position-relative overflow-hidden animate-slide-up">
                <div className="card-glow position-absolute w-100 h-100 top-0 start-0"></div>
                <div className="position-relative z-3">
                  <div className="icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center">
                    <span className="feature-icon display-4" role="img" aria-label={feature.title}>
                      {feature.icon}
                    </span>
                  </div>
                  <h4 className="h6 fw-bold text-light mb-3 text-uppercase letter-spacing-wide">
                    {feature.title}
                  </h4>
                  <p className="small text-muted mb-0 line-height-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout */}
        <div className="row g-3 d-none d-md-flex d-lg-none">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="col-md-6"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="feature-card-tablet d-flex align-items-start p-4 h-100 animate-slide-up">
                <div className="icon-wrapper-tablet me-3 flex-shrink-0">
                  <span className="feature-icon h2 mb-0" role="img" aria-label={feature.title}>
                    {feature.icon}
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h5 className="h6 fw-bold text-blue mb-2 text-uppercase">
                    {feature.title}
                  </h5>
                  <p className="small text-light-emphasis mb-0">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Stack Layout */}
        <div className="row d-md-none">
          <div className="col-12">
            <div className="mobile-features-wrapper p-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="mobile-feature-item d-flex align-items-center p-3 mb-3 animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="mobile-icon-wrapper me-3">
                    <span className="feature-icon h3 mb-0" role="img" aria-label={feature.title}>
                      {feature.icon}
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="fw-bold text-blue mb-1 small text-uppercase">
                      {feature.title}
                    </h6>
                    <p className="small text-light mb-0 opacity-90">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        
      </div>

      <style jsx>{`
        .gps-construction-hero {
          min-height: 100vh;
          background: 
            linear-gradient(135deg, #0f1729 0%, #1e293b 50%, #0a0f1c 100%),
            url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .particles-bg {
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(29, 78, 216, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
          animation: particlesFloat 20s ease-in-out infinite alternate;
        }

        .gradient-overlay-1 {
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 60%);
          animation: gradientShift 15s ease-in-out infinite alternate;
        }

        .gradient-overlay-2 {
          background: linear-gradient(225deg, rgba(29, 78, 216, 0.08) 0%, transparent 70%);
          animation: gradientShift 12s ease-in-out infinite alternate-reverse;
        }

        .dark-overlay {
          background: rgba(0, 0, 0, 0.7);
        }

        .text-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        .accent-line {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #3b82f6, #1d4ed8, #3b82f6, transparent);
          border-radius: 2px;
          animation: lineGlow 3s ease-in-out infinite alternate;
        }

        .max-w-md {
          max-width: 28rem;
        }

        .feature-card-modern {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .feature-card-modern:hover {
          transform: translateY(-12px) scale(1.02);
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }

        .card-glow {
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feature-card-modern:hover .card-glow {
          opacity: 1;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          border: 2px solid rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
        }

        .feature-card-modern:hover .icon-wrapper {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.6);
          transform: rotate(5deg) scale(1.1);
        }

        .feature-icon {
          transition: all 0.3s ease;
        }

        .feature-card-modern:hover .feature-icon {
          transform: scale(1.2);
        }

        .feature-card-tablet {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .feature-card-tablet:hover {
          background: rgba(59, 130, 246, 0.08);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-4px);
        }

        .icon-wrapper-tablet {
          width: 60px;
          height: 60px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .feature-card-tablet:hover .icon-wrapper-tablet {
          background: rgba(59, 130, 246, 0.2);
          transform: scale(1.1);
        }

        .mobile-features-wrapper {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
        }

        .mobile-feature-item {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
        }

        .mobile-feature-item:hover {
          background: rgba(59, 130, 246, 0.08);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .mobile-feature-item:last-child {
          margin-bottom: 0 !important;
        }

        .mobile-icon-wrapper {
          width: 50px;
          height: 50px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .letter-spacing-wide {
          letter-spacing: 0.1em;
        }

        .line-height-relaxed {
          line-height: 1.6;
        }

        .cta-wrapper {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        /* Animations */
        @keyframes animate-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes particlesFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 0.8; transform: translateX(0); }
          50% { opacity: 0.4; transform: translateX(10px); }
        }

        @keyframes lineGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(29, 78, 216, 0.4); }
        }

        .animate-fade-in {
          animation: animate-fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: animate-slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .fw-black {
          font-weight: 900;
        }

        .text-blue {
          color: #3b82f6 !important;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .gps-construction-hero {
            min-height: auto;
            padding: 3rem 0;
          }
          
          .display-2 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 576px) {
          .display-2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureGroupGpsConstruction;