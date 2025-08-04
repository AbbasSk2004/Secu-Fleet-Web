"use client";

import React from 'react';

const ScheduleSection = () => {
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
                    <h4>Optimized Fleet Operations</h4>
                    <p>
                      Enhance operational efficiency by streamlining fleet
                      coordination, improving response times, and reducing downtime.
                    </p>
                    <a href="#section1">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
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
                    <h4>Fuel Efficiency and Cost Reduction</h4>
                    <p>
                      Implement fuel-saving strategies and optimize routes to minimize fuel consumption and operational expenses.
                    </p>
                    <a href="#section2">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
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
                    <h4>Data-Driven Fleet Management</h4>
                    <p>
                      Leverage real-time data and telematics to optimize fleet
                      performance, reduce wear and tear, and make informed decisions.
                    </p>
                    <a href="#section3">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
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
                    <h4>Eco-Friendly Fleet Solutions</h4>
                    <p>
                      Adopt sustainable practices to reduce environmental impact and improve fleet energy efficiency.
                    </p>
                    <a href="#section4">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
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

export default ScheduleSection; 