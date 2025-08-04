"use client";

import React from 'react';

const RoutePlanningIntelligent = () => {
  return (
    <section id="section4">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-4">Intelligent Route Planning</h1>
              <p className="mb-4">
                Leverage real-time tracking and data analytics to optimize your fleet&apos;s
                routing and logistics, driving efficiency, visibility, and informed
                decision-making to new heights.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: '45px', height: '45px' }}
                    >
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Route Optimization</h6>
                      <span>
                        Utilize real-time location data to dynamically plan and adjust
                        routes, reducing travel time and fuel consumption.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: '45px', height: '45px' }}
                    >
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Traffic Monitoring</h6>
                      <span>
                        Leverage real-time traffic data to anticipate and avoid
                        congestion, ensuring on-time deliveries and improved customer
                        satisfaction.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: '45px', height: '45px' }}
                    >
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Predictive Analytics</h6>
                      <span>
                        Use historical data and AI-powered algorithms to predict
                        optimal routes, delivery times, and resource allocation for
                        improved logistics planning.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <video 
                  className="img-fluid w-100 h-100" 
                  autoPlay 
                  loop 
                  style={{ objectFit: 'cover' }}
                >
                  <source src="/assets/videos/AI.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutePlanningIntelligent; 