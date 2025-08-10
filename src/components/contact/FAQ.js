"use client";

import React from 'react';
import Script from 'next/script';
import '@/assets/css/faq.css';

const FAQ = () => {
  return (
    <>
      <Script src="/assets/js/faq.js" strategy="afterInteractive" />
      <div className="faq-background" style={{ marginTop: '-1.5%', marginBottom: '0' }}>
        <div className="faq-container">
          <h1>Frequently asked questions</h1>
          
          <div className="faq-item">
            <div className="faq-question">
              <p>What does fleet management do?</p>
              <span className="toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>Fleet management involves the management and coordination of vehicles, drivers, and assets within an organization to improve efficiency and reduce costs.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <p>Who needs fleet management?</p>
              <span className="toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>Businesses that rely on transportation, delivery, or service vehicles need fleet management to optimize operations and ensure safety.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <p>How do I keep track of vehicles?</p>
              <span className="toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>You can use GPS tracking and fleet management software to monitor vehicle locations and status in real-time.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <p>How does fleet management software help improve fleet efficiency?</p>
              <span className="toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>It helps in route optimization, driver behavior monitoring, fuel management, and maintenance scheduling, resulting in improved efficiency.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <p>Can the solution be customizable to suit specific business needs?</p>
              <span className="toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>Yes, fleet management solutions are often customizable to cater to the specific needs and requirements of businesses.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <p>Can it integrate with existing systems or software?</p>
              <span className="toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>Many fleet management systems offer integration capabilities with other software, such as ERP, CRM, or accounting platforms.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <p>What kind of reporting and analytics capabilities does it provide?</p>
              <span className="toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>Fleet management software provides detailed reports on fleet performance, driver behavior, maintenance schedules, and cost analysis.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">
              <p>Is the software scalable to accommodate growing fleets?</p>
              <span className="toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>Yes, most fleet management solutions are scalable to meet the needs of expanding fleets and growing businesses.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ; 