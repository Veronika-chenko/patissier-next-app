'use client';
import Container from '@/components/common/container';
import CourseCard from '@/components/modules/Cards/CourseCard';
import { TCourse } from '@/types/Course';
import { useEffect, useState } from 'react';

const CourseListSection = () => {
  const [courses, setCourses] = useState<TCourse[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db/courses.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log('🚀 ~ data:', data);
        setCourses(data.courses);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <Container>
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
