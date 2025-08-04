"use client";

import React from 'react';

const VehicleInspectionSchedule = () => {
  return (
    <section className="schedule">
      <div className="container">
        <div className="schedule-inner" style={{ transform: 'translateY(-70%)' }}>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-schedule first">
                <div className="inner">
                  <div className="icon"></div>
                  <div className="single-content">
                    <span></span>
                    <h4>Comprehensive Vehicle Inspection</h4>
                    <p>
                      Thorough inspections of all key vehicle systems to identify any issues or
                      potential problems. Our experts provide detailed reports to ensure your
                      vehicle is running at its best.
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
                    <h4>Thorough Vehicle Inspections</h4>
                    <p>
                      Our comprehensive inspection process covers all critical vehicle components to ensure optimal performance and safety.
                      We provide detailed reports to help you with your vehicle&apos;s maintenance and repair needs.
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
                    <h4>Maintenance Recommendations</h4>
                    <p>
                      Based on the comprehensive vehicle inspection. We&apos;ll keep your car running at best and help you prioritize repairs and
                      develop a long-term maintenance plan to optimize performance.
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

export default VehicleInspectionSchedule; 