import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Box, Icon, Tooltip, Typography } from '../atoms';
import { Slider, SwiperSlideAtom } from '../molecules';
import { ProfileCard } from '../organisms';
import Tv from '@/assets/icon-marketing.svg';
import Image1 from '@/assets/icon-image.svg';
import BoxIcon from '@/assets/icon-box.svg';
import Target from '@/assets/icon-target.svg';
import Call from '@/assets/icon-call.svg';
import Dollar from '@/assets/dollar.svg';
import { useState } from 'react';
import { StaticImageData } from 'next/image';
import { CheckSection } from '../organisms/CheckSection';

export const HeroSection = ({ data }) => {
  const [open, setOpen] = useState(false);
  const sliderData: { text: string; icon: StaticImageData }[] = [
    { text: '해외 마케팅', icon: Tv },
    { text: '퍼블리셔', icon: Image1 },
    { text: '캐드원(제도사)', icon: BoxIcon },
    { text: '해외 세일즈', icon: Target },
    { text: '해외 CS', icon: Call },
    { text: '해외 마케팅', icon: Target },
    { text: '해외 마케팅', icon: Call },
  ];

  const contentArray = [
    {
      heading: '평균 월 120만원',
      paragraph: '임금을 해당 국가를 기준으로 계산합니다.',
    },
    {
      heading: '평균 월 120만원',
      paragraph: '임금을 해당 국가를 기준으로 계산합니다.',
    },
    {
      heading: '평균 월 120만원',
      paragraph: '임금을 해당 국가를 기준으로 계산합니다.',
    },
  ];

  return (
    <>
      <Box className="p-4 sm:p-16 w-full md:w-[80%] m-auto">
        <Box className="flex flex-col xl:flex-row w-full mb-8 gap-[30px] md:gap-[60px] xl:gap-0 items-center justify-between">
          <Box className="space-y-8 sm:space-y-12 w-full xl:w-[50%]">
            {/* Header Section */}
            <Box className="text-left">
              <motion.div
                className="my-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}>
                <Tooltip open className="text-[#40E2E8] font-black text-lg leading-7">
                  풀타임, 파트타임
                </Tooltip>
              </motion.div>
              <motion.div
                className="my-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Typography className="font-black text-white text-3xl text-5xl leading-[62px]">
                  최고의 실력을 가진 <br /> 외국인 인재를 찾고 계신가요?
                </Typography>
              </motion.div>
              <motion.div
                className="my-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Typography className="text-[#FFFFFFE5] text-2xl leading-[34px] font-black">
                  법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로 채용해보세요.
                </Typography>
              </motion.div>
              <motion.div
                className="my-4 hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <Typography className="font-black text-lg underline leading-7 text-[#FFFFFF]">
                  개발자가 필요하신가요?
                </Typography>
              </motion.div>
            </Box>

            {/* Info Cards Section */}
            <Box className="hidden md:grid grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-24">
              {contentArray.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}>
                  <Box className="h-[2px] w-[80%] bg-white mb-2"></Box>
                  <Typography className="text-lg font-black leading-7 sm:text-lg text-white">{item.heading}</Typography>
                  <Typography className="text-sm sm:text-base mt-2 text-[#FFFFFFCC]">{item.paragraph}</Typography>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Carousel Section */}
          <Box className="mt-8 sm:mt-12 space-y-6 sm:space-y-8 w-full xl:w-[50%]">
            <Box variant="rowCenter" className="relative">
              <Tooltip
                open={open}
                outerClassName="w-fit absolute  top-[-40px]"
                className="flex justify-center items-center gap-2">
                <Icon width={30}>{Dollar}</Icon>
                <Typography className="text-green-600">
                  월 <b>100</b>만원
                </Typography>
              </Tooltip>
            </Box>
            <Box className=" flex flex-col md:flex-row justify-center items-start md:items-center relative ">
              {/* Carousel */}
              <Box className="flex justify-center items-center  max-w-[100%] mt-[30px] md:mt-0 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-fit h-fit">
                  <SwiperSlideAtom data={data}>
                    <ProfileCard setOpen={setOpen} />
                  </SwiperSlideAtom>
                </motion.div>
              </Box>

              <Box className="block sm:hidden flex flex-col items-start  p-4 text-white space-y-4 mt-8">
                <Box className="grid grid-cols-2 gap-4">
                  {['한국어 능력', '업무 수행 능력', '검업 여부', '평판 조회'].map((el) => {
                    return <CheckSection key={el} label={el} />;
                  })}
                </Box>

                {/* Highlighted Question */}
                <Box>
                  <span className="text-yellow-300 text-lg underline font-semibold">개발자가 필요하신가요?</span>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="h-0 md:h-[150px]"></Box>
      </Box>
      <Box className="flex justify-end gap-2 mb-6 mt-[100px] w-full overflow-auto hidden xl:flex absolute bottom-[30px] bg-transparent">
        <Slider data={sliderData} />
      </Box>
    </>
  );
};
