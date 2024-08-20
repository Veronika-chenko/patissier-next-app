'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import studentWorks from './gallery.json';

const customPagination = (_: any, className: string) => {
  return `<span class="${className} !w-[12px] !h-[12px] !bg-grey [&.swiper-pagination-bullet-active]:!bg-accent !mx-[6px]"></span>`;
};

export const Slider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
        renderBullet: customPagination,
      }}
      modules={[Pagination]}
      spaceBetween={16}
      slidesPerView="auto"
      breakpoints={{
        1224: {
          spaceBetween: 24,
        },
      }}
      className="relative [&_div.swiper-pagination]:!static [&_div.swiper-pagination]:!mt-[16px]"
    >
      {studentWorks.map((item) => (
        <SwiperSlide
          key={item.id}
          className="max-w-[282px] rounded-md overflow-hidden"
        >
          <Image
            src={item.img}
            alt="Робота студента"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[282px] h-[396px] object-contain"
          />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination hidden lg:flex justify-center gap-1"></div>
    </Swiper>
  );
};
