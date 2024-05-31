import { FC } from 'react';
import { marianna } from '@/libs/fonts';
import Link from 'next/link';

interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="w-full h-[615px] mt-120 text-grey">
      <div className="w-full h-full lg:max-w-[1344px] lg:px-[12px] lg:mx-[auto] lg:flex justify-center">
        <div className="w-full h-full bg-no-repeat bg-[center_left_35%] bg-[length:180%] bg-hero-mobile md:bg-center lg:bg-hero-desktop md:bg-contain lg:max-w-[732px]"></div>
        <div className="min-w-[305px] absolute pt-[132px] lg:static inset-0 flex lg:block flex-col justify-center items-center left-1/2 transform -translate-x-1/2 lg:translate-x-0 max-w-[344px] lg:max-w-[588px] h-[615px] lg:pt-[152px] lg:pb-[130px]">
          <h1
            className={`${marianna.className} text-white mb-[24px] text-[72px] lg:text-[96px] leading-[1] lg:mb-[40px]`}
          >
            Ваш ідеальний десерт
          </h1>
          <p className="sm:w-[320px] lg:w-full mb-[76px] lg:mb-[68px] text-[16px] leading-tight text-white lg:text-grey">
            Замовляйте вишукані десерти для свого свята!{' '}
            <br className="hidden lg:block" />
            Усі десерти створюються власноруч з якісних та свіжих продуктів
          </p>
          <Link
            href="/store"
            className="flex justify-center items-center w-full lg:w-[216px] p-[16px] font-bold text-black bg-accent hover:bg-accent-dark focus:bg-accent-dark ease-linear duration-250 rounded-md"
          >
            Магазин
          </Link>
        </div>
      </div>
    </section>
  );
};
