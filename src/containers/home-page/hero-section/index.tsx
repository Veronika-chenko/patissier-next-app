import { FC } from 'react';
import { marianna } from '@/libs/fonts';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="w-full h-[615px] mt-120 bg-main-bg text-grey">
      <div className="w-full h-full lg:max-w-[1344px] lg:px-[12px] lg:mx-[auto] lg:flex justify-center">
        <div className="w-full h-full bg-hero-mobile bg-center bg-no-repeat lg:bg-hero-desktop bg-contain lg:max-w-[732px]"></div>
        <div className="absolute lg:static inset-0 flex lg:block flex-col justify-center items-center left-1/2 transform -translate-x-1/2 lg:translate-x-0 max-w-[344px] lg:max-w-[588px] h-[615px] lg:pt-[152px] lg:pb-[130px]">
          <h1
            className={`${marianna.className} text-white mb-[24px] text-[72px] leading-[1]`}
          >
            Ваш ідеальний десерт
          </h1>
          <p className="text-[16px]">
            Замовляйте вишукані десерти для свого свята!
          </p>
          <p className="mb-[76px] lg:mb-[68px] text-[16px]">
            Усі десерти створюються власноруч з якісних та свіжих продуктів
          </p>
          <button>Магазин</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
