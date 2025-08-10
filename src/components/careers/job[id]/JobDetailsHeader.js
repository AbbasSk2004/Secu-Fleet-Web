import React from 'react';
import Link from 'next/link';
import '@/assets/css/about/career/job[id]/job-details.css';

const JobDetailsHeader = ({ job }) => {
  return (
    <div className="secufleet-job-details-header wow fadeInUp" data-wow-delay="0.1s">
      <div className="secufleet-back-button-container">
        <Link href="/careers" className="secufleet-back-button">
          <span className="material-symbols-outlined secufleet-back-icon">arrow_back</span>
          Back to Careers
        </Link>
      </div>
      
      <div className="secufleet-job-title-section">
        <h1 className="secufleet-job-title-main">{job.jobTitle}</h1>
        <div className="secufleet-job-subtitle">
          <span className="material-symbols-outlined secufleet-subtitle-icon">work</span>
          Join our dynamic team at SecuFleet
        </div>
      </div>
      
      <div className="secufleet-job-badges-container">
        <div className="secufleet-job-badge">
          <span className="material-symbols-outlined secufleet-badge-icon">schedule</span>
          {job.jobType}
        </div>
        <div className="secufleet-job-badge">
          <span className="material-symbols-outlined secufleet-badge-icon">location_on</span>
          {job.location}
        </div>
        <div className="secufleet-job-badge secufleet-salary-badge">
          <span className="material-symbols-outlined secufleet-badge-icon">payments</span>
          ${job.salary}/Year
        </div>
      </div>
    </div>
  );
};

export default JobDetailsHeader; 