import Image from 'next/image';
import React from 'react';
import { Virtual, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Box, Typography } from '../atoms';

export const Slider = ({ data }) => {
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Autoplay]}
        slidesPerView={5}
        // style={{ width: '100%', marginLeft: '0px', marginRight: '0px' }}
        centeredSlides={false}
        spaceBetween={10}
        navigation={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        virtual>
        {data.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index} className="fade-in min-w-[200px]">
            {' '}
            {/* Add fade-in animation */}
            <Box className="flex items-center bg-white/20 text-white p-4 rounded-md gap-[24px]">
              <Image src={slideContent?.icon} alt="Icon" className="rounded-md w-10 h-10 p-[10px] bg-white/50" />
              <Typography className="text-2xl font-black">{slideContent.text}</Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 500ms ease-in forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};
