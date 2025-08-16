import React from 'react';
import Link from 'next/link';
import '../../assets/css/home/services.css';

const Services = () => {
  return (
    <section className="service-section" style={{ backgroundColor: '#081f3e', backgroundImage: 'none' }}>
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-3 cards">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
            <h1 className="mb-0" style={{ color: 'white' }}>Custom IT Solutions for Your Successful Business</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn service-card" data-wow-delay="0.3s">
              <img src="/assets/images/works/consulting.webp" loading="lazy" alt="Consulting Service Image" className="img-fluid rounded-top" />
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mt-3">
                  <span className="material-symbols-outlined w3-xxlarge" style={{ color: 'white' }}>globe_asia</span>
                </div>
                <h4 className="mb-3" style={{ color: '#333' }}>Consulting</h4>
                <p className="m-0" style={{ color: '#666' }}>Expertise in Building clients Fleets all around the globe
                  <br />
                  Your partner in Building business solutions and Digitilization</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service/consulting">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn service-card" data-wow-delay="0.6s">
              <img src="/assets/images/worldwide.jpg" loading="lazy" alt="Hardware service Image" className="hardware" />
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="bi bi-motherboard w3-xxlarge text-white"></i>
                </div>
                <h4 className="mb-3" style={{ color: '#333' }}>Hardware</h4>
                <p className="m-0" style={{ color: '#666' }}>Worldwide Hardware Delivery with 24/7 Responsive Support<br />
                  Providing the best IOT Telematics available in the industry</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service/hardware">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn service-card" data-wow-delay="0.6s">
              <img src="/assets/images/works/webdevelopmenet.webp" loading="lazy" alt="Software service Image" className="img-fluid rounded-top" />
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <span className="material-symbols-outlined w3-xxlarge" style={{ color: 'white' }}>cloud_download</span>
                </div>
                <h4 className="mb-3" style={{ color: '#333' }}>Software</h4>
                <p className="m-0" style={{ color: '#666' }}>Fleet managment real time platform SAAS Solutions<br />
                  Get access to the data of your Fleet in One click</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service/software">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn service-card" data-wow-delay="0.6s">
              <img src="/assets/images/contract.jpeg" loading="lazy" alt="Service Image" className="img-fluid rounded-top" />
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <span className="material-symbols-outlined w3-xxlarge" style={{ color: 'white' }}>hail</span>
                </div>
                <h4 className="mb-3" style={{ color: '#333' }}>Contracting</h4>
                <p className="m-0" style={{ color: '#666' }}>Transportation sector, High-end technology knowledge transfer<br />
                  Contracting and ensuring support for Partners arond the globe</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service/contracting">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn service-card" data-wow-delay="0.9s">
              <img src="/assets/images/works/webdev.webp" loading="lazy" alt="Web development Service Image" className="img-fluid rounded-top" />
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className="fa fa-code text-white w3-xxlarge"></i>
                </div>
                <h4 className="mb-3" style={{ color: '#333' }}>Web Development</h4>
                <p className="m-0" style={{ color: '#666' }}>Innovative Custom Web Solutions Tailored to Your Needs</p>
                <p className="m-0" style={{ color: '#666' }}>Responsive Design and Optimized Performance</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service/webdev">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn service-card" data-wow-delay="0.3s">
              <img src="/assets/images/appdev.jpeg" loading="lazy" alt="app dev Service Image" className="img-fluid rounded-topz" />
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <span className="material-symbols-outlined w3-xxlarge" style={{ color: 'white' }}>
                    smartphone
                  </span>
                </div>
                <h4 className="mb-3" style={{ color: '#333' }}>App Development</h4>
                <p className="m-0" style={{ color: '#666' }}>Innovative Custom App Solutions Tailored to Your Needs</p>
                <p className="m-0" style={{ color: '#666' }}>Cross-Platform Compatibility and Optimized Performance</p>
                <Link className="btn btn-lg btn-primary rounded" href="/service/appdev">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 