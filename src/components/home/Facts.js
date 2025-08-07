'use client';
import React, { useEffect, useRef } from 'react';

const Facts = () => {
  const counterRefs = useRef([]);

  useEffect(() => {
    // Wait for DOM to be ready and jQuery to be available
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.counterUp) {
        // Initialize counter-up for all elements with data-toggle="counter-up"
        window.jQuery('[data-toggle="counter-up"]').counterUp({
          delay: 10,
          time: 2000
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="facts" id="factsSection">
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container">
          <div className="row gx-0">
            <div className="col-12 col-sm-4 col-md-4 wow zoomIn" data-wow-delay="0.1s">
              <div className="box bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                <img src="/assets/images/facts/happy.png" loading="lazy" style={{ width: '100px' }} alt="happy client icon" />
                <div className="ps-4">
                  <h5 className="text-white mb-0">Happy Clients</h5>
                  <h1 className="text-white mb-0"><span data-toggle="counter-up">5000</span>+</h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 wow zoomIn" data-wow-delay="0.3s">
              <div className="box bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                <img src="/assets/images/facts/done.png" loading="lazy" style={{ width: '100px' }} alt="projects done icon" />
                <div className="ps-4">
                  <h5 className="text-white mb-0">Projects Done</h5>
                  <h1 className="text-white mb-0"><span data-toggle="counter-up">100</span>+</h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 wow zoomIn" data-wow-delay="0.5s">
              <div className="box bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                <img src="/assets/images/facts/web&app.png" loading="lazy" style={{ width: '100px' }} alt="websites done icon" />
                <div className="ps-4">
                  <h5 className="text-white mb-0">Websites Done</h5>
                  <h1 className="text-white mb-0"><span data-toggle="counter-up">200</span>+</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts; 