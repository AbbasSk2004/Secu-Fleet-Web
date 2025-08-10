'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../../assets/css/home/web-quote-section.css';

const QuoteSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="secufleet-web-quote-section">
      <div className="secufleet-web-quote-video">
        <video autoPlay loop muted suppressHydrationWarning>
          <source src="/assets/videos/webVd.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="secufleet-web-quote-content">
        {/* Main Heading */}
        <h1 className="secufleet-web-quote-heading">Need A Quote?</h1>
        
        {/* Subheading with Multiple Lines */}
        <p className="secufleet-web-quote-subheading">
          Get in touch with our team today to receive a no-obligation quote tailored to your specific needs.<br />
          We&apos;re here to answer any questions you may have.<br />
          We&apos;ll provide detailed pricing information to help you make an informed decision.
        </p>

        {/* Call to Action Box */}
        <a href="/Pages/quote.html" className="secufleet-web-quote-btn">
          <h5>REQUEST A FREE QUOTE</h5>
        </a>

        {/* Contact Information */}
        <div className="secufleet-web-contact-info">
          <div className="secufleet-web-contact-item">
            <img src="/assets/images/icons/phone.png" className="secufleet-web-contact-icon" loading="lazy" alt="phone icon" />
            <a href="tel:+96170677712" className="secufleet-web-contact-link">Call to ask any question</a>
          </div>
          <div className="secufleet-web-contact-item">
            <img src="/assets/images/icons/24h.png" className="secufleet-web-contact-icon" loading="lazy" alt="24 hours icon" />
            <a href="https://wa.me/96170677712" className="secufleet-web-contact-link">Reply within 24 hours</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection; 