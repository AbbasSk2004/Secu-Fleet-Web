"use client";

import React, { useState } from 'react';
import '@/assets/css/about/contact/request-demo.css';

const RequestDemo = () => {
  const [activeTab, setActiveTab] = useState('demo');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    fleetSize: '',
    currentSolution: '',
    challenges: '',
    preferredDate: '',
    preferredTime: '',
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
      console.log(`${activeTab} request submitted:`, formData);
      setIsSubmitting(false);
      alert(`Thank you! Your ${activeTab === 'demo' ? 'demo request' : 'quote request'} has been submitted. We'll contact you within 24 hours.`);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        fleetSize: '',
        currentSolution: '',
        challenges: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      });
    }, 2000);
  };

  const industries = [
    'Transportation & Logistics',
    'Construction',
    'Mining',
    'Delivery Services',
    'Field Services',
    'Government',
    'Healthcare',
    'Utilities',
    'Agriculture',
    'Other'
  ];

  const fleetSizes = [
    '1-10 vehicles',
    '11-25 vehicles',
    '26-50 vehicles',
    '51-100 vehicles',
    '101-500 vehicles',
    '500+ vehicles'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  return (
    <section className="secufleet-request-demo-section">
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-primary text-uppercase">Ready to Transform Your Fleet?</h5>
            <h1 className="mb-0" style={{ color: 'white' }}>Experience the Power of SecuFleet</h1>
            <p className="text-light mt-3">Get a personalized demo or custom quote for your business and discover how our solutions can revolutionize your operations.</p>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <div className="secufleet-demo-benefits wow zoomIn" data-wow-delay="0.2s">
                <h3>Why Choose SecuFleet?</h3>
                
                <div className="secufleet-benefit-item">
                  <div className="secufleet-benefit-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="secufleet-benefit-content">
                    <h4>Increase Efficiency by 30%</h4>
                    <p>Optimize routes, reduce fuel costs, and improve driver productivity with our advanced analytics.</p>
                  </div>
                </div>

                <div className="secufleet-benefit-item">
                  <div className="secufleet-benefit-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="secufleet-benefit-content">
                    <h4>Enhanced Security & Safety</h4>
                    <p>Real-time monitoring, panic buttons, and comprehensive safety features protect your assets.</p>
                  </div>
                </div>

                <div className="secufleet-benefit-item">
                  <div className="secufleet-benefit-icon">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <div className="secufleet-benefit-content">
                    <h4>Reduce Costs by 25%</h4>
                    <p>Lower maintenance costs, fuel savings, and improved asset utilization.</p>
                  </div>
                </div>

                <div className="secufleet-benefit-item">
                  <div className="secufleet-benefit-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="secufleet-benefit-content">
                    <h4>Mobile-First Design</h4>
                    <p>Manage your fleet from anywhere with our responsive web and mobile applications.</p>
                  </div>
                </div>

                <div className="secufleet-demo-stats">
                  <div className="row text-center">
                    <div className="col-4">
                      <div className="secufleet-stat-number">500+</div>
                      <div className="secufleet-stat-label">Happy Clients</div>
                    </div>
                    <div className="col-4">
                      <div className="secufleet-stat-number">50K+</div>
                      <div className="secufleet-stat-label">Vehicles Tracked</div>
                    </div>
                    <div className="col-4">
                      <div className="secufleet-stat-number">99.9%</div>
                      <div className="secufleet-stat-label">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="secufleet-request-form-wrapper wow zoomIn" data-wow-delay="0.4s">
                <div className="secufleet-form-tabs">
                  <button 
                    className={`secufleet-tab-btn ${activeTab === 'demo' ? 'active' : ''}`}
                    onClick={() => setActiveTab('demo')}
                  >
                    <i className="fas fa-play-circle"></i>
                    Request Demo
                  </button>
                  <button 
                    className={`secufleet-tab-btn ${activeTab === 'quote' ? 'active' : ''}`}
                    onClick={() => setActiveTab('quote')}
                  >
                    <i className="fas fa-calculator"></i>
                    Get Quote
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="secufleet-request-form">
                  <div className="secufleet-form-header">
                    <h4>
                      {activeTab === 'demo' ? 'Schedule Your Demo' : 'Get Custom Quote'}
                    </h4>
                    <p>
                      {activeTab === 'demo' 
                        ? 'Book a personalized demo with our experts'
                        : 'Get a tailored quote for your fleet management needs'
                      }
                    </p>
                  </div>

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
                        <label htmlFor="email">Business Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="secufleet-form-group">
                        <label htmlFor="company">Company Name *</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Your company"
                        />
                      </div>
                    </div>
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
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="secufleet-form-group">
                        <label htmlFor="industry">Industry *</label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select your industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="secufleet-form-group">
                        <label htmlFor="fleetSize">Fleet Size *</label>
                        <select
                          id="fleetSize"
                          name="fleetSize"
                          value={formData.fleetSize}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select fleet size</option>
                          {fleetSizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {activeTab === 'demo' && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="secufleet-form-group">
                          <label htmlFor="preferredDate">Preferred Date</label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="secufleet-form-group">
                          <label htmlFor="preferredTime">Preferred Time</label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                          >
                            <option value="">Select time slot</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="secufleet-form-group">
                    <label htmlFor="currentSolution">Current Solution</label>
                    <input
                      type="text"
                      id="currentSolution"
                      name="currentSolution"
                      value={formData.currentSolution}
                      onChange={handleChange}
                      placeholder="What are you currently using?"
                    />
                  </div>

                  <div className="secufleet-form-group">
                    <label htmlFor="challenges">Main Challenges</label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      rows="3"
                      value={formData.challenges}
                      onChange={handleChange}
                      placeholder="What challenges are you facing with your current fleet management?"
                    ></textarea>
                  </div>

                  <div className="secufleet-form-group">
                    <label htmlFor="message">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements or questions?"
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
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className={activeTab === 'demo' ? 'fas fa-calendar-check' : 'fas fa-paper-plane'}></i>
                        {activeTab === 'demo' ? 'Schedule Demo' : 'Get Quote'}
                      </>
                    )}
                  </button>

                  <div className="secufleet-form-footer">
                    <p>
                      <i className="fas fa-lock"></i>
                      Your information is secure and will never be shared with third parties.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDemo; 