import React from 'react';
import Image from 'next/image';

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="map-container">
        <div className="map">
          {/* Map will be added here */}
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-details-header">
          <Image src="/assets/images/icons/phone.png" alt="Phone" width={50} height={50} />
          <h2>Phone</h2>
        </div>
        <p>+961 70 677 712</p>
        
        <div className="contact-details-header">
          <Image src="/assets/images/icons/email.png" alt="Email" width={50} height={50} />
          <h2>Email</h2>
        </div>
        <p>goarch@domain.com</p>
        
        <div className="contact-details-header">
          <Image src="/assets/images/icons/location.png" alt="Location" width={50} height={50} />
          <h2>Address</h2>
        </div>
        <p>Baabda</p>
      </div>
    </section>
  );
};

export default ContactInfo; 