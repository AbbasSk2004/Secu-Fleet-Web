"use client";

import React from 'react';

const VehicleInspectionAbout = () => {
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
                  className="img-fluid"
                  src="https://i.ibb.co/P5TQ01m/Fleet-Management-9.png"
                  style={{ borderRadius: '10px', objectFit: 'cover' }}
                  alt="Thorough Vehicle Inspections"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">Thorough Vehicle Inspections</h1>
              <p className="mb-4">
                At our company, we take vehicle inspections seriously. Our team of
                experienced technicians conducts comprehensive inspections to
                ensure the safety and roadworthiness of every vehicle in our fleet.
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
                      <h6>Pre-trip Inspections</h6>
                      <span>
                        Thorough checks before every trip to identify and address
                        any issues.
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
                      <h6>Preventative Maintenance</h6>
                      <span>
                        Regular inspections and servicing to keep vehicles in top
                        condition.
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
                      <h6>Detailed Reporting</h6>
                      <span>
                        Comprehensive documentation and tracking of all vehicle
                        inspections and maintenance.
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

export default VehicleInspectionAbout; 