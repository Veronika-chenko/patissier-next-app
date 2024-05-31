'use client';
import { Container, Footer } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main>
        <section className="py-[60px] lg:py-[100px]">
          <Container>
            <div className="px-[8px] lg:px-[102px] py-[60px] rounded-md shadow-[0_0_209px_-30px_#C7673833]">
              <div className="flex justify-center items-center gap-[8px] px-[22px]">
                <p className="text-[128px] font-black text-accent-text">4</p>
                <Image
                  src="/images/error/error.png"
                  alt="error"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="shrink-0 w-[92px] h-[95px]"
                  priority
                />
                <p className="text-[128px] font-black text-accent-text">4</p>
              </div>
              <p className="text-white text-center px-[22px] max-w-[366px] lg:max-w-full mb-[40px] lg:mb-[60px]">
                Такої сторінки не знайдено. Спробуйте іншу.
              </p>
              <Link
                href="/"
                className="flex justify-center items-center w-full lg:w-[216px] p-[16px] lg:mx-auto font-bold text-black bg-accent hover:bg-accent-dark focus:bg-accent-dark ease-linear duration-250 rounded-md"
              >
                Головна
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
