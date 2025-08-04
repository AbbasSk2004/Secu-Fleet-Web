import React from 'react';

const SafetyCompliance = () => {
  return (
    <section id="section2">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="position-static img-fluid"
                  src="https://i.ibb.co/tQ2bc1p/systemE.png"
                  alt="Safety and Compliance"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">Safety and Compliance</h1>
              <p className="mb-4">
                Ensuring Safe Journeys and Regulatory Adherence Through
                Cutting-Edge Technology and Rigorous Standards.
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
                      <h6>Driver Monitoring</h6>
                      <span>
                        Real-time tracking and assessment of driver behavior to
                        ensure safety and adherence to regulations.
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
                      <h6>Vehicle Safety Features</h6>
                      <span>
                        Implementing advanced safety technologies and ensuring
                        vehicles are up to date with safety standards.
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
                      <h6>Regulatory Compliance</h6>
                      <span>
                        Keeping up with and adhering to all relevant
                        transportation and environmental regulations.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/products/digital-reports.html" className="btn btn-primary py-3 px-5">
                Read More<i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCompliance; 