import { Container } from '@/components';
import { ICourseFeatures } from '@/types/Course';
import { FC } from 'react';

interface ICourseFeatureProps {
  features: ICourseFeatures;
  type: 'courses' | 'master_classes';
}

export const FeatureSection: FC<ICourseFeatureProps> = ({ features, type }) => {
  const featuresArray = Object.values(features);
  const displayedType = type === 'courses' ? 'курс' : 'майстер-клас';

  return (
    <section className="py-[60px] lg:py-[100px]">
      <Container>
        <div>
          <h2 className="mb-[40px] lg:mb-[60px] text-[36px] font-medium text-accent-text text-center">
            Що містить {displayedType}?
          </h2>
          <ul className="flex flex-col lg:grid lg:grid-cols-3 gap-[40px] lg:gap-[24px]">
            {featuresArray.map(({ name, description }, index) => (
              <li key={index} className="lg:w-[384px]">
                <p className="mb-[12px] lg:mb-[16px] pr-[10px] text-[20px] font-semibold text-white">
                  {name}
                </p>
                <p className="text-grey">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
