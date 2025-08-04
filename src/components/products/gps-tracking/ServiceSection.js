"use client";

import React, { useState } from 'react';

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState('tab-pane-1');

  const tabs = [
    {
      id: 'tab-pane-1',
      target: 'tab-pane-1',
      icon: '/assets/images/icons/gpsIcon.png',
      title: 'Real-Time Fleet Monitoring',
      image: 'https://i.ibb.co/55GJxF5/Fleet-Management-48.png',
      heading: 'Fleet Tracking',
      description: 'Our comprehensive GPS tracking and live data solutions provide real-time visibility into your fleet\'s location, performance, and efficiency, empowering you to make informed decisions and optimized operations.',
      features: [
        'Vehicle Tracking and Geofencing',
        'Driver Behavior Monitoring',
        'Predictive Maintenance Alerts'
      ]
    },
    {
      id: 'tab-pane-2',
      target: 'tab-pane-2',
      icon: '/assets/images/icons/maint.png',
      title: 'Predictive Maintenance',
      image: 'https://i.ibb.co/b3BBZPf/Fleet-Management-49.png',
      heading: 'Data-Driven Maintenance',
      description: 'Our advanced predictive maintenance solutions leverage data analytics and machine learning to forecast equipment failures, enabling proactive maintenance planning and optimized asset management, minimizing downtime and reducing overall maintenance costs.',
      features: [
        'Condition-Based Monitoring',
        'Predictive Failure Analysis',
        'Automated Maintenance Scheduling'
      ]
    },
    {
      id: 'tab-pane-3',
      target: 'tab-pane-3',
      icon: '/assets/images/icons/43.png',
      title: 'Data-Driven Decision Making',
      image: 'https://i.ibb.co/tpRFVqn/route-Maint.png',
      heading: 'Data-Driven Insights',
      description: 'Our data-driven approach leverages advanced analytics and visualization tools to provide deep insights, empowering you to make informed, strategic decisions that optimize operational efficiency and drive business growth.',
      features: [
        'Predictive Analytics',
        'Custom Reporting and Dashboards',
        'Benchmarking and Performance Monitoring'
      ]
    }
  ];

  return (
    <section id="section1">
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"></h6>
            <h1 className="mb-5">Maximizing Efficiency through GPS Tracking and Live Data</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${
                      activeTab === tab.target ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab(tab.target)}
                    type="button"
                  >
                    <img src={tab.icon} className="greenIcon" alt={tab.title} />
                    <h4 className="m-0">{tab.title}</h4>
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${activeTab === tab.target ? 'show active' : ''}`}
                    id={tab.id}
                  >
                    <div className="row g-4">
                      <div className="col-md-8 imageSize">
                        <div className="position-relative h-100">
                          <img
                            className="img-fluid w-100 h-100"
                            src={tab.image}
                            style={{ objectFit: 'cover' }}
                            alt={tab.heading}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 transBack">
                        <h3 className="mb-3">{tab.heading}</h3>
                        <p className="mb-4">{tab.description}</p>
                        {tab.features.map((feature, index) => (
                          <p key={index}>
                            <i className="fa fa-check text-success me-3"></i>{feature}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection; 