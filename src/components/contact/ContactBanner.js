import React from 'react';
import '@/assets/css/about/contact/contact-banner.css';

const ContactBanner = () => {
  return (
    <section className="contact-banner" style={{
      backgroundImage: 'url("https://i.ibb.co/7Y94mPQ/shipping.png")',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div className="banner-overlay">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-content">
                <h1>Get In Touch With SecuFleet</h1>
                <p>Connect with our fleet management experts and discover how SecuFleet can transform your business operations with cutting-edge IoT solutions.</p>
                <div className="banner-stats">
                  <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Expert Support</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Countries Served</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5000+</div>
                    <div className="stat-label">Satisfied Clients</div>
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

export default ContactBanner; 