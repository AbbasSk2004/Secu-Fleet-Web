import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ConsultingExpertise = () => {
  const expertiseLinks = [
    { href: '/Service/consulting/strategy-service.html', text: 'Business Strategy' },
    { href: '/Service/consulting/customer-strategy.html', text: 'Customer Strategy' },
    { href: '/Service/consulting/Operations-Strategy-Consulting.html', text: 'Operations Strategy' },
    { href: '/Service/consulting/Consulting Organizational Stratetgy.html', text: 'Organizational Strategy' },
    { href: '/Service/consulting/consulting&Innovation.html', text: 'Consulting innovation' },
    { href: '/Service/consulting/Technology-strategies-services.html', text: 'Technology Strategy' },
    { href: '/Service/consulting/Product-&-innovation-Strategy-Services.html', text: 'Digital Marketing Strategies' },
    { href: '/Service/consulting/case-study.html', text: 'Case Studies' }
  ];

  return (
    <section id="section2" style={{ marginRight: '35px' }}>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4 mobileImg" style={{ paddingLeft: 0 }}>
              <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                <Image 
                  className="position-absolute img-fluid w-75"
                  src="https://i.ibb.co/KL70MQJ/filen.png" 
                  alt="Consulting"
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover', right: '10%' }}
                />
              </div>
            </div>
            <div className="col-lg-6 mobile" style={{ paddingRight: 0 }}>
              <div className="section-title position-relative pb-3 mb-5">
                <h1 className="mb-0">Consulting Expertise</h1>
              </div>
              <p className="mb-4">
                We help our clients build frameworks based on understanding their unique
                strengths while increasing their supply chains and assets sustainability, ensuring scale to
                think and deliver big.
              </p>
              <div className="link-animated">
                {expertiseLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <Link href={link.href} className="list">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      {link.text}
                    </Link>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingExpertise; 