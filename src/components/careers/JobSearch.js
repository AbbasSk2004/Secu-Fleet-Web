import React from 'react';

const JobSearch = ({ onSearch }) => {
  const handleSearch = () => {
    const jobTitle = document.getElementById('job-title-input').value.toLowerCase();
    const jobType = document.getElementById('job-type-input').value.toLowerCase();
    const location = document.getElementById('location-input').value.toLowerCase();
    
    onSearch({ jobTitle, jobType, location });
  };

  return (
    <div className="job-search-container">
      <div className="search-input-group">
        <div className="search-grid">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              id="job-title-input" 
              placeholder="Job Title"
              className="search-input"
            />
            <span className="material-symbols-outlined search-icon">
              search
            </span>
          </div>
          
          <div className="search-input-wrapper">
            <input 
              type="text" 
              id="job-type-input" 
              placeholder="Job Type"
              className="search-input"
            />
            <span className="material-symbols-outlined search-icon">
              work
            </span>
          </div>
          
          <div className="search-input-wrapper">
            <input 
              type="text" 
              id="location-input" 
              placeholder="Location"
              className="search-input"
            />
            <span className="material-symbols-outlined search-icon">
              location_on
            </span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleSearch}
        className="search-button"
      >
        Search Jobs
      </button>
    </div>
  );
};

export default JobSearch;