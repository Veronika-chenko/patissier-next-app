'use client';
import Container from '@/components/common/container';
import { marianna } from '@/libs/fonts';
import CourseCard from '@/components/modules/Cards/CourseCard';
import { TCourse } from '@/types/Course';
import { useEffect, useState } from 'react';
import ReadMoreLink from '@/components/common/readMoreLink';

const CoursesSection = () => {
  const [courses, setCourses] = useState<TCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db/courses.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
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
    <section className="py-[60px] lg:py-[100px]">
      <Container>
        <div className="flex flex-col">
          <h2
            className={`${marianna.className} mb-[20px] text-[52px] leading-none text-accent-text text-center lg:mb-[32px] lg:text-[84px]`}
          >
            Курси та майстер-класи
          </h2>
          <p className="mb-[40px] lg:mb-[24px] text-[14px] text-grey text-center">
            Перегляньте найближчі події,
            <br /> авторські курси та майстер-класи
          </p>
          {isLoading && (
            <p className="m-auto text-center text-white">Loading...</p>
          )}
          {error && (
            <p className="m-auto text-center text-white">
              Oops, something went wrong. Please try again later.
            </p>
          )}
          {!isLoading && courses && (
            <>
              <ul className="flex flex-col items-center gap-[20px] lg:flex-row lg:gap-[60px] lg:order-1">
                {courses &&
                  courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </ul>
              <div className="flex justify-center lg:justify-end lg:mb-[24px]">
                <ReadMoreLink path="/courses" message="Дивитись усі заходи" />
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CoursesSection;
