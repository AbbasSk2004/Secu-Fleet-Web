"use client";

import React from 'react';

const WorktimeAbout = () => {
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
                  src="https://i.ibb.co/Tg5HyQ3/alert.png"
                  style={{ objectFit: 'cover' }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">Time Tracking and Reporting</h1>
              <p className="mb-4">
                Accurate time tracking and reporting are essential for monitoring driver hours, ensuring compliance, and optimizing operational efficiency.
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
                      <h6>Precise Hour Logging</h6>
                      <span>
                        Tracks and records exact working hours for accurate payroll and performance evaluation.
                        Precise logging ensures fair compensation and helps assess driver performance effectively.
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
                      <h6>Operational Insights</h6>
                      <span>
                        Provides data-driven insights into driver productivity and scheduling efficiency.
                        Analyzing time tracking data helps optimize scheduling and identify areas for operational improvement.
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
                      <h6>Real-Time Monitoring</h6>
                      <span>
                        Allows for immediate access to driver hours and work status.
                        Real-time monitoring facilitates quick adjustments to schedules and enhances overall fleet management.
                      </span>
                    </div>
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

export default WorktimeAbout; 