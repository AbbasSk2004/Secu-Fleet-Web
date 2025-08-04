import React from 'react';
import Link from 'next/link';

const ResourcesSection = () => {
  return (
    <div className="containerBack">
      <div className="content">
        <h1>Our Resources Your Tomorrow</h1>
        <div className="buttons">
          <Link href="/Pages/quote.html" className="btn btn-primary get">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection; 