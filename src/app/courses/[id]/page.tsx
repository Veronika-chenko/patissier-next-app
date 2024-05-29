'use client';
import AboutCourseSection from '@/containers/course-details-page/about-section';
import DetailsSection from '@/containers/course-details-page/details-section';
import FeatureSection from '@/containers/course-details-page/feature-section';
import { TCourse } from '@/types/Course';
import { FC, useEffect, useState } from 'react';

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
    <>
      {isLoading && <p className="m-auto text-center text-white">Loading...</p>}
      {error && (
        <p className="m-auto text-center text-white">
          Oops, something went wrong. Please try again later.
        </p>
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
    </>
  );
};

export default CourseDetails;
