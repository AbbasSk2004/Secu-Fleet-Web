import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';

const JobListingsContainer = ({ searchParams }) => {
  const [jobListings, setJobListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobListings();
  }, []);

  useEffect(() => {
    if (searchParams && jobListings.length > 0) {
      filterJobs();
    }
  }, [searchParams]);

  const fetchJobListings = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://secuback.onrender.com/api/careerAndJobs/jobListing');
      
      if (!response.ok) {
        throw new Error('Failed to fetch job listings');
      }
      
      const data = await response.json();
      setJobListings(data);
      setFilteredListings(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const filterJobs = () => {
    const { jobTitle, jobType, location } = searchParams;
    
    const filtered = jobListings.filter(job => {
      return (jobTitle === '' || job.jobTitle.toLowerCase().includes(jobTitle)) &&
             (jobType === '' || job.jobType.toLowerCase().includes(jobType)) &&
             (location === '' || job.location.toLowerCase().includes(location));
    });
    
    setFilteredListings(filtered);
  };

  if (isLoading) {
    return (
      <div className="job-listings-loading">
        <div className="d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary me-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          Loading job listings...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="job-listings-error">
        <div className="d-flex align-items-center justify-content-center">
          <span className="material-symbols-outlined me-2">error</span>
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="job-listings-container">
      {filteredListings.length > 0 ? (
        <div className="job-listings-grid">
          {filteredListings.map(job => (
            <div key={job._id} className="job-listing-wrapper">
              <JobListing job={job} />
            </div>
          ))}
        </div>
      ) : (
        <div className="job-listings-empty">
          <div className="d-flex align-items-center justify-content-center">
            <span className="material-symbols-outlined me-2">search_off</span>
            No job listings found matching your criteria.
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListingsContainer;