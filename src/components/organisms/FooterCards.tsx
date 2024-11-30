import Image, { StaticImageData } from 'next/image';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { Box } from '../atoms/Box';
import arrow from '../../../assets/Arrow - Right Square.svg';

interface FooterCardPropTypes {
  data: { title: string; icon: StaticImageData }[];
}

export const FooterCard = ({ data }: FooterCardPropTypes) => {
  return (
    <>
      {data.map((item, index) => (
        <Box className="flex flex-wrap justify-center gap-6" key={index}>
          <Box key={index} className="flex flex-col items-center text-center p-6 bg-white w-68">
            <Box className="flex items-center justify-center w-12 h-12 bg-gray-100 mb-4">
              <Icon width={24} className="text-gray-500">
                {item?.icon}
              </Icon>
            </Box>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{item?.title}</h3>
              <Button className="flex items-center gap-1 text-blue-500 font-medium">
                바로가기
                <Image src={arrow} alt="arrow" />
              </Button>
            </div>
          </Box>
        </Box>
      ))}
    </>
  );
};
