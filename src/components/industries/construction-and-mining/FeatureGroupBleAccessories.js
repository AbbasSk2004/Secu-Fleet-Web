'use client'
import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: '📐',
    title: 'Precision Movement Tracking',
    description: 'Monitor angular motion with high accuracy using EYE Sensors.',
  },
  {
    icon: '⏱️',
    title: 'Exact Working Hours',
    description: 'Track machine and driver working hours for accurate reporting.',
  },
  {
    icon: '🔒',
    title: 'Cargo Theft Prevention',
    description: 'Get alerts for unauthorized unloading or tampering.',
  },
  {
    icon: '🧭',
    title: 'Workforce Accountability',
    description: 'Use EYE Beacons to log worker presence and movement.',
  },
  {
    icon: '📶',
    title: 'Customizable Range',
    description: 'Adjust signal strength and range based on site conditions.',
  },
  {
    icon: '⚙️',
    title: 'Quick Install & Replace',
    description: 'Wireless BLE setup that is affordable and simple to manage.',
  },
];

const FeatureGroupBleAccessories = () => {
  return (
    <section
      className="ble-section"
      style={{
        background: 'linear-gradient(135deg, #0b1a2e 60%, #0f243c)',
        color: '#f1f1f1',
        padding: '4rem 0',
      }}
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5">
        {/* LEFT IMAGE */}
        <div className="ble-image col-lg-6 text-center">
          <Image
            src="/assets/images/blesensor.png"

            alt="BLE Sensor on Heavy Vehicle"
            width={600}
            height={400}
            style={{ objectFit: 'contain' }}
            priority // optional: preload image for better UX
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-6">
          <h2 className="text-white mb-4 fw-bold">Smart Tracking with BLE Accessories</h2>

          <div className="row">
            {features.map((feature, index) => (
              <div
                key={index}
                className="col-12 col-md-6 mb-4 animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.1}s`, animationDuration: '0.8s' }}
              >
                <div
                  className="feature-card p-3 rounded-4 h-100"
                  style={{
                    background: '#112c4e',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <div
                    className="icon fs-3 mb-2"
                    style={{ color: '#ffd369' }}
                  >
                    {feature.icon}
                  </div>
                  <h5 className="text-white mb-1">{feature.title}</h5>
                  <p className="text-light small mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .ble-image {
            margin-bottom: 2rem;
          }

          .feature-card {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureGroupBleAccessories;
