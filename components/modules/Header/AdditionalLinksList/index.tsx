import Search from '/public/images/header/icons/search-loupe.svg';
import Favorite from '/public/images/header/icons/favorite.svg';
import Basket from '/public/images/header/icons/basket.svg';
import Phone from '/public/images/header/icons/phone.svg';
import User from '/public/images/header/icons/user.svg';
import { MouseEvent } from 'react';

interface AdditionalLinksProps {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const AdditionalLinksList = ({ handleClick }: AdditionalLinksProps) => {
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-[12px]">
      <li>
        <button
          onClick={handleClick}
          className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-icon-bg hover:text-accent-text focus:text-accent-text ease-linear hover:duration-250"
        >
          <Search className="stroke-current" />
        </button>
      </li>
      <li>
        <button
          onClick={handleClick}
          className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-icon-bg hover:text-accent-text focus:text-accent-text ease-linear hover:duration-250"
        >
          <Favorite className="stroke-current" />
        </button>
      </li>
      <li>
        <button
          onClick={handleClick}
          className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-icon-bg hover:text-accent-text focus:text-accent-text ease-linear hover:duration-250"
        >
          <Basket className="stroke-current" />
        </button>
      </li>
      <li>
        <button
          onClick={handleClick}
          className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-icon-bg hover:text-accent-text focus:text-accent-text ease-linear hover:duration-250"
        >
          <Phone className="stroke-current" />
        </button>
      </li>
      <li>
        <button
          onClick={handleClick}
          className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-icon-bg hover:text-accent-text focus:text-accent-text ease-linear hover:duration-250"
        >
          <User className="stroke-current" />
        </button>
      </li>
    </ul>
  );
};
export default AdditionalLinksList;
