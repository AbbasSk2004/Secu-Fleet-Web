import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="container-fluid position-relative p-0">
      <div className="container-fluid bg-primary py-5 bg-header1">
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Web Development</h1>
            <Link href="/" className="h5 text-white">Home</Link>
            <i className="far fa-circle text-white px-2"></i>
            <Link href="/service/web-development" className="h5 text-white">Web Development</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 