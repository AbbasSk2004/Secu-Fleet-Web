import React from 'react';
import Link from 'next/link';

const JobListing = ({ job }) => {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-auto">
            <span className="material-symbols-outlined bg-light p-3 rounded">
              business_center
            </span>
          </div>
          
          <div className="col">
            <div className="d-flex align-items-center">
              <div>
                <h5 className="card-title mb-2">{job.jobTitle}</h5>
                <div className="d-flex gap-2">
                  <span className="badge bg-light text-dark">
                    {job.jobType}
                  </span>
                  <span className="badge bg-light text-dark">
                    {job.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-auto text-end">
            <div className="h5 fw-bold text-dark mb-1">
              ${job.salary}
            </div>
            <div className="text-muted mb-2">
              /Year
            </div>
            <Link
              href={`/jobs/${job._id}`}
              className="btn btn-primary"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;