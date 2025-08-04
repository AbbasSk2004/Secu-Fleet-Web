import React from 'react';

const JobSearch = ({ onSearch }) => {
  const handleSearch = () => {
    const jobTitle = document.getElementById('job-title-input').value.toLowerCase();
    const jobType = document.getElementById('job-type-input').value.toLowerCase();
    const location = document.getElementById('location-input').value.toLowerCase();
    
    onSearch({ jobTitle, jobType, location });
  };

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="position-relative">
              <input 
                type="text" 
                id="job-title-input" 
                placeholder="Job Title"
                className="form-control"
              />
              <span
                className="material-symbols-outlined position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                style={{ marginBottom: '10px' }}
              >
                search
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <input 
                type="text" 
                id="job-type-input" 
                placeholder="Job Type"
                className="form-control"
              />
              <span
                className="material-symbols-outlined position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
              >
                work
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="position-relative">
              <input 
                type="text" 
                id="location-input" 
                placeholder="Location"
                className="form-control"
              />
              <span
                className="material-symbols-outlined position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
              >
                location_on
              </span>
            </div>
          </div>
        </div>
        <button 
          onClick={handleSearch}
          className="btn btn-primary w-100 w-md-auto"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default JobSearch;