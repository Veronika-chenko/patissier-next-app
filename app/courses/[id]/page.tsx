'use client';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { TCourse } from '@/types/Course';
import { Footer } from '@/components';
import {
  AboutCourseSection,
  DetailsSection,
  FeatureSection,
} from '@/containers';

interface CoursePageProps {
  params: { id: string };
}

const CourseDetails: FC<CoursePageProps> = ({ params }) => {
  const [course, setCourse] = useState<TCourse>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db/courses.json');
        const data = await response.json();

        const definedCourse = data.courses.find(
          (item: TCourse) => item.id === +params.id
        );

        setCourse(definedCourse);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <main className="relative grow">
        {isLoading && (
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto text-center text-white">
            Loading...
          </p>
        )}
        {error && (
          <p className="m-auto text-center text-white">
            Oops, something went wrong. Please try again later.
          </p>
        )}
        {!isLoading && !course && (
          <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:top-0 grid place-items-center">
            <div className="py-[20px] px-[8px] lg:p-[0]">
              <p className="text-center text-white mb-[40px]">
                Курс не знайдено. <br /> Невалідне посилання або курс більше не
                дійсний.
              </p>
              <Link
                href="/courses"
                className="flex justify-center items-center w-full lg:w-[216px] p-[16px] lg:mx-auto font-bold text-black bg-accent hover:bg-accent-dark focus:bg-accent-dark ease-linear duration-250 rounded-md"
              >
                До курсів
              </Link>
            </div>
          </div>
        )}
        {!isLoading && course && (
          <>
            <AboutCourseSection course={course} />
            <FeatureSection features={course.features} type={course.type} />
            <DetailsSection
              program={course.program}
              imageURL={course.images[1]}
              category={course.category}
              price={course.groups[0].price}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetails;
