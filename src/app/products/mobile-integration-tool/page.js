"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import '../../../assets/css/products.css';
import HeroSection from '../../../components/products/mobile-integration-tool/HeroSection';
import ScheduleSection from '../../../components/products/mobile-integration-tool/ScheduleSection';
import SafetyComplianceSection from '../../../components/products/mobile-integration-tool/SafetyComplianceSection';
import TaskManagementSection from '../../../components/products/mobile-integration-tool/TaskManagementSection';
import PerformanceMonitoringSection from '../../../components/products/mobile-integration-tool/PerformanceMonitoringSection';

export default function MobileIntegrationToolPage() {
  return (
    <Layout>
      <HeroSection />
      <ScheduleSection />
      <SafetyComplianceSection />
      <TaskManagementSection />
      <PerformanceMonitoringSection />
    </Layout>
  );
} 