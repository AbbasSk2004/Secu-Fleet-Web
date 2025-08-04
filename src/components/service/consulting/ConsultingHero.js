import React from 'react';

const ConsultingHero = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp consultBack" data-wow-delay="0.1s" id="about">
      <div className="container py-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '10px' }}>
        <div className="g-5">      
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-primary text-uppercase">Consulting Services</h5>
            <h1 className="mb-0" style={{ color: 'white' }}>Our Fingerprints</h1>
          </div>
          <p className="box-text mb-4">
            We are equally committed to attracting and developing strategies creating
            meaningful and lasting change by leveraging powerful foresight, deep industry expertise, and practical
            strategic experience through today&apos;s changes to redefine tomorrow&apos;s results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultingHero; 