'use client';

import React, { useState, useEffect, useRef } from 'react';
import '../../assets/css/home/aboutSlider.css';

const AboutSlider = () => {
  const [currentSection, setCurrentSection] = useState('workflow');
  const [isClient, setIsClient] = useState(false);
  const progressBarRef = useRef(null);
  const intervalRef = useRef(null);
  const isManualClickRef = useRef(false);

  const contentData = {
    security: {
      image: 'https://i.ibb.co/Zh4ncPd/distracted.jpg',
      text: `
        Utilizes AI to enhance fleet security, detecting threats and ensuring safety. Continuously monitors data to prevent breaches and respond to incidents.    
        <br> 
        <span class="icon-text"><i class="bi bi-shield-lock"></i>Proactive threat detection</span>
        <span class="icon-text"><i class="bi bi-camera-video"></i>Automated incident response</span>
        <span class="icon-text"><i class="bi bi-alarm"></i>Improved data analysis</span>
      `
    },
    ecosystem: {
      image: 'https://i.ibb.co/BwtQ56B/Track.png',
      text: `
        Integrates various components of the fleet management system for seamless communication and data exchange, optimizing operations.
        <br>
        <span class="icon-text"><i class="bi bi-globe"></i>Integrated systems</span>
        <span class="icon-text"><i class="bi bi-graph-up"></i>Scalability</span>
        <span class="icon-text"><i class="bi bi-person-lines-fill"></i>Streamlined communication</span>
      `
    },
    workflow: {
      image: 'https://i.ibb.co/BBpx9Nk/truck-Fleet-C.png',
      text: `
        Automates tasks and provides comprehensive reporting, optimizing daily operations and tracking performance metrics.    
        <br>
        <span class="icon-text"><i class="bi bi-diagram-3"></i> Workflow automation</span>
        <span class="icon-text"><i class="bi bi-bar-chart"></i>Performance tracking</span>
        <span class="icon-text"><i class="bi bi-gear"></i>Comprehensive reports</span>
      `
    },
    visibility: {
      image: 'https://i.ibb.co/ygWm38S/Fleet-Management.jpg',
      text: `
        Offers constant monitoring of the fleet, allowing real-time tracking of vehicles and assets for better operational control.
        <br>
        <span class="icon-text"><i class="bi bi-eye"></i>Enhanced control</span>
        <span class="icon-text"><i class="bi bi-map"></i>Improved decision-making</span>
        <span class="icon-text"><i class="bi bi-wifi"></i>Live tracking</span>
      `
    }
  };

  const sections = ['security', 'ecosystem', 'workflow', 'visibility'];

  // Set client flag after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update progress bar
  const updateProgressBar = (section) => {
    if (!isClient || !progressBarRef.current) return;

    const activeLink = document.getElementById(`${section}-link`);
    const container = document.querySelector('.navbarabout');
    
    if (!activeLink || !container) return;

    const rect = activeLink.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const width = rect.width;
    const left = rect.left - containerRect.left;

    const progressBar = progressBarRef.current;
    progressBar.style.transition = 'none';
    progressBar.style.width = '0';
    progressBar.style.left = left + 'px';
    
    setTimeout(() => {
      progressBar.style.transition = 'width 5s linear';
      progressBar.style.width = width + 'px';
    }, 50);
  };

  // Auto change content
  const autoChangeContent = () => {
    if (isManualClickRef.current) return;
    
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    setCurrentSection(sections[nextIndex]);
  };

  // Handle manual section change
  const handleSectionChange = (section) => {
    isManualClickRef.current = true;
    setCurrentSection(section);
    
    // Reset manual click flag after a short delay
    setTimeout(() => {
      isManualClickRef.current = false;
    }, 100);
  };

  // Set up auto-change interval
  useEffect(() => {
    if (!isClient) return;

    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start new interval
    intervalRef.current = setInterval(autoChangeContent, 5000);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSection, isClient]);

  // Update progress bar when section changes
  useEffect(() => {
    if (isClient) {
      updateProgressBar(currentSection);
    }
  }, [currentSection, isClient]);

  return (
    <>
      {/* Video Background */}
      <video 
        className="section-4-vd" 
        autoPlay 
        loop 
        muted 
        preload="none"
        suppressHydrationWarning
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/images/videos/vd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* AboutSlider Section */}
      <section className="aboutSlider-section" style={{ marginTop: '-5px', position: 'relative', backgroundColor: '#081f3e' }}>
        <div className="aboutSlider" id="aboutSlider">
          <h1 className="aboutSliderh1" style={{ color: 'white' }}>Transformation through intelligent operations</h1>
          
          {/* Navigation */}
          <nav className="navbarabout">
            <a 
              id="security-link" 
              style={{ cursor: 'pointer' }}
              className={currentSection === 'security' ? 'active1' : ''}
              onClick={() => handleSectionChange('security')}
            >
              <i className="bi bi-shield-lock"></i> AI-enabled Scenarios
            </a>
            <a 
              id="ecosystem-link" 
              style={{ cursor: 'pointer' }}
              className={currentSection === 'ecosystem' ? 'active1' : ''}
              onClick={() => handleSectionChange('ecosystem')}
            >
              <i className="bi bi-globe"></i> Digital Ecosystem
            </a>
            <a 
              id="workflow-link" 
              style={{ cursor: 'pointer' }}
              className={currentSection === 'workflow' ? 'active1' : ''}
              onClick={() => handleSectionChange('workflow')}
            >
              <i className="bi bi-diagram-3"></i> Productivity and Efficiency
            </a>
            <a 
              id="visibility-link" 
              style={{ cursor: 'pointer' }}
              className={currentSection === 'visibility' ? 'active1' : ''}
              onClick={() => handleSectionChange('visibility')}
            >
              <i className="bi bi-eye"></i> Real-time Visibility
            </a>
          </nav>
          
          {/* Progress Bar */}
          <div className="progress-aboutSlider">
            <div 
              ref={progressBarRef}
              className="progress-bar" 
              id="progress-bar"
              style={{
                width: isClient ? '0px' : '0px',
                left: isClient ? '0px' : '0px',
                transition: isClient ? 'none' : 'none'
              }}
            ></div>
          </div>
          
          {/* Content */}
          <div id="content" className="bounce-in-right animated">
            <p 
              id="text" 
              className="text"
              dangerouslySetInnerHTML={{ __html: contentData[currentSection]?.text || contentData.workflow.text }}
            ></p>
            <img
              id="image"
              src={contentData[currentSection]?.image || contentData.workflow.image}
              loading="lazy"
              alt={`${currentSection} Image`}
              style={{
                borderRadius: '15px',
                width: '35%',
                height: '35%'
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSlider; 