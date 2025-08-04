"use client";

import React from 'react';

const VehicleInspectionMaintenance = () => {
  return (
    <section id="section4">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-4">Maintenance Recommendations from Vehicle Inspection</h1>
              <p className="mb-4">
                Utilize our comprehensive vehicle inspection data to generate tailored maintenance recommendations,
                ensuring your fleet is well-cared for and operating at peak efficiency.
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
                      <h6>Proactive Maintenance Planning</h6>
                      <span>
                        Identify potential issues early and schedule targeted maintenance to prevent costly breakdowns.
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
                      <h6>Customized Recommendations</h6>
                      <span>
                        Receive tailored maintenance suggestions based on the unique needs and usage patterns of your vehicles.
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
                      <h6>Improved Cost Savings</h6>
                      <span>
                        Reduce unnecessary expenses and extend the lifespan of your vehicles through proactive maintenance.
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
                  src="https://i.ibb.co/3kHSHf5/Fleet-Management-45.png"
                  alt="Maintenance Recommendations"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleInspectionMaintenance; 