import React from 'react';

const ProjectFilters = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { value: '*', label: 'All' },
    { value: '.Type1', label: 'Restaurants' },
    { value: '.Type2', label: 'Admin Pages' },
    { value: '.Type3', label: 'Hotels' },
    { value: '.Type4', label: 'Cars' },
    { value: '.Type5', label: 'Construction' },
    { value: '.Type6', label: 'Interior Design' },
    { value: '.Type1111', label: 'Hide All', className: 'hideAll' }
  ];

  const handleFilterClick = (e, filterValue) => {
    e.preventDefault();
    onFilterChange(filterValue);
  };

  return (
    <div className="isotope-filters isotope-filters-horizontal">
      <ul className="isotope-filters-list" id="isotope-3 article">
        {filters.map((filter) => (
          <li key={filter.value}>
            <a
              href="#article"
              className={activeFilter === filter.value ? 'webactive' : ''}
              onClick={(e) => handleFilterClick(e, filter.value)}
              data-isotope-filter={filter.value}
              data-isotope-group="gallery"
              style={filter.className === 'hideAll' ? { backgroundColor: 'red' } : {}}
            >
              {filter.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFilters; 