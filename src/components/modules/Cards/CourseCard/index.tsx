import { TCourse } from '@/types/Course';
import Image from 'next/image';
import { FC } from 'react';

interface ICourseCardProps {
  course: TCourse;
}

const CourseCard: FC<ICourseCardProps> = ({ course }) => {
  // console.log('🚀 ~ course:', course);
  const {
    id: courseID,
    category,
    type,
    previewText,
    totalPlaces,
    images,
    groups,
    courseDuration,
  } = course;

  return (
    <li className="w-[360px] rounded-md shadow-card text-grey">
      <div>
        <Image
          src={images[0]}
          alt={category}
          width="0"
          height="0"
          sizes="100vw"
          className="w-[360px] h-auto rounded-tr-md rounded-tl-md"
        />
      </div>
      <div className="p-[20px]">
        <h3 className="mb-[8px] text-[20px] font-semibold text-center text-white">
          {category}
        </h3>
        <p className="mb-[20px] text-[14px] text-center text-grey">
          {type === 'courses' ? 'Курс' : 'Майстер-клас'}
        </p>
        <p className="mb-[12px] text-[14px] text-grey">{previewText}</p>
        <div className="flex gap-[12px] mb-[8px] text-white">
          <p className="font-bold">Група:</p>
          <p>{totalPlaces} осіб</p>
        </div>
        <div className="flex gap-[12px] mb-[16px] text-white">
          <p className="font-bold">Термін:</p>
          <p>{courseDuration}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-semibold text-white">
            {groups[0] ? groups[0].price : '?????'} грн
          </p>
          <button className="items-center py-[16px] px-[40px] text-[16px] font-bold text-accent-text hover:text-black hover:bg-accent focus:text-black focus:bg-accent border-[2px] rounded-md border-accent ease-linear duration-250">
            Детальніше
          </button>
        </div>
      </div>
    </li>
  );
};

export default CourseCard;
