'use client';
import ArrowLeft from '/public/images/arrows/arrow-back.svg';
import { useRouter } from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex gap-[8px] items-center text-[14px] text-grey hover:text-accent-text focus:text-accent-text ease-linear duration-250"
    >
      <ArrowLeft className="stroke-current" />
      назад
    </button>
  );
};
