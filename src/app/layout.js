import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Script from 'next/script';
import BootstrapProvider from '../components/providers/BootstrapProvider';

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add Font Awesome icons to library
library.add(fab, fas);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://secu-fleet-web.vercel.app'

export const metadata = {
  title: {
    default: "SecuFleet - Professional Fleet Management Solutions | GPS Tracking & Analytics",
    template: "%s | SecuFleet - Fleet Management Solutions"
  },
  description: "SecuFleet provides comprehensive fleet management solutions including GPS tracking, vehicle inspection, route planning, driver behavior monitoring, and real-time analytics. Optimize your fleet operations today.",
  keywords: "fleet management, GPS tracking, vehicle inspection, route planning, fleet analytics, telematics, fleet efficiency, driver behavior, asset tracking, fleet optimization, vehicle monitoring, fleet safety, fuel management, maintenance tracking, fleet software, fleet technology, IoT fleet solutions, predictive maintenance, fleet reporting, fleet compliance",
  authors: [{ name: "SecuFleet" }],
  creator: "SecuFleet",
  publisher: "SecuFleet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${baseUrl}/sitemap.xml`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'SecuFleet - Professional Fleet Management Solutions',
    description: 'Comprehensive fleet management solutions: GPS tracking, route optimization, driver monitoring, and real-time analytics for modern fleet operations.',
    siteName: 'SecuFleet',
    images: [
      {
        url: '/assets/images/logo/LogoNew-nobg.png',
        width: 1200,
        height: 630,
        alt: 'SecuFleet - Fleet Management Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SecuFleet - Professional Fleet Management Solutions',
    description: 'Comprehensive fleet management solutions: GPS tracking, route optimization, driver monitoring, and real-time analytics.',
    images: ['/assets/images/logo/LogoNew-nobg.png'],
    creator: '@secufleet',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    yahoo: 'YOUR_YAHOO_VERIFICATION_CODE',
  },
  category: 'Technology',
  classification: 'Fleet Management Software',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#007bff',
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Legacy favicon support */}
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.0.0/dist/css/lightgallery.min.css" rel="stylesheet" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="CXJyONWmRMKq4tUyebOkCqmmArNltry85z0GuUEHgaE" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SecuFleet",
              "url": baseUrl,
              "logo": `${baseUrl}/assets/images/logo/LogoNew-nobg.png`,
              "description": "Professional fleet management solutions and consulting services",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Beirut",
                "addressCountry": "Lebanon"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+961-70-677-712",
                "contactType": "customer service",
                "email": "secufleet@gmail.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/secufleet/",
                "https://www.instagram.com/secufleet",
                "https://www.facebook.com/secufleet"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BootstrapProvider>
          {children}
        </BootstrapProvider>
        
        {/* Load jQuery first - this is critical for Bootstrap */}
        <Script 
          src="/assets/js/products/jquery.min.js" 
          strategy="beforeInteractive"
        />
        
        {/* Load Popper.js after jQuery */}
        <Script 
          src="/assets/js/products/popper.min.js" 
          strategy="beforeInteractive"
        />
        
        {/* Load Bootstrap from local assets - must be after jQuery */}
        <Script 
          src="/assets/js/products/bootstrap.min.js" 
          strategy="beforeInteractive"
        />
        
        {/* Verify dependencies are loaded */}
        <Script 
          id="dependency-check" 
          strategy="afterInteractive" 
          dangerouslySetInnerHTML={{
            __html: `
              console.log('Layout: Checking script dependencies...');
              if (typeof window !== 'undefined') {
                if (window.jQuery) {
                  console.log('Layout: jQuery loaded successfully - version:', window.jQuery.fn.jquery);
                } else {
                  console.error('Layout: jQuery not found!');
                }
                
                if (window.bootstrap) {
                  console.log('Layout: Bootstrap loaded successfully');
                } else {
                  console.error('Layout: Bootstrap not found!');
                }
                
                if (window.Popper) {
                  console.log('Layout: Popper.js loaded successfully');
                } else {
                  console.error('Layout: Popper.js not found!');
                }
              }
            `
          }}
        />
        
        {/* Load WOW.js */}
        <Script src="/assets/lib/wow/wow.min.js" strategy="afterInteractive" />
        
        {/* Initialize WOW.js after it loads */}
        <Script 
          id="wowjs-init" 
          strategy="afterInteractive" 
          dangerouslySetInnerHTML={{
            __html: `
              function initWOW() {
                if (typeof window !== 'undefined' && window.WOW) { 
                  new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false, live: true }).init();
                  console.log('WOW.js initialized successfully');
                } else {
                  setTimeout(initWOW, 50);
                }
              }
              initWOW();
            `
          }}
        />
        
        {/* Load Waypoints library first - required by CounterUp */}
        <Script 
          src="/assets/lib/waypoints/waypoints.min.js" 
          strategy="afterInteractive"
        />
        
        {/* Load Counterup library after Waypoints */}
        <Script 
          src="/assets/lib/counterup/counterup.min.js" 
          strategy="afterInteractive"
        />
        
        {/* Load Owl Carousel library */}
        <Script src="/assets/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
        
        {/* Load Vimeo player */}
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
        
        {/* Load custom JavaScript files - ensuring dependencies are loaded first */}
        <Script src="/assets/js/faq.js" strategy="afterInteractive" />
        
        {/* Load main.js last after all dependencies with proper dependency checking */}
        <Script 
          id="main-js-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function loadMainJS() {
                // Check if all dependencies are loaded
                if (typeof window !== 'undefined' && 
                    window.jQuery && 
                    window.jQuery.fn.waypoint && 
                    window.jQuery.fn.counterUp) {
                  
                  console.log('All dependencies loaded: jQuery, Waypoints, CounterUp');
                  
                  // Load main.js
                  const script = document.createElement('script');
                  script.src = '/assets/js/main.js';
                  script.onload = () => console.log('Main.js loaded and executed successfully');
                  script.onerror = () => console.error('Failed to load Main.js');
                  document.head.appendChild(script);
                } else {
                  console.log('Waiting for dependencies: jQuery:', !!window.jQuery, 'Waypoints:', !!(window.jQuery && window.jQuery.fn.waypoint), 'CounterUp:', !!(window.jQuery && window.jQuery.fn.counterUp));
                  setTimeout(loadMainJS, 100);
                }
              }
              
              // Start checking after a small delay to allow other scripts to load
              setTimeout(loadMainJS, 200);
            `
          }}
        />
        
        {/* Custom JavaScript for interactivity */}
        <Script 
          id="custom-interactivity" 
          strategy="afterInteractive" 
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll to top on page refresh
              window.addEventListener('beforeunload', function() {
                window.scrollTo(0, 0);
              });
              
              // Also scroll to top when page loads
              window.addEventListener('load', function() {
                window.scrollTo(0, 0);
              });
              
              // Additional scroll to top for route changes in Next.js
              if (typeof window !== 'undefined') {
                // Store scroll position before unload
                window.addEventListener('beforeunload', function() {
                  sessionStorage.setItem('scrollPosition', '0');
                });
                
                // Scroll to top on page load
                window.addEventListener('load', function() {
                  const scrollPosition = sessionStorage.getItem('scrollPosition');
                  if (scrollPosition === '0' || scrollPosition === null) {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: 'instant'
                    });
                  }
                });
              }
              
              // FAQ Functionality
              document.addEventListener('DOMContentLoaded', function() {
                const faqItems = document.querySelectorAll('.faq-item');
                
                faqItems.forEach(item => {
                  const question = item.querySelector('.faq-question');
                  const toggle = question.querySelector('.toggle');
                  
                  question.addEventListener('click', () => {
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                      if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.toggle').textContent = '+';
                      }
                    });
                    
                    // Toggle current FAQ item
                    item.classList.toggle('active');
                    toggle.textContent = item.classList.contains('active') ? '-' : '+';
                  });
                });
                
                // Navbar Functionality
                const hamburger = document.getElementById('hamburger');
                const navbarMenu = document.getElementById('navbarMenu');
                const overlay = document.getElementById('overlay');
                const closeBtn = document.querySelector('.close-btn-sidebar');
                const closeOverlayBtn = document.querySelector('.close-btn');
                const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
                
                if (hamburger) {
                  hamburger.addEventListener('click', () => {
                    navbarMenu.classList.toggle('open');
                  });
                }
                
                if (closeBtn) {
                  closeBtn.addEventListener('click', () => {
                    navbarMenu.classList.remove('open');
                    overlay.classList.remove('active');
                    hideAllDropdowns();
                  });
                }
                
                if (closeOverlayBtn) {
                  closeOverlayBtn.addEventListener('click', () => {
                    overlay.classList.remove('active');
                    hideAllDropdowns();
                  });
                }
                
                dropdownToggles.forEach(toggle => {
                  toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    const dropdownType = toggle.getAttribute('data-dropdown');
                    showDropdown(dropdownType);
                  });
                });
                
                function showDropdown(type) {
                  hideAllDropdowns();
                  overlay.classList.add('active');
                  const dropdownContent = document.getElementById(type + 'DropdownContent');
                  if (dropdownContent) {
                    dropdownContent.style.display = 'flex';
                  }
                }
                
                function hideAllDropdowns() {
                  const dropdownContents = document.querySelectorAll('.dropdown-content');
                  dropdownContents.forEach(content => {
                    content.style.display = 'none';
                  });
                }
                
                // About Slider Functionality
                const navLinks = document.querySelectorAll('.nav-link');
                const contentDivs = document.querySelectorAll('.content');
                const imageDivs = document.querySelectorAll('.section-image');
                
                navLinks.forEach(link => {
                  link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = link.getAttribute('href').substring(1);
                    
                    // Update active states
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    
                    contentDivs.forEach(div => div.classList.remove('active'));
                    imageDivs.forEach(img => img.classList.remove('active'));
                    
                    const targetContent = document.getElementById(target + '-content');
                    const targetImage = document.getElementById(target + '-image');
                    
                    if (targetContent) targetContent.classList.add('active');
                    if (targetImage) targetImage.classList.add('active');
                  });
                });
              });
            `
          }}
        />
      </body>
    </html>
  );
}
