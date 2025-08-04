'use client';
import { useState } from 'react';

export default function QuoteRequestSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h6 className="text-primary text-uppercase">{/* Get A Quote */}</h6>
          <h1 className="display-6 mb-4">Ready to Start Your App Development Project?</h1>
          <p className="mb-4">Let&apos;s discuss your app idea and create something amazing together. Our team is ready to help you bring your vision to life.</p>
        </div>
        
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="bg-light rounded p-4 p-md-5 h-100 d-flex flex-column justify-content-center">
                <div className="d-flex border-bottom border-primary border-2 border-opacity-75 pb-4 mb-4">
                  <div className="flex-shrink-0 btn btn-sm btn-primary rounded-circle me-3">
                    <i className="fa fa-map-marker-alt text-white"></i>
                  </div>
                  <h6 className="mb-1">Our Office</h6>
                </div>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="bg-light rounded p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control border-0" 
                        id="name" 
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="email" 
                        className="form-control border-0" 
                        id="email" 
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control border-0" 
                        id="subject" 
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea 
                        className="form-control border-0" 
                        placeholder="Leave a message here" 
                        id="message" 
                        name="message"
                        style={{ height: '150px' }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 