import Image from 'next/image';
import statistics from './statistics.json';
import Container from '../../common/container';

const StatisticsSection = () => {
  return (
    <section className="w-full text-grey pb-[60px] lg:pb-[100px] lg:pt-[60px]">
      <Container>
        <h2 className="sr-only">Переваги</h2>
        <ul className="divide-y lg:divide-y-0 lg:divide-x divide-solid px-[35px] lg:px-0 w-[352px] lg:w-full lg:flex">
          {statistics.map((stat) => (
            <li
              key={stat.id}
              className="flex justify-center w-full py-[40px] first:pt-0 last:pb-0 lg:px-[40px] lg:pt-0 lg:pb-[12px] lg:last:pb-[12px] lg:first:pl-[50px] lg:last:pr-[50px]"
            >
              <div className="grid grid-cols-[48px_auto] gap-[12px] lg:gap-[16px] lg:w-[215px]">
                <Image
                  src={stat.imgUrl}
                  alt={stat.description}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-[48px] h-auto"
                />
                <p className="text-accent-text text-[36px]">{stat.count}</p>
                <p className="col-span-full text-[16px] lg:col-start-2 lg:w-[min-content]">
                  {stat.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default StatisticsSection;
