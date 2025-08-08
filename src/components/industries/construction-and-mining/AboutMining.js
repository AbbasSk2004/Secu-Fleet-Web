import React from 'react';

const AboutMining = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#0b1a2e', color: '#f1f1f1' }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="border-start border-5" style={{ borderColor: '#1f6feb' }}>
                <h6 className="text-uppercase mb-2" style={{ color: '#ccc' }}>Industry Insight</h6>
                <h2
                  className="display-6 mb-3"
                  style={{
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
                  }}
                >
                  About Construction & Mining
                </h2>
              </div>
              <p className="mb-4" style={{ color: '#ddd' }}>
                Construction is a multi-billion-dollar industry that not only adds a significant value to the economy but also requires
                constant attention, especially in harsh climatic conditions, to bring maximum value and faster return on investment.
              </p>
              <p className="mb-4" style={{ color: '#ddd' }}>
                This creates a need to improve the efficiency of fleet management via new IP67 rating GPS trackers that open new opportunities
                and may have a major impact on this industry.
              </p>

              <div className="row g-4 mb-4">
                {[
                  { icon: 'fa-chart-line', title: 'Economic Impact', subtitle: 'Multi-billion dollar industry' },
                  { icon: 'fa-shield-alt', title: 'Harsh Conditions', subtitle: 'IP67 rated solutions' },
                  { icon: 'fa-tachometer-alt', title: 'Efficiency Focus', subtitle: 'Maximum ROI optimization' },
                  { icon: 'fa-satellite', title: 'GPS Technology', subtitle: 'Advanced tracking solutions' },
                ].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center">
                        <i className={`fas ${item.icon} text-dark`}></i>
                      </div>
                      <div>
                        <h6 className="mb-1 text-white">{item.title}</h6>
                        <small style={{ color: '#bbb' }}>{item.subtitle}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6">
            <div className="row g-4">
              {[
                { icon: 'fa-dollar-sign', value: '$2.1T', label: 'Global Construction Market' },
                { icon: 'fa-percentage', value: '25%', label: 'Efficiency Improvement' },
                { icon: 'fa-clock', value: '24/7', label: 'Real-time Monitoring' },
                { icon: 'fa-tools', value: 'IP67', label: 'Weather Protection' },
              ].map((card, index) => (
                <div className="col-6" key={index}>
                  <div
                    className="rounded p-4 text-center h-100"
                    style={{ backgroundColor: '#132238' }}
                  >
                    <div
                      className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <i className={`fas ${card.icon} text-dark fa-2x`}></i>
                    </div>
                    <h4 className="text-white mb-2">{card.value}</h4>
                    <p className="mb-0" style={{ color: '#aaa' }}>{card.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="rounded p-5 text-center"
              style={{ backgroundColor: '#1f2e46', color: '#fff' }}
            >
              <h3
                className="mb-3"
                style={{
                  textShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
                }}
              >
                Ready to Transform Your Construction Fleet?
              </h3>
              <p className="mb-4" style={{ color: '#ddd' }}>
                Discover how our IP67-rated GPS tracking solutions can revolutionize your construction and mining operations.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button className="btn btn-light btn-lg px-4 text-dark">Get Free Demo</button>
                <button className="btn btn-outline-light btn-lg px-4">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMining;
