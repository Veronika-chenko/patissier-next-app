import { Container } from '@/components';
import wayToSuccessData from './way-to-success-data.json';
import ContentImageSmall from '/public/images/about/authorCV/content-mob.jpg';
import ContentImageLarge from '/public/images/about/authorCV/content-desk.jpg';
import Image from 'next/image';

export const WayToSuccessSection = () => {
  return (
    <section className=" text-white pt-[60px] lg:pt-[100px] pb-[60px] lg:pb-[100px]">
      <Container>
        <div className="flex flex-col gap-[120px] lg:flex-row-reverse lg:gap-[60px]">
          <h2 className="sr-only">Історія кондитерки</h2>
          <div className="w-full shrink-0 lg:w-[588px]">
            <Image
              src={ContentImageSmall}
              alt="cake"
              width={0}
              height={0}
              className="object-cover rounded-md lg:hidden"
            />
            <Image
              src={ContentImageLarge}
              alt="cake"
              width={0}
              height={0}
              className="hidden lg:block object-cover rounded-md"
            />
          </div>
          <ul className="space-y-[40px] lg:space-y-[60px]">
            {wayToSuccessData.map(({ imageUrl, name, text }, index) => (
              <li
                key={index}
                className="flex gap-[20px] lg:items-center even:flex-row-reverse"
              >
                <Image
                  src={imageUrl}
                  alt={name}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="shrink-0 w-[72px] h-[72px]"
                />
                <p className="font-medium leading-normal">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
