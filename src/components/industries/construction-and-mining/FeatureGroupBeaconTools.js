'use client'
import React, { useState } from 'react';

const FeatureGroupBeaconTools = () => {
  const [hoveredTool, setHoveredTool] = useState(null);
  const [activeCard, setActiveCard] = useState(0);

  const tools = [
    {
      id: 1,
      name: 'Power Drill',
      icon: '🔧',
      position: { x: 25, y: 30 },
      status: 'Active',
      lastSeen: '2 min ago',
      location: 'Zone A - Foundation',
      batteryLevel: 85,
      usage: 'High'
    },
    {
      id: 2,
      name: 'Circular Saw',
      icon: '⚙️',
      position: { x: 65, y: 45 },
      status: 'Idle',
      lastSeen: '15 min ago',
      location: 'Zone B - Framing',
      batteryLevel: 62,
      usage: 'Medium'
    },
    {
      id: 3,
      name: 'Hammer Drill',
      icon: '🔨',
      position: { x: 40, y: 65 },
      status: 'Active',
      lastSeen: 'Just now',
      location: 'Zone C - Interior',
      batteryLevel: 94,
      usage: 'High'
    },
    {
      id: 4,
      name: 'Angle Grinder',
      icon: '🪚',
      position: { x: 75, y: 25 },
      status: 'Alert',
      lastSeen: '45 min ago',
      location: 'Zone D - Storage',
      batteryLevel: 28,
      usage: 'Low'
    },
    {
      id: 5,
      name: 'Impact Driver',
      icon: '🔩',
      position: { x: 15, y: 75 },
      status: 'Active',
      lastSeen: '5 min ago',
      location: 'Zone E - Assembly',
      batteryLevel: 71,
      usage: 'Medium'
    },
    {
      id: 6,
      name: 'Welding Tool',
      icon: '⚡',
      position: { x: 85, y: 70 },
      status: 'Idle',
      lastSeen: '1 hour ago',
      location: 'Zone F - Welding Bay',
      batteryLevel: 89,
      usage: 'Low'
    }
  ];

  const features = [
    {
      title: 'Real-Time Location',
      description: 'Track tools instantly via mobile/web dashboard with precise location data',
      icon: '📍',
      color: '#3b82f6'
    },
    {
      title: 'Theft Prevention',
      description: 'Prevent unauthorized movement with instant alerts and geofencing',
      icon: '🛡️',
      color: '#ef4444'
    },
    {
      title: 'Proximity Events',
      description: 'Set custom beacon ranges and receive filtered proximity notifications',
      icon: '📡',
      color: '#10b981'
    },
    {
      title: 'Custom Configuration',
      description: 'Customize beacon range, data intervals, and monitoring preferences',
      icon: '⚙️',
      color: '#f59e0b'
    },
    {
      title: 'Workforce Accountability',
      description: 'Boost laborer discipline with detailed tool usage tracking and analytics',
      icon: '👥',
      color: '#8b5cf6'
    },
    {
      title: 'Cost-Effective Solution',
      description: 'Affordable, low power beacons that are easy to replace and maintain',
      icon: '💰',
      color: '#06b6d4'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#10b981';
      case 'Idle': return '#6b7280';
      case 'Alert': return '#ef4444';
      default: return '#3b82f6';
    }
  };

  return (
    <section className="beacon-tools-section position-relative overflow-hidden">
      {/* Blueprint Background Pattern */}
      <div className="blueprint-bg position-absolute w-100 h-100"></div>
      <div className="blueprint-overlay position-absolute w-100 h-100"></div>

      <div className="container-fluid px-4 py-5 position-relative" style={{zIndex: 10}}>
        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-white mb-3 animate-fade-in">
              Tool Tracking with 
              <span className="text-primary d-block">Beacon ID Technology</span>
            </h1>
            <p className="lead text-light opacity-80 mb-4">
              Prevent theft, boost accountability, and monitor your construction tools in real-time
            </p>
            <div className="tech-divider mx-auto"></div>
          </div>
        </div>

        {/* Desktop Interactive Map */}
        <div className="row d-none d-lg-block mb-5">
          <div className="col-12">
            <div className="construction-map position-relative mx-auto">
              {/* Zone Labels */}
              <div className="zone-label zone-a">Zone A<br/><small>Foundation</small></div>
              <div className="zone-label zone-b">Zone B<br/><small>Framing</small></div>
              <div className="zone-label zone-c">Zone C<br/><small>Interior</small></div>
              <div className="zone-label zone-d">Zone D<br/><small>Storage</small></div>
              <div className="zone-label zone-e">Zone E<br/><small>Assembly</small></div>
              <div className="zone-label zone-f">Zone F<br/><small>Welding</small></div>

              {/* Tool Icons */}
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  className="tool-beacon position-absolute"
                  style={{
                    left: `${tool.position.x}%`,
                    top: `${tool.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredTool(tool.id)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {/* Pulsing Rings */}
                  <div className="beacon-ring ring-1" style={{borderColor: getStatusColor(tool.status)}}></div>
                  <div className="beacon-ring ring-2" style={{borderColor: getStatusColor(tool.status)}}></div>
                  <div className="beacon-ring ring-3" style={{borderColor: getStatusColor(tool.status)}}></div>
                  
                  {/* Tool Icon */}
                  <div 
                    className="tool-icon"
                    style={{backgroundColor: getStatusColor(tool.status)}}
                  >
                    <span>{tool.icon}</span>
                  </div>

                  {/* Tooltip */}
                  {hoveredTool === tool.id && (
                    <div className="tool-tooltip position-absolute">
                      <div className="tooltip-content">
                        <h6 className="mb-2 text-white fw-bold">{tool.name}</h6>
                        <div className="tooltip-info">
                          <div className="d-flex justify-content-between mb-1">
                            <span>Status:</span>
                            <span className="fw-bold" style={{color: getStatusColor(tool.status)}}>{tool.status}</span>
                          </div>
                          <div className="d-flex justify-content-between mb-1">
                            <span>Location:</span>
                            <span className="text-primary">{tool.location}</span>
                          </div>
                          <div className="d-flex justify-content-between mb-1">
                            <span>Last Seen:</span>
                            <span>{tool.lastSeen}</span>
                          </div>
                          <div className="d-flex justify-content-between mb-1">
                            <span>Battery:</span>
                            <span className={tool.batteryLevel > 50 ? 'text-success' : tool.batteryLevel > 20 ? 'text-warning' : 'text-danger'}>
                              {tool.batteryLevel}%
                            </span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Usage:</span>
                            <span>{tool.usage}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Grid Layout */}
        <div className="row g-3 d-none d-md-flex d-lg-none mb-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6">
              <div className="feature-card-tablet h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="feature-icon-tablet me-3" style={{backgroundColor: feature.color}}>
                    <span>{feature.icon}</span>
                  </div>
                  <h5 className="mb-0 text-white fw-bold">{feature.title}</h5>
                </div>
                <p className="text-light opacity-80 mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="row d-md-none">
          <div className="col-12">
            <div className="mobile-carousel-wrapper">
              <div className="mobile-carousel d-flex" style={{transform: `translateX(-${activeCard * 100}%)`}}>
                {features.map((feature, index) => (
                  <div key={index} className="carousel-card flex-shrink-0">
                    <div className="mobile-feature-card p-4 text-center">
                      <div className="mobile-icon mx-auto mb-3" style={{backgroundColor: feature.color}}>
                        <span className="h2 mb-0">{feature.icon}</span>
                      </div>
                      <h5 className="text-white fw-bold mb-3">{feature.title}</h5>
                      <p className="text-light opacity-80 mb-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel Controls */}
              <div className="carousel-dots d-flex justify-content-center mt-4">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${activeCard === index ? 'active' : ''}`}
                    onClick={() => setActiveCard(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Dashboard */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="stats-dashboard p-4">
              <div className="row text-center">
                <div className="col-6 col-md-3 mb-3 mb-md-0">
                  <div className="stat-item">
                    <div className="stat-number text-primary">24</div>
                    <div className="stat-label">Tools Tracked</div>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-md-0">
                  <div className="stat-item">
                    <div className="stat-number text-success">98%</div>
                    <div className="stat-label">Uptime</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-item">
                    <div className="stat-number text-warning">3</div>
                    <div className="stat-label">Active Zones</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="stat-item">
                    <div className="stat-number text-info">$2.1K</div>
                    <div className="stat-label">Theft Prevented</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .beacon-tools-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0a0f1c 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .blueprint-bg {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.3;
        }

        .blueprint-overlay {
          background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(29, 78, 216, 0.05) 0%, transparent 50%);
        }

        .tech-divider {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #3b82f6, #1d4ed8, #3b82f6, transparent);
          animation: pulse 2s ease-in-out infinite alternate;
        }

        .construction-map {
          width: 800px;
          height: 500px;
          max-width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .zone-label {
          position: absolute;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: bold;
          color: #93c5fd;
          text-align: center;
          backdrop-filter: blur(5px);
        }

        .zone-a { top: 10px; left: 10px; }
        .zone-b { top: 10px; right: 10px; }
        .zone-c { bottom: 50px; left: 50%; transform: translateX(-50%); }
        .zone-d { top: 50%; right: 10px; transform: translateY(-50%); }
        .zone-e { bottom: 10px; left: 10px; }
        .zone-f { bottom: 10px; right: 10px; }

        .tool-beacon {
          cursor: pointer;
          z-index: 5;
        }

        .beacon-ring {
          position: absolute;
          border: 2px solid;
          border-radius: 50%;
          opacity: 0.6;
          animation: beacon-pulse 2s ease-out infinite;
        }

        .ring-1 {
          width: 60px;
          height: 60px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 0s;
        }

        .ring-2 {
          width: 40px;
          height: 40px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 0.7s;
        }

        .ring-3 {
          width: 20px;
          height: 20px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: 1.4s;
        }

        .tool-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          z-index: 10;
          position: relative;
          transition: transform 0.3s ease;
        }

        .tool-beacon:hover .tool-icon {
          transform: scale(1.2);
        }

        .tool-tooltip {
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          animation: tooltip-appear 0.3s ease-out;
        }

        .tooltip-content {
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 12px;
          padding: 16px;
          min-width: 200px;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .tooltip-info {
          font-size: 13px;
          color: #cbd5e1;
        }

        .feature-card-tablet {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .feature-card-tablet:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-5px);
        }

        .feature-icon-tablet {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .mobile-carousel-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
        }

        .mobile-carousel {
          transition: transform 0.4s ease-in-out;
        }

        .carousel-card {
          width: 100%;
          padding: 0 10px;
        }

        .mobile-feature-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .mobile-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-dots {
          gap: 10px;
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid rgba(59, 130, 246, 0.5);
          background: transparent;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .carousel-dot.active {
          background: #3b82f6;
          border-color: #3b82f6;
        }

        .stats-dashboard {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 14px;
          color: #cbd5e1;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @keyframes beacon-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes tooltip-appear {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1199px) {
          .construction-map {
            width: 100%;
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2rem;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureGroupBeaconTools;