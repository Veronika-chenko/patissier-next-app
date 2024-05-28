'use client';
import Container from '@/components/common/container';
import { marianna } from '@/libs/fonts';
import CourseCard from '@/components/modules/Cards/CourseCard';
import { TCourse } from '@/types/Course';
import { useEffect, useState } from 'react';

const CoursesSection = () => {
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
    <section className="">
      <Container>
        <div>
          <h2
            className={`${marianna.className} mb-[20px] text-[52px] text-accent-text text-center lg:mb-[32px] lg:text-[84px]`}
          >
            Курси та майстер-класи
          </h2>
          <p className="mb-[40px] lg:mb-[24px] text-[14px] text-grey text-center">
            Перегляньте найближчі події,
            <br /> авторські курси та майстер-класи
          </p>
          <ul className="flex flex-col gap-[20px] lg:flex-row lg:gap-[60px]">
            {courses &&
              courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default CoursesSection;
