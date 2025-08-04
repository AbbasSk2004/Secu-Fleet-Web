import React from 'react';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container">
        <p className="p1">WORK WITH US</p>
        <h2>We&apos;re Eager to Learn<br /> More About Your Project</h2>
        <Link href="/contact" className="contact-button">
          <div className="button-container">
            <img src="https://i.ibb.co/dGxkRBt/circle.png" alt="Contact Us" className="button-image" />
            <p>CONTACT US</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ContactUs; 