"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import '../../../assets/css/products/digital-reports/service.css';

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState('tab-pane-4');

  const tabs = [
    {
      id: 'tab-pane-4',
      title: 'Responsive Design',
      icon: '/assets/images/icons/responsive.png',
      image: 'https://i.ibb.co/h8KvFdX/Fleet-Management-27-C.png',
      heading: 'Delivering a seamless experience on any device.',
      description: 'Ensuring our website and applications are designed to adapt to various screen sizes and resolutions, providing an optimal user experience across all devices.',
      features: ['Responsive Design', 'Flexible Layout', 'Intuitive UX']
    },
    {
      id: 'tab-pane-5',
      title: 'Adaptive Layout',
      icon: '/assets/images/icons/flip.png',
      image: 'https://i.ibb.co/ctJn1QW/Fleet-Management-112-C.jpg',
      heading: 'Adapting to the unique needs of mobile users.',
      description: 'Optimizing our designs and content to provide a tailored experience for mobile devices, ensuring seamless functionality and usability.',
      features: ['Intuitive Navigation', 'Optimized Content', 'Touchscreen Compatibility']
    },
    {
      id: 'tab-pane-6',
      title: 'Optimized Performance',
      icon: '/assets/images/icons/opt.png',
      image: 'https://i.ibb.co/jbmwD85/Fleet-Management-40-C.png',
      heading: 'Optimizing for lightning-fast performance on mobile.',
      description: 'Leveraging the latest technologies and best practices to deliver a smooth and efficient mobile experience, with lightning-fast loading times and seamless interactions.',
      features: ['Rapid Load Times', 'Optimized Assets', 'Smooth Interactions']
    }
  ];

  return (
    <section id="section1">
      <div className="container-xxl service">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"></h6>
            <h1>Optimizing for Mobile Devices</h1>
          </div>
          <div className="content-wrapper wow fadeInUp" data-wow-delay="0.3s">
            <div className="navTitles">
              <div className="nav nav-pills">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                  >
                    <Image 
                      className="greenIcon" 
                      src={tab.icon} 
                      alt={tab.title}
                      width={80}
                      height={80}
                      priority={true}
                    />
                    <h4>{tab.title}</h4>
                  </button>
                ))}
              </div>
            </div>
            <div className="tab-content">
              {tabs.map((tab) => (
                <div key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`} id={tab.id}>
                  <div className="content-layout">
                    <div className="imageSize">
                      <div className="position-relative">
                        <Image
                          className="content-image"
                          src={tab.image}
                          alt={tab.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'contain' }}
                          priority={activeTab === tab.id}
                        />
                      </div>
                    </div>
                    <div className="transBack">
                      <h3>{tab.heading}</h3>
                      <p>{tab.description}</p>
                      {tab.features.map((feature, index) => (
                        <p key={index}>
                          <i className="fa fa-check text-success"></i>{feature}
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
    </section>
  );
};

export default ServiceSection; 