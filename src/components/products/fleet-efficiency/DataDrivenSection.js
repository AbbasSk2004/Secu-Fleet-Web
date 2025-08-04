"use client";

import React from 'react';

const DataDrivenSection = () => {
  return (
    <section id="section3">
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"></h6>
            <h1 className="mb-5">Data-Driven Fleet Management</h1>
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
                  <img className="greenIcon" src="/assets/images/icons/performance.png" />
                  <h4 className="m-0">Fleet Analytics</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-5"
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/data.png" />
                  <h4 className="m-0">Real-Time Monitoring</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-6"
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/maint.png" />
                  <h4 className="m-0">Predictive Maintenance</h4>
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
                          src="https://i.ibb.co/wsHnDGw/Fleet-Management-112-C.jpg"
                          style={{ objectFit: "cover" }}
                          alt="Fleet Analytics"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Leveraging Fleet Analytics</h3>
                      <p className="mb-4">
                        Harnessing data to gain actionable insights, enhance performance, and optimize fleet operations for maximum efficiency.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Data-Driven Insights
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Operational Efficiency
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Improved Decision-Making
                      </p>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-5">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/2FtRwbt/Fleet-Management-14.png"
                          style={{ objectFit: "cover" }}
                          alt="Real-Time Monitoring"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Real-Time Fleet Monitoring</h3>
                      <p className="mb-4">
                        Continuous tracking and monitoring of fleet operations to ensure optimal performance, safety, and compliance at all times.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Live Data Streams
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Enhanced Fleet Visibility
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Immediate Response to Issues
                      </p>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-6">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/fpNv79Q/Fleet-Management-21.png"
                          style={{ objectFit: "cover" }}
                          alt="Predictive Maintenance"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Predictive Maintenance Solutions</h3>
                      <p className="mb-4">
                        Using data analytics and machine learning to anticipate maintenance needs, reduce downtime, and extend vehicle life.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Proactive Maintenance
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Reduced Downtime
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Optimized Vehicle Lifespan
                      </p>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
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

export default DataDrivenSection; 