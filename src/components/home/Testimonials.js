"use client";

import React, { useState, useEffect } from 'react';
import '../../assets/css/testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechFleet Solutions",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "SecuFleet has revolutionized our fleet management operations. Their real-time tracking platform and 24/7 support have increased our efficiency by 40%. The team's expertise in IoT telematics is unmatched in the industry.",
      company: "TechFleet Solutions"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Operations Director, Global Logistics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The consulting services provided by SecuFleet were exceptional. They helped us digitize our entire fleet operations and provided comprehensive training. Their hardware solutions are reliable and their software platform is intuitive.",
      company: "Global Logistics"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Fleet Manager, Urban Transport",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with SecuFleet has been a game-changer for our transportation business. Their custom software solutions perfectly fit our needs, and their worldwide hardware delivery service is incredibly fast and reliable.",
      company: "Urban Transport"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CTO, SmartMobility Inc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The level of technical expertise and customer service at SecuFleet is outstanding. Their app development team created a custom solution that perfectly integrates with our existing systems. Highly recommended!",
      company: "SmartMobility Inc"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "VP Operations, Express Delivery",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "SecuFleet's contracting services exceeded our expectations. Their knowledge transfer program and ongoing support have made our transition to digital fleet management seamless and successful.",
      company: "Express Delivery"
    }
  ];

  // Calculate dynamic values based on testimonials count
  const totalTestimonials = testimonials.length;
  const containerWidth = `${totalTestimonials * 100}%`;
  const slideWidth = `${100 / totalTestimonials}%`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`bi ${index < rating ? 'bi-star-fill' : 'bi-star'}`}
        style={{ color: index < rating ? '#FFD700' : '#DDD' }}
      ></i>
    ));
  };

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const initialsDiv = e.target.nextElementSibling;
    if (initialsDiv && initialsDiv.classList.contains('client-initials')) {
      initialsDiv.style.display = 'flex';
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <section className="testimonial-section testimonials" style={{ backgroundColor: '#081f3e', backgroundImage: 'none' }}>
      <div className="wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-3">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-primary text-uppercase">Testimonials</h5>
            <h1 className="mb-0" style={{ color: 'white' }}>What Our Clients Say About Us</h1>
          </div>
          
          <div className="testimonial-carousel-wrapper">
            <div className="testimonial-carousel-container">
              <button 
                className="testimonial-nav-btn testimonial-nav-prev" 
                onClick={prevSlide} 
                aria-label="Previous testimonial"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              
              <div className="testimonial-carousel-viewport">
                <div 
                  className="testimonial-slides-container" 
                  style={{ 
                    transform: `translateX(-${currentSlide * (100 / totalTestimonials)}%)`,
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    width: containerWidth
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id} 
                      className="testimonial-slide"
                      style={{ flex: `0 0 ${slideWidth}` }}
                    >
                      <div className="testimonial-content">
                        <div className="testimonial-header">
                          <div className="client-info">
                            <div className="client-image">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                onError={handleImageError}
                              />
                              <div className="client-initials">
                                {getInitials(testimonial.name)}
                              </div>
                            </div>
                            <div className="client-details">
                              <h4 className="client-name">{testimonial.name}</h4>
                              <p className="client-position">{testimonial.position}</p>
                              <p className="client-company">{testimonial.company}</p>
                            </div>
                          </div>
                          <div className="rating">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                        <div className="testimonial-text">
                          <p>"{testimonial.text}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                className="testimonial-nav-btn testimonial-nav-next" 
                onClick={nextSlide} 
                aria-label="Next testimonial"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
            
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 