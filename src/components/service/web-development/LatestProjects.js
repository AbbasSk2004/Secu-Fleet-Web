"use client";

import React, { useEffect, useState } from 'react';
import ProjectGallery from './ProjectGallery';
import ProjectFilters from './ProjectFilters';

const LatestProjects = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [isotopeInstance, setIsotopeInstance] = useState(null);

  useEffect(() => {
    // Initialize Isotope when component mounts
    if (typeof window !== 'undefined' && window.Isotope) {
      const grid = document.querySelector('.isotope');
      if (grid) {
        const iso = new window.Isotope(grid, {
          itemSelector: '.isotope-item',
          layoutMode: 'fitRows'
        });
        setIsotopeInstance(iso);
      }
    }
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (isotopeInstance) {
      if (filter === '.Type1111') {
        // Hide all items
        isotopeInstance.arrange({ filter: () => false });
      } else {
        // Show filtered items
        isotopeInstance.arrange({ filter: filter === '*' ? '*' : filter });
      }
    }
  };

  return (
    <section className="section section-sm section-fluid bg-default text-center" id="projects">
      <div className="container-fluid">
        <h2 className="wow" style={{ color: 'white' }}>Latest Projects</h2>
        <p className="quote-jean wow" style={{ color: 'white' }} data-wow-delay=".1s">
          In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you.
        </p>
        
        <ProjectFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        <ProjectGallery />
      </div>
    </section>
  );
};

export default LatestProjects; 