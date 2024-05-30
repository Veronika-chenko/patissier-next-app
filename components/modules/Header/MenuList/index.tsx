import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEvent } from 'react';

interface MenuListProps {
  handleClick: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const navList = [
  { name: 'Про нас', path: '/about' },
  { name: 'Магазин', path: '/store' },
  { name: 'Курси', path: '/courses' },
  { name: 'Блог', path: '/blog' },
];

const activeLinkStyles =
  'text-accent-text bg-[#0F0908] border-accent border-b-[1px]';

const isActiveLink = (currentPath: string, navListPath: string): string => {
  const pathWithTrailingSlash = navListPath + '/';
  return currentPath === navListPath ||
    currentPath.startsWith(pathWithTrailingSlash)
    ? activeLinkStyles
    : '';
};

const MenuList = ({ handleClick }: MenuListProps) => {
  const currentPath = usePathname();

  return (
    <ul className="flex flex-col gap-[28px] lg:flex-row lg:gap-[4px]">
      {navList.map(({ name, path }) => (
        <li key={name} className="text-[16px] rounded-sm">
          <Link
            href={path}
            className={`px-[24px] py-[6px] rounded-sm hover:text-accent-text focus:text-accent-text ease-linear hover:duration-250 
              ${isActiveLink(currentPath, path)}
            `}
            onClick={handleClick}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
