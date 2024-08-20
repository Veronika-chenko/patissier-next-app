'use client';
import { marianna } from '@/libs/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import reviews from './reviews.json';
import { ReviewCard } from './ReviewCard';

export const ReviewsSection = () => {
  return (
    <section className="w-full py-[60px] lg:py-[100px]">
      <div className="pl-[12px] lg:pr-[12px] lg:max-w-[1224px] mx-auto">
        <h2
          className={`${marianna.className} mb-[40px] text-[52px] leading-none text-accent-text text-center lg:mb-[60px] lg:text-[84px]`}
        >
          Відгуки
        </h2>
        <div className="shadow-reviewContainer">
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            breakpoints={{
              1224: {
                spaceBetween: 24,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                className="max-w-[282px] p-[20px] rounded-md bg-main-bg shadow-card"
              >
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
