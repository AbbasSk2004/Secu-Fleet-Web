"use client";

import React from 'react';

const WorktimeSchedule = () => {
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
                    <h4>Optimized Shift Scheduling</h4>
                    <p>
                      Efficiently plan driver shifts to cover peak hours, balance workload, and minimize overtime costs using scheduling software.
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
                    <h4>Time Tracking and Reporting</h4>
                    <p>
                      Implement reliable time tracking to monitor working hours, assist in payroll processing, and ensure compliance with labor laws.
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
                    <h4>Real-Time Worktime Adjustments</h4>
                    <p>
                      Monitor fleet operations in real-time to make dynamic schedule and route adjustments, optimizing worktime and resource use.
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

export default WorktimeSchedule; 