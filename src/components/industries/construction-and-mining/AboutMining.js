import React from 'react';
import '../../../assets/css/industries/construction-and-mining/about-mining.css';

const AboutMining = () => {
  return (
    <section className="about-mining-section">
      <div className="container about-mining-content">
        <div className="row g-5 align-items-center">
          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            <div className="about-mining-title">
              <span className="about-mining-subtitle">Industry Insight</span>
              <h2 className="about-mining-heading">
                About Construction & Mining
              </h2>
            </div>
            
            <p className="about-mining-text">
              Construction is a multi-billion-dollar industry that not only adds a significant value to the economy but also requires
              constant attention, especially in harsh climatic conditions, to bring maximum value and faster return on investment.
            </p>
            
            <p className="about-mining-text">
              This creates a need to improve the efficiency of fleet management via new IP67 rating GPS trackers that open new opportunities
              and may have a major impact on this industry.
            </p>

            <div className="about-mining-features">
              <div className="row g-4">
                {[
                  { icon: 'fa-chart-line', title: 'Economic Impact', subtitle: 'Multi-billion dollar industry' },
                  { icon: 'fa-shield-alt', title: 'Harsh Conditions', subtitle: 'IP67 rated solutions' },
                  { icon: 'fa-tachometer-alt', title: 'Efficiency Focus', subtitle: 'Maximum ROI optimization' },
                  { icon: 'fa-satellite', title: 'GPS Technology', subtitle: 'Advanced tracking solutions' },
                ].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div className="feature-content">
                        <h6>{item.title}</h6>
                        <small>{item.subtitle}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6">
            <div className="stats-grid">
              {[
                { icon: 'fa-dollar-sign', value: '$2.1T', label: 'Global Construction Market' },
                { icon: 'fa-percentage', value: '25%', label: 'Efficiency Improvement' },
                { icon: 'fa-clock', value: '24/7', label: 'Real-time Monitoring' },
                { icon: 'fa-tools', value: 'IP67', label: 'Weather Protection' },
              ].map((card, index) => (
                <div className="stat-card" key={index}>
                  <div className="stat-icon">
                    <i className={`fas ${card.icon}`}></i>
                  </div>
                  <div className="stat-value">{card.value}</div>
                  <div className="stat-label">{card.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="about-mining-cta">
          <h3 className="cta-title">
            Ready to Transform Your Construction Fleet?
          </h3>
          <p className="cta-description">
            Discover how our IP67-rated GPS tracking solutions can revolutionize your construction and mining operations.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-btn-primary">Get Free Demo</a>
            <a href="/products" className="cta-btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMining;
