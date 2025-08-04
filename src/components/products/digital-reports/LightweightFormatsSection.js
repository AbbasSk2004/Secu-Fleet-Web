import React from 'react';

const LightweightFormatsSection = () => {
  const features = [
    {
      number: '01',
      title: 'Data Visualizations',
      description: 'Compact and easily digestible data visualizations that convey key insights at a glance.'
    },
    {
      number: '02',
      title: 'Concise Summaries',
      description: 'Succinct text-based reports that highlight the most pertinent information.'
    },
    {
      number: '03',
      title: 'Rapid Delivery',
      description: 'Formats that can be quickly generated and shared to meet the needs of a fast-paced website.'
    }
  ];

  return (
    <section id="section2">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="img-fluid w-100 h-100"
                  src="https://i.ibb.co/bm2YSmP/Fleet-Management-109.png"
                  style={{ objectFit: 'cover' }}
                  alt="Lightweight Formats"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">Lightweight Reporting Formats</h1>
              <p className="mb-4">
                To match the fleeting nature of the website, we use lightweight report formats that can be quickly loaded and viewed, such as simple data visualizations or concise text-based summaries.
              </p>
              <div className="row g-4 mb-3 pb-3">
                {features.map((feature, index) => (
                  <div key={index} className="col-12 wow fadeIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                    <div className="d-flex">
                      <div
                        className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                        style={{ width: '45px', height: '45px' }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightweightFormatsSection; 