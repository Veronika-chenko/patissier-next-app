import Container from '@/components/common/container';
import Logo from '/public/images/header/logo.svg';
import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="w-full pt-[20px] text-white bg-main-bg">
      <Container>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-[53px]">
            <Link href="/">
              <Logo />
            </Link>
            <Navigation />
          </div>
          <div>Socials</div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
