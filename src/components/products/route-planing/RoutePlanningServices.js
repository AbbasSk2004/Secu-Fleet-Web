"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import '../../../assets/css/products/route-planing/route-planning-services.css';

const RoutePlanningServices = () => {
  const [activeTab, setActiveTab] = useState('tab-pane-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="route-planning-services">
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 className="section-title">Cost-Effective Routing</h3>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav-tabs-container">
                <div className="nav w-100 nav-pills me-4">
                  <button
                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('tab-pane-1')}
                    type="button"
                  >
                    <Image 
                      className="greenIcon" 
                      src="/assets/images/icons/fuel.png" 
                      alt="Fuel Efficiency"
                      width={40}
                      height={40}
                    />
                    <h4 className="m-0">Fuel Efficiency</h4>
                  </button>
                  <button
                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-2' ? 'active' : ''}`}
                    onClick={() => handleTabClick('tab-pane-2')}
                    type="button"
                  >
                    <Image 
                      className="greenIcon" 
                      src="/assets/images/icons/maint.png" 
                      alt="Route Maintenance"
                      width={40}
                      height={40}
                    />
                    <h4 className="m-0">Route Maintenance</h4>
                  </button>
                  <button
                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-3' ? 'active' : ''}`}
                    onClick={() => handleTabClick('tab-pane-3')}
                    type="button"
                  >
                    <Image 
                      className="greenIcon" 
                      src="/assets/images/icons/43.png" 
                      alt="Optimal Routing"
                      width={40}
                      height={40}
                    />
                    <h4 className="m-0">Optimal Routing</h4>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                {activeTab === 'tab-pane-1' && (
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="service-image">
                          <Image
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/1qmCXJv/fuel.png"
                            alt="Fuel-Efficient Routes"
                            width={500}
                            height={300}
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="service-content">
                          <h3 className="mb-3">Fuel-Efficient Routes</h3>
                          <p className="mb-4">
                            Our route planning algorithms prioritize fuel efficiency, 
                            utilizing real-time data and predictive analytics to identify the most fuel-optimized delivery routes. 
                            This helps you reduce fuel consumption and operational costs while maintaining high levels of service and on-time performance.
                          </p>
                          <ul className="service-features">
                            <li>
                              <i className="fa fa-check"></i>
                              Proactive Route Monitoring
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Optimized Maintenance Scheduling
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Adaptive Route Adjustments
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'tab-pane-2' && (
                  <div className="tab-pane fade show active" id="tab-pane-2">
                    <div className="row g-4">
                      <div className="col-md-8">
                        <div className="service-image">
                          <Image
                            className="img-fluid w-100 h-100"
                            src="/assets/images/Fleet-Management-59.png"
                            alt="Optimized Route Maintenance"
                            width={800}
                            height={300}
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="service-content">
                          <h3 className="mb-3">Optimized Route Maintenance</h3>
                          <p className="mb-4">
                            Our route maintenance strategy combines proactive monitoring, predictive analytics, 
                            and scheduled servicing to ensure the optimal condition of your delivery routes. 
                            This helps minimize disruptions, reduce maintenance costs, and keep your operations running smoothly.
                          </p>
                          <ul className="service-features">
                            <li>
                              <i className="fa fa-check"></i>
                              Comprehensive Route Inspections
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Preventive Route Maintenance
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Advanced Fleet Management Tools
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'tab-pane-3' && (
                  <div className="tab-pane fade show active" id="tab-pane-3">
                    <div className="row g-4">
                      <div className="col-md-8">
                        <div className="service-image">
                          <Image
                            className="img-fluid w-100 h-100"
                            src="https://i.ibb.co/1djhRw4/routeOpt.webp"
                            alt="Route Optimization for Maximum Efficiency"
                            width={800}
                            height={300}
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="service-content">
                          <h3 className="mb-3">Route Optimization for Maximum Efficiency</h3>
                          <p className="mb-4">
                            Our advanced route optimization algorithms combine real-time data, predictive analytics,
                            and industry-leading logistics expertise to plan the most efficient delivery routes. 
                            This allows you to minimize travel time, reduce fuel consumption, and optimize resource utilization, 
                            all while maintaining exceptional customer service.
                          </p>
                          <ul className="service-features">
                            <li>
                              <i className="fa fa-check"></i>
                              On-Time Delivery Guarantee
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Dedicated Route Planning Team
                            </li>
                            <li>
                              <i className="fa fa-check"></i>
                              Real-Time Route Optimization
                            </li>
                          </ul>
                        </div>
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