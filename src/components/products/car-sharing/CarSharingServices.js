"use client";

import React from 'react';

const CarSharingServices = () => {
  return (
    <section id="section1" style={{
      background: "url('https://i.ibb.co/0hjZsry/96.png')",
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      objectFit: 'cover',
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex'
    }}>
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"></h6>
            <h1 className="mb-5">Car Sharing and Mobility Solutions</h1>
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
                  <img src="/assets/images/icons/9.png" className="greenIcon" style={{ width: '80px', objectFit: 'contain', paddingRight: '10px' }} />
                  <h4 className="m-0">Car Sharing Platforms</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-5"
                  type="button"
                >
                  <img src="/assets/images/icons/carType.png" className="greenIcon" style={{ width: '80px', objectFit: 'contain', paddingRight: '10px' }} />
                  <h4 className="m-0">Multimodal Mobility Solutions</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-6"
                  type="button"
                >
                  <img src="/assets/images/icons/onDemand.png" className="greenIcon" style={{ width: '80px', objectFit: 'contain', paddingRight: '10px' }} />
                  <h4 className="m-0">Ride-Hailing and On-Demand Services</h4>
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
                          src="https://i.ibb.co/JqR6pGG/car-Sharing-Platform.png"
                          style={{ objectFit: 'cover' }}
                          alt="car sharing platform"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">
                        Convenient and Accessible Car Sharing.
                      </h3>
                      <p className="mb-4">
                        Our car sharing platform provides on-demand access to a
                        diverse fleet of vehicles, making it easier for people to
                        get around without the hassle of owning a car.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Flexible Rental Options
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Smartphone Integration
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Reduced Environmental Impact
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
                          src="https://i.ibb.co/VqMF58J/bike-Sharing.png"
                          style={{ objectFit: 'cover' }}
                          alt="bike sharing"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">
                        Integrated Mobility Solutions.
                      </h3>
                      <p className="mb-4">
                        We offer a comprehensive suite of mobility solutions,
                        combining car sharing, public transportation, and other
                        modes of travel to provide a seamless and efficient
                        experience.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Multimodal Integration
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Enhanced Connectivity
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Reduced Congestion
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
                          src="https://i.ibb.co/QYRrFsW/car-Sharing-Back.png"
                          style={{ objectFit: 'cover' }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">
                        On-Demand Mobility Services.
                      </h3>
                      <p className="mb-4">
                        Our ride-hailing and on-demand transportation services
                        provide a convenient and flexible way for people to get
                        around, without the need for personal vehicle ownership.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Reliable On-Demand Rides
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Affordable Pricing
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Environmentally Friendly Options
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

export default CarSharingServices; 