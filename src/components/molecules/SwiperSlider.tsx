import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { SwiperAtom } from '../atoms';

export const SwiperSlideAtom = ({ data, children }) => {
  return (
    <SwiperAtom>
      {data &&
        data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center swiper-slide min-h-[400px]"
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
