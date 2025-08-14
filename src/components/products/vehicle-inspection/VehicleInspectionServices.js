"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import '../../../assets/css/products/vehicle-inspection/vehicle-inspection-services.css';

const VehicleInspectionServices = () => {
  const [activeTab, setActiveTab] = useState('tab-pane-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="vehicle-inspection-services">
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="section-title">Comprehensive Vehicle Inspection</h3>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav-tabs-container">
                <div className="nav w-100 nav-pills me-4">
                  <button
                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('tab-pane-1')}
                    type="button"
                  >
                    <Image 
                      className="greenIcon" 
                      src="/assets/images/icons/car-inspection.png" 
                      alt="Pre-Delivery Inspection"
                      width={40}
                      height={40}
                    />
                    <h4 className="m-0">Pre-Delivery Inspection</h4>
                  </button>
                  <button
                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-2' ? 'active' : ''}`}
                    onClick={() => handleTabClick('tab-pane-2')}
                    type="button"
                  >
                    <Image 
                      className="greenIcon" 
                      src="/assets/images/icons/maint.png" 
                      alt="Periodic Maintenance Inspection"
                      width={40}
                      height={40}
                    />
                    <h4 className="m-0">Periodic Maintenance Inspection</h4>
                  </button>
                  <button
                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-3' ? 'active' : ''}`}
                    onClick={() => handleTabClick('tab-pane-3')}
                    type="button"
                  >
                    <Image 
                      className="greenIcon" 
                      src="/assets/images/icons/vehicleInspection.png" 
                      alt="Comprehensive Inspection"
                      width={40}
                      height={40}
                    />
                    <h4 className="m-0">Comprehensive Inspection</h4>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                {activeTab === 'tab-pane-1' && (
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="service-image">
                          <Image
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/v45jKP9/laptop-Diagnos.png"
                            alt="Pre-Delivery Inspection"
                            width={500}
                            height={300}
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="service-content">
                          <h3 className="mb-3">Pre-Delivery Inspection</h3>
                          <p className="mb-4">
                            Our comprehensive pre-delivery inspection ensures your
                            vehicle is in optimal condition before handover, addressing
                            any issues and providing peace of mind.
                          </p>
                          <ul className="service-features">
                            <li>
                              <i className="fa fa-check"></i>
                              Detailed Checklist
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Experienced Technicians
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Quality Assurance Protocols
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'tab-pane-2' && (
                  <div className="tab-pane fade show active" id="tab-pane-2">
                    <div className="row g-4">
                      <div className="col-md-8">
                        <div className="service-image">
                          <Image
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/znG7vNx/oil-Change.png"
                            alt="Periodic Maintenance Inspection"
                            width={800}
                            height={300}
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="service-content">
                          <h3 className="mb-3">Periodic Maintenance Inspection</h3>
                          <p className="mb-4">
                            Our periodic maintenance inspections ensure your vehicle is
                            running at its best, identifying and addressing issues
                            before they become major problems.
                          </p>
                          <ul className="service-features">
                            <li>
                              <i className="fa fa-check"></i>
                              Manufacturer Recommended Checkpoints
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Expert Technician Team
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Advanced Diagnostic Tools
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'tab-pane-3' && (
                  <div className="tab-pane fade show active" id="tab-pane-3">
                    <div className="row g-4">
                      <div className="col-md-8">
                        <div className="service-image">
                          <Image
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/D7GSyby/12.png"
                            alt="Comprehensive Inspection"
                            width={800}
                            height={300}
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="service-content">
                          <h3 className="mb-3">Comprehensive Inspection</h3>
                          <p className="mb-4">
                            Our comprehensive inspections provide a thorough evaluation
                            of your vehicle&apos;s systems, ensuring optimal performance and
                            safety. Our experts will identify and address any issues,
                            giving you peace of mind.
                          </p>
                          <ul className="service-features">
                            <li>
                              <i className="fa fa-check"></i>
                              Detailed Inspection Checklist
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Certified Inspection Technicians
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Comprehensive Reporting
                            </li>
                          </ul>
                        </div>
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