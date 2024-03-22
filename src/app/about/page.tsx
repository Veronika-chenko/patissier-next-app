import StatisticsSection from '@/components/statistics';
import { PageTitle } from '@/components/texts/titles/PageTitle';
import AboutHeroSection from '@/containers/about-page/hero-section';

const About = () => {
  return (
    <main className="bg-main-bg">
      <PageTitle title="Про нас" />
      <AboutHeroSection headingLevel="h1" />
      <StatisticsSection />
    </main>
  );
};

export default About;
