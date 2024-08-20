import { marianna } from '@/libs/fonts';
import { Slider } from './slider';

export const GallerySection = () => {
  return (
    <section className="pt-[60px] lg:pt-[100px] pb-[120px] lg:pb-[138px]">
      <div className="pl-[12px] lg:pr-[12px] lg:max-w-[1224px] mx-auto">
        <h2
          className={`${marianna.className} text-[52px] lg:text-[84px] text-center text-accent-text mb-[40px] lg:mb-[60px]`}
        >
          Роботи студентів
        </h2>
        <Slider />
      </div>
    </section>
  );
};
