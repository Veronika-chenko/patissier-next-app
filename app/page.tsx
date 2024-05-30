import Footer from '@/components/modules/Footer';
import StatisticsSection from '@/components/modules/Statistics';
import { default as AboutSection } from '@/containers/about-page/hero-section';
import CoursesSection from '@/containers/home-page/courses-section';
import HeroSection from '@/containers/home-page/hero-section';

export default function Home() {
  return (
    <main className="bg-main-bg">
      {/* there will be a list of Home sections */}
      <HeroSection />
      <StatisticsSection />
      <AboutSection headingLevel="h2" />
      <CoursesSection />
      {/* Reviews */}
      {/* Insta */}
      <Footer />
    </main>
  );
}
