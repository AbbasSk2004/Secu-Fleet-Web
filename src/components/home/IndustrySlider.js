'use client';
import React, { useEffect, useRef } from 'react';
import '../../assets/css/industrySlider.css';

const IndustrySlider = () => {
  const sliderRef = useRef(null);
  const currentIndexRef = useRef(0);
  const slidesToShowRef = useRef(3);
  const autoSlideIntervalRef = useRef(null);

  const getSlidesToShow = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      return 1; 
    } else if (width <= 768) {
      return 2;
    } else {
      return 3;
    }
  };

  const updateSlider = () => {
    const slider = sliderRef.current;
    if (slider) {
      const gapPercentage = 2; 
      const slideWidth = (100 / slidesToShowRef.current);
      slider.style.transform = `translateX(-${currentIndexRef.current * (slideWidth + gapPercentage)}%)`;
    }
  };

  const nextSlide = () => {
    const slides = document.querySelectorAll('.Islide');
    const totalSlides = slides.length;
    currentIndexRef.current = (currentIndexRef.current + 1) % (totalSlides - slidesToShowRef.current + 1);
    updateSlider();
  };

  const prevSlide = () => {
    const slides = document.querySelectorAll('.Islide');
    const totalSlides = slides.length;
    currentIndexRef.current = (currentIndexRef.current - 1 + (totalSlides - slidesToShowRef.current + 1)) % (totalSlides - slidesToShowRef.current + 1);
    updateSlider();
  };

  const startAutoSlide = () => {
    clearInterval(autoSlideIntervalRef.current);  
    autoSlideIntervalRef.current = setInterval(nextSlide, 3000);  
  };

  useEffect(() => {
    // Initialize slider
    slidesToShowRef.current = getSlidesToShow();
    currentIndexRef.current = 0;
    
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      updateSlider();
      
      // Add event listeners for slider arrows
      const prevArrow = document.getElementById('IprevArrow');
      const nextArrow = document.getElementById('InextArrow');
      
      if (prevArrow) {
        prevArrow.addEventListener('click', prevSlide);
      }
      if (nextArrow) {
        nextArrow.addEventListener('click', nextSlide);
      }
      
      // Start auto-slide
      startAutoSlide();
    }, 100);

    // Handle resize
    const handleResize = () => {
      slidesToShowRef.current = getSlidesToShow();
      currentIndexRef.current = 0;
      updateSlider();
      startAutoSlide();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearInterval(autoSlideIntervalRef.current);
      window.removeEventListener('resize', handleResize);
      
      // Remove event listeners
      const prevArrow = document.getElementById('IprevArrow');
      const nextArrow = document.getElementById('InextArrow');
      
      if (prevArrow) {
        prevArrow.removeEventListener('click', prevSlide);
      }
      if (nextArrow) {
        nextArrow.removeEventListener('click', nextSlide);
      }
    };
  }, []);

  return (
    <section className="industrySlider" style={{ backgroundColor: '#081f3e', paddingBottom: '3%' }}>
      <div className="expertise-section">
        <h1 className="Ih1">Bridging the Gap between trusted partners & leading OEMs compatibilities</h1>
        <div className="expertise-points">
          <div className="expertise-point">
            <img src="https://i.ibb.co/cLyzWcd/number1.png" loading="lazy" alt="number 1 icon" />
            <p className="Ifeature-text">Drive success with AI-enabled Fleet solutions gaining up to 40% in productivity</p>
          </div>
          <div className="expertise-point">
            <img src="https://i.ibb.co/pKF5H8V/number2.png" loading="lazy" alt="number 2 icon" />
            <p>Aligning industry leaders with OEM Perfection</p>
          </div>
          <div className="expertise-point">
            <img src="https://i.ibb.co/k9c6gGL/number3.png" loading="lazy" alt="number 3 icon" />
            <p className="Ifeature-text">Harnessing data analytics for a greener sustainable future</p>
          </div>
        </div>
      </div>
      
      <div className="Islider-container">
        <div className="Iarrow left" id="IprevArrow"></div>
        <div className="Iarrow right" id="InextArrow"></div>

        <div className="Islider" ref={sliderRef}>
          <div className="Islide">
            <img src="https://i.ibb.co/88tc88W/car.png" loading="lazy" alt="Car Tracking" />
            <div className="Islide-caption"><b>Car Tracking</b></div>
          </div>
          <div className="Islide">
            <img src="/assets/images/mercedes.png" loading="lazy" alt="mercedes" />
            <div className="Islide-caption"><b>GPS Tracking</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/hcMPhtP/motor.png" loading="lazy" alt="Motor Tracking" />
            <div className="Islide-caption"><b>Moto</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/fktQhZz/drifting.png" loading="lazy" alt="driver drifting" />
            <div className="Islide-caption"><b>Driver Behaviour</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/G0sRGJd/shipping.png" loading="lazy" alt="Shipping Tracking" />
            <div className="Islide-caption"><b>Shipping</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/vZ3Fhx8/cruise.png" loading="lazy" alt="Cruise Ship" />
            <div className="Islide-caption"><b>Cruise Ship</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/bFhjgJD/airplane.png" loading="lazy" alt="Airplane Tracking" />
            <div className="Islide-caption"><b>Logistics</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/4WgGSDF/taxi.png" loading="lazy" alt="Taxi Tracking" />
            <div className="Islide-caption"><b>Rental & taxi</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/hcydsdk/emergency.png" loading="lazy" alt="Emergency Vehicles tracking" />
            <div className="Islide-caption"><b>Emergency Vehicles</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/VD6S0Fm/construction.png" loading="lazy" alt="Construction Site equipment tracking" />
            <div className="Islide-caption"><b>Construction Site</b></div>
          </div>
          <div className="Islide">
            <img src="https://i.ibb.co/HFPpSX3/agriculture.png" loading="lazy" alt="Agriculture equipment tracking" />
            <div className="Islide-caption"><b>Agriculture</b></div>
          </div>
        </div>
      </div>
      <br /><br />
    </section>
  );
};

export default IndustrySlider; 