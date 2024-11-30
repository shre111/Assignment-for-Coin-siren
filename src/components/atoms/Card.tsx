import { Button } from './Button';
import { Icon } from './Icon';
import arrow from '../../../assets/Arrow - Right Square.svg';
import Image from 'next/image';

export const Card = ({ data }: any) => {
  return (
    <>
      {data.map((item, index) => (
        <div className="flex flex-wrap justify-center gap-6">
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white w-68">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 mb-4">
              <Icon width={24} className="text-gray-500">
                {item?.icon}
              </Icon>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{item?.title}</h3>
              <Button className="flex items-center gap-1 text-blue-500 font-medium">
                바로가기
                <Image src={arrow} alt="arrow" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
