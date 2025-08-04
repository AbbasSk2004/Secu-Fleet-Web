import AppDevelopmentHeader from '@/components/service/app-development/AppDevelopmentHeader';
import AppDevelopmentPortfolio from '@/components/service/app-development/AppDevelopmentPortfolio';
import QuoteRequestSection from '@/components/service/app-development/QuoteRequestSection';
import Layout from '@/components/layout/Layout';
/* Import App Development specific styles */
import '../../../assets/css/App.css';
export const metadata = {
  title: 'App Development',
  description: 'Innovative mobile apps that drive success. Our qualified team of interface designers and software developers creates unique solutions for your business needs.',
  keywords: 'app development, mobile apps, iOS development, Android development, React Native, Flutter, UI/UX design',
};

export default function AppDevelopmentPage() {
  return (
    <Layout>
      <AppDevelopmentHeader />
      <AppDevelopmentPortfolio />
      <QuoteRequestSection />
    </Layout>
  );
} 