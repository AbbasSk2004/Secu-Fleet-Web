'use client';

import React from 'react';
import styles from './../../assets/css/about/aboutus/CoreServices.module.css';

const CoreServices = () => {
  const services = [
    { 
      image: "https://i.ibb.co/ZMJy6g8/device-connection.png", 
      name: "Device Connection",
      description: "Seamlessly connect and manage all your IoT devices and sensors for comprehensive fleet monitoring."
    },
    { 
      image: "https://i.ibb.co/Ssmxryr/human-value.png", 
      name: "Human Value",
      description: "Empower your team with intuitive tools and insights that enhance productivity and decision-making."
    },
    { 
      image: "https://i.ibb.co/HTNg17j/data-value.png", 
      name: "Data Value",
      description: "Transform raw data into actionable insights that drive business growth and operational efficiency."
    },
    { 
      image: "https://i.ibb.co/3TRrrV2/data-sensing.png", 
      name: "Data Sensing",
      description: "Advanced sensing technologies that capture real-time information from your entire fleet ecosystem."
    },
    { 
      image: "https://i.ibb.co/TLyTNng/data-analytics.png", 
      name: "Data Analytics",
      description: "Powerful analytics engine that processes complex data to deliver meaningful business intelligence."
    },
    { 
      image: "https://i.ibb.co/3F8Gwc8/communication.png", 
      name: "Communication",
      description: "Robust communication infrastructure ensuring reliable data transmission and system connectivity."
    }
  ];

  return (
    <section className={styles.coreServicesSection} aria-label="Core Services Grid">
      {/* Background Grid Pattern */}
      <div className={styles.backgroundGrid} />
      
      <div className={styles.container}>
        <div className={styles.sectionTitleWrapper}>
          <h2 className={styles.sectionTitle}>Our Core Services</h2>
        </div>
        
        {/* First Row - 3 services */}
        <div className={styles.servicesWrapper} role="list">
          {services.slice(0, 3).map((service, index) => (
            <div 
              key={index} 
              className={styles.serviceItem} 
              role="listitem"
            >
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  {/* Front of card */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.serviceIconWrapper}>
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className={styles.serviceIcon}
                      />
                    </div>
                    <span className={styles.serviceLabel}>{service.name}</span>
                  </div>
                  
                  {/* Back of card */}
                  <div className={styles.flipCardBack}>
                    <div className={styles.serviceDescription}>
                      <h3 className={styles.descriptionTitle}>{service.name}</h3>
                      <p className={styles.descriptionText}>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second Row - 3 services */}
        <div className={styles.servicesWrapper} role="list">
          {services.slice(3, 6).map((service, index) => (
            <div 
              key={index + 3} 
              className={styles.serviceItem} 
              role="listitem"
            >
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  {/* Front of card */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.serviceIconWrapper}>
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className={styles.serviceIcon}
                      />
                    </div>
                    <span className={styles.serviceLabel}>{service.name}</span>
                  </div>
                  
                  {/* Back of card */}
                  <div className={styles.flipCardBack}>
                    <div className={styles.serviceDescription}>
                      <h3 className={styles.descriptionTitle}>{service.name}</h3>
                      <p className={styles.descriptionText}>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices; 