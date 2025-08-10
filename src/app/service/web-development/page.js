import React from 'react';
import Script from 'next/script';
import Layout from '@/components/layout/Layout';
import HeroSection from '../../../components/service/web-development/HeroSection';
import LatestProjects from '../../../components/service/web-development/LatestProjects';
import VideoBackground from '../../../components/service/web-development/VideoBackground';
import OurAdvantages from '../../../components/service/web-development/OurAdvantages';
import QuoteSection from '../../../components/service/web-development/QuoteSection';
import FAQSection from '../../../components/service/web-development/FAQSection';

export const metadata = {
  title: 'Web Development Services',
  description: 'Professional web development services with modern UI/UX design, responsive layouts, and cutting-edge technologies.',
  keywords: 'web development, website design, UI/UX, responsive design, modern websites, custom web applications',
};

export default function WebDevelopmentPage() {
  return (
    <Layout>
      <HeroSection />
      <LatestProjects />
      <VideoBackground />
      <OurAdvantages />
      <QuoteSection />
      <FAQSection />
      
      {/* Load Isotope for filtering */}
      <Script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" strategy="afterInteractive" />
      
      {/* Load LightGallery for image gallery */}
      <Script src="https://cdn.jsdelivr.net/npm/lightgallery@2.0.0/dist/js/lightgallery.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/lg-thumbnail@2.0.0/dist/lg-thumbnail.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/lg-zoom@2.0.0/dist/lg-zoom.min.js" strategy="afterInteractive" />
      
      {/* Initialize Isotope and LightGallery */}
      <Script id="web-dev-scripts" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize Isotope
            var $grid = document.querySelector('.isotope');
            if ($grid) {
              var iso = new Isotope($grid, {
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows'
              });
            }
            
            // Initialize LightGallery for all galleries
            var galleries = document.querySelectorAll('.lightgallery');
            galleries.forEach(function(gallery) {
              lightGallery(gallery, {
                thumbnail: true,
                zoom: true
              });
            });
          });
        `}
      </Script>
    </Layout>
  );
}