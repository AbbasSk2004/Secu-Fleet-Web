"use client";

import React from 'react';

const AdasIntegrationSection = () => {
  return (
    <section id="section4">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-4">Seamless Integration and Adaptive Functionality</h1>
              <p className="mb-4">
                Seamless integration and adaptive functionality enable advanced safety features to blend smoothly with vehicle systems and adjust to different driving conditions.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Real-Time System Updates</h6>
                      <span>Continuously updates safety systems to improve hazard detection and response.</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Adaptive Response Mechanisms</h6>
                      <span>Automatically adjusts safety features based on road conditions and driver behavior.</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Interoperability with Other Systems</h6>
                      <span>Ensures compatibility with vehicle systems and external devices for unified safety management.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img 
                  className="img-fluid w-100 h-100" 
                  src="https://i.ibb.co/XZMVMxP/Fleet-Management-60.jpg" 
                  style={{ objectFit: 'cover' }} 
                  alt="Fleet Management Integration" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdasIntegrationSection; 