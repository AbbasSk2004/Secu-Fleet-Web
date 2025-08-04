import React from 'react';

const Features = () => {
  return (
    <section className="Features" style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <video 
        autoPlay 
        muted 
        loop 
        id="featuresVideo" 
        preload="auto" 
        playsInline 
        className="bg-video"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/assets/videos/canva.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="container-fluid wow fadeInUp feature" data-wow-delay="0.1s">
        <div className="container" style={{ backgroundColor: '#00000015', borderRadius: '15%', paddingTop: '5px' }}>
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 className="mb-0" style={{ color: 'white' }}>We Are Here to Grow Your Business Exponentially</h1>
          </div>
          <div className="row g-5" style={{ marginTop: '10px' }}>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <i className="fa fa-cog w3-xxlarge" style={{ color: 'white' }}></i>
                    </div>
                    <h4 style={{ marginLeft: '10px', color: '#06a3da' }}>Support</h4>
                  </div>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-headphones" style={{ marginRight: '10px' }}></i> We take care of everything <br />
                  </p>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-truck" style={{ marginRight: '10px' }}></i> Streamline workflows and make data-driven decisions
                  </p>
                </div>
                <div className="col-12 wow zoomIn scndRow" data-wow-delay="0.6s" style={{ marginTop: '3px' }}>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <i className="fa fa-desktop w3-xxlarge" style={{ color: 'white' }}></i>
                    </div>
                    <h4 style={{ marginLeft: '10px', color: '#06a3da' }}>Real Time Visibility</h4>
                  </div>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-eye" style={{ marginRight: '10px' }}></i> Monitor your fleet in real-time <br />
                  </p>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-chart-line" style={{ marginRight: '10px' }}></i> Get insights and analytics instantly
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <i className="fa fa-shield-alt w3-xxlarge" style={{ color: 'white' }}></i>
                    </div>
                    <h4 style={{ marginLeft: '10px', color: '#06a3da' }}>Security</h4>
                  </div>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-lock" style={{ marginRight: '10px' }}></i> Advanced security features <br />
                  </p>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-user-shield" style={{ marginRight: '10px' }}></i> Protect your assets and data
                  </p>
                </div>
                <div className="col-12 wow zoomIn scndRow" data-wow-delay="0.8s" style={{ marginTop: '3px' }}>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <i className="fa fa-rocket w3-xxlarge" style={{ color: 'white' }}></i>
                    </div>
                    <h4 style={{ marginLeft: '10px', color: '#06a3da' }}>Performance</h4>
                  </div>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-tachometer-alt" style={{ marginRight: '10px' }}></i> Optimize performance <br />
                  </p>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-bolt" style={{ marginRight: '10px' }}></i> Boost efficiency and productivity
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <i className="fa fa-users w3-xxlarge" style={{ color: 'white' }}></i>
                    </div>
                    <h4 style={{ marginLeft: '10px', color: '#06a3da' }}>Team Management</h4>
                  </div>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-user-friends" style={{ marginRight: '10px' }}></i> Manage your team efficiently <br />
                  </p>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-handshake" style={{ marginRight: '10px' }}></i> Improve collaboration and communication
                  </p>
                </div>
                <div className="col-12 wow zoomIn scndRow" data-wow-delay="1.0s" style={{ marginTop: '3px' }}>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                      <i className="fa fa-cogs w3-xxlarge" style={{ color: 'white' }}></i>
                    </div>
                    <h4 style={{ marginLeft: '10px', color: '#06a3da' }}>Integration</h4>
                  </div>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-plug" style={{ marginRight: '10px' }}></i> Seamless integration <br />
                  </p>
                  <p className="mb-0" style={{ color: 'white', fontSize: '20px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <i className="fa fa-link" style={{ marginRight: '10px' }}></i> Connect with existing systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 