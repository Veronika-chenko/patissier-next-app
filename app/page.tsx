import { Footer, StatisticsSection, ReviewsSection } from '@/components';
import { AboutHeroSection, CoursesSection, HeroSection } from '@/containers';

export default function Home() {
  return (
    <>
      <main className="bg-main-bg">
        {/* there will be a list of Home sections */}
        <HeroSection />
        <StatisticsSection />
        <AboutHeroSection headingLevel="h2" />
        <CoursesSection />
        <ReviewsSection />
        {/* Insta */}
      </main>
      <Footer />
    </>
  );
}
