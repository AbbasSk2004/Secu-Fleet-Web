'use client';

import React, { useState } from 'react';
import '@/assets/css/about/career/job[id]/job-application.css';

const JobApplicationForm = ({ jobId, jobTitle }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cv: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        cv: file
      }));
    } else {
      alert('Please upload a PDF file only.');
      e.target.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('cv', formData.cv);
      formDataToSend.append('jobId', jobId);
      formDataToSend.append('jobTitle', jobTitle);

      // Here you would typically send the data to your API
      // const response = await fetch('/api/job-applications', {
      //   method: 'POST',
      //   body: formDataToSend
      // });

      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cv: null
      });
      
      // Reset file input
      const fileInput = document.getElementById('secufleet-cv-upload');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="secufleet-job-application-container wow fadeInUp" data-wow-delay="0.3s">
      <div className="secufleet-application-header">
        <div className="secufleet-application-icon">
          <span className="material-symbols-outlined">send</span>
        </div>
        <h2 className="secufleet-application-title">Apply for {jobTitle}</h2>
        <p className="secufleet-application-subtitle">
          Take the first step towards joining our team. Fill out the form below to submit your application.
        </p>
      </div>
      
      {submitStatus === 'success' && (
        <div className="secufleet-alert secufleet-alert-success">
          <span className="material-symbols-outlined secufleet-alert-icon">check_circle</span>
          <div className="secufleet-alert-content">
            <h4 className="secufleet-alert-title">Application Submitted Successfully!</h4>
            <p className="secufleet-alert-message">Thank you for your interest in joining SecuFleet. We'll review your application and get back to you soon.</p>
          </div>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="secufleet-alert secufleet-alert-error">
          <span className="material-symbols-outlined secufleet-alert-icon">error</span>
          <div className="secufleet-alert-content">
            <h4 className="secufleet-alert-title">Submission Error</h4>
            <p className="secufleet-alert-message">There was an error submitting your application. Please try again or contact us directly.</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="secufleet-application-form">
        <div className="secufleet-form-grid">
          <div className="secufleet-form-group">
            <label htmlFor="secufleet-first-name" className="secufleet-form-label">
              <span className="material-symbols-outlined secufleet-label-icon">person</span>
              First Name
            </label>
            <input
              type="text"
              id="secufleet-first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="secufleet-form-input"
              placeholder="Enter your first name"
              required
            />
          </div>
          
          <div className="secufleet-form-group">
            <label htmlFor="secufleet-last-name" className="secufleet-form-label">
              <span className="material-symbols-outlined secufleet-label-icon">person</span>
              Last Name
            </label>
            <input
              type="text"
              id="secufleet-last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="secufleet-form-input"
              placeholder="Enter your last name"
              required
            />
          </div>
          
          <div className="secufleet-form-group">
            <label htmlFor="secufleet-email" className="secufleet-form-label">
              <span className="material-symbols-outlined secufleet-label-icon">email</span>
              Email Address
            </label>
            <input
              type="email"
              id="secufleet-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="secufleet-form-input"
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div className="secufleet-form-group">
            <label htmlFor="secufleet-phone" className="secufleet-form-label">
              <span className="material-symbols-outlined secufleet-label-icon">phone</span>
              Phone Number
            </label>
            <input
              type="tel"
              id="secufleet-phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="secufleet-form-input"
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <div className="secufleet-form-group secufleet-file-upload-group">
            <label htmlFor="secufleet-cv-upload" className="secufleet-form-label">
              <span className="material-symbols-outlined secufleet-label-icon">upload_file</span>
              Upload CV (PDF only)
            </label>
            <div className="secufleet-file-input-wrapper">
              <input
                type="file"
                id="secufleet-cv-upload"
                name="cv"
                accept="application/pdf"
                onChange={handleFileChange}
                className="secufleet-file-input"
                required
              />
              <label htmlFor="secufleet-cv-upload" className="secufleet-file-input-label">
                <div className="secufleet-file-input-content">
                  <span className="material-symbols-outlined secufleet-upload-icon">cloud_upload</span>
                  <div className="secufleet-file-input-text">
                    <span className="secufleet-file-input-title">
                      {formData.cv ? formData.cv.name : 'Choose PDF file'}
                    </span>
                    <span className="secufleet-file-input-subtitle">
                      {formData.cv ? 'File selected' : 'Click to browse or drag and drop'}
                    </span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="secufleet-form-submit-section">
          <button
            type="submit"
            disabled={isSubmitting}
            className="secufleet-submit-button"
          >
            {isSubmitting ? (
              <>
                <span className="secufleet-spinner" role="status"></span>
                <span className="secufleet-button-text">Submitting Application...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined secufleet-button-icon">send</span>
                <span className="secufleet-button-text">Submit Application</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm; 