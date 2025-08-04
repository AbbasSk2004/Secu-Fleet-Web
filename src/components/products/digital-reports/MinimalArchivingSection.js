import React from 'react';

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
    <section id="section4">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-4">Minimal Archiving</h1>
              <p className="mb-4">
                Rather than building an extensive report archive, focus on surfacing only the most relevant and timely reports that align with the website&apos;s fleeting purpose. Avoid creating reports that require long-term storage or maintenance.
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
            <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <img
                  className="img-fluid w-100 h-100"
                  src="https://i.ibb.co/jyfFYPN/Fleet-Management-42.png"
                  style={{ objectFit: 'cover' }}
                  alt="Minimal Archiving"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArchivingSection; 