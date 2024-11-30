import { SwiperSlide } from 'swiper/react';
import { Typography } from '../Typography';
import { SwiperAtom } from './Swiper';
import React from 'react';

export const SwiperSlideAtom = ({ data, children }) => {
  return (
    <SwiperAtom>
      {data &&
        data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center swiper-slide"
            style={{
              width: '300px',
              transition: 'all 0.3s ease',
            }}>
            {children && React.cloneElement(children, { item, index })}
          </SwiperSlide>
        ))}
    </SwiperAtom>
  );
};
