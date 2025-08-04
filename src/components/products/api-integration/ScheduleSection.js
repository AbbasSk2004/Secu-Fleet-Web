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
                    <h4>Identify the Data Sources</h4>
                    <p>
                      Determine the necessary data sources, such as internal
                      databases, third-party APIs, or cloud-based services, to
                      support your project requirements.
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
                    <h4>Research Available APIs</h4>
                    <p>
                      Explore and evaluate the available APIs that can provide the
                      necessary data for your project, ensuring they meet your
                      technical and functional requirements.
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
                    <h4>Set Up Authentication</h4>
                    <p>
                      Implement the necessary authentication and authorization
                      mechanisms, such as API keys, OAuth, or other secure
                      protocols, to ensure the integrity and security of your data
                      integration.
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

export default ScheduleSection; 