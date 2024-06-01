import { Footer, StatisticsSection } from '@/components';
import { AboutHeroSection, WayToSuccessSection } from '@/containers';

const About = () => {
  return (
    <main className="bg-main-bg">
      <AboutHeroSection headingLevel="h1" />
      <StatisticsSection />
      <WayToSuccessSection />
      <Footer />
    </main>
  );
};

export default About;
