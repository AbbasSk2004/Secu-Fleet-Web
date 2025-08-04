import React from 'react';

const Values = () => {
  return (
    <section className="values">
      <div className="values-container">
        <h2 style={{ color: '#00a0e9' }}>Our Values</h2>
        <div className="line-container">
          <div className="line-line" style={{ width: '20%' }}>
            <div className="line-animation" style={{ backgroundColor: 'white' }}></div>
          </div>
        </div>
        <br />
        <p>
          Synergizing SecuFleet IoT and Partners for Shared Value Our innovative
          IoT solutions are designed to seamlessly integrate into your
          operations, providing robust and high-performance hardware,
          privacy-focused services, and customizable platforms that meet unique
          business needs. Our collaborative ecosystems expand service capabilities
          and drive continuous growth and innovation.
        </p>
        <ul>
          <li>IoT Solutions for Transformative Changes</li>
          <li>Empowering Clients with Groundbreakung IoT</li>
          <li>IoT Innovation Driving Everyday Ease</li>
          <li>Iot Expertise Elevating the Client Experience</li>
        </ul>
      </div>
    </section>
  );
};

export default Values; 