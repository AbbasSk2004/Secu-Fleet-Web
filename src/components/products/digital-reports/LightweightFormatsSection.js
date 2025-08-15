import React from 'react';
import Image from 'next/image';
import '../../../assets/css/products/digital-reports/lightweight-formats.css';

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
    <section className="lightweight-formats-section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="image-container wow fadeInLeft" data-wow-delay="0.1s">
              <Image
                className="img-fluid"
                src="https://i.ibb.co/bm2YSmP/Fleet-Management-109.png"
                alt="Lightweight Formats"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                priority={true}
              />
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="wow fadeInRight" data-wow-delay="0.2s">
              <h1>Lightweight Reporting Formats</h1>
              <p>
                To match the fleeting nature of the website, we use lightweight report formats that can be quickly loaded and viewed, such as simple data visualizations or concise text-based summaries.
              </p>
            </div>
            
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-12 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.2}s`}>
                  <div className="feature-item d-flex">
                    <div className="feature-number">{feature.number}</div>
                    <div className="feature-content">
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
    </section>
  );
};

export default LightweightFormatsSection; 