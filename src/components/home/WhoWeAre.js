import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section">
      <div className="video-background">
        <video autoPlay loop muted playsInline suppressHydrationWarning>
          <source src="/assets/videos/canva3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="who-we-are-content">
        <h1 className="who-we-are-title" style={{ textTransform: 'uppercase' }}>Leading with knowledge, Driven by results</h1>
        <div className="who-we-are-description-wrapper">
          <p className="who-we-are-description">
            At SecuFleet IoT Group, our mission is to forge an interconnected ecosystem that seamlessly adapts your business to the dynamic realities of a rapidly expanding network of intelligent devices. By leveraging cutting-edge embedded systems and sensors, we facilitate real-time data collection and exchange. Our commitment to understanding client needs ensures the delivery of tailored solutions that foster a proactive and efficient environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 