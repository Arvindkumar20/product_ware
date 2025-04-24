import HowItWorks from '../components/sections/HowItWorks';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import HeroSection from '../components/sections/HeroSection';

export default function Home() {
  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900">
      <HeroSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
