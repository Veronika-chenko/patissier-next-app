'use client';
import { Container } from '@/components';
import Navigation from './Navigation';

export const Header = () => {
  return (
    <header className="w-full pt-[20px] pb-[4px] text-white bg-main-bg">
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};
