import React from 'react';

const RealTimeTracking = () => {
  return (
    <section id="section4">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-4">Real-Time Tracking and Data Analytics</h1>
              <p className="mb-4">
                Unlock the power of real-time tracking and data analytics to
                elevate your fleet management, driving efficiency, visibility,
                and informed decision-making to new heights.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>GPS Tracking</h6>
                      <span>
                        Continuous monitoring of vehicle locations for better
                        fleet visibility and management.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Telematics</h6>
                      <span>
                        Collecting and analyzing data from vehicles to improve
                        decision-making and operational efficiency.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Performance Metrics</h6>
                      <span>
                        Using data analytics to track key performance
                        indicators (KPIs) and improve fleet performance.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/products/gps-tracking.html" className="btn btn-primary py-3 px-5">
                Read More<i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="position-static img-fluid w-100 h-100"
                  src="https://i.ibb.co/DM8CT5w/real-time-tracking.png"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeTracking; 