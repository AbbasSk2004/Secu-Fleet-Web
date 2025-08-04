import React from 'react';

const FeaturesGrid = () => {
  const features = [
    'Crafting Strategic Frameworks',
    'Organizational Business Strategy Education',
    'Prioritizing Strategic Goals',
    'Keys to Successful Strategic Formulation'
  ];

  return (
    <div className="contain">
      {features.map((feature, index) => (
        <div key={index} className="box">
          <i className="fas fa-check"></i>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid; 