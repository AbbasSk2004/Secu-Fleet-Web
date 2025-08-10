import React from 'react';
import Link from 'next/link';

const JobListing = ({ job }) => {
  return (
    <div className="job-listing-card">
      <div className="job-listing-content">
        <div className="job-icon-container">
          <span className="material-symbols-outlined job-icon">
            business_center
          </span>
        </div>
        
        <div className="job-details">
          <h3 className="job-title">{job.jobTitle}</h3>
          <div className="job-badges">
            <span className="job-badge">
              {job.jobType}
            </span>
            <span className="job-badge">
              {job.location}
            </span>
          </div>
        </div>
        
        <div className="job-salary-section">
          <div className="salary-amount">
            ${job.salary}
          </div>
          <div className="salary-period">
            /Year
          </div>
          <Link
            href={`/careers/jobs/${job._id}`}
            className="apply-button"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;