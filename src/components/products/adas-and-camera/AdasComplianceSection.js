"use client";

import React from 'react';

const AdasComplianceSection = () => {
  return (
    <section id="section2">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img 
                  className="img-fluid w-100 h-100" 
                  src="https://i.ibb.co/5jyJkvC/Fleet-Management-25.png" 
                  style={{ objectFit: 'cover' }} 
                  alt="Fleet Management" 
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">Regulatory Compliance and Privacy Safeguards</h1>
              <p className="mb-4">
                Adherence to laws and regulations, robust data protection, and transparent policies ensure ethical camera usage while maintaining public trust.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Regulatory Compliance</h6>
                      <span>Ensuring strict adherence to all relevant transportation and data privacy laws and regulations.</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Data Protection</h6>
                      <span>Implementing robust security measures and data privacy policies to safeguard customer information.</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Transparent Policies</h6>
                      <span>Clear and accessible policies outlining the purpose, use, and safeguarding of camera data.</span>
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

export default AdasComplianceSection; 