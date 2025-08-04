import React from 'react';
import '../../assets/css/aboutSlider.css';

const AboutSlider = () => {
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

  return (
    <>
      {/* Video Background */}
      <video 
        className="section-4-vd" 
        autoPlay 
        loop 
        muted 
        preload="none"
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
          
          {/* Static Navigation */}
          <nav className="navbarabout">
            <a id="security-link" style={{ cursor: 'pointer' }}>
              <i className="bi bi-shield-lock"></i> AI-enabled Scenarios
            </a>
            <a id="ecosystem-link" style={{ cursor: 'pointer' }}>
              <i className="bi bi-globe"></i> Digital Ecosystem
            </a>
            <a id="workflow-link" className="active1" style={{ cursor: 'pointer' }}>
              <i className="bi bi-diagram-3"></i> Productivity and Efficiency
            </a>
            <a id="visibility-link" style={{ cursor: 'pointer' }}>
              <i className="bi bi-eye"></i> Real-time Visibility
            </a>
          </nav>
          
          {/* Static Progress Bar */}
          <div className="progress-aboutSlider">
            <div 
              className="progress-bar" 
              id="progress-bar"
              style={{
                width: '0px',
                left: '0px',
                transition: 'none'
              }}
            ></div>
          </div>
          
          {/* Static Content - Shows Workflow by default to match the image */}
          <div id="content" className="bounce-in-right animated">
            <p 
              id="text" 
              className="text"
              dangerouslySetInnerHTML={{ __html: contentData.workflow.text }}
            ></p>
            <img
              id="image"
              src={contentData.workflow.image}
              loading="lazy"
              alt="Workflow Image"
              style={{
                borderRadius: '15px',
                width: '35%',
                height: '35%'
              }}
            />
          </div>
        </div>
      </section>

      {/* Client-side JavaScript for tab functionality */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const contentData = ${JSON.stringify(contentData)};
            let currentIndex = 2; // Start with workflow (index 2)
            let interval;
            let isManualClick = false;

            function changeContent(section, isManual = false) {
              const image = document.getElementById('image');
              const text = document.getElementById('text');
              const content = document.getElementById('content');
              const screenWidth = window.screen.width;

              // Clear any existing interval first
              if (interval) {
                clearInterval(interval);
              }

              // Set manual click flag
              if (isManual) {
                isManualClick = true;
                // Reset the flag after a short delay
                setTimeout(() => {
                  isManualClick = false;
                }, 100);
              }

              // Update active link first
              document.querySelectorAll('.navbarabout a').forEach(link => {
                link.classList.remove('active1');
              });
              
              const activeLink = document.getElementById(section + '-link');
              if (activeLink) {
                activeLink.classList.add('active1');
              }

              // Update content immediately without animation interruption
              if (contentData[section]) {
                image.src = contentData[section].image;
                text.innerHTML = contentData[section].text;
              }

              // Update progress bar
              updateProgressBar(activeLink);

              // Only restart interval if it's not a manual click
              if (!isManual) {
                interval = setInterval(autoChangeContent, 5000);
              } else {
                // For manual clicks, start a fresh 5-second timer
                interval = setInterval(autoChangeContent, 5000);
              }
            }

            function updateProgressBar(activeLink) {
              if (!activeLink) return;
              
              const progressBar = document.getElementById('progress-bar');
              const container = document.querySelector('.navbarabout');
              
              if (!progressBar || !container) return;

              const rect = activeLink.getBoundingClientRect();
              const containerRect = container.getBoundingClientRect();
              const width = rect.width;
              const left = rect.left - containerRect.left;

              progressBar.style.transition = 'none';
              progressBar.style.width = '0';
              progressBar.style.left = left + 'px';
              
              setTimeout(() => {
                progressBar.style.transition = 'width 5s linear';
                progressBar.style.width = width + 'px';
              }, 50);
            }

            function autoChangeContent() {
              // Don't auto-change if it's a manual click
              if (isManualClick) return;
              
              const sections = ['security', 'ecosystem', 'workflow', 'visibility'];
              currentIndex = (currentIndex + 1) % sections.length;
              
              // Clear interval before changing content
              if (interval) {
                clearInterval(interval);
              }
              
              changeContent(sections[currentIndex]);
            }

            // Initialize when DOM is loaded
            document.addEventListener('DOMContentLoaded', function() {
              // Delay initialization to prevent hydration mismatch
              setTimeout(() => {
                // Initialize with workflow section
                changeContent('workflow');
                
                // Start auto-change interval
                interval = setInterval(autoChangeContent, 5000);
                
                // Add click event listeners to navigation links
                document.getElementById('security-link').addEventListener('click', function() {
                  currentIndex = 0; // Update current index
                  changeContent('security', true);
                });
                
                document.getElementById('ecosystem-link').addEventListener('click', function() {
                  currentIndex = 1; // Update current index
                  changeContent('ecosystem', true);
                });
                
                document.getElementById('workflow-link').addEventListener('click', function() {
                  currentIndex = 2; // Update current index
                  changeContent('workflow', true);
                });
                
                document.getElementById('visibility-link').addEventListener('click', function() {
                  currentIndex = 3; // Update current index
                  changeContent('visibility', true);
                });
              }, 100); // Small delay to ensure hydration is complete
            });
          `
        }}
      />
    </>
  );
};

export default AboutSlider; 