'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import JobSearch from '../../components/careers/JobSearch';
import JobListingsContainer from '../../components/careers/JobListingsContainer';

import '../../assets/css/animation.css';

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

        {/* Page-specific styles to mirror the static site */}
        <style>{`
          body { background-color: #091E3E !important; }
          span { color: rgb(6, 163, 218) !important; }
          .footerLogo { width: 1px; }
        `}</style>
      </Head>

      <div className="careers-page min-vh-100 p-4" style={{ backgroundColor: '#091E3E' }}>
        <div className="container">
          <header className="d-flex justify-content-between align-items-center py-4">
            <h1 className="h2 fw-bold text-white">SecuFleet | Careers</h1>
          </header>
          
          <JobSearch onSearch={handleSearch} />
          <JobListingsContainer searchParams={searchParams} />
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
