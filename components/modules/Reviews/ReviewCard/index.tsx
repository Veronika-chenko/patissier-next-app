import { FC } from 'react';
import Image from 'next/image';
import { TReview } from '@/types/Review';

interface IReviewCardProps {
  review: TReview;
}

export const ReviewCard: FC<IReviewCardProps> = ({ review }) => {
  const { avatar, name, comment } = review;
  return (
    <>
      <div className="flex gap-[16px]">
        <div className="w-[80px] h-[80px] mb-[20px] rounded-full">
          <Image
            src={avatar}
            alt={name}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[80px] h-[80px] object-contain"
          />
        </div>
        <p className="self-center font-bold text-[16px] text-white">{name}</p>
      </div>
      <p className="text-[14px] text-white">{comment}</p>
    </>
  );
};
