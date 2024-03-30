import Link from 'next/link';

const navList = [
  { name: 'Про нас', path: '/about' },
  { name: 'Магазин', path: '/store' },
  { name: 'Курси', path: '/courses' },
  { name: 'Блог', path: '/blog' },
];

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-[4px]">
        {navList.map(({ name, path }) => (
          <li key={name} className="text-[16px] rounded-sm">
            <Link
              href={path}
              className="px-[24px] py-[6px] rounded-sm hover:text-accent-text hover:bg-[#0F0908] hover:border-accent hover:border-b-[1px]"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
