"use client";

import React from 'react';

const WorktimeAdjustments = () => {
  return (
    <section id="section4">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-4">Real-Time Worktime Adjustments</h1>
              <p className="mb-4">
                Real-time worktime adjustments enable dynamic scheduling and routing changes to address current conditions and enhance operational efficiency.
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
                      <h6>Dynamic Scheduling</h6>
                      <span>
                        Adjusts driver schedules on-the-fly based on real-time data and changing conditions.
                        Enables quick reallocation of tasks to maintain efficiency despite unexpected events or delays.
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
                      <h6>Immediate Problem Solving</h6>
                      <span>
                        Facilitates rapid response to issues such as delays or vehicle breakdowns.
                        Allows managers to address problems immediately and make necessary adjustments to minimize disruptions.
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
                      <h6>Enhanced Flexibility</h6>
                      <span>
                        Provides the ability to adapt to fluctuations in demand and operational needs.
                        Ensures that fleet operations remain smooth and responsive to varying workload and operational conditions.
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
                <img
                  className="img-fluid w-100 h-100"
                  src="https://i.ibb.co/ccmSpXd/time.png"
                  style={{ objectFit: 'cover' }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorktimeAdjustments; 