import Link from 'next/link';
import ArrowLeft from '/public/images/arrows/arrow-back.svg';

const BackLink = ({ path }: { path: string }) => {
  return (
    <Link
      href={path}
      className="inline-flex gap-[8px] items-center text-[14px] text-grey hover:text-accent-text"
    >
      <ArrowLeft className="stroke-current" />
      назад
    </Link>
  );
};

export default BackLink;
