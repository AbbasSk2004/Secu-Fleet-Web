"use client";

import React, { useState } from 'react';

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

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="section1" style={{
      background: 'url("https://i.ibb.co/6XGCz41/Fleet-Management-88.png")',
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
            <h1 className="mb-5">Optimizing for Mobile Devices</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                  >
                    <img className="greenIcon" src={tab.icon} alt={tab.title} />
                    <h4 className="m-0">{tab.title}</h4>
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                {tabs.map((tab) => (
                  <div key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`} id={tab.id}>
                    <div className="row g-4">
                      <div className="col-md-8 imageSize">
                        <div className="position-relative h-100">
                          <img
                            className="img-fluid w-100 h-100"
                            src={tab.image}
                            style={{ objectFit: 'cover' }}
                            alt={tab.title}
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