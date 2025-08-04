"use client";

import React from 'react';

const CarSharingSchedule = () => {
  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-inner">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-schedule first">
                <div className="inner">
                  <div className="icon"></div>
                  <div className="single-content">
                    <span></span>
                    <h4>Convenient Car Sharing</h4>
                    <p>
                      Streamline your car-sharing operations with our user-friendly platform. Provide your customers with a seamless booking and access experience, while leveraging real-time data to optimize fleet management and ensure maximum availability.
                    </p>
                    <a href="#section1">
                      LEARN MORE<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-schedule middle">
                <div className="inner">
                  <div className="icon"></div>
                  <div className="single-content">
                    <span></span>
                    <h4>Seamless Car Sharing Experience</h4>
                    <p>
                      Deliver an exceptional car-sharing experience to your customers with our integrated platform. From intuitive mobile apps for booking and access, to automated billing and seamless customer support, we&apos;ve got you covered to ensure your users stay satisfied.
                    </p>
                    <a href="#section2">
                      LEARN MORE<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-12 col-12">
              <div className="single-schedule last">
                <div className="inner">
                  <div className="icon"></div>
                  <div className="single-content">
                    <span></span>
                    <h4>Real-Time Tracking and Data Analytics</h4>
                    <p>
                      Leverage our advanced telematics and analytics to monitor your car-sharing
                      fleet in real-time. Gain insights into vehicle usage, customer behavior,
                      and operational efficiency to optimize your service and enhance the
                      user experience.
                    </p>
                    <a href="#section4">
                      LEARN MORE<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSharingSchedule; 