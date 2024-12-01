import Image, { StaticImageData } from 'next/image';
import { Button, Box, Icon, Typography } from '../atoms';
import arrow from '@/assets/Arrow - Right Square.svg';

interface FooterCardPropTypes {
  data: { title: string; icon: StaticImageData }[];
}

export const FooterCard = ({ data }: FooterCardPropTypes) => {
  return (
    <>
      {data.map((item, index) => (
        <Box className="flex flex-wrap justify-center gap-6 rounded-xl" key={index}>
          <Box key={index} className="flex flex-col items-start text-center p-6 bg-white w-68">
            <Box className="flex items-center justify-center w-12 h-12 bg-gray-100 mb-4 rounded-lg">
              <Icon width={24} className="text-gray-500">
                {item?.icon}
              </Icon>
            </Box>
            <Box>
              <Typography className="text-sm font-black text-[#343741] leading-[21px] mb-3 text-left">
                {item?.title}
              </Typography>
              <Button className="flex items-center gap-1 text-sm text-[#5E626F] leading-[21px] font-black">
                바로가기
                <Image src={arrow} alt="arrow" />
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
