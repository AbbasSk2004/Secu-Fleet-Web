import React from 'react';
import Link from 'next/link';
import '../../assets/css/style.css';
import '../../assets/css/index.css';
import '../../assets/css/animation.css';


const Footer = () => {
  return (
    <>
      <div className="container-fluid text-light wow fadeInUp" data-wow-delay="0.1s" style={{ backgroundColor: '#091E3E' }}>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h4 className="text-light mb-0">Get In Touch</h4>
                  </div>
                  <div className="d-flex getInTouch mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">Beirut, Lebanon</p>
                  </div>
                  <div className="d-flex getInTouch mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">secufleet@gmail.com</p>
                  </div>
                  <div className="d-flex getInTouch mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+961 70 677 712</p>
                  </div>
                  <div className="d-flex getInTouch mt-4" style={{ overflowY: 'hidden' }}>
                    <a className="btn btn-square me-2 text-decoration-none social-icon" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-square me-2 text-decoration-none social-icon" href="https://www.linkedin.com/company/secufleet/"><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-square text-decoration-none social-icon" href="https://www.instagram.com/secufleet?igsh=MTVybWJoM21vcjFodw=="><i className="fab fa-instagram fw-normal"></i></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h4 className="text-light mb-0">Quick Links</h4>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <Link className="text-light mb-2 text-decoration-none" href="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/service/consulting"><i className="bi bi-arrow-right text-primary me-2"></i>Consulting</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/quote"><i className="bi bi-arrow-right text-primary me-2"></i>Quotation</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/careers"><i className="bi bi-arrow-right text-primary me-2"></i>Careers</Link>
                    <Link className="text-light text-decoration-none" href="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h4 className="text-light mb-0">Popular Links</h4>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <Link className="text-light mb-2 text-decoration-none" href="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/service/webdev"><i className="bi bi-arrow-right text-primary me-2"></i>Web Development</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/service/appdev"><i className="bi bi-arrow-right text-primary me-2"></i>App Development</Link>
                    <Link className="text-light mb-2 text-decoration-none" href="/about#team"><i className="bi bi-arrow-right text-primary me-2"></i>Meet the team</Link>
                    <Link className="text-light text-decoration-none" href="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center bg-transparent p-4" style={{ marginTop: '-40px' }}>
                <Link href="/" className="text-decoration-none">
                  <img src="/assets/images/logo/footerLogo.png" className="footerLogo" style={{ width: '150px', height: 'auto' }} alt="SecuFleet Logo" />
                  <br />
                  <h1 className="m-0 text-white">SecuFleet</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-white" style={{ background: '#061429', marginTop: '0' }}>
        <div className="text-center">
          <div className="row justify-content-end">
            <div className="col-md-6">
              <div className="d-flex align-items-center" style={{ height: '75px' }}>
                <p className="mb-0">&copy; <Link className="text-white border-bottom text-decoration-none" href="/">SecuFleet</Link>. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex align-items-center justify-content-end" style={{ height: '75px' }}>
                <p className="mb-0">Designed by <a className="text-white border-bottom text-decoration-none" href="https://secufleet.com">SecuFleet</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer; 