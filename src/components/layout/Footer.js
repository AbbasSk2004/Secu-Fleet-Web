"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../assets/css/footer.css';

const Footer = () => {
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    phone: '',
    email: '',
    company: '',
    content: '',
    profilePhoto: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profilePhoto: file
      }));
    }
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowRatingModal(false);
        setShowSuccess(false);
        setRating(0);
        setFormData({
          fullName: '',
          position: '',
          phone: '',
          email: '',
          company: '',
          content: '',
          profilePhoto: null
        });
      }, 2000);
    }, 1500);
  };

  const closeModal = () => {
    setShowRatingModal(false);
    setRating(0);
    setFormData({
      fullName: '',
      position: '',
      phone: '',
      email: '',
      company: '',
      content: '',
      profilePhoto: null
    });
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <button
        key={index}
        type="button"
        className={`bi ${index < rating ? 'bi-star-fill' : 'bi-star'} ${index < rating ? 'active' : ''}`}
        onClick={() => handleStarClick(index + 1)}
        style={{ color: index < rating ? '#FFD700' : '#DDD' }}
      ></button>
    ));
  };

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
                    <h4 className="text-light mb-0">Rate Us</h4>
                  </div>
                  <div className="rate-us-content">
                    <p>Share your experience with SecuFleet and help us improve our services. Your feedback matters to us!</p>
                    <button 
                      className="rate-us-btn" 
                      onClick={() => setShowRatingModal(true)}
                    >
                      Rate Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo-section">
                <Link href="/" className="text-decoration-none">
                  <Image src="/assets/images/logo/footerLogo.png" alt="SecuFleet Logo" width={160} height={48} />
                  <h1 className="text-white">SecuFleet</h1>
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

      {/* Rating Modal */}
      <div className={`rating-modal ${showRatingModal ? 'show' : ''}`}>
        <div className="rating-modal-content">
          <button className="rating-modal-close" onClick={closeModal}>
            <i className="bi bi-x-lg"></i>
          </button>
          
          <div className="rating-modal-header">
            <h3>Rate Your Experience</h3>
            <p>Share your thoughts about SecuFleet's services</p>
          </div>

          {showSuccess ? (
            <div className="rating-success">
              <i className="bi bi-check-circle-fill"></i>
              <h4>Thank You!</h4>
              <p>Your rating has been submitted successfully.</p>
            </div>
          ) : (
            <form className="rating-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="profilePhoto">Profile Photo</label>
                <input
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Enter your position"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                />
              </div>

              <div className="form-group">
                <label>Rating *</label>
                <div className="rating-stars">
                  {renderStars()}
                  <span className="rating-value">{rating > 0 ? `${rating}/5` : ''}</span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="content">Your Thoughts *</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Share your experience with SecuFleet..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`rating-submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting || rating === 0}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Rating'}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer; 