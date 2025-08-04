"use client";

import React from 'react';

const EcoFriendlySection = () => {
  return (
    <section id="section4">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-4">Eco-Friendly Fleet Solutions</h1>
              <p className="mb-4">
                Adopt sustainable practices to reduce environmental impact and improve fleet energy efficiency. Drive towards a greener future with innovative solutions for fleet sustainability.
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
                      <h6>Green Routing</h6>
                      <span>
                        Optimize routes to reduce fuel consumption and minimize emissions, enhancing both efficiency and sustainability.
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
                      <h6>Alternative Fuels</h6>
                      <span>
                        Implementing the use of alternative fuel sources such as electric, hybrid, and biofuels to lower the carbon footprint.
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
                      <h6>Energy-Efficient Vehicles</h6>
                      <span>
                        Incorporating energy-efficient vehicles into your fleet to significantly reduce fuel costs and emissions.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="" className="btn btn-primary py-3 px-5">
                Read More<i className="fa fa-arrow-right ms-3"></i>
              </a>
            </div>
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="img-fluid w-100 h-100"
                  src="https://i.ibb.co/xJY7s8m/30.png"
                  style={{ objectFit: "cover" }}
                  alt="Eco-Friendly Fleet"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendlySection; 