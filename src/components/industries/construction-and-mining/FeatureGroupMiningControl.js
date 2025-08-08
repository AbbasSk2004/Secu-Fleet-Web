'use client';
import React, { useEffect, useRef, useState } from 'react';

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
    <section
      className="py-5"
      style={{
        backgroundColor: '#0b1a2e',
        backgroundImage: 'url(/images/mining-map-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white">Mining Cargo & Equipment Control</h2>
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
                className={`card h-100 bg-dark text-white border-0 shadow-lg p-3 animate-fade ${
                  visible[idx] ? 'show' : ''
                }`}
              >
                <div className="card-body">
                  <div className="display-5 mb-3">{feature.icon}</div>
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text text-light">{feature.desc}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center bg-transparent border-0 pt-0">
                  <span className="fw-bold fs-6">{feature.stat}</span>
                  <span
                    className={`badge ${
                      feature.badge === 'green'
                        ? 'bg-success'
                        : feature.badge === 'yellow'
                        ? 'bg-warning text-dark'
                        : 'bg-danger'
                    }`}
                  >
                    {feature.badge.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <small className="text-secondary fst-italic">
            Live data visualized through glowing zones, alerts, and performance panels.
          </small>
        </div>
      </div>
    </section>
  );
};

export default FeatureGroupMiningControl;
