"use client";

import React, { useState } from 'react';

const AdasSafetySection = () => {
  const [activeTab, setActiveTab] = useState('tab-pane-10');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="section1">
      <div className="container-xxl service py-5">
        <div className="container" style={{ marginTop: '100px' }}>
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"></h6>
            <h1 className="mb-5">Enhanced Safety and Collision Avoidance</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-10' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-10')}
                  type="button"
                >
                  <img src="/assets/images/icons/dashcam.png" className="greenIcon" alt="dashcam" />
                  <h4 className="m-0">Comprehensive Camera Coverage</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-7' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-7')}
                  type="button"
                >
                  <img src="/assets/images/icons/cruise.png" className="greenIcon" alt="cruise" />
                  <h4 className="m-0">Adaptive Cruise Control (ACC)</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-8' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-8')}
                  type="button"
                >
                  <img src="/assets/images/icons/brakeIcon.png" className="greenIcon" alt="brake" />
                  <h4 className="m-0">Automatic Emergency Braking (AEB)</h4>
                </button>
                <button
                  className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab-pane-9' ? 'active' : ''}`}
                  onClick={() => handleTabClick('tab-pane-9')}
                  type="button"
                >
                  <img src="/assets/images/icons/laneIcon.png" className="greenIcon" alt="lane" />
                  <h4 className="m-0">Lane Departure Warning (LDW)</h4>
                </button>
              </div>
            </div>
            <div className="col-lg-8 content">
              <div className="tab-content w-100">
                <div className={`tab-pane fade ${activeTab === 'tab-pane-10' ? 'show active' : ''}`} id="tab-pane-10">
                  <div className="row g-4">
                    <div className="col-md-8">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/h7fVFBR/52.png"
                          style={{ objectFit: 'cover' }}
                          alt="dash cam"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Comprehensive Camera Coverage</h3>
                      <p className="mb-4">
                        Our extensive network of high-quality cameras provides thorough surveillance, ensuring comprehensive monitoring and rapid response to any identified issues.
                      </p>
                      <p><i className="fa fa-check text-success me-3"></i>Strategically Placed Cameras</p>
                      <p><i className="fa fa-check text-success me-3"></i>Real-Time Video Monitoring</p>
                      <p><i className="fa fa-check text-success me-3"></i>Seamless Integration with Existing Systems</p>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab-pane-7' ? 'show active' : ''}`} id="tab-pane-7">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/61DVhWm/cruise.png"
                          style={{ objectFit: 'cover' }}
                          alt="auto cruise"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Intelligent Speed Management</h3>
                      <p className="mb-4">
                        ACC maintains a set speed while automatically adjusting to the speed of the vehicle ahead, enhancing safety and convenience.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Adjusts speed with traffic
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Minimizes manual adjustments
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Prevents rear-end crashes
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab-pane-8' ? 'show active' : ''}`} id="tab-pane-8">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/p1TcPfY/brake.png"
                          style={{ objectFit: 'cover' }}
                          alt="braking sensor"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h3 className="mb-3">Immediate Response to Impending Collisions</h3>
                      <p className="mb-4">
                        AEB systems detect potential collisions and apply the brakes automatically to reduce the severity of impacts or avoid accidents.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Activates on imminent collision
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Reduces impact and injury risk
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Effective in various conditions
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab-pane-9' ? 'show active' : ''}`} id="tab-pane-9">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="position-relative h-100">
                        <img
                          className="img-fluid w-100 h-100"
                          src="https://i.ibb.co/r6kbn1x/lane2.jpg"
                          style={{ objectFit: 'cover' }}
                          alt="lane departure"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 transBack">
                      <h3 className="mb-3">Preventing Unintended Lane Drift</h3>
                      <p className="mb-4">
                        LDW alerts the driver when the vehicle unintentionally drifts out of its lane, helping to prevent accidental lane departures.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Provides visual and audible alerts
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Enhances driver awareness
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>
                        Reduces side collision risk
                      </p>
                    </div>
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

export default AdasSafetySection; 