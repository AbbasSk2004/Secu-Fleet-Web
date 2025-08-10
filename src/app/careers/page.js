'use client';

import React, { useState } from 'react';
import Head from 'next/head';
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
      <Head>
        <title>SecuFleet | Careers</title>
        <meta name="description" content="Join our team at SecuFleet. Browse available job opportunities." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>

      <div className="careers-page">
        <div className="container">
          <header className="careers-header">
            <h1>
              <a href="/">SecuFleet</a> | Careers
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
