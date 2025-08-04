"use client";

import React from 'react';

const CarSharingAbout = () => {
  return (
    <section id="section2">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="img-fluid w-100 h-100"
                  src="https://i.ibb.co/4Pfk6Cj/truck-Sharing.png"
                  style={{ objectFit: 'cover' }}
                  alt="truck sharing"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">Seamless Car Sharing Experience</h1>
              <p className="mb-4">
                Unlock the convenience and flexibility of car sharing with our cutting-edge technology and user-friendly platform.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: '45px', height: '45px' }}
                    >
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Convenient Booking</h6>
                      <span>
                        Book cars instantly through our user-friendly mobile app or website.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: '45px', height: '45px' }}
                    >
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>Flexible Access</h6>
                      <span>
                        Access cars 24/7 at convenient locations throughout the city.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: '45px', height: '45px' }}
                    >
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>Reliable Vehicles and Sustainable</h6>
                      <span>
                        Our fleet of well-maintained, eco-friendly vehicles ensures a smooth and environmentally conscious ride.
                      </span>
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

export default CarSharingAbout; 