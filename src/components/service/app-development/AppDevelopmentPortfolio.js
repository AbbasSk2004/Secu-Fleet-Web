'use client';
import { useState } from 'react';

export default function AppDevelopmentPortfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'mobile',
      image: '/assets/images/works/appDev.webp',
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications'
    },
    {
      id: 2,
      category: 'web',
      image: '/assets/images/works/webdev.webp',
      title: 'Web Application',
      description: 'Responsive web applications'
    },
    {
      id: 3,
      category: 'software',
      image: '/assets/images/works/software3resized.png',
      title: 'Software Development',
      description: 'Custom software solutions'
    },
    {
      id: 4,
      category: 'mobile',
      image: '/assets/images/works/webdevelopmenet.webp',
      title: 'iOS Development',
      description: 'Native iOS applications'
    },
    {
      id: 5,
      category: 'web',
      image: '/assets/images/works/consulting.webp',
      title: 'E-commerce Platform',
      description: 'Online shopping solutions'
    },
    {
      id: 6,
      category: 'software',
      image: '/assets/images/works/hardware.webp',
      title: 'Hardware Integration',
      description: 'Hardware and software integration'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h6 className="text-primary text-uppercase">{/* Our Portfolio */}</h6>
          <h1 className="display-6 mb-4">Explore Our Latest App Development Projects</h1>
        </div>
        
        {/* Filter Buttons */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="portfolio-filter">
              <button 
                className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`btn ${activeFilter === 'mobile' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`}
                onClick={() => setActiveFilter('mobile')}
              >
                Mobile Apps
              </button>
              <button 
                className={`btn ${activeFilter === 'web' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`}
                onClick={() => setActiveFilter('web')}
              >
                Web Apps
              </button>
              <button 
                className={`btn ${activeFilter === 'software' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`}
                onClick={() => setActiveFilter('software')}
              >
                Software
              </button>
            </div>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4 portfolio-container">
              {filteredItems.map((item, index) => (
                <div key={item.id} className="col-lg-4 col-md-6 portfolio-item wow zoomIn" data-wow-delay={`${0.1 + index * 0.2}s`}>
                  <div className="position-relative rounded overflow-hidden">
                    <img className="img-fluid w-100" src={item.image} alt={item.title} />
                    <div className="portfolio-overlay">
                      <a className="btn btn-light" href={item.image} data-lightbox="portfolio">
                        <i className="fa fa-plus fa-2x text-primary"></i>
                      </a>
                      <div className="mt-auto">
                        <small className="text-white text-uppercase fw-bold">{item.title}</small>
                        <h6 className="text-white mt-1">{item.description}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .portfolio-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .portfolio-item:hover {
          transform: translateY(-5px);
        }
        
        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(6, 163, 218, 0.8);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          padding: 20px;
          text-align: center;
        }
        
        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }
        
        .portfolio-overlay .btn {
          margin-bottom: 15px;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border: none;
          transition: all 0.3s ease;
        }
        
        .portfolio-overlay .btn:hover {
          background: #06A3DA;
          color: white !important;
        }
        
        .portfolio-overlay small {
          font-size: 12px;
          font-weight: 600;
        }
        
        .portfolio-overlay h6 {
          font-size: 14px;
          margin-top: 5px;
        }
        
        .portfolio-filter .btn {
          border-radius: 25px;
          padding: 8px 20px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .portfolio-filter .btn:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
} 