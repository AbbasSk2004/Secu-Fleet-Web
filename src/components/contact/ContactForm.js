"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import '@/assets/css/about/contact/contact-form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section className="secufleet-contact-form-section">
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-primary text-uppercase">Get In Touch</h5>
            <h1 className="mb-0" style={{ color: 'white' }}>Ready to Transform Your Fleet Management?</h1>
            <p className="text-light mt-3">Contact us today for a personalized consultation and discover how our solutions can revolutionize your business operations.</p>
          </div>
          
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="secufleet-contact-form-info wow zoomIn" data-wow-delay="0.2s">
                <div className="secufleet-info-item">
                  <div className="secufleet-info-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="secufleet-info-content">
                    <h4>Call Us</h4>
                    <p>+961 70 677 712</p>
                    <span>Monday - Friday, 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                
                <div className="secufleet-info-item">
                  <div className="secufleet-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="secufleet-info-content">
                    <h4>Email Us</h4>
                    <p>contact@secufleet.com</p>
                    <span>We'll respond within 24 hours</span>
                  </div>
                </div>
                
                <div className="secufleet-info-item">
                  <div className="secufleet-info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="secufleet-info-content">
                    <h4>Visit Us</h4>
                    <p>Baabda, Lebanon</p>
                    <span>Schedule an appointment</span>
                  </div>
                </div>
                
                <div className="secufleet-social-links">
                  <h4>Follow Us</h4>
                  <div className="secufleet-social-icons">
                    <a href="#" className="secufleet-social-icon"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="secufleet-social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="secufleet-social-icon"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="secufleet-social-icon"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="secufleet-contact-form-wrapper wow zoomIn" data-wow-delay="0.4s">
                <form onSubmit={handleSubmit} className="secufleet-contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="secufleet-form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="secufleet-form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="secufleet-form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="secufleet-form-group">
                        <label htmlFor="company">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="secufleet-form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="demo">Request a Demo</option>
                      <option value="quote">Get a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  
                  <div className="secufleet-form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your fleet management needs..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`secufleet-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 