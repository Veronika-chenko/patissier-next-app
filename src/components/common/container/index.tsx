import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <div className="px-[12px] flex justify-center max-w-[480px] lg:max-w-[1224px] mx-auto">
      {children}
    </div>
  );
};
export default Container;
