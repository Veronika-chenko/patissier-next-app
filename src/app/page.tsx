// import Image from 'next/image';

import StatisticsSection from '@/components/statistics';
import { default as AboutSection } from '@/containers/about-page/hero-section';
import HeroSection from '@/containers/home-page/hero-section';

export default function Home() {
  return (
    <main className="bg-main-bg">
      {/* there will be a list of Home sections */}
      <HeroSection />
      <StatisticsSection />
      <AboutSection headingLevel="h2" />
      {/* Courses */}
      {/* Courses */}
      {/* Reviews */}
      {/* Insta */}
    </main>
  );
}
