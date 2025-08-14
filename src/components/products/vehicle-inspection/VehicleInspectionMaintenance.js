"use client";

import React from 'react';
import '../../../assets/css/products/vehicle-inspection/vehicle-inspection-maintenance.css';

const VehicleInspectionMaintenance = () => {
  return (
    <section className="vehicle-inspection-maintenance">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="wow fadeInLeft" data-wow-delay="0.1s">
              <h1>Maintenance Recommendations from Vehicle Inspection</h1>
              <p>
                Utilize our comprehensive vehicle inspection data to generate tailored maintenance recommendations,
                ensuring your fleet is well-cared for and operating at peak efficiency.
              </p>
            </div>
            
            <div className="row g-4">
              <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
                <div className="feature-item d-flex">
                  <div className="feature-number">01</div>
                  <div className="feature-content">
                    <h6>Proactive Maintenance Planning</h6>
                    <span>
                      Identify potential issues early and schedule targeted maintenance to prevent costly breakdowns.
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="col-12 wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-item d-flex">
                  <div className="feature-number">02</div>
                  <div className="feature-content">
                    <h6>Customized Recommendations</h6>
                    <span>
                      Receive tailored maintenance suggestions based on the unique needs and usage patterns of your vehicles.
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="col-12 wow fadeInUp" data-wow-delay="0.6s">
                <div className="feature-item d-flex">
                  <div className="feature-number">03</div>
                  <div className="feature-content">
                    <h6>Improved Cost Savings</h6>
                    <span>
                      Reduce unnecessary expenses and extend the lifespan of your vehicles through proactive maintenance.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="image-container wow fadeInRight" data-wow-delay="0.3s">
              <img
                className="img-fluid"
                src="https://i.ibb.co/3kHSHf5/Fleet-Management-45.png"
                alt="Maintenance Recommendations"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleInspectionMaintenance; 