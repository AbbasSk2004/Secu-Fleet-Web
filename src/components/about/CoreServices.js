import React from 'react';

const CoreServices = () => {
  const services = [
    { image: "https://i.ibb.co/ZMJy6g8/device-connection.png", name: "Device Connection" },
    { image: "https://i.ibb.co/Ssmxryr/human-value.png", name: "Human Value" },
    { image: "https://i.ibb.co/HTNg17j/data-value.png", name: "Data Value" },
    { image: "https://i.ibb.co/3TRrrV2/data-sensing.png", name: "Data Sensing" },
    { image: "https://i.ibb.co/TLyTNng/data-analytics.png", name: "Data Analytics" },
    { image: "https://i.ibb.co/3F8Gwc8/communication.png", name: "Communication" }
  ];

  return (
    <div className="core-services container">
      <h2>Our Core Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.image} alt={service.name} />
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreServices; 