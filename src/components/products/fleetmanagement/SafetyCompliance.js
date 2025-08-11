import React from 'react';
import '../../../assets/css/products/safetycompliance.css';

const SafetyCompliance = () => {
  return (
    <section id="section2">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">Safety & Compliance</h6>
            <h1 className="mb-5">Safety and Compliance Management</h1>
          </div>
          
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="position-static img-fluid w-100 h-100"
                  src="https://i.ibb.co/tQ2bc1p/systemE.png"
                  style={{ objectFit: "cover" }}
                  alt="Safety and Compliance"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <h2 className="mb-4">Ensuring Safe Journeys and Regulatory Adherence</h2>
                <p className="mb-4">
                  Through cutting-edge technology and rigorous standards, we provide comprehensive 
                  safety and compliance solutions that protect your fleet, drivers, and business.
                </p>
                
                <div className="row g-4 mb-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-start">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1 me-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="fa fa-user-shield text-primary" style={{ fontSize: "24px" }}></i>
                      </div>
                      <div>
                        <h5 className="mb-2">Driver Monitoring</h5>
                        <p className="mb-0">
                          Real-time tracking and assessment of driver behavior to
                          ensure safety and adherence to regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-start">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1 me-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="fa fa-shield-alt text-primary" style={{ fontSize: "24px" }}></i>
                      </div>
                      <div>
                        <h5 className="mb-2">Vehicle Safety Features</h5>
                        <p className="mb-0">
                          Implementing advanced safety technologies and ensuring
                          vehicles are up to date with safety standards.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className="d-flex align-items-start">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1 me-3"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="fa fa-clipboard-check text-primary" style={{ fontSize: "24px" }}></i>
                      </div>
                      <div>
                        <h5 className="mb-2">Regulatory Compliance</h5>
                        <p className="mb-0">
                          Keeping up with and adhering to all relevant
                          transportation and environmental regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="wow fadeInUp" data-wow-delay="0.7s">
                  <a href="/products/digital-reports.html" className="btn btn-primary py-3 px-5">
                    Learn More <i className="fa fa-arrow-right ms-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCompliance; 