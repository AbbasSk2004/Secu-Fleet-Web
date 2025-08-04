"use client";

import React from 'react';

const RoutePlanningSchedule = () => {
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
                    <h4>Optimized Routing</h4>
                    <p>
                      Leverage advanced route optimization algorithms 
                      and real-time data to plan the most efficient 
                      delivery routes. This can help reduce fuel consumption,
                      minimize travel time,
                      and improve overall operational efficiency.
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
                    <h4>Adaptive Routing</h4>
                    <p>
                      Dynamically adjust routes and dispatch
                      vehicles in real-time based on factors like
                      traffic conditions, delivery priorities, 
                      and customer needs. This can help improve on-time
                      performance and customer satisfaction.
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
                    <h4>Connected Fleet</h4>
                    <p>
                      Combine route planning with other 
                      fleet management capabilities like vehicle 
                      tracking, driver performance monitoring, 
                      and maintenance scheduling to achieve a holistic
                      view of your operations.
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

export default RoutePlanningSchedule; 