'use client';
import React from 'react';
import Link from 'next/link';
import '../../../assets/css/industries/construction-and-mining/hero.css';

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage:
          'url("https://media.gettyimages.com/id/1280069891/photo/an-excavator-digging-up-dirt-in-a-sand-pit.jpg?s=612x612&w=0&k=20&c=gBU4L9q-hxgfj34lZKz1zkJ3WoWlAPRy3U3wY7a-z50=")',
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ 
          backgroundColor: 'rgba(9, 30, 62, 0.7)', 
          zIndex: 1 
        }}
      />

      {/* Content */}
      <div
        className="container position-relative text-center"
        style={{ zIndex: 2 }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-10 px-3">
            <h1 className="mb-4">
              Construction & Mining
            </h1>

            <p className="mb-5">
              Empowering industries with robust, intelligent fleet solutions
              engineered for rugged operations.
            </p>

            <Link href="/contact" passHref>
              <button className="btn btn-primary btn-lg px-5 py-3">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
