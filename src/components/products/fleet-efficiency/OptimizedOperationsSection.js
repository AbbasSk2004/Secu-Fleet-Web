"use client";

import React from 'react';

const OptimizedOperationsSection = () => {
  return (
    <section id="section1">
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"></h6>
            <h1 className="mb-5">Optimized Fleet Operations</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-1"
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/fuel.png" />
                  <h4 className="m-0">Fuel Optimization</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/schedule.png" />
                  <h4 className="m-0">Predictive Maintenance</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/route.png" />
                  <h4 className="m-0">Smart Route Planning</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/P6ZJ3g6/fuel-Manag.png"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Fuel Efficiency Strategies</h3>
                      <p className="mb-4">
                        Maximize fuel efficiency with data-driven insights,
                        reducing consumption and operational costs while maintaining optimal performance.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Real-Time Fuel Monitoring
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Efficiency-Boosting Analytics
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Cost-Effective Fuel Solutions
                      </p>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3" style={{ color: "white" }}>
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/rsWNvzt/maintenance.png"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Predictive Maintenance Planning</h3>
                      <p className="mb-4">
                        Implement predictive maintenance to minimize downtime and repair costs, ensuring maximum fleet reliability.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Data-Driven Maintenance Scheduling
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Expert Technical Support
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Advanced Diagnostic Tools
                      </p>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3" style={{ color: "white" }}>
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/SxFFL7n/route-Maint.png"
                          style={{ objectFit: "contain" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Optimized Route Solutions</h3>
                      <p className="mb-4">
                        Enhance route planning with intelligent algorithms that reduce travel time and fuel usage, boosting overall fleet efficiency.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Intelligent Route Mapping
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Optimized Travel Times
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Eco-Friendly Routes
                      </p>
                      <a href="" className="btn btn-primary py-3 px-5 mt-3" style={{ color: "white" }}>
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

export default OptimizedOperationsSection; 