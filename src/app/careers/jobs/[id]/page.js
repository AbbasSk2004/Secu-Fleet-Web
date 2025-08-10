import React from 'react';
import Layout from '../../../../components/layout/Layout';
import JobDetailsHeader from '../../../../components/careers/job[id]/JobDetailsHeader';
import JobContentSection from '../../../../components/careers/job[id]/JobContentSection';
import JobApplicationForm from '../../../../components/careers/job[id]/JobApplicationForm';
import '@/assets/css/animation.css';

// Server-side data fetching
async function getJobDetails(id) {
  try {
    const response = await fetch(`https://secuback.onrender.com/api/careerAndJobs/job/jobListing/${id}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch job details');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching job details:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const jobData = await getJobDetails(params.id);
  
  if (!jobData) {
    return {
      title: 'Job Not Found | SecuFleet Careers',
      description: 'The requested job position could not be found.',
    };
  }
  
  return {
    title: `${jobData.jobTitle} | SecuFleet Careers`,
    description: `Apply for ${jobData.jobTitle} position at SecuFleet.`,
  };
}

export default async function JobDetails({ params }) {
  const jobData = await getJobDetails(params.id);

  if (!jobData) {
    return (
      <Layout>
        <div className="secufleet-job-details-page">
          <div className="secufleet-job-details-container">
            <div className="secufleet-job-content-container text-center wow fadeInUp" data-wow-delay="0.1s">
              <div className="secufleet-section-header">
                <div className="secufleet-section-icon">
                  <span className="material-symbols-outlined">error</span>
                </div>
                <h2 className="secufleet-section-title">Job Not Found</h2>
              </div>
              <div className="secufleet-content-wrapper">
                <p className="secufleet-section-content">
                  The requested job position could not be found. It may have been removed or the link might be incorrect.
                </p>
                <a
                  href="/careers"
                  className="secufleet-submit-button"
                  style={{ display: 'inline-block', marginTop: '1rem' }}
                >
                  <span className="material-symbols-outlined secufleet-button-icon">arrow_back</span>
                  <span className="secufleet-button-text">Back to Careers</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Map API response to expected component structure
  const job = {
    ...jobData,
    jobType: jobData.jobType || 'Full-time', // Default value if missing
    jobDescription: jobData.description || jobData.jobDescription || 'No description available',
    requirements: Array.isArray(jobData.requirements) 
      ? jobData.requirements 
      : jobData.requirements 
        ? [jobData.requirements] 
        : ['No specific requirements listed'],
    responsibilities: jobData.responsibilities || ['Responsibilities will be discussed during the interview process'],
    skills: jobData.skills || []
  };

  return (
    <Layout>
      <div className="secufleet-job-details-page">
        <div className="secufleet-job-details-container">
          <JobDetailsHeader job={job} />
          
          <JobContentSection
            title="Job Description"
            content={job.jobDescription}
            icon="description"
          />
          
          <JobContentSection
            title="Requirements"
            items={job.requirements}
            icon="checklist"
          />
          
          <JobContentSection
            title="Responsibilities"
            items={job.responsibilities}
            icon="task_alt"
          />
          
          {job.skills && job.skills.length > 0 && (
            <JobContentSection
              title="Skills"
              items={job.skills}
              icon="psychology"
            />
          )}
          
          <JobApplicationForm
            jobId={job._id}
            jobTitle={job.jobTitle}
          />
        </div>
      </div>
    </Layout>
  );
} 