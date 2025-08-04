"use client";

import React from 'react';

const DataLoggingSection = () => {
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
                  src="https://i.ibb.co/1m3DSnT/Fleet-Management-10.png"
                  style={{ objectFit: "contain" }}
                  alt="Data Logging"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">Data Logging and Alerting</h1>
              <p className="mb-4">
                Comprehensive Data Tracking and Real-Time Notification System for Enhanced Operational Efficiency and Safety.
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
                      <h6>Comprehensive Data Tracking</h6>
                      <span>
                        Detailed recording of vehicle performance, driver behavior, and environmental conditions for thorough analysis.
                      </span>
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
                      <h6>Real-Time Alerting</h6>
                      <span>
                        Immediate notification system to flag any anomalies or potential issues, enabling prompt response and mitigation.
                      </span>
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
                      <h6>Analytical Insights</h6>
                      <span>
                        Sophisticated data analysis to uncover trends, identify areas for improvement, and optimize operations.
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

export default DataLoggingSection; 