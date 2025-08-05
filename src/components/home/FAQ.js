"use client";

import React, { useState } from 'react';
import '../../assets/css/faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What does fleet management do?",
      answer: "Fleet management involves the management and coordination of vehicles, drivers, and assets within an organization to improve efficiency and reduce costs."
    },
    {
      question: "Who needs fleet management?",
      answer: "Businesses that rely on transportation, delivery, or service vehicles need fleet management to optimize operations and ensure safety."
    },
    {
      question: "How do I keep track of vehicles?",
      answer: "You can use GPS tracking and fleet management software to monitor vehicle locations and status in real-time."
    },
    {
      question: "How does fleet management software help improve fleet efficiency?",
      answer: "It helps in route optimization, driver behavior monitoring, fuel management, and maintenance scheduling, resulting in improved efficiency."
    },
    {
      question: "Can the solution be customizable to suit specific business needs?",
      answer: "Yes, fleet management solutions are often customizable to cater to the specific needs and requirements of businesses."
    },
    {
      question: "Can it integrate with existing systems or software?",
      answer: "Many fleet management systems offer integration capabilities with other software, such as ERP, CRM, or accounting platforms."
    },
    {
      question: "What kind of reporting and analytics capabilities does it provide?",
      answer: "Fleet management software provides detailed reports on fleet performance, driver behavior, maintenance schedules, and cost analysis."
    },
    {
      question: "Is the software scalable to accommodate growing fleets?",
      answer: "Yes, most fleet management solutions are scalable to meet the needs of expanding fleets and growing businesses."
    }
  ];

  return (
    <div className="faq-background">
      <div className="faq-container">
        <h1>Frequently asked questions</h1>
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active2' : ''}`}
          >
            <div 
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <p>{faq.question}</p>
              <span className="toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 