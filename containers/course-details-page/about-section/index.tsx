import { BackButton, Container } from '@/components';
import { marianna } from '@/libs/fonts';
import { TCourse } from '@/types/Course';
import Image from 'next/image';
import { FC } from 'react';

interface ICourseProps {
  course: TCourse;
}

export const AboutCourseSection: FC<ICourseProps> = ({ course }) => {
  const { category, type, previewText, description, images } = course;

  const displayedType = type === 'courses' ? 'курс' : 'майстер-клас';
  const descriptionArray = description.split('\n\n');

  return (
    <section className="relative py-[60px] lg:py-[100px]">
      <Container>
        <div>
          <div className="absolute top-[20px] lg:top-[60px]">
            <BackButton />
          </div>
          <h1
            className={`${marianna.className} mb-[40px] text-[72px] text-accent-text text-center lg:mb-[32px] lg:text-[84px]`}
          >
            {category}
          </h1>
          <p className="hidden lg:block lg:mb-[100px] mx-auto max-w-[558px] text-center text-[14px] text-grey">
            {previewText}
          </p>
          <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[58px]">
            <div className="shrink-0 rounded-md shadow-[0_0_209px_-30px_#C7673833]">
              <Image
                src={images[0]}
                alt={category}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full lg:w-[552px] h-auto rounded-md"
                priority
              />
            </div>
            <div>
              <p className="mb-[16px] lg:mb-[24px] text-[20px] font-semibold text-white">
                Про {displayedType}
              </p>
              {descriptionArray.map((text, index) => (
                <p key={index} className="mb-[16px] lg:mb-[24px] text-white">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
