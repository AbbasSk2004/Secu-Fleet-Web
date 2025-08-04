"use client";

import React from 'react';

const AboutSection = () => {
  const features = [
    {
      number: '01',
      title: 'GPS Vehicle Tracking',
      description: 'Real-time monitoring of vehicle locations and routes to improve fleet visibility and optimize operations.'
    },
    {
      number: '02',
      title: 'GPS-Enabled Driver Behavior Monitoring',
      description: 'Leverage GPS data to track and analyze driver habits, promoting safer driving and compliance.'
    },
    {
      number: '03',
      title: 'GPS-Assisted Regulatory Compliance',
      description: 'Utilize GPS data to ensure your fleet operations adhere to relevant transportation and environmental regulations.'
    }
  ];

  return (
    <section id="section2">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="img-fluid w-100 h-100"
                  src="https://i.ibb.co/55GJxF5/Fleet-Management-48.png"
                  style={{ objectFit: 'cover' }}
                  alt="GPS Fleet Management"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">GPS-Powered Fleet Management</h1>
              <p className="mb-4">
                Unlock the power of GPS technology to enhance your fleet&apos;s safety,
                efficiency, and regulatory compliance.
              </p>
              <div className="row g-4 mb-3 pb-3">
                {features.map((feature, index) => (
                  <div key={index} className="col-12 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                    <div className="d-flex">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                        style={{ width: '45px', height: '45px' }}
                      >
                        <span className="fw-bold text-secondary">{feature.number}</span>
                      </div>
                      <div className="ps-3">
                        <h6>{feature.title}</h6>
                        <span>{feature.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 