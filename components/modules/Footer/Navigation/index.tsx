import Link from 'next/link';
import Logo from '/public/images/header/logo.svg';

const navList = [
  { name: 'Про нас', path: '/about' },
  { name: 'Магазин', path: '/store' },
  { name: 'Курси', path: '/courses' },
  { name: 'Блог', path: '/blog' },
];

const Navigation = () => {
  return (
    <>
      <Link href="/" className="">
        <Logo />
      </Link>
      <ul className="flex justify-between items-center w-full lg:gap-[40px]">
        {navList.map(({ name, path }) => (
          <li key={name} className="rounded-sm">
            <Link
              href={path}
              className="inline-block py-[10px] rounded-sm hover:text-accent-text focus:text-accent-text ease-linear hover:duration-250 font-bold"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
