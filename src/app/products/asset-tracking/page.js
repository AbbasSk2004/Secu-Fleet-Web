import React from 'react';
import Layout from '../../../components/layout/Layout';
import AssetTrackingHero from '../../../components/products/asset-tracking/AssetTrackingHero';
import AssetTrackingSchedule from '../../../components/products/asset-tracking/AssetTrackingSchedule';
import AssetIdentification from '../../../components/products/asset-tracking/AssetIdentification';
import LocationMonitoring from '../../../components/products/asset-tracking/LocationMonitoring';
import DataCollectionAnalysis from '../../../components/products/asset-tracking/DataCollectionAnalysis';
import '../../../assets/css/products.css';

export const metadata = {
  title: 'Asset Tracking - SecuFleet',
  description: 'Advanced asset tracking solutions with RFID, QR codes, and real-time monitoring capabilities.',
};

export default function AssetTrackingPage() {
  return (
    <Layout>
      <AssetTrackingHero />
      <AssetTrackingSchedule />
      <AssetIdentification />
      <LocationMonitoring />
      <DataCollectionAnalysis />
    </Layout>
  );
} 