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
    return <div className="text-center py-5">Loading job listings...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Error: {error}</div>;
  }

  return (
    <div className="mt-4">
      {filteredListings.length > 0 ? (
        <div className="row g-4">
          {filteredListings.map(job => (
            <div key={job._id} className="col-12">
              <JobListing job={job} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">No job listings found matching your criteria.</div>
      )}
    </div>
  );
};

export default JobListingsContainer;