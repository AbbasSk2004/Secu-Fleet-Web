import React from 'react';
import Layout from '@/components/layout/Layout';
import WorktimeHero from '@/components/products/worktime/WorktimeHero';
import WorktimeSchedule from '@/components/products/worktime/WorktimeSchedule';
import WorktimeServices from '@/components/products/worktime/WorktimeServices';
import WorktimeAbout from '@/components/products/worktime/WorktimeAbout';
import WorktimeAdjustments from '@/components/products/worktime/WorktimeAdjustments';
import '@/assets/css/products.css';
import '@/assets/css/animation.css';

export const metadata = {
	title: 'Worktime Tracking - SecuFleet',
	description: 'Track and optimize employee worktime with automated schedules, adjustments, and analytics for your fleet.',
}

const WorktimePage = () => {
  return (
    <Layout>
      <WorktimeHero />
      <WorktimeSchedule />
      <WorktimeServices />
      <WorktimeAbout />
      <WorktimeAdjustments />
    </Layout>
  );
};

export default WorktimePage; 