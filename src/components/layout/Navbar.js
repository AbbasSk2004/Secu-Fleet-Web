"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import '../../assets/css/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutDropdown = (e) => {
    e.preventDefault();
    setAboutDropdownOpen(!aboutDropdownOpen);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    // Close mobile sidebar when dropdown is opened
    setMenuOpen(false);
  };

  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    setProductsDropdownOpen(!productsDropdownOpen);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    // Close mobile sidebar when dropdown is opened
    setMenuOpen(false);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
    setAboutDropdownOpen(false);
    setProductsDropdownOpen(false);
    setIndustriesDropdownOpen(false);
    // Close mobile sidebar when dropdown is opened
    setMenuOpen(false);
  };

  const toggleIndustriesDropdown = (e) => {
    e.preventDefault();
    setIndustriesDropdownOpen(!industriesDropdownOpen);
    setAboutDropdownOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    // Close mobile sidebar when dropdown is opened
    setMenuOpen(false);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setAboutDropdownOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar-desktop">
        <div className="navbar-desktop-container">
          <div className="navbar-desktop-left">
            <Link href="/" className="navbar-desktop-brand">
              <img src="/assets/images/logo/LogoNew-nobg.png" alt="SecuFleet Logo" className="navbar-desktop-logo" />
            </Link>
          </div>
          
          <div className="navbar-desktop-center">
            <ul className="navbar-desktop-menu">
              <li><Link href="/" className="navbar-desktop-link">Home</Link></li>
              <li><a href="#" onClick={toggleAboutDropdown} className="navbar-desktop-link">About</a></li>
              <li><a href="#" onClick={toggleProductsDropdown} className="navbar-desktop-link">Products</a></li>
              <li><a href="#" onClick={toggleServicesDropdown} className="navbar-desktop-link">Services</a></li>
              <li><a href="#" onClick={toggleIndustriesDropdown} className="navbar-desktop-link">Industries</a></li>
            </ul>
          </div>
          
          <div className="navbar-desktop-right">
            <a href="http://fleet.activi.link/login/38" className="navbar-desktop-btn">Login</a>
            <Link href="/quote" className="navbar-desktop-btn navbar-desktop-quote-btn">Free Quote</Link>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Navbar (existing) */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="hamburger scale-in-center" id="hamburger" onClick={toggleMenu}>
            <div className="slider-container">
              <div className="slider-line slider-line-1">
                <div className="slider-animation"></div>
              </div>
              <div className="slider-line slider-line-2">
                <div className="slider-animation"></div>
              </div>
              <div className="slider-line slider-line-3">
                <div className="slider-animation"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="navbar-center">
          <div className="navbar-brand">
            <Link href="/">
              <img src="/assets/images/logo/LogoNew-nobg.png" alt="SecuFleet Logo" className="logo" />
            </Link>
          </div>
        </div>
        
        <div className="navbar-right">
          <a href="http://fleet.activi.link/login/38" className="btn">Login</a>
          <Link href="/quote" className="btn freeQuoteBtn">Free Quote</Link>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div className={`mobile-sidebar-overlay ${menuOpen ? 'active' : ''}`} onClick={closeAll}></div>

      {/* Modern Mobile Sidebar */}
      <div className={`mobile-sidebar ${menuOpen ? 'open' : ''}`} id="mobileSidebar">
        <div className="mobile-sidebar-header">
          <div className="mobile-sidebar-logo">
            <img src="/assets/images/logo/LogoNew-nobg.png" alt="SecuFleet Logo" />
          </div>
          <button className="mobile-sidebar-close" onClick={closeAll}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <nav className="mobile-sidebar-nav">
          <ul className="mobile-sidebar-menu">
            <li className="mobile-sidebar-item">
              <Link href="/" onClick={closeAll} className="mobile-sidebar-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </Link>
            </li>
            
            <li className="mobile-sidebar-item">
              <button onClick={toggleAboutDropdown} className="mobile-sidebar-link mobile-sidebar-dropdown">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                About
              </button>
            </li>
            
            <li className="mobile-sidebar-item">
              <button onClick={toggleProductsDropdown} className="mobile-sidebar-link mobile-sidebar-dropdown">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7L10 17L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Products
              </button>
            </li>
            
            <li className="mobile-sidebar-item">
              <button onClick={toggleServicesDropdown} className="mobile-sidebar-link mobile-sidebar-dropdown">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Services
              </button>
            </li>
            
            <li className="mobile-sidebar-item">
              <button onClick={toggleIndustriesDropdown} className="mobile-sidebar-link mobile-sidebar-dropdown">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9H21V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 9V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Industries
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="mobile-sidebar-footer">
          <div className="mobile-sidebar-buttons">
            <a href="http://fleet.activi.link/login/38" className="mobile-sidebar-btn mobile-sidebar-btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Login
            </a>
            <Link href="/quote" className="mobile-sidebar-btn mobile-sidebar-btn-secondary" onClick={closeAll}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay Modal (shared between desktop and mobile) */}
      <div className={`overlay ${aboutDropdownOpen || productsDropdownOpen || servicesDropdownOpen || industriesDropdownOpen ? 'active' : ''}`} onClick={closeAll}>
        <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={closeAll}>&times;</span>
          
          <div className="dropdown-content" id="aboutDropdownContent" style={{ display: aboutDropdownOpen ? 'flex' : 'none' }}>
            <Link href="/about" onClick={closeAll}>
              <img src="/assets/images/icons/about/about.png" loading="lazy" alt="about secufleet" />
              About Us
            </Link>
            <Link href="/careers" onClick={closeAll}>
              <img src="/assets/images/icons/about/careers.png" loading="lazy" alt="careers at secufleet" />
              Careers
            </Link>
            <Link href="/contact" onClick={closeAll}>
              <img src="/assets/images/icons/about/contact.png" loading="lazy" alt="contact secufleet" />
              Contact Us
            </Link>
          </div>
          
          <div className="dropdown-content" id="productsDropdownContent" style={{ display: productsDropdownOpen ? 'flex' : 'none' }}>
            <Link href="/products/fleet-management" onClick={closeAll}>
              <img src="/assets/images/icons/fleet-management.png" loading="lazy" alt="Fleet Management" />
              Fleet Management
            </Link>
            <Link href="/products/vehicle-inspection" onClick={closeAll}>
              <img src="/assets/images/icons/car-inspection2.png" loading="lazy" alt="vehicle inspection" />
              Vehicle Inspection
            </Link>
            <Link href="/products/route-planing" onClick={closeAll}>
              <img src="/assets/images/icons/route-planning.png" loading="lazy" className="route-planning" alt="route planning" />
              Route Planning
            </Link>
            <Link href="/products/digital-reports" onClick={closeAll}>
              <img src="/assets/images/icons/digital-reports.png" loading="lazy" className="digital-reports" alt="digital reports" />
              Digital Reports
            </Link>
            <Link href="/products/asset-tracking" onClick={closeAll}>
              <img src="/assets/images/icons/asset-tracking.png" loading="lazy" alt="asset tracking" />
              Asset Tracking
            </Link>
            <Link href="/products/gps-tracking" onClick={closeAll}>
              <img src="/assets/images/icons/gps.png" loading="lazy" alt="GPS Tracking and live data" />
              GPS Tracking and Live Data
            </Link>
            <Link href="/products/car-sharing" onClick={closeAll}>
              <img src="/assets/images/icons/car-sharing.png" loading="lazy" alt="Car Sharing tracking" />
              Car Sharing
            </Link>
            <Link href="/products/fleet-efficiency" onClick={closeAll}>
              <img src="/assets/images/icons/efficiency.png" loading="lazy" alt="Fleet Efficiency" />
              Fleet Efficiency
            </Link>
            <Link href="/products/worktime" onClick={closeAll}>
              <img src="/assets/images/icons/worktime.png" loading="lazy" alt="Worktime Tracking" />
              Worktime
            </Link>
            <Link href="/products/adas-and-camera" onClick={closeAll}>
              <img src="/assets/images/icons/adas.png" loading="lazy" alt="ADAS and Camera Systems" />
              ADAS and Camera Systems
            </Link>
            <Link href="/products/driver-behavior" onClick={closeAll}>
              <img src="/assets/images/icons/driver-behavior.png" loading="lazy" alt="Driver Behaviour Tracking" />
              Driver Behaviour
            </Link>
            <Link href="/products/sensor-monitoring" onClick={closeAll}>
              <img src="/assets/images/icons/sensor.png" loading="lazy" alt="Sensor Monitoring" />
              Sensor Monitoring
            </Link>
            <Link href="/products/mobile-integration-tool" onClick={closeAll}>
              <img src="/assets/images/icons/mobile.png" loading="lazy" alt="Mobile Integration Tool" />
              Mobile Integration Tool
            </Link>
            <Link href="/products/api-integration" onClick={closeAll}>
              <img src="/assets/images/icons/api.png" loading="lazy" alt="API Integrations" />
              API Integrations
            </Link>
          </div>
          
          <div className="dropdown-content" id="servicesDropdownContent" style={{ display: servicesDropdownOpen ? 'flex' : 'none' }}>
            <Link href="/service/consulting" className="dropdown-item" onClick={closeAll}>
              <img src="/assets/images/icons/services/consulting2.png" loading="lazy" alt="Consulting" />
              <div>
                <div>Consulting</div>
              </div>
            </Link>
            <Link href="/service/contracting" className="dropdown-item" onClick={closeAll}>
              <img src="/assets/images/icons/services/contracting.png" loading="lazy" alt="Contracting" />
              <div>
                <div>Contracting</div>
              </div>
            </Link>
            <Link href="/service/web-development" className="dropdown-item" onClick={closeAll}>
              <img src="/assets/images/icons/services/web2.png" loading="lazy" alt="Web Development" />
              <div>
                <div>Web Development</div>
              </div>
            </Link>
            <Link href="/service/app-development" className="dropdown-item" onClick={closeAll}>
              <img src="/assets/images/icons/services/appDev.png" loading="lazy" alt="App Development" />
              <div>
                <div>App Development</div>
              </div>
            </Link>
          </div>
          
          <div className="dropdown-content" id="industriesDropdownContent" style={{ display: industriesDropdownOpen ? 'flex' : 'none' }}>
            <Link href="/industries/construction-and-mining" onClick={closeAll}>
              <img src="/assets/images/icons/industries/construction.png" alt="construction icon" loading="lazy" />
              <p>Construction & Mining</p>
            </Link>
            <Link href="/industries/moto-and-quads" onClick={closeAll}>
              <img src="/assets/images/icons/industries/JadMoto.png" alt="atv icon" loading="lazy" />
              Moto, ATV & Quads
            </Link>
            <Link href="/industries/maritime-and-boats" onClick={closeAll}>
              <img src="/assets/images/icons/industries/boat.png" alt="boat icon" loading="lazy" />
              Maritime & boats
            </Link>
            <Link href="/industries/emergency-and-utilities" onClick={closeAll}>
              <img src="/assets/images/icons/industries/ambulance.png" alt="ambulance icon" loading="lazy" />
              Utility & Emergency
            </Link>
            <Link href="/industries/logistics-and-deliveries" onClick={closeAll}>
              <img src="/assets/images/icons/industries/logistic.png" alt="logistic icon" loading="lazy" />
              Logistics & Delivery services
            </Link>
            <Link href="/industries/rental-insurance-and-leasing" onClick={closeAll}>
              <img src="/assets/images/icons/industries/rent1.png" alt="rental icon" loading="lazy" />
              Rental, Insurance & Leasing
            </Link>
            <Link href="/coming-soon" onClick={closeAll}>
              <img src="/assets/images/icons/industries/farming.png" alt="farming icon" loading="lazy" />
              Agriculture & Farming IOT
            </Link>
            <Link href="/coming-soon" onClick={closeAll}>
              <img src="/assets/images/icons/industries/workforce.png" alt="workforce icon" loading="lazy" />
              Assets & Workforce
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 