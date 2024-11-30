import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Slider({ data }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Autoplay]}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={10}
        navigation={false}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto slide every 5 seconds
        virtual>
        {data.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index} className="fade-in">
            {' '}
            {/* Add fade-in animation */}
            <div className="w-[332px] flex items-center bg-white/50 text-white p-4 rounded-md gap-2">
              <Image src={slideContent?.icon} alt="Icon" className="rounded-md w-10 h-10 p-[10px] bg-white/50" />
              <p className="text-lg font-bold">{slideContent.text}</p>
            </div>
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
}

export default Slider;
