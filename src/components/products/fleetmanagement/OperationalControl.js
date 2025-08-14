import React from 'react';
import Image from 'next/image';
import '../../../assets/css/products/fleet-management/operationalcontrol.css';

const OperationalControl = () => {
  return (
    <section id="section1">
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">Fleet Management</h6>
            <h1 className="mb-5">Operational Control and Safety</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-1"
                  type="button"
                >
                  <Image 
                    className="greenIcon" 
                    src="/assets/images/icons/driver.png" 
                    alt="Driver Performance"
                    width={80}
                    height={80}
                  />
                  <p className="m-0">Driver Performance Monitoring</p>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <Image 
                    className="greenIcon" 
                    src="/assets/images/icons/assetTracking.png" 
                    alt="Asset Tracking"
                    width={80}
                    height={80}
                  />
                  <p className="m-0">Fleet Asset Utilization</p>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <Image 
                    className="greenIcon" 
                    src="/assets/images/icons/cruise.png" 
                    alt="ADAS"
                    width={80}
                    height={80}
                  />
                  <p className="m-0">ADAS</p>
                </button>
              </div>
            </div>
            <div className="col-lg-8 content">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <Image
                          className="position-static img-fluid w-100 h-100"
                          src="/assets/images/FleetManagement22.webp"
                          alt="Driver Performance Monitoring Dashboard"
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h4 className="mb-3">Driver Performance Monitoring</h4>
                      <p className="mb-4">
                        Monitor driver behavior and ensure compliance with safety protocols to minimize risks and boost fleet safety.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Behavioral Insights
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Real-Time Alerts
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Driver Training Programs
                      </p>
                      <a href="/products/driver-behavior.html" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <Image
                          className="position-static img-fluid w-100 h-100"
                          src="https://i.ibb.co/dbjRskz/Fleet-Management-54.png"
                          alt="Fleet Asset Utilization Dashboard"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h4 className="mb-3">Fleet Asset Utilization</h4>
                      <p className="mb-4">
                        Track fleet utilization rates, reduce idle time, and maximize resource allocation for peak efficiency.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Utilization Analytics
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Idle Time Monitoring
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Resource Allocation Strategies
                      </p>
                      <a href="/products/Asset-Tracking.html" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <Image
                          className="position-static img-fluid w-100 h-100"
                          src="https://i.ibb.co/54kDTx9/sensor.jpg"
                          alt="ADAS System"
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h4 className="mb-3">ADAS</h4>
                      <p className="mb-4">
                        Enhance fleet safety and efficiency with cutting-edge ADAS technology. These systems utilize cameras and sensors to monitor driver behavior, prevent collisions, and provide real-time feedback.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Collision Avoidance
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Lane Departure Alerts
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Real-Time Monitoring
                      </p>
                      <a href="/products/ADAS-and-Camera-Systems.html" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
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

export default OperationalControl; 