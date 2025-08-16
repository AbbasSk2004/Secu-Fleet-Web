import React from 'react';
import '../../assets/css/about/aboutus/ourStory.css';

const OurStory = () => {
  return (
    <div className="our-story container">
      <h2>Our Story</h2>
      <div className="line-container">
        <div className="line-line" style={{ marginLeft: '60%' }}>
          <div className="line-animation"></div>
        </div>
      </div>
      <br />
      <p>
        At SecuFleet IoT Group, our mission is to forge an interconnected ecosystem that seamlessly adapts
        to your business to the dynmic realities of a rapidly expanding network
        of intelligent devices. By leveraging cutting-edge embedded systems and sensors,
        we facilitate real-time data collection and exchange. Our commitment to undertanding
        client need ensures the delivery of tailored solutions that foster a proactive and efficient
        environment.
      </p>
    </div>
  );
};

export default OurStory; 