import Link from 'next/link';
import ArrowRight from '/public/images/arrows/arrow-forward.svg';

type ReadMoreLinkProps = {
  path: string;
  message: string;
};

export const ReadMoreLink = ({ path, message }: ReadMoreLinkProps) => {
  return (
    <Link
      href={path}
      className="inline-flex gap-[12px] items-center py-[16px] text-[16px] font-bold text-accent-text hover:text-accent-dark focus:text-accent-dark ease-linear duration-250"
    >
      {message}
      <ArrowRight className="stroke-current" />
    </Link>
  );
};
