import { marianna } from '@/libs/fonts';

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1
      className={`${marianna.className} text-accent-text text-[52px] text-center mb-[40px] lg:text-[84px] lg:mb-[32px]`}
    >
      {title}
    </h1>
  );
};
