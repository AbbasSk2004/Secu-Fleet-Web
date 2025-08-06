import React from 'react';
import Image from 'next/image';

const ServicesGrid = () => {
  const services = [
    { 
      icon: '/assets/images/consulting/growth.png', 
      label: 'Growth\nGoal',
      description: 'Increase the size or scope of your company.'
    },
    { 
      icon: '/assets/images/consulting/process.png', 
      label: 'Process\nGoal',
      description: 'Improve the everyday effectiveness of your team.'
    },
    { 
      icon: '/assets/images/consulting/problemSolving.png', 
      label: 'Problem-Solving\nGoal',
      description: 'Address a problem within your organization.'
    },
    { 
      icon: '/assets/images/consulting/development.png', 
      label: 'Development\nGoal',
      description: 'Develop new skills or expertise.'
    },
    { 
      icon: '/assets/images/consulting/innovation.png', 
      label: 'Innovation\nGoal',
      description: 'Create a new or improved product or service.'
    },
    { 
      icon: '/assets/images/consulting/profitability.png', 
      label: 'Profitability\nGoal',
      description: 'Improve your organization\'s financial standing.'
    },
    { 
      icon: '/assets/images/consulting/sustainability.png', 
      label: 'Sustainability\n Goal',
      description: 'Make your business more environmentally friendly.'
    },
    { 
      icon: '/assets/images/consulting/marketing.png', 
      label: 'Marketing\nGoal',
      description: 'Increase your influence in the market.'
    },
    { 
      icon: '/assets/images/consulting/customer.png', 
      label: 'Customer\nrelation Goal',
      description: 'Earn and keep the trust of your customers.'
    },
    { 
      icon: '/assets/images/consulting/company.png', 
      label: 'Company\nculture Goal',
      description: 'Make your company a better place to work.'
    }
  ];

  return (
    <section className="services-grid" aria-label="Consulting Services Grid">
      <div className="services-wrapper" role="list">
        {services.slice(0, 5).map((service, index) => (
          <div 
            key={index} 
            className="service-item" 
            role="listitem"
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front of card */}
                <div className="flip-card-front">
                  <div className="service-icon-wrapper">
                    <Image 
                      src={service.icon} 
                      alt={`${service.label.replace('\n', ' ')} Icon`}
                      width={200}
                      height={200}
                      style={{ objectFit: 'contain' }}
                      priority={index < 3}
                    />
                  </div>
                  <span className="service-label">{service.label}</span>
                </div>
                
                {/* Back of card */}
                <div className="flip-card-back">
                  <div className="service-description">
                    <h3 className="description-title">{service.label.replace('\n', ' ')}</h3>
                    <p className="description-text">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="services-wrapper" role="list">
        {services.slice(5, 10).map((service, index) => (
          <div 
            key={index + 5} 
            className="service-item" 
            role="listitem"
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front of card */}
                <div className="flip-card-front">
                  <div className="service-icon-wrapper">
                    <Image 
                      src={service.icon} 
                      alt={`${service.label.replace('\n', ' ')} Icon`}
                      width={200}
                      height={200}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <span className="service-label">{service.label}</span>
                </div>
                
                {/* Back of card */}
                <div className="flip-card-back">
                  <div className="service-description">
                    <h3 className="description-title">{service.label.replace('\n', ' ')}</h3>
                    <p className="description-text">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid; 