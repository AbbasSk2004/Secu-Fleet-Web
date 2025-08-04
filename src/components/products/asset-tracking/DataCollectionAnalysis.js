"use client";

import React from 'react';

const DataCollectionAnalysis = () => {
  const features = [
    {
      number: '01',
      title: 'Data Collection',
      description: 'Streamlined and automated data collection from multiple sources for a comprehensive view of your business.'
    },
    {
      number: '02',
      title: 'Data Analytics',
      description: 'Leveraging advanced analytics to uncover insights and trends that drive informed decision-making.'
    },
    {
      number: '03',
      title: 'Actionable Insights',
      description: 'Translating data into tangible recommendations and strategies to optimize your operations and drive growth.'
    }
  ];

  return (
    <section id="section4">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-4">Comprehensive Data Collection and Analysis</h1>
              <p className="mb-4">
                Unlock the power of data-driven insights to elevate your
                decision-making, optimize operations, and drive sustainable
                growth.
              </p>
              <div className="row g-4 mb-3 pb-3">
                {features.map((feature, index) => (
                  <div key={index} className="col-12 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                    <div className="d-flex">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                        style={{ width: "45px", height: "45px" }}
                      >
                        <span className="fw-bold text-secondary">{feature.number}</span>
                      </div>
                      <div className="ps-3">
                        <h6>{feature.title}</h6>
                        <span>{feature.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}>
                  <iframe 
                    id="js_video_iframe" 
                    src="https://jumpshare.com/embed/O5ty63bjA40OolSoUllI" 
                    frameBorder="0" 
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen={true}
                    style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                    title="Data Collection and Analysis Video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCollectionAnalysis; 