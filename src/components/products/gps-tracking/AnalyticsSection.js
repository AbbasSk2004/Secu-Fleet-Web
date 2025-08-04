"use client";

import React from 'react';

const AnalyticsSection = () => {
  const features = [
    {
      number: '01',
      title: 'Live Diagnostics',
      description: 'Real-time monitoring of vehicle health and performance metrics for proactive maintenance and improved efficiency.'
    },
    {
      number: '02',
      title: 'Emissions Tracking',
      description: 'Real-time monitoring and reporting of vehicle emissions data to ensure compliance and reduce environmental impact.'
    },
    {
      number: '03',
      title: 'Predictive Maintenance',
      description: 'Using advanced analytics to predict and prevent potential vehicle issues, reducing downtime and maintenance costs.'
    }
  ];

  return (
    <section id="section4">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-4">GPS Tracking and Live Data Analytics</h1>
              <p className="mb-4">
                Our advanced GPS tracking system provides real-time data on vehicle
                location, driving behavior, fuel efficiency, and more. Gain
                unprecedented visibility into your fleet&apos;s performance and make
                informed decisions to optimize operations and reduce costs.
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
            <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="img-fluid w-100 h-100"
                  src="https://i.ibb.co/wKNHzT1/Fleet-Management-15.webp"
                  style={{ objectFit: 'cover' }}
                  alt="GPS Analytics"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection; 