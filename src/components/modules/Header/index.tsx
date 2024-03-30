'use client';
import Container from '@/components/common/container';
import Navigation from './Navigation';

// import Sidebar from './Sidebar';

const Header = () => {
  return (
    <header className="w-full pt-[20px] text-white bg-main-bg">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
