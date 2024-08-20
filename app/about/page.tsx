import { Footer, StatisticsSection } from '@/components';
import {
  AboutHeroSection,
  GallerySection,
  WayToSuccessSection,
} from '@/containers';

const About = () => {
  return (
    <main className="bg-main-bg">
      <AboutHeroSection headingLevel="h1" />
      <StatisticsSection />
      <WayToSuccessSection />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default About;
