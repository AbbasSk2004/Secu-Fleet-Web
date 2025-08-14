import React from 'react';
import Image from 'next/image';
import '../../../assets/css/products/fleet-management/ecofleet.css';

const EcoFleet = () => {
  return (
    <section id="section3">
      {/* Background Image using Next.js Image */}
      <div className="background-image-container">
        <Image
          src="/assets/images/FleetManagement65.webp"
          alt="Eco-fleet and Sustainability Background"
          fill
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
          priority
          sizes="100vw"
        />
      </div>
      
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">Eco-Fleet</h6>
            <h1 className="mb-5">Eco-fleet and Sustainability</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4 navTitles">
              <div className="nav w-100 nav-pills me-4">
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <Image 
                    className="greenIcon" 
                    src="/assets/images/icons/recycle.png"
                    alt="Recycle icon for Green Fleet Initiatives"
                    width={80}
                    height={80}
                    priority
                  />
                  <p className="m-0">Green Fleet Initiatives</p>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-5"
                  type="button"
                >
                  <Image 
                    className="greenIcon" 
                    src="/assets/images/icons/ev.png"
                    alt="Electric vehicle icon for Electric and Hybrid Vehicles"
                    width={80}
                    height={80}
                  />
                  <p className="m-0">Electric and Hybrid Vehicles</p>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-6"
                  type="button"
                >
                  <Image 
                    className="greenIcon" 
                    src="/assets/images/icons/greenWorld.png"
                    alt="Green world icon for Environmental Reporting"
                    width={80}
                    height={80}
                  />
                  <p className="m-0">Environmental Reporting</p>
                </button>
              </div>
            </div>
            <div className="col-lg-8 content">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <Image
                          className="position-static img-fluid w-100 h-100"
                          src="https://i.ibb.co/P5K8Vc0/eco.jpg"
                          alt="Green fleet initiatives and eco-friendly practices"
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h4 className="mb-3">
                        Adopting green practices to minimize environmental
                        impact.
                      </h4>
                      <p className="mb-4">
                        Implementing recycling programs, using eco-friendly
                        materials, and optimizing routes to reduce emissions.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Eco-Friendly Practices
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Advanced Technologies
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Sustainable Operations
                      </p>
                      <a href="/products/fleet.efficiency.html" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-5">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <Image
                          className="position-static img-fluid w-100 h-100"
                          src="https://i.ibb.co/FBd8yc6/i8.png"
                          alt="Electric and hybrid vehicles for sustainable fleet"
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h4 className="mb-3">
                        Incorporating electric and hybrid vehicles for a greener
                        fleet.
                      </h4>
                      <p className="mb-4">
                        Adding electric and hybrid vehicles to the fleet to
                        lower emissions, reduce fuel costs, and promote
                        sustainability.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Reduced Emissions
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Cost-Efficiency
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Modern Fleet
                      </p>
                      <a href="/products/fleet.efficiency.html" className="btn btn-primary py-3 px-5 mt-3">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-6">
                  <div className="row g-4">
                    <div className="col-md-8 imageSize">
                      <div className="position-relative h-100">
                        <Image
                          className="position-static img-fluid w-100 h-100"
                          src="https://i.ibb.co/rbggGm2/34.png"
                          alt="Environmental reporting and fleet impact tracking"
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 transBack">
                      <h4 className="mb-3">
                        Tracking and reporting on the fleet&apos;s environmental
                        impact.
                      </h4>
                      <p className="mb-4">
                        Monitoring fuel consumption, emissions, and other
                        environmental metrics to ensure compliance and
                        transparency.
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Transparent Reporting
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Regulatory Compliance
                      </p>
                      <p>
                        <i className="fa fa-check text-success me-3"></i>Corporate Responsibility
                      </p>
                      <a href="/products/fleet.efficiency.html" className="btn btn-primary py-3 px-5 mt-3">
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

export default EcoFleet; 