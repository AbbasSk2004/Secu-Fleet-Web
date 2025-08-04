import React from 'react';
import Image from 'next/image';

const StrategySection = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" id="about" style={{ marginTop: '50px' }}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7" style={{ marginTop: '50px' }}>
            <div className="section-title position-relative pb-3 mb-5">
              <h5 style={{ color: 'white' }} className="fw-bold text-primary text-uppercase">
                Sustainable Future
              </h5>
              <h1 style={{ color: 'white' }} className="mb-0">Strategy Made Real</h1>
            </div>
            <p className="mb-4" style={{ color: 'white' }}>
              Unleashing human energy to formulate a successful business strategy and equip your
              business with the tools, frameworks, knowledge to set goals for an inclusive and sustainable
              bright future.
            </p>
          </div>
          <Image 
            src="https://i.ibb.co/ZT3Snz9/4.png" 
            alt="Strategy"
            width={400}
            height={400}
            style={{ width: '40%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default StrategySection; 