import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactBanner from '@/components/contact/ContactBanner';
import ContactForm from '@/components/contact/ContactForm';
import OfficeLocations from '@/components/contact/OfficeLocations';
import RequestDemo from '@/components/contact/RequestDemo';
import FAQ from '@/components/contact/FAQ';

// Import only global CSS files

import '@/assets/css/animation.css';

export const metadata = {
  title: 'Contact Us | SecuFleet - Professional Fleet Management Solutions',
  description: 'Get in touch with SecuFleet for comprehensive fleet management solutions. Request a demo, get a quote, or contact our global support team.',
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactBanner />
      <OfficeLocations />
      <RequestDemo />
      <ContactForm />
      <FAQ />
    </Layout>
  );
}
