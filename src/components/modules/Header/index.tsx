'use client';
import Container from '@/components/common/container';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="w-full pt-[20px] pb-[4px] text-white bg-main-bg">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
