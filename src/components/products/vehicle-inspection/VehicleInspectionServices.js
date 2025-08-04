"use client";

import React, { useState } from 'react';

const VehicleInspectionServices = () => {
  const [activeTab, setActiveTab] = useState('tab-pane-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="section1" style={{
      background: "url('https://i.ibb.co/hyghwDY/warning-Bg.png')",
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      objectFit: 'cover',
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    }}>
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5">Comprehensive Vehicle Inspection</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-1' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-1')}
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/car-inspection.png" alt="Pre-Delivery Inspection" />
                  <h4 className="m-0">Pre-Delivery Inspection</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-2' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-2')}
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/maint.png" alt="Periodic Maintenance Inspection" />
                  <h4 className="m-0">Periodic Maintenance Inspection</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-3' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-3')}
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/vehicleInspection.png" alt="Comprehensive Inspection" />
                  <h4 className="m-0">Comprehensive Inspection</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                {activeTab === 'tab-pane-1' && (
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="position-relative h-100">
                          <img
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/v45jKP9/laptop-Diagnos.png"
                            style={{ objectFit: 'cover' }}
                            alt="Pre-Delivery Inspection"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 transBack">
                        <h3 className="mb-3">Pre-Delivery Inspection</h3>
                        <p className="mb-4">
                          Our comprehensive pre-delivery inspection ensures your
                          vehicle is in optimal condition before handover, addressing
                          any issues and providing peace of mind.
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Detailed
                          Checklist
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Experienced
                          Technicians
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Quality Assurance Protocols
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'tab-pane-2' && (
                  <div className="tab-pane fade show active" id="tab-pane-2">
                    <div className="row g-4">
                      <div className="col-md-8 imageSize">
                        <div className="position-relative h-100">
                          <img
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/znG7vNx/oil-Change.png"
                            style={{ objectFit: 'cover' }}
                            alt="Periodic Maintenance Inspection"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 transBack">
                        <h3 className="mb-3">Periodic Maintenance Inspection</h3>
                        <p className="mb-4">
                          Our periodic maintenance inspections ensure your vehicle is
                          running at its best, identifying and addressing issues
                          before they become major problems.
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Manufacturer
                          Recommended Checkpoints
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Expert
                          Technician Team
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Advanced Diagnostic Tools
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'tab-pane-3' && (
                  <div className="tab-pane fade show active" id="tab-pane-3">
                    <div className="row g-4">
                      <div className="col-md-8 imageSize">
                        <div className="position-relative h-100">
                          <img
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/D7GSyby/12.png"
                            style={{ objectFit: 'cover' }}
                            alt="Comprehensive Inspection"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 transBack">
                        <h3 className="mb-3">Comprehensive Inspection</h3>
                        <p className="mb-4">
                          Our comprehensive inspections provide a thorough evaluation
                          of your vehicle&apos;s systems, ensuring optimal performance and
                          safety. Our experts will identify and address any issues,
                          giving you peace of mind.
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Detailed
                          Inspection Checklist
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Certified
                          Inspection Technicians
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Comprehensive Reporting
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleInspectionServices; 