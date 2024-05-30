import Footer from '@/components/modules/Footer';
import StatisticsSection from '@/components/modules/Statistics';
import AboutHeroSection from '@/containers/about-page/hero-section';

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
