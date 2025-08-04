"use client";

import React from 'react';

const WorktimeServices = () => {
  return (
    <section id="section1" style={{
      background: "url('https://i.ibb.co/FJ5pm9J/Fleet-Management-62.png')",
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 70%',
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
            <h1 className="mb-5">Optimized Shift Scheduling</h1>
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
                  <i className="fa fa-balance-scale fa-2x me-3"></i>
                  <h4 className="m-0">Balanced Workload</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <i className="fa fa-truck fa-2x me-3"></i>
                  <h4 className="m-0">Enhanced Driver Safety</h4>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <i className="fa fa-dollar-sign fa-2x me-3"></i>
                  <h4 className="m-0">Cost Efficiency</h4>
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
                          src="https://i.ibb.co/TRSPZND/job-Assigned.png"
                          style={{ objectFit: 'cover' }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Equitable Workload Allocation</h3>
                      <p className="mb-4">
                        Optimized shift scheduling ensures that driver workloads are evenly distributed, preventing burnout and enhancing overall productivity.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i> Even driver distribution
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Prevents burnout
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Enhances productivity
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
                          src="https://i.ibb.co/cwP8Pny/Fleet-Management-81.jpg"
                          style={{ objectFit: 'cover' }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Safeguard on the Road</h3>
                      <p className="mb-4">
                        Ensuring that drivers take regular breaks and rest periods helps prevent fatigue-related accidents and improves overall road safety.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Prevents fatigue-related accidents
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Maintains driver alertness
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Reduces risk of errors
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
                          src="https://i.ibb.co/ZHHZqBW/money.png"
                          style={{ objectFit: 'cover' }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Cost-Saving Efficiency</h3>
                      <p className="mb-4">
                        By optimizing shifts, fleets can reduce overtime costs and manage resources more effectively, leading to significant cost savings.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Improves financial management
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Reduces overtime costs
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Optimizes resource use
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

export default WorktimeServices; 