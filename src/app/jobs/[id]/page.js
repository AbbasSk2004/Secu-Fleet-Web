import React from 'react';
import Layout from '../../../components/layout/Layout';
import Link from 'next/link';
import '../../../assets/css/animation.css';

// Server-side data fetching
async function getJobDetails(id) {
  try {
    const response = await fetch(`https://secuback.onrender.com/api/careerAndJobs/jobListing/${id}`, {
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
  const job = await getJobDetails(params.id);
  
  if (!job) {
    return {
      title: 'Job Not Found | SecuFleet Careers',
      description: 'The requested job position could not be found.',
    };
  }
  
  return {
    title: `${job.jobTitle} | SecuFleet Careers`,
    description: `Apply for ${job.jobTitle} position at SecuFleet.`,
  };
}

export default async function JobDetails({ params }) {
  const job = await getJobDetails(params.id);

  if (!job) {
    return (
      <Layout>
        <div className="careers-page min-h-screen p-4 bg-[#091E3E]">
          <div className="text-center py-10 text-red-500">
            Job not found
          </div>
          <div className="text-center">
            <Link
              href="/careers"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Back to Careers
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="careers-page min-h-screen p-4 bg-[#091E3E]">
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <Link href="/careers" className="text-blue-600 flex items-center">
              <span className="material-symbols-outlined mr-1">arrow_back</span>
              Back to Careers
            </Link>
          </div>

          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{job.jobTitle}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full">
                {job.jobType}
              </span>
              <span className="bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-3 py-1 rounded-full">
                {job.location}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                ${job.salary}/Year
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              {job.jobDescription || 'No description available.'}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
              {job.requirements ? (
                job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))
              ) : (
                <li>No specific requirements listed.</li>
              )}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
              {job.responsibilities ? (
                job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))
              ) : (
                <li>No specific responsibilities listed.</li>
              )}
            </ul>
          </div>

          <div className="mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              Apply for this Position
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
} 