'use client';
import Link from 'next/link';
import Logo from '/public/images/header/logo.svg';
import Burger from '/public/images/header/burger.svg';
import Cross from '/public/images/header/cross.svg';
import { useState } from 'react';
import AdditionalLinksList from '../AdditionalLinksList';
import MenuList from '../MenuList';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full">
      <div className="flex gap-[53px]">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden lg:flex items-center">
          <MenuList handleClick={handleClick} />
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <AdditionalLinksList handleClick={handleClick} />
      </div>
      <div className="lg:hidden">
        <Burger className="stroke-current" onClick={handleClick} />
      </div>
      <div
        className={
          menuOpen
            ? 'fixed left-0 top-0 w-[100%] h-screen lg:hidden py-[41px] z-10 bg-main-bg'
            : 'fixed invisible'
        }
      >
        <div className="pl-[20px] pr-[12px] max-w-[480px] lg:max-w-[1224px] mx-auto">
          <div className="flex justify-end">
            <Cross className="lg:hidden stroke-accent" onClick={handleClick} />
          </div>
          <div className="flex flex-col gap-[32px]">
            <MenuList handleClick={handleClick} />
            <AdditionalLinksList handleClick={handleClick} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
