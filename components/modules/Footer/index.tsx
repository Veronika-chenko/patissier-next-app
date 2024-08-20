import Navigation from './Navigation';
import ContactLinks from './ContactLinks';
import ContactForm from './ContactForm';
import { Container } from '@/components';

export const Footer = () => {
  return (
    <footer className="text-white bg-main-bg shadow-[0px_-10px_246px_-76px_#C767385E]">
      <Container>
        <div className="w-full divide-y divide-[#5C5C5D]">
          <div className="w-full lg:grid lg:grid-cols-2 lg:gap-[40px] pt-[20px] pb-[50px] lg:py-[60px]">
            <div className="flex flex-col gap-[10px] items-center lg:items-start mb-[50px] lg:mb-0 lg:w-fit">
              <Navigation />
            </div>
            <div className="flex flex-col lg:flex-row gap-[40px] lg:justify-between lg:items-end mb-[60px] lg:mb-0 lg:row-start-2 lg:col-span-2">
              <ContactLinks />
            </div>
            <div className="flex flex-col items-center lg:items-start gap-[20px] lg:w-fit lg:justify-self-end">
              <ContactForm />
            </div>
          </div>
          <div className="py-[40px] lg:py-[20px]">
            <p className="text-[14px] text-grey">
              &#169; Всі права захищено, 2023- 2024
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
