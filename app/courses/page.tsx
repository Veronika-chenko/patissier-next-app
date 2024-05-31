// import Footer from '@/components/modules/Footer';
import { StatisticsSection } from '@/components';
import { CourseListSection, CoursesHeroSection } from '@/containers';
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
