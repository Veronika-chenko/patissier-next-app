import { marianna } from '@/libs/fonts';

export const CoursesHeroSection = () => {
  return (
    <section>
      <div className="flex justify-center mx-auto bg-courses-hero-mobile bg-center bg-no-repeat md:bg-courses-hero-tablet lg:bg-courses-hero-desktop bg-cover lg:bg-contain">
        <div className="w-full max-w-[480px] lg:max-w-[1224px] px-[12px] py-[120px] lg:pt-[160px] lg:pb-[186px]">
          <h1
            className={`${marianna.className} text-white mb-[24px] text-[72px] lg:text-[96px] leading-[1] lg:mb-[40px]`}
          >
            Станьте кондитером!
          </h1>
          <p className="max-w-[460px] mb-[72px] lg:mb-[60px] text-grey">
            Навчіться готувати вишукані десерти!
            <br /> Курси та майстер-класи від професіоналів
          </p>
          <button className="flex justify-center items-center w-full lg:w-[216px] p-[16px] font-bold text-black bg-accent hover:bg-accent-dark focus:bg-accent-dark ease-linear duration-250 rounded-md">
            Записатися
          </button>
        </div>
      </div>
    </section>
  );
};
