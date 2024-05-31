import { Footer } from '@/components';
import { marianna } from '@/libs/fonts';

const Store = () => {
  return (
    <main className="bg-main-bg h-screen text-white">
      <h1
        className={`${marianna.className} text-accent-text text-[52px] text-center mb-[40px] lg:text-[84px] lg:mb-[32px]`}
      >
        Магазин
      </h1>
      <Footer />
    </main>
  );
};

export default Store;
