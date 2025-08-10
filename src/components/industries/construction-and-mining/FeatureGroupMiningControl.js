'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../../../assets/css/industries/construction-and-mining/feature-group-mining-control.css';

const features = [
  {
    icon: '🛰️',
    title: 'Real-Time GPS + Offline Sync',
    desc: 'Track fleet locations even without signal.',
    stat: '98% Coverage',
    badge: 'green'
  },
  {
    icon: '🛑',
    title: 'Smart Geofencing',
    desc: 'Trigger alerts for route deviations or unauthorized areas.',
    stat: '24 Zones',
    badge: 'yellow'
  },
  {
    icon: '⚖️',
    title: 'Cargo Weight Sensors',
    desc: 'Measure load accuracy to optimize logistics.',
    stat: '48.7 Tons',
    badge: 'green'
  },
  {
    icon: '🚧',
    title: 'Driver Behavior Tracking',
    desc: 'Analyze habits like braking, speeding & idling.',
    stat: '17 Events',
    badge: 'red'
  },
  {
    icon: '🛠️',
    title: 'Maintenance Insights',
    desc: 'Predict issues and schedule tasks proactively.',
    stat: '6 Tasks',
    badge: 'yellow'
  },
  {
    icon: '🔐',
    title: 'Productivity + Security',
    desc: 'Protect assets and boost operational uptime.',
    stat: '23% Gain',
    badge: 'green'
  }
];

const FeatureGroupMiningControl = () => {
  const cardsRef = useRef([]);
  const [visible, setVisible] = useState(Array(features.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updated = [...visible];
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            updated[index] = true;
          }
        });
        setVisible(updated);
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mining-control-section">
      {/* Background Layer */}
      <div className="mining-background"></div>
      
      <div className="container">
        <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="fw-bold text-primary text-uppercase">Mining Control</h5>
          <h1 className="mb-0">Mining Cargo & Equipment Control</h1>
          <p className="text-muted">
            Track, manage, and protect mining operations with GPS, sensors & geofencing.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, idx) => (
            <div
              className="col-12 col-sm-6 col-lg-4"
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <div
                className={`mining-feature-card wow zoomIn animate-fade ${
                  visible[idx] ? 'show' : ''
                }`}
                data-wow-delay={`${0.2 + idx * 0.1}s`}
              >
                <div className="mining-feature-icon">
                  {feature.icon}
                </div>
                <h5 className="mining-feature-title">{feature.title}</h5>
                <p className="mining-feature-description">{feature.desc}</p>
                <div className="mining-feature-footer">
                  <span className="mining-feature-stat">{feature.stat}</span>
                  <span
                    className={`mining-feature-badge ${
                      feature.badge === 'green'
                        ? 'badge-success'
                        : feature.badge === 'yellow'
                        ? 'badge-warning'
                        : 'badge-danger'
                    }`}
                  >
                    {feature.badge.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mining-footer-note wow fadeInUp" data-wow-delay="0.8s">
          <small className="fst-italic">
            Live data visualized through glowing zones, alerts, and performance panels.
          </small>
        </div>
      </div>
    </section>
  );
};

export default FeatureGroupMiningControl;
