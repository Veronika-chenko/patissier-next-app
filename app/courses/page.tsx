import StatisticsSection from '@/components/modules/Statistics';
import CourseListSection from '@/containers/courses-page/course-list-section';
import CoursesHeroSection from '@/containers/courses-page/hero-section';

const Courses = () => {
  return (
    <main className="bg-main-bg h-screen text-white">
      <CoursesHeroSection />
      <StatisticsSection />
      <CourseListSection />
    </main>
  );
};

export default Courses;
