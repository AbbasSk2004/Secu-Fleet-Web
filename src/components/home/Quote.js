import React from 'react';
import '../../assets/css/index.css';
import Link from 'next/link';

const Quote = () => {
  return (
    <section className="quote">
      <div className="quoteVideo">
        <video autoPlay loop muted suppressHydrationWarning>
          <source src="/assets/videos/acc.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12" style={{ overflowY: 'hidden', height: 'fit-content' }}>
              {/* Main Heading */}
              <h1 style={{ color: '#ffffff', marginBottom: '20px', fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>Need A Quote?</h1>
              {/* Subheading with Multiple Lines */}
              <p style={{ color: '#f0f0f0', marginBottom: '30px', fontFamily: "'Open Sans', sans-serif" }}>
                Get in touch with our team today to receive a no-obligation quote tailored to your specific needs.<br />
                We&apos;re here to answer any questions you may have.<br />
                We&apos;ll provide detailed pricing information to help you make an informed decision.
              </p>

              {/* Call to Action Box */}
              <a href="/Pages/quote.html" className="d-inline-block text-decoration-none btn-quote-transparent" style={{ overflowY: 'hidden' }}>
                <h5 style={{ color: 'white', textAlign: 'center', margin: 0, fontWeight: 600 }}>REQUEST A FREE QUOTE</h5>
              </a>

              {/* Contact Information */}
              <div className="row mt-4 justify-content-center contact-info">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <img src="/assets/images/icons/phone.png" className="request-img" loading="lazy" alt="phone icon" />
                  <a href="tel:+96170677712" className="ms-2 contact-link">Call to ask any question</a>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center mt-3 mt-md-0">
                  <img src="/assets/images/icons/24h.png" className="request-img" loading="lazy" alt="24 hours icon" />
                  <a href="https://wa.me/96170677712" className="ms-2 contact-link">Reply within 24 hours</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote; 