import React from 'react';
import Layout from '@/components/layout/Layout';
import ContactBanner from '@/components/contact/ContactBanner';
import ContactInfo from '@/components/contact/ContactInfo';
import WorldwideOffices from '@/components/contact/WorldwideOffices';
import FAQ from '@/components/contact/FAQ';
import '@/assets/css/contact.css';
import '@/assets/css/faq.css';
import '@/assets/css/animation.css';

export const metadata = {
  title: 'Contact Us | SecuFleet',
  description: 'Get in touch with SecuFleet for fleet management solutions.',
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactBanner />
      <ContactInfo />
      <WorldwideOffices />
      <FAQ />
    </Layout>
  );
}
