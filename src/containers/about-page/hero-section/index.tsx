import Container from '@/components/common/container';
import { marianna } from '@/libs/fonts';
import Image from 'next/image';
import aboutImage from '/public/images/about/about.jpg';
import signature from '/public/images/about/signature.png';
import ReadMoreLink from '@/components/common/readMoreLink';

const AboutHeroSection = ({ headingLevel }: { headingLevel: 'h1' | 'h2' }) => {
  const Heading = headingLevel;
  const isMainSection = headingLevel === 'h1';
  return (
    <section className="w-full text-white pb-[60px] lg:pb-[100px] pt-[60px] lg:pt-[100px]">
      <Container>
        <div>
          <Heading
            className={`${marianna.className} mb-[40px] text-[52px] text-accent-text text-center lg:mb-[100px] lg:text-[84px]`}
          >
            Про нас
          </Heading>
          <div className="flex flex-col gap-[20px] lg:flex-row lg:gap-[60px]">
            <Image
              src={aboutImage}
              alt="About us"
              className="lg:w-[552px] lg:h-[424px] rounded-md object-cover shrink-0"
              width="0"
              height="0"
              sizes="100vw"
            />
            <div className="lg:h-[424px] lg:max-w[550px]">
              <p className="mb-[12px] lg:mb-[16px] text-[20px] font-semibold">
                Вітаю!
              </p>
              <div>
                <p className="text-[16px] mb-[12px] lg:mb-[16px]">
                  Мене звати Дарія Тюлєнєва і я - ваш провідник у солодкий світ
                  вишуканих кондитерських виробів.
                </p>
                <p className="text-[16px] mb-[12px] lg:mb-[16px]">
                  Маю багаторічний досвід у кондитерській справі, працюю
                  бренд-шефом “Kenwood” в Україні, створюю найсмачніші десерти у
                  мережі ресторанів “Мафія”, навчаю солодкому мистецтву.
                </p>
                <p className="text-[16px]">
                  На нашому сайті ви зможете не тільки замовити найсмачнішу
                  випічку та десерти, а також записатися на цікаві й корисні
                  майстер-класи або курси з приготування найкращих солодощів.
                </p>
                {!isMainSection && (
                  <div className="text-center lg:text-left mt-[20px] lg:mt-[24px]">
                    <ReadMoreLink path="/about" message="Читати далі" />
                  </div>
                )}

                <Image
                  src={signature}
                  alt="signature"
                  // className="absolute right-0 bottom-0 lg:w-[280px] lg:h-[204px]"
                  className="float-right w-[124px] lg:w-[280px] lg:h-[204px]"
                  width="0"
                  height="0"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHeroSection;
