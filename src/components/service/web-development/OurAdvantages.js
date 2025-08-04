import React from 'react';

const OurAdvantages = () => {
  const advantages = [
    {
      title: 'Individual Approach',
      description: 'We use an individual approach to each client',
      image: '/assets/images/works/web/approach.png',
      className: 'box-down cyan'
    },
    {
      title: '24/7 Online Support',
      description: 'We provide round-the-clock support',
      image: '/assets/images/works/web/support.png',
      className: 'red'
    },
    {
      title: 'Various Payment Methods',
      description: 'We offer multiple payment options',
      image: '/assets/images/works/web/money.png',
      className: 'box-down blue'
    },
    {
      title: 'Qualified Employees',
      description: 'We are ready to work on a personalized web solution.',
      image: '/assets/images/works/web/qualified.png',
      className: 'orange'
    }
  ];

  return (
    <section className="ourAdvantages">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
        <h1 className="fw-bold text-primary text-uppercase" style={{ paddingTop: '50px' }}>Our Advantages</h1>
        <h1 className="mb-0" style={{ color: 'white' }}>Discover the unique benefits we offer to enhance your business success.</h1>
      </div>
      
      <div className="row1-container">
        {advantages.slice(0, 3).map((advantage, index) => (
          <div key={index} className={`box ${advantage.className}`}>
            <h2>{advantage.title}</h2>
            <p style={{ color: 'white' }}>{advantage.description}</p>
            <img src={advantage.image} alt={advantage.title} />
          </div>
        ))}
      </div>
      
      <div className="row2-container">
        <div className={`box ${advantages[3].className}`}>
          <h2>{advantages[3].title}</h2>
          <p>{advantages[3].description}</p>
          <img src={advantages[3].image} style={{ height: '35%', width: '20%' }} alt={advantages[3].title} />
        </div>
      </div>
    </section>
  );
};

export default OurAdvantages; 