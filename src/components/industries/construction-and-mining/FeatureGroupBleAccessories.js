'use client'
import React from 'react';
import Image from 'next/image';
import '../../../assets/css/industries/construction-and-mining/ble-accessories.css';

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
    <section className="ble-section">
      <div className="container ble-content">
        <div className="row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <div className="ble-image">
              <Image
                src="/assets/images/blesensor.png"
                alt="BLE Sensor on Heavy Vehicle"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <h2 className="ble-title">Smart Tracking with BLE Accessories</h2>

            <div className="ble-features">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="ble-feature-card animate__fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="ble-feature-icon">
                    {feature.icon}
                  </span>
                  <h5 className="ble-feature-title">{feature.title}</h5>
                  <p className="ble-feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGroupBleAccessories;
