'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Facts = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use Intersection Observer to trigger counters when section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger counter animation after a short delay
          setTimeout(() => {
            const counterElements = document.querySelectorAll('[data-toggle="counter-up"]');
            counterElements.forEach((element) => {
              const target = parseInt(element.textContent);
              animateCounter(element, target);
            });
          }, 500);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const factsSection = document.getElementById('factsSection');
    if (factsSection) {
      observer.observe(factsSection);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50; // Animate over 50 steps
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 30);
  };

  return (
    <section className="facts" id="factsSection">
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container">
          <div className="row gx-0">
            <div className="col-12 col-sm-4 col-md-4 wow zoomIn" data-wow-delay="0.1s">
              <div className="box bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                <Image 
                  src="/assets/images/facts/happy.png" 
                  width={100} 
                  height={100} 
                  alt="happy client icon"
                  style={{ width: '100px', height: 'auto' }}
                />
                <div className="ps-4">
                  <h5 className="text-white mb-0">Happy Clients</h5>
                  <h1 className="text-white mb-0">
                    <span data-toggle="counter-up">{isVisible ? '5000' : '0'}</span>+
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 wow zoomIn" data-wow-delay="0.3s">
              <div className="box bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                <Image 
                  src="/assets/images/facts/done.png" 
                  width={100} 
                  height={100} 
                  alt="projects done icon"
                  style={{ width: '100px', height: 'auto' }}
                />
                <div className="ps-4">
                  <h5 className="text-white mb-0">Projects Done</h5>
                  <h1 className="text-white mb-0">
                    <span data-toggle="counter-up">{isVisible ? '100' : '0'}</span>+
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-md-4 wow zoomIn" data-wow-delay="0.5s">
              <div className="box bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                <Image 
                  src="/assets/images/facts/web&app.png" 
                  width={100} 
                  height={100} 
                  alt="websites done icon"
                  style={{ width: '100px', height: 'auto' }}
                />
                <div className="ps-4">
                  <h5 className="text-white mb-0">Websites Done</h5>
                  <h1 className="text-white mb-0">
                    <span data-toggle="counter-up">{isVisible ? '200' : '0'}</span>+
                  </h1>
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