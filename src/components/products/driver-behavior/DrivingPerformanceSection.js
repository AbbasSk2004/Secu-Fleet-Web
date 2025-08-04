"use client";

import React from 'react';

const DrivingPerformanceSection = () => {
  return (
    <section id="section1" className="driver-behavior">
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"></h6>
            <h1 className="mb-5">Driving Performance</h1>
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
                  <img className="greenIcon" src="/images/icons/speed.png" alt="Speed Monitoring"/>
                  <h4 className="m-0">Speed Monitoring</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <img className="greenIcon" src="/images/icons/brakingPattern.png" alt="Braking Patterns"/>
                  <h4 className="m-0">Braking Patterns</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <img className="greenIcon" src="/images/icons/acc.png" alt="Acceleration Trends"/>
                  <h4 className="m-0">Acceleration Trends</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8 content">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/vwrvCc4/speed.webp"
                          style={{ objectFit: "cover" }}
                          alt="Speed Monitoring"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Advanced Speed Surveillance</h3>
                      <p className="mb-4">
                        Continuously monitor and record the average and peak speeds of each driver to ensure compliance with speed regulations and to promote safe driving practices.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Enhanced Safety
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Fuel Efficiency
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i> 
                        Regulatory Compliance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/BTGq0mx/braking.webp"
                          style={{ objectFit: "cover" }}
                          alt="Braking Patterns"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Braking Behavior Insights</h3>
                      <p className="mb-4">
                        Analyze instances of harsh or abrupt braking to identify potential safety risks and provide feedback for smoother driving techniques.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Improved Safety
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Vehicle Longevity
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Enhanced Driver Training
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/jvNtMf3/acceleration.webp"
                          style={{ objectFit: "cover" }}
                          alt="Acceleration Trends"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Acceleration Performance Evaluation</h3>
                      <p className="mb-4">
                        Leveraging data-driven insights and innovative algorithms, we tailor routes to streamline operations, reduce travel time, and lower fuel consumption, promoting eco-friendly practices
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Vehicle Health
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Improved Trip Consistency
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Operational Cost Savings
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

export default DrivingPerformanceSection; 