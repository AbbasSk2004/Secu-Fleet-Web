"use client";

import React from 'react';

const SafetyComplianceSection = () => {
  return (
    <section id="section1" style={{
      background: "url('https://i.ibb.co/6PHY8ng/23.png')",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      objectFit: "cover",
      padding: "0",
      alignItems: "center",
      justifyContent: "center",
      display: "flex"
    }}>
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"></h6>
            <h1 className="mb-5">Safety and Compliance</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/acc.png" alt="Incident Reporting" />
                  <h4 className="m-0">Incident Reporting</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-5"
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/case.png" alt="Compliance Check" />
                  <h4 className="m-0">Compliance Check</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-6"
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/4.png" alt="Training and Resources" />
                  <h4 className="m-0">Training and Resources</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/9pMCGHV/Fleet-Management-47.png"
                          style={{ objectFit: "cover" }}
                          alt="Incident Management"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">
                        Incidents Management
                      </h3>
                      <p className="mb-4">
                        Drivers can quickly document and respond to incidents through the mobile app, attaching photos or videos for accurate records while automatically notifying relevant team members for prompt action.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Report Incidents
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Photo and Video Uploads
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Automatic Notifications
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-5">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/0mjL6vJ/Fleet-Management-28.png"
                          style={{ objectFit: "cover" }}
                          alt="Compliance Verification"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">
                        Compliance Verification
                      </h3>
                      <p className="mb-4">
                        Drivers can conduct pre-trip inspections and submit checklists via the app, utilize digital signatures for accountability, and maintain an audit trail for easy review of compliance activities.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Pre-trip Inspections
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Digital Signatures
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Audit Trails
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-6">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/y5BQwqQ/Fleet-Management-77.png"
                          style={{ objectFit: "cover" }}
                          alt="Training and Support"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">
                        Training and Support
                      </h3>
                      <p className="mb-4">
                        The app offers drivers access to training materials, timely safety alerts, and a comprehensive knowledge base, ensuring they are well-informed and equipped with best practices for their roles.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Access Training Materials
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Safety Alerts
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Knowledge Base
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

export default SafetyComplianceSection; 