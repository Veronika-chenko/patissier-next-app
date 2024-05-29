import Container from '@/components/common/container';
import { ICourseProgram } from '@/types/Course';
import Image from 'next/image';
import { FC } from 'react';

interface ICourseDetailsProps {
  program: ICourseProgram;
  imageURL: string;
  category: string;
  price: number;
}

const DetailsSection: FC<ICourseDetailsProps> = ({
  program,
  imageURL,
  category,
  price,
}) => {
  const programArray = Object.values(program);

  return (
    <section className="py-[60px] lg:py-[100px]">
      <Container>
        <div>
          <h2 className="mb-[40px] lg:mb-[60px] text-[36px] font-medium text-accent-text text-center">
            Деталі навчання
          </h2>
          <div className="flex flex-col gap-[20px] lg:flex-row-reverse lg:gap-[24px]">
            <div className="lg:flex lg:w-[588px] lg:h-[512px] rounded-md shadow-[0_0_209px_-30px_#C7673833]">
              <Image
                src={imageURL}
                alt={category}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-md lg:object-cover"
                priority
              />
            </div>
            <div className="flex flex-col gap-[20px] lg:gap-[24px]">
              <div className="p-[20px] lg:py-[40px] bg-main-bg rounded-md shadow-[0_0_209px_-30px_#C7673833]">
                <h3 className="text-[20px] font-semibold text-accent-text mb-[16px] lg:mb-[20px] text-center">
                  Програма
                </h3>
                <ul className="flex flex-col gap-[12px]">
                  {programArray.map(({ name, description }, index) => (
                    <li key={index} className="lg:flex gap-[12px]">
                      <p className="font-bold text-white">{name}:</p>
                      <p className="text-[14px] text-white">{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-center gap-[16px] lg:gap-[20px] p-[20px] lg:py-[40px] bg-main-bg rounded-md shadow-[0_0_209px_-30px_#C7673833]">
                <h3 className="font-bold text-accent-text">Вартість</h3>
                <p className="font-bold text-white">{price} грн</p>
                <p className="text-[14px] text-grey text-center">
                  *Перед оплатою уточніть наявність вільних місць, а також умови
                  оплати
                </p>
                <button className="flex justify-center items-center w-full lg:w-[216px] p-[16px] font-bold text-black bg-accent hover:bg-accent-dark focus:bg-accent-dark ease-linear duration-250 rounded-md">
                  Оплатити
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DetailsSection;
