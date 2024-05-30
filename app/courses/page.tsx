// import Footer from '@/components/modules/Footer';
import StatisticsSection from '@/components/modules/Statistics';
import CourseListSection from '@/containers/courses-page/course-list-section';
import CoursesHeroSection from '@/containers/courses-page/hero-section';
import { Suspense } from 'react';

const Courses = () => {
  return (
    <>
      <main className="bg-main-bg h-screen text-white">
        <CoursesHeroSection />
        <StatisticsSection />
        <Suspense fallback={<h1>Loading...</h1>}>
          <CourseListSection />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Courses;
