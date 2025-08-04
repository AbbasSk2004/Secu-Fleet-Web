"use client";

import React from 'react';

const PerformanceMonitoringSection = () => {
  return (
    <section id="section4">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-4">Performance Monitoring</h1>
              <p className="mb-4">
                The performance monitoring section focuses on analyzing driver behavior, monitoring vehicle health, and tracking productivity metrics. It offers valuable insights into driving patterns, maintenance requirements, and overall fleet effectiveness, enhancing performance and efficiency.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Driver Analytics</h6>
                      <span>Such analytics focus on monitoring driving habits, tracking fuel efficiency, and providing performance scorecards to help drivers improve their behaviors and promote eco-friendly practices.</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Vehicle Health</h6>
                      <span>Vehicle health monitoring involves receiving maintenance alerts, accessing detailed health reports, and tracking repairs and maintenance history to ensure each vehicle remains in optimal condition.</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Productivity Metrics</h6>
                      <span>Productivity metrics emphasize route optimization, time tracking, and setting performance benchmarks to enhance efficiency, reduce travel time and fuel consumption, and motivate drivers to improve overall fleet productivity.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="img-fluid w-100 h-100"
                  src="https://i.ibb.co/H4L2qzw/Fleet-Management-50.png"
                  style={{ objectFit: "cover" }}
                  alt="Performance Monitoring"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMonitoringSection; 