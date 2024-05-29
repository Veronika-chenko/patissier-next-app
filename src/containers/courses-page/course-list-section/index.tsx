'use client';
import Container from '@/components/common/container';
import CourseCard from '@/components/modules/Cards/CourseCard';
import { TCourse } from '@/types/Course';
import { useEffect, useState } from 'react';

const CourseListSection = () => {
  const [courses, setCourses] = useState<TCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db/courses.json');
        const data = await response.json();

        setCourses(data.courses);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <Container>
        {isLoading && (
          <p className="m-auto text-center text-white">Loading...</p>
        )}
        {error && (
          <p className="m-auto text-center text-white">
            Oops, something went wrong. Please try again later.
          </p>
        )}
        <ul className="flex flex-col gap-[20px] lg:flex-row lg:gap-[60px]">
          {courses &&
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </ul>
      </Container>
    </section>
  );
};

export default CourseListSection;
