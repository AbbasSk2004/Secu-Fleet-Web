"use client";

import React from 'react';
import '../../../assets/css/products/vehicle-inspection/vehicle-inspection-about.css';

const VehicleInspectionAbout = () => {
  return (
    <section id="section2" className="vehicle-inspection-about">
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
                  <div className="feature-item">
                    <div className="feature-number">
                      <span>01</span>
                    </div>
                    <div className="feature-content">
                      <h6>Pre-trip Inspections</h6>
                      <span>
                        Thorough checks before every trip to identify and address
                        any issues.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="feature-item">
                    <div className="feature-number">
                      <span>02</span>
                    </div>
                    <div className="feature-content">
                      <h6>Preventative Maintenance</h6>
                      <span>
                        Regular inspections and servicing to keep vehicles in top
                        condition.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="feature-item">
                    <div className="feature-number">
                      <span>03</span>
                    </div>
                    <div className="feature-content">
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