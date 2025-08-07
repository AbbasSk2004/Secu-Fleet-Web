import React from 'react';
import Link from 'next/link';
import styles from '@/assets/css/about/aboutus/ContactUs.module.css';

const ContactUs = () => {
  return (
    <section className={`${styles.contactSection} ${styles.fadeInUp}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12 text-center">
            <div className={styles.contactContent}>
              <span className={styles.workWithUs}>WORK WITH US</span>
              <h2 className={styles.contactTitle}>
                We&apos;re Eager to Learn<br /> 
                More About Your Project
              </h2>
              <Link href="/contact" className={styles.contactButton}>
                <div className={`${styles.buttonContainer} ${styles.scaleIn}`}>
                  <svg 
                    className={styles.buttonIcon}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className={styles.buttonText}>CONTACT US</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 