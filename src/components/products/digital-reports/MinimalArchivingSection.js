import React from 'react';
import Image from 'next/image';
import '../../../assets/css/products/digital-reports/minimal-archiving.css';

const MinimalArchivingSection = () => {
  const features = [
    {
      number: '01',
      title: 'Relevant Reports',
      description: 'Focus on surfacing reports that are directly relevant to the website&apos;s purpose and users&apos; needs.'
    },
    {
      number: '02',
      title: 'Timely Reports',
      description: 'Prioritize reports that provide up-to-date and actionable information, avoiding long-term storage requirements.'
    },
    {
      number: '03',
      title: 'Flexible Reporting',
      description: 'Implement a flexible reporting system that can adapt to the website&apos;s evolving needs and user demands.'
    }
  ];

  return (
    <section className="minimal-archiving-section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="wow fadeInLeft" data-wow-delay="0.1s">
              <h1>Minimal Archiving</h1>
              <p>
                Rather than building an extensive report archive, focus on surfacing only the most relevant and timely reports that align with the website&apos;s fleeting purpose. Avoid creating reports that require long-term storage or maintenance.
              </p>
            </div>
            
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-12 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`}>
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
          
          <div className="col-lg-6">
            <div className="image-container wow fadeInRight" data-wow-delay="0.3s">
              <Image
                className="img-fluid"
                src="https://i.ibb.co/jyfFYPN/Fleet-Management-42.png"
                alt="Minimal Archiving"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArchivingSection; 