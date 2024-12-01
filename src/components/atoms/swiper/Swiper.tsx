import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';

export const SwiperAtom = ({ children }) => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      initialSlide={3}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 13,
        depth: 40,
        modifier: 8,
        scale: 1,
        slideShadows: true,
      }}
      navigation={true}
      // pagination={{ clickable: true }}
      modules={[EffectCoverflow, Navigation]}
      className="w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
      {children}
    </Swiper>
  );
};
