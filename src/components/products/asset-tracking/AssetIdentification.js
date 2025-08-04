"use client";

import React, { useState } from 'react';

const AssetIdentification = () => {
  const [activeTab, setActiveTab] = useState('tab-pane-1');

  const tabs = [
    {
      id: 'tab-pane-1',
      title: 'RFID Tracking',
      icon: '/assets/images/icons/RFIDIcon.png',
      image: 'https://i.ibb.co/kDNRY4D/RFID-asset.png',
      heading: 'RFID Tracking Solutions',
      description: 'Our RFID-based asset tracking systems provide real-time visibility and control over your inventory, optimizing asset management and reducing the risk of loss or theft.',
      features: [
        'Accurate Inventory Monitoring',
        'Automated Reporting',
        'Seamless Integration'
      ]
    },
    {
      id: 'tab-pane-2',
      title: 'QR Code Scanning',
      icon: '/assets/images/icons/qrIcon.png',
      image: 'https://i.ibb.co/f22fL2L/QRCode-asset.png',
      heading: 'QR Code Scanning Solutions',
      description: 'Our QR code-based asset identification system provides a reliable and efficient way to track and manage your valuable equipment, ensuring proper documentation and traceability.',
      features: [
        'Instant Asset Lookup',
        'Comprehensive Data Management',
        'Intuitive Mobile App'
      ]
    },
    {
      id: 'tab-pane-3',
      title: 'Asset Tagging',
      icon: '/assets/images/icons/assetTagging.png',
      image: 'https://i.ibb.co/XZK6Yvc/asset.png',
      heading: 'Intelligent Asset Tagging',
      description: 'Our comprehensive asset tagging solutions leverage cutting-edge technology to provide detailed tracking and maintenance records, ensuring the longevity and optimal performance of your valuable assets.',
      features: [
        'Durable Asset Tags',
        'Customized Labeling',
        'Integrated Software'
      ]
    }
  ];

  return (
    <section 
      id="section1"
      style={{
        background: "url('https://i.ibb.co/zSg722K/8.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "cover",
        padding: "0",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
      }}
    >
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"></h6>
            <h1 className="mb-5">Asset Identification</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${
                      activeTab === tab.id ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab(tab.id)}
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
                    className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                    id={tab.id}
                  >
                    <div className="row g-4">
                      <div className="col-md-8 imageSize">
                        <div className="position-relative h-100">
                          <img
                            className="img-fluid w-100 h-100"
                            src={tab.image}
                            style={{ objectFit: "cover" }}
                            alt={tab.title}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 transBack">
                        <h3 className="mb-3">{tab.heading}</h3>
                        <p className="mb-4">{tab.description}</p>
                        {tab.features.map((feature, index) => (
                          <p key={index}>
                            <i className="fa fa-check text-success me-3"></i>
                            {feature}
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

export default AssetIdentification; 