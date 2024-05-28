import { PageTitle } from '@/components/common/texts/titles/PageTitle';
import Footer from '@/components/modules/Footer';
import CourseListSection from '@/containers/courses-page/course-list-section';
import CoursesHeroSection from '@/containers/courses-page/hero-section';

const Courses = () => {
  return (
    <main className="bg-main-bg h-screen text-white">
      <PageTitle title="Курси" />
      <CoursesHeroSection />
      <CourseListSection />
      <Footer />
    </main>
  );
};

export default Courses;
