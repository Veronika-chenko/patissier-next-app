import { Footer, StatisticsSection } from '@/components';
import { AboutHeroSection } from '@/containers';

const About = () => {
  return (
    <main className="bg-main-bg">
      <AboutHeroSection headingLevel="h1" />
      <StatisticsSection />
      <Footer />
    </main>
  );
};

export default About;
