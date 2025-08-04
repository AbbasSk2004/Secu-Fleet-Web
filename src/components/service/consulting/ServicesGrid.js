import React from 'react';
import Image from 'next/image';

const ServicesGrid = () => {
  const services = [
    { icon: '/assets/images/consulting/growth.png', label: 'Growth\nGoal' },
    { icon: '/assets/images/consulting/process.png', label: 'Process\nGoal' },
    { icon: '/assets/images/consulting/problemSolving.png', label: 'Problem-Solving\nGoal' },
    { icon: '/assets/images/consulting/development.png', label: 'Development\nGoal' },
    { icon: '/assets/images/consulting/innovation.png', label: 'Innovation\nGoal' },
    { icon: '/assets/images/consulting/profitability.png', label: 'Profitability\nGoal' },
    { icon: '/assets/images/consulting/sustainability.png', label: 'Sustainability\n Goal' },
    { icon: '/assets/images/consulting/marketing.png', label: 'Marketing\nGoal' },
    { icon: '/assets/images/consulting/customer.png', label: 'Customer\nrelation Goal' },
    { icon: '/assets/images/consulting/company.png', label: 'Company\nculture Goal' }
  ];

  return (
    <div className="services-grid">
      <div className="services-wrapper">
        {services.slice(0, 5).map((service, index) => (
          <div key={index} className="service-item">
            <Image 
              src={service.icon} 
              alt={`${service.label} Icon`}
              width={200}
              height={200}
              style={{ objectFit: 'contain' }}
            />
            <span>{service.label}</span>
          </div>
        ))}
      </div>
      <div className="services-wrapper">
        {services.slice(5, 10).map((service, index) => (
          <div key={index + 5} className="service-item">
            <Image 
              src={service.icon} 
              alt={`${service.label} Icon`}
              width={200}
              height={200}
              style={{ objectFit: 'contain' }}
            />
            <span>{service.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid; 