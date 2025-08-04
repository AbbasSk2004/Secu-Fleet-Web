import React from 'react';

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="missonWP">
        <div className="text-container">
          <div className="mission">
            <h2 style={{ color: '#00a0e9' }}>Our Mission</h2>
            <div className="line-container">
              <div className="line-line" style={{ width: '30%' }}>
                <div className="line-animation" style={{ backgroundColor: 'white' }}></div>
              </div>
            </div>
            <br />
            <p>
              Our exceptional skills enable us to produce millions of IoT devices
              to support our mission. We champion the secure and reliable deployment
              of connected technologies, advocating for the adoption of IoT Security
              Assurance Framework among stakeholders. Our dedication to shaping
              the future of IoT regulation ensures that security and privacy remain
              at the forefront of innovation.
            </p>
          </div>
          <div className="vision">
            <h2 style={{ color: '#00a0e9' }}>Our Vision</h2>
            <div className="line-container">
              <div className="line-line" style={{ width: '30%' }}>
                <div className="line-animation" style={{ backgroundColor: 'white' }}></div>
              </div>
            </div>
            <br />
            <p>
              Driving Transformative IoT Solutions<br />
              We envision a future where IoT solutions revolutionize everyday life
              through transformative technologies and innovative fleet management
              systems. Our goal is to empower clients with groundbreaking IoT
              solutions that optimize operations and drive continuous improvement.
            </p>
          </div>
        </div>
        
        <div className="image-container">
          <div className="image-wrapper main">
            <img src="https://i.ibb.co/XxWzycL/main-img.png" className="main-image" alt="Mission" />
          </div>
        </div>
      </div>
      <div className="image-group">
        <div className="image-wrapper i1">
          <img src="https://i.ibb.co/p1GxvRy/g-fleet.jpg" className="secondary-image" alt="Fleet" />
        </div>
        <div className="image-wrapper i2">
          <img src="https://i.ibb.co/1R41h1b/fingerprint.jpg" className="secondary-image s2" alt="Fingerprint" />
        </div>
      </div>
    </section>
  );
};

export default MissionVision; 