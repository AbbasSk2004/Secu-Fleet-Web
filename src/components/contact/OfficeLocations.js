import React from 'react';
import Image from 'next/image';
import '@/assets/css/about/contact/office-locations.css';

const OfficeLocations = () => {
  const offices = [
    {
      id: 1,
      country: 'Lebanon',
      city: 'Baabda',
      address: 'SecuFleet Headquarters, Baabda District',
      phone: '+961 70 677 712',
      email: 'lebanon@secufleet.com',
      flag: '/assets/images/contact/Flags/lebanon.png',
      timezone: 'GMT+2',
      type: 'Headquarters',
      coordinates: { lat: 33.8547, lng: 35.5154 }
    },
    {
      id: 2,
      country: 'France',
      city: 'Paris',
      address: '123 Avenue des Champs-Élysées, 75008 Paris',
      phone: '+33 1 23 45 67 89',
      email: 'france@secufleet.com',
      flag: '/assets/images/contact/Flags/france.png',
      timezone: 'GMT+1',
      type: 'European Office',
      coordinates: { lat: 48.8566, lng: 2.3522 }
    },
    {
      id: 3,
      country: 'Nigeria',
      city: 'Lagos',
      address: '456 Victoria Island, Lagos State',
      phone: '+234 1 234 5678',
      email: 'nigeria@secufleet.com',
      flag: '/assets/images/contact/Flags/nigeria.png',
      timezone: 'GMT+1',
      type: 'Regional Office',
      coordinates: { lat: 6.5244, lng: 3.3792 }
    },
    {
      id: 4,
      country: 'Côte d\'Ivoire',
      city: 'Abidjan',
      address: '789 Plateau District, Abidjan',
      phone: '+225 27 20 12 34 56',
      email: 'cotedivoire@secufleet.com',
      flag: '/assets/images/contact/Flags/cote.png',
      timezone: 'GMT+0',
      type: 'Regional Office',
      coordinates: { lat: 5.3600, lng: -4.0083 }
    },
    {
      id: 5,
      country: 'DRC',
      city: 'Kinshasa',
      address: '321 Gombe District, Kinshasa',
      phone: '+243 1 234 567',
      email: 'drc@secufleet.com',
      flag: '/assets/images/contact/Flags/congo.png',
      timezone: 'GMT+1',
      type: 'Regional Office',
      coordinates: { lat: -4.4419, lng: 15.2663 }
    }
  ];

  return (
    <section className="office-locations-section" style={{ backgroundColor: '#081f3e', backgroundImage: 'none' }}>
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-primary text-uppercase">Global Presence</h5>
            <h1 className="mb-0" style={{ color: 'white' }}>Our Worldwide Office Network</h1>
            <p className="text-light mt-3">With offices across multiple continents, we're always close to serve your fleet management needs.</p>
          </div>
          
          <div className="world-map-container mb-5">
            <div className="world-map-wrapper wow zoomIn" data-wow-delay="0.2s">
              <img 
                src="https://i.ibb.co/2KBVcMK/mapWLoc.png" 
                alt="World Map with SecuFleet Locations" 
                className="world-map img-fluid"
              />
              <div className="map-overlay">
                <div className="animated-dots">
                  {offices.map((office) => (
                    <div
                      key={office.id}
                      className="location-dot"
                      style={{
                        left: `${((office.coordinates.lng + 180) / 360) * 100}%`,
                        top: `${((90 - office.coordinates.lat) / 180) * 100}%`
                      }}
                      data-office={office.country}
                    >
                      <div className="dot-pulse"></div>
                      <div className="dot-core"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="row g-5 office-cards-row">
            {offices.map((office, index) => (
              <div key={office.id} className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay={`${0.3 + (index * 0.1)}s`}>
                <div className={`office-card ${office.type === 'Headquarters' ? 'headquarters' : ''}`}>
                  <div className="office-header">
                    <div className="flag-container">
                      <Image 
                        src={office.flag} 
                        alt={`${office.country} Flag`} 
                        width={60} 
                        height={40}
                        className="country-flag"
                      />
                    </div>
                    <div className="office-title">
                      <h3>{office.country}</h3>
                      <span className="office-type">{office.type}</span>
                    </div>
                  </div>
                  
                  <div className="office-content">
                    <div className="office-info">
                      <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                          <strong>{office.city}</strong>
                          <p>{office.address}</p>
                        </div>
                      </div>
                      
                      <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <div>
                          <strong>Phone</strong>
                          <p>{office.phone}</p>
                        </div>
                      </div>
                      
                      <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                          <strong>Email</strong>
                          <p>{office.email}</p>
                        </div>
                      </div>
                      
                      <div className="info-item">
                        <i className="fas fa-clock"></i>
                        <div>
                          <strong>Timezone</strong>
                          <p>{office.timezone}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="office-actions">
                      <button className="btn btn-lg btn-primary rounded">
                        <i className="fas fa-phone"></i>
                        Contact Office
                      </button>
                      <button className="btn btn-lg btn-secondary rounded">
                        <i className="fas fa-directions"></i>
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="global-stats mt-5">
            <div className="row text-center g-4">
              <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay="0.8s">
                <div className="stat-item">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Global Offices</div>
                </div>
              </div>
              <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay="0.9s">
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support </div>
                </div>
              </div>
              <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay="1.0s">
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Languages</div>
                </div>
              </div>
              <div className="col-md-3 col-6 wow fadeInUp" data-wow-delay="1.1s">
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Local Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations; 