"use client";

import React, { useState } from 'react';

const ServiceSection = () => {
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
            <h1 className="mb-5">Identify the data sources</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${
                    activeTab === 'tab-pane-1' ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick('tab-pane-1')}
                  type="button"
                >
                  <img src="/assets/images/icons/data-mappingIcon.png" className="greenIcon" alt="Data Mapping" />
                  <h4 className="m-0">Data Mapping</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${
                    activeTab === 'tab-pane-2' ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick('tab-pane-2')}
                  type="button"
                >
                  <img src="/assets/images/icons/api.png" className="greenIcon" alt="API Source" />
                  <h4 className="m-0">API Source Identification</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${
                    activeTab === 'tab-pane-3' ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick('tab-pane-3')}
                  type="button"
                >
                  <img src="/assets/images/icons/performance.png" className="greenIcon" alt="Performance" />
                  <h4 className="m-0">Performance Monitoring</h4>
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
                          src="https://i.ibb.co/sQmNfcT/Fleet-Management-89.png"
                          style={{ objectFit: 'cover' }}
                          alt="Data Mapping"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Comprehensive Data Mapping</h3>
                      <p className="mb-4">
                        We excel in mapping data sources and identifying the
                        appropriate APIs to integrate, ensuring seamless data
                        flow and accurate information exchange.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Data Source
                        Identification
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>API
                        Integration Expertise
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Customized
                        Solutions
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
                          src="https://i.ibb.co/Btzmnq3/api.png"
                          style={{ objectFit: 'cover' }}
                          alt="API Source Identification"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Reliable API Source Identification</h3>
                      <p className="mb-4">
                        Our experts meticulously research and identify the
                        appropriate API sources, ensuring data integrity and
                        seamless integration with your systems.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>API
                        Compatibility Assessment
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Secure
                        Data Connectivity
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Scalable
                        Solutions
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
                          src="https://i.ibb.co/y6wzYsX/Fleet-Management-107.png"
                          style={{ objectFit: 'cover' }}
                          alt="Performance Monitoring"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Comprehensive Performance Monitoring</h3>
                      <p className="mb-4">
                        We implement robust monitoring solutions to track the
                        performance of your API integrations, ensuring optimal
                        data flow and identifying potential bottlenecks for
                        continuous improvement.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Proactive
                        Monitoring
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Insightful
                        Reporting
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Optimization
                        Recommendations
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

export default ServiceSection; 