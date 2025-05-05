import { Helmet } from 'react-helmet';
import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import HeroSection from '../components/sections/HeroSection';

export default function Home() {
  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900">
      <Helmet>
        <title>Welcome to Product Ware </title>
        <meta name="description" content="Discover how Product ware helps streamline your process with powerful features, real user testimonials, and a seamless experience." />
        <meta name="keywords" content="workflow, productivity, SaaS, features, testimonials, web app" />
        <meta name="author" content="Product ware" />
        <link rel="canonical" href="https://www.productware.in/logo.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Productware - Simplify Your Workflow" />
        <meta property="og:description" content="Streamline your workflow with Product ware. See features, testimonials, and how it works." />
        <meta property="og:url" content="https://www.productware.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.productware.in/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="product ware - Simplify Your Workflow" />
        <meta name="twitter:description" content="Streamline your workflow with product ware. See features, testimonials, and how it works." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/logo.png" />
      </Helmet>

      <HeroSection />
      <HowItWorks />
      {/* <Features /> */}
      <Testimonials />
      {/* <CallToAction /> */}
    </div>
  );
}
