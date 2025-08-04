"use client";

import React, { useState } from 'react';

const SensorIntegrationSection = () => {
  const [activeTab, setActiveTab] = useState('tab-pane-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="section1">
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"></h6>
            <h1 className="mb-5">Sensor Integration</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-1' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-1')}
                  type="button"
                >
                  <img src="/images/icons/vehicleInspection.png" className="greenIcon" alt="Vehicle Inspection" />
                  <h4 className="m-0">Vehicle Diagnostics</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-2' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-2')}
                  type="button"
                >
                  <img src="/images/icons/gpsIcon.png" className="greenIcon" alt="GPS Icon" />
                  <h4 className="m-0">GPS Tracking</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-3' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-3')}
                  type="button"
                >
                  <img src="/images/icons/data.png" className="greenIcon" alt="Data Analytics" />
                  <h4 className="m-0">Data Analytics</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className={`tab-pane fade ${activeTab === 'tab-pane-1' ? 'show active' : ''}`} id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/T0LrMZR/Fleet-Management-115.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Vehicle Diagnostics"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Advanced Vehicle Diagnostics</h3>
                      <p className="mb-4">
                        Our sensor-driven diagnostics system provides real-time
                        insights into vehicle health, enabling proactive
                        maintenance and identifying potential issues before they
                        become costly problems.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Detect
                        Engine Malfunctions
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Monitor
                        Fuel Efficiency
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Predictive
                        Maintenance
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab-pane-2' ? 'show active' : ''}`} id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/0BmsTLy/gps.png"
                          style={{ objectFit: "cover" }}
                          alt="GPS Tracking"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Comprehensive GPS Tracking</h3>
                      <p className="mb-4">
                        Our advanced GPS tracking solutions provide real-time
                        visibility into vehicle locations, routes, and driver
                        behavior, enabling optimized operations and enhanced
                        fleet management.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Live
                        Vehicle Tracking
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Customizable
                        Reporting
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Seamless
                        Integration
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab-pane-3' ? 'show active' : ''}`} id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/2gWvYkk/sensor.png"
                          style={{ objectFit: "cover" }}
                          alt="Data Analytics"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Data-Driven Insights</h3>
                      <p className="mb-4">
                        Our comprehensive data analytics platform leverages
                        sensor data to provide valuable insights, enabling
                        informed decision-making, cost optimization, and
                        continuous improvement.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Intelligent
                        Reporting
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Predictive
                        Maintenance
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Customizable
                        Dashboards
                      </p>
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

export default SensorIntegrationSection; 