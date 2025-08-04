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
                    <h4>Sensor Integration</h4>
                    <p>
                      Connect various sensors to monitor vehicle performance,
                      driving behavior, and environmental conditions in real-time.
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
                    <h4>Data Logging and Alerting</h4>
                    <p>
                      Continuously log and analyze sensor data to identify issues,
                      trigger alerts, and enable proactive maintenance.
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
                    <h4>Compliance and Regulatory Requirements</h4>
                    <p>
                      Ensure compliance with industry regulations and standards
                      through comprehensive monitoring, reporting, and
                      documentation.
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