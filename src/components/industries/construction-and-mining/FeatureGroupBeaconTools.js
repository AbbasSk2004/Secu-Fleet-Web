'use client'
import React, { useState } from 'react';
import '../../../assets/css/industries/construction-and-mining/feature-group-beacon-tools.css';

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
      color: '#06A3DA'
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
      color: '#34AD54'
    },
    {
      title: 'Custom Configuration',
      description: 'Customize beacon range, data intervals, and monitoring preferences',
      icon: '⚙️',
      color: '#FFA500'
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
      case 'Active': return '#34AD54';
      case 'Idle': return '#6b7280';
      case 'Alert': return '#ef4444';
      default: return '#06A3DA';
    }
  };

  return (
    <section className="secufleet-beacon-tools-section">
      {/* Blueprint Background Pattern */}
      <div className="secufleet-blueprint-bg"></div>
      <div className="secufleet-blueprint-overlay"></div>

      <div className="container-fluid px-4 py-5">
        {/* Section Header - Matching Website Pattern */}
        <div className="secufleet-section-header text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="secufleet-section-subtitle fw-bold text-uppercase">Tool Tracking Solutions</h5>
          <h1 className="secufleet-section-title fw-800">
            Tool Tracking with 
            <span className="text-primary d-block">Beacon ID Technology</span>
          </h1>
          <p className="secufleet-section-description">
            Prevent theft, boost accountability, and monitor your construction tools in real-time
          </p>
        </div>

        {/* Desktop Interactive Map */}
        <div className="row d-none d-lg-block mb-5">
          <div className="col-12">
            <div className="secufleet-construction-map wow fadeInUp" data-wow-delay="0.3s">
              {/* Zone Labels */}
              <div className="secufleet-zone-label secufleet-zone-a">Zone A<br/><small>Foundation</small></div>
              <div className="secufleet-zone-label secufleet-zone-b">Zone B<br/><small>Framing</small></div>
              <div className="secufleet-zone-label secufleet-zone-c">Zone C<br/><small>Interior</small></div>
              <div className="secufleet-zone-label secufleet-zone-d">Zone D<br/><small>Storage</small></div>
              <div className="secufleet-zone-label secufleet-zone-e">Zone E<br/><small>Assembly</small></div>
              <div className="secufleet-zone-label secufleet-zone-f">Zone F<br/><small>Welding</small></div>

              {/* Tool Icons */}
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  className="secufleet-tool-beacon"
                  style={{
                    left: `${tool.position.x}%`,
                    top: `${tool.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredTool(tool.id)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  {/* Pulsing Rings */}
                  <div className="secufleet-beacon-ring secufleet-ring-1" style={{borderColor: getStatusColor(tool.status)}}></div>
                  <div className="secufleet-beacon-ring secufleet-ring-2" style={{borderColor: getStatusColor(tool.status)}}></div>
                  <div className="secufleet-beacon-ring secufleet-ring-3" style={{borderColor: getStatusColor(tool.status)}}></div>
                  
                  {/* Tool Icon */}
                  <div 
                    className="secufleet-tool-icon"
                    style={{backgroundColor: getStatusColor(tool.status)}}
                  >
                    <span>{tool.icon}</span>
                  </div>

                  {/* Tooltip */}
                  {hoveredTool === tool.id && (
                    <div className="secufleet-tool-tooltip">
                      <div className="secufleet-tooltip-content">
                        <h6 className="mb-2 text-white fw-bold">{tool.name}</h6>
                        <div className="secufleet-tooltip-info">
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
        <div className="row g-4 d-none d-md-flex d-lg-none mb-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6">
              <div className="secufleet-feature-card-tablet wow fadeInUp" data-wow-delay={`${(index + 1) * 0.1}s`}>
                <div className="d-flex align-items-center mb-3">
                  <div className="secufleet-feature-icon-tablet" style={{backgroundColor: feature.color}}>
                    <span>{feature.icon}</span>
                  </div>
                  <h5 className="secufleet-feature-title-tablet mb-0">{feature.title}</h5>
                </div>
                <p className="secufleet-feature-description-tablet">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="row d-md-none">
          <div className="col-12">
            <div className="secufleet-mobile-carousel-wrapper">
              <div className="secufleet-mobile-carousel" style={{transform: `translateX(-${activeCard * 100}%)`}}>
                {features.map((feature, index) => (
                  <div key={index} className="secufleet-carousel-card">
                    <div className="secufleet-mobile-feature-card">
                      <div className="secufleet-mobile-icon" style={{backgroundColor: feature.color}}>
                        <span>{feature.icon}</span>
                      </div>
                      <h5 className="secufleet-mobile-feature-title">{feature.title}</h5>
                      <p className="secufleet-mobile-feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel Controls */}
              <div className="secufleet-carousel-dots">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`secufleet-carousel-dot ${activeCard === index ? 'active' : ''}`}
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
            <div className="secufleet-stats-dashboard wow fadeInUp" data-wow-delay="0.5s">
              <div className="row text-center">
                <div className="col-6 col-md-3 mb-3 mb-md-0">
                  <div className="secufleet-stat-item">
                    <div className="secufleet-stat-number text-primary">24</div>
                    <div className="secufleet-stat-label">Tools Tracked</div>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3 mb-md-0">
                  <div className="secufleet-stat-item">
                    <div className="secufleet-stat-number text-success">98%</div>
                    <div className="secufleet-stat-label">Uptime</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="secufleet-stat-item">
                    <div className="secufleet-stat-number text-warning">3</div>
                    <div className="secufleet-stat-label">Active Zones</div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="secufleet-stat-item">
                    <div className="secufleet-stat-number text-info">$2.1K</div>
                    <div className="secufleet-stat-label">Theft Prevented</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGroupBeaconTools;