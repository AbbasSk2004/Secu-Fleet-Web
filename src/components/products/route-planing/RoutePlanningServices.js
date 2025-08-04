"use client";

import React, { useState } from 'react';

const RoutePlanningServices = () => {
  const [activeTab, setActiveTab] = useState('tab-pane-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="section1" style={{
      background: "url('https://i.ibb.co/dPj3g9h/31.png')",
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
            <h1 className="mb-5">Cost-Effective Routing</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-1' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-1')}
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/fuel.png" alt="Fuel Efficiency" />
                  <h4 className="m-0">Fuel Efficiency</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-2' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-2')}
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/maint.png" alt="Route Maintenance" />
                  <h4 className="m-0">Route Maintenance</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-3' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-3')}
                  type="button"
                >
                  <img className="greenIcon" src="/assets/images/icons/43.png" alt="Optimal Routing" />
                  <h4 className="m-0">Optimal Routing</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                {activeTab === 'tab-pane-1' && (
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <div className="row g-4">
                      <div className="col-md-8 imageSize">
                        <div className="position-relative h-100">
                          <img
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/1qmCXJv/fuel.png"
                            style={{ objectFit: 'cover' }}
                            alt="Fuel-Efficient Routes"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 transBack">
                        <h3 className="mb-3">Fuel-Efficient Routes</h3>
                        <p className="mb-4">
                          Our route planning algorithms prioritize fuel efficiency, 
                          utilizing real-time data and predictive analytics to identify the most fuel-optimized delivery routes. 
                          This helps you reduce fuel consumption 
                          and operational costs while maintaining high levels of service and on-time performance.
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Proactive Route 
                          Monitoring
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Optimized Maintenance 
                          Scheduling
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Adaptive Route Adjustments
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'tab-pane-2' && (
                  <div className="tab-pane fade show active" id="tab-pane-2">
                    <div className="row g-4">
                      <div className="col-md-8 imageSize">
                        <div className="position-relative h-100">
                          <img
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/Xx5y1Vg/Fleet-Management-59.png"
                            style={{ objectFit: 'cover' }}
                            alt="Optimized Route Maintenance"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 transBack">
                        <h3 className="mb-3">Optimized Route Maintenance</h3>
                        <p className="mb-4">
                          Our route maintenance strategy combines 
                          proactive monitoring, predictive analytics, 
                          and scheduled servicing to ensure the optimal 
                          condition of your delivery routes. 
                          This helps minimize disruptions, reduce maintenance 
                          costs,
                          and keep your operations running smoothly.
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Comprehensive Route
                          Inspections
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Preventive Route 
                          Maintenance
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Advanced Fleet Management Tools
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'tab-pane-3' && (
                  <div className="tab-pane fade show active" id="tab-pane-3">
                    <div className="row g-4">
                      <div className="col-md-8 imageSize">
                        <div className="position-relative h-100">
                          <img
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/1djhRw4/routeOpt.webp"
                            style={{ objectFit: 'cover' }}
                            alt="Route Optimization for Maximum Efficiency"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 transBack">
                        <h3 className="mb-3">Route Optimization for Maximum Efficiency</h3>
                        <p className="mb-4">
                          Our advanced route optimization algorithms combine 
                          real-time data, predictive analytics,
                          and industry-leading logistics expertise to plan 
                          the most efficient delivery routes. 
                          This allows you to minimize travel time,
                          reduce fuel consumption,
                          and optimize resource utilization, 
                          all while maintaining exceptional customer service.
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>On-Time Delivery
                          Guarantee
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Dedicated Route Planning Team
                        </p>
                        <p>
                          <i className="fa fa-check text-success me-3"></i>Real-Time Route Optimization
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutePlanningServices; 