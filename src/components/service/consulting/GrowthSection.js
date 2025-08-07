import React from 'react';
import Image from 'next/image';

const GrowthSection = () => {
  return (
    <section className="growth-section wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Image Column */}
          <div className="col-lg-5 col-md-6 wow fadeInLeft" data-wow-delay="0.3s">
            <div className="growth-image-wrapper position-relative">
              <div className="growth-image-bg"></div>
              <Image 
                src="/assets/images/works/consulting3resized.jpg"
                alt="Business people discussing growth strategy"
                width={600}
                height={600}
                className="growth-image img-fluid rounded-3 shadow-lg"
                priority
              />
              <div className="growth-image-overlay"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-7 col-md-6 wow fadeInRight" data-wow-delay="0.5s">
            <div className="growth-content-wrapper">
              <div className="section-title position-relative pb-3 mb-4">
                <h5 className="fw-bold text-primary text-uppercase mb-2">
                  <i className="fas fa-chart-line me-2"></i>
                  Who we are
                </h5>
                <h1 className="display-5 fw-bold text-white mb-4">
                  Growth with purpose
                </h1>
              </div>

              <div className="growth-description mb-5">
                <p className="lead text-light mb-4">
                  When setting out to create a winning strategy, the first question SecuFleet asks
                  is, &apos;what&apos;s <strong className="text-primary">the organization&apos;s purpose</strong>?&apos;
                </p>
                <p className="text-light">
                  In Sustainable Business Strategy, SecuFleet discusses the importance of starting
                  with formulating a framework that satisfy the purposes of the organization.
                </p>
              </div>

              <div className="growth-features">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="feature-item d-flex align-items-start p-4 rounded-3 bg-dark bg-opacity-25 border border-primary border-opacity-25 hover-lift">
                      <div className="feature-icon me-3">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                          <i className="fas fa-globe text-white"></i>
                        </div>
                      </div>
                      <div className="feature-content">
                        <h6 className="text-primary fw-bold mb-2">Purpose Formulation Framework</h6>
                        <p className="text-light mb-0">
                          SecuFleet creating shared value between the triple bottom line &apos;Three Ps&apos;: 
                          <span className="text-primary fw-bold"> Planet, People &amp; Profit</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="feature-item d-flex align-items-start p-4 rounded-3 bg-dark bg-opacity-25 border border-primary border-opacity-25 hover-lift">
                      <div className="feature-icon me-3">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                          <i className="fas fa-globe-americas text-white"></i>
                        </div>
                      </div>
                      <div className="feature-content">
                        <h6 className="text-primary fw-bold mb-2">Global Events Consideration</h6>
                        <p className="text-light mb-0">
                          Business doesn&apos;t exist in a vacuum - it&apos;s influenced by politics, policies, 
                          laws, taxes, labor laws, transportation infrastructure and relationships.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="feature-item d-flex align-items-start p-4 rounded-3 bg-dark bg-opacity-25 border border-primary border-opacity-25 hover-lift">
                      <div className="feature-icon me-3">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                          <i className="fas fa-chart-bar text-white"></i>
                        </div>
                      </div>
                      <div className="feature-content">
                        <h6 className="text-primary fw-bold mb-2">Data-Driven Strategy</h6>
                        <p className="text-light mb-0">
                          When crafting your Strategy, SecuFleet will guide to examine your financial 
                          statements along with historical strategies, analyze case studies and economic principles.
                        </p>
                      </div>
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

export default GrowthSection; 