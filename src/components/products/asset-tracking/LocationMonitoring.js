"use client";

import React from 'react';

const LocationMonitoring = () => {
  const features = [
    {
      number: '01',
      title: 'Real-Time Asset Tracking',
      description: 'Continuous monitoring of assets\' locations and movements to ensure efficient fleet management.'
    },
    {
      number: '02',
      title: 'Optimized Route Planning',
      description: 'Utilizing location data to identify the most efficient routes, reduce fuel consumption, and improve delivery times.'
    },
    {
      number: '03',
      title: 'Geofencing and Alerts',
      description: 'Establishing virtual boundaries and triggering notifications for improved fleet monitoring and security.'
    }
  ];

  return (
    <section id="section2">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="img-fluid w-100 h-100"
                  src="https://i.ibb.co/yXGBX1w/Fleet-Management-44.png"
                  style={{ objectFit: "cover" }}
                  alt="Location Monitoring"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">Location Monitoring</h1>
              <p className="mb-4">
                Leveraging Advanced Tracking Technologies to Enhance Fleet Visibility and Optimize Route Planning.
              </p>
              <div className="row g-4 mb-3 pb-3">
                {features.map((feature, index) => (
                  <div key={index} className="col-12 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                    <div className="d-flex">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                        style={{ width: "45px", height: "45px" }}
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

export default LocationMonitoring; 