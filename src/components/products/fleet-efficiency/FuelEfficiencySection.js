"use client";

import React from 'react';

const FuelEfficiencySection = () => {
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
                  className="img-fluid"
                  src="https://i.ibb.co/hCf6Xkj/Fleet-Management-34.png"
                  alt="Fuel Efficiency"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">Fuel Efficiency and Cost Reduction</h1>
              <p className="mb-4">
                Enhancing fleet performance by reducing fuel consumption and operational costs through data-driven strategies and technologies.
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
                      <h6>Fuel Usage Monitoring</h6>
                      <span>
                        Real-time fuel usage monitoring to identify inefficiencies and optimize consumption.
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
                      <h6>Cost-Effective Maintenance</h6>
                      <span>
                        Scheduling proactive maintenance to reduce fuel-related breakdowns and repair costs.
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
                      <h6>Route Optimization</h6>
                      <span>
                        Implementing smart route planning to reduce unnecessary fuel usage and travel time, cutting operational costs.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="" className="btn btn-primary py-3 px-5">
                Read More<i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelEfficiencySection; 