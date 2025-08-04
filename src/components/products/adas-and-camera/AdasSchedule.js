"use client";

import React from 'react';

const AdasSchedule = () => {
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
                    <h4>Enhanced Safety and Collision Avoidance</h4>
                    <p>
                      ADAS technologies provide critical assistance in collision avoidance, lane-keeping, and adaptive cruise control, 
                      improving overall road safety and reducing accident rates.
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
                    <h4>Regulatory Compliance and Privacy Safeguards</h4>
                    <p>
                      Adherence to laws and regulations, robust data protection, and transparent policies ensure ethical camera usage
                       while maintaining public trust.
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
                    <h4>Seamless Integration and Adaptive Functionality</h4>
                    <p>
                      ADAS systems seamlessly integrate with existing vehicle controls and adapt to various driving conditions, 
                      providing drivers with intuitive feedback and support for a smoother driving experience.
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

export default AdasSchedule; 