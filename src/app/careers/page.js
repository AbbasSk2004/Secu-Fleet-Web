"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import JobSearch from '../../components/careers/JobSearch';
import JobListingsContainer from '../../components/careers/JobListingsContainer';

import '../../assets/css/animation.css';
import '../../assets/css/about/career/careers.css';
import '../../assets/css/about/career/job-search.css';
import '../../assets/css/about/career/job-listing.css';

const Careers = () => {
  const [searchParams, setSearchParams] = useState({ jobTitle: '', jobType: '', location: '' });

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <Layout>
      <div className="careers-page">
        <div className="container">
          <header className="careers-header">
            <h1>
              <Link href="/">SecuFleet</Link> | Careers
            </h1>
          </header>
          
          <JobSearch onSearch={handleSearch} />
          <JobListingsContainer searchParams={searchParams} />
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
