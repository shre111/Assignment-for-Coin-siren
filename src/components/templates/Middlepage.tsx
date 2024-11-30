import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { Box } from '../atoms/Box';
import Skills from '../molecules/Skills';
import Slider from '../molecules/Slider';
import Tv from '../../../assets/icon-marketing.svg';
import Image1 from '../../../assets/icon-image.svg';
import BoxIcon from '../../../assets/icon-box.svg';
import Target from '../../../assets/icon-target.svg';
import Call from '../../../assets/icon-call.svg';

export const MiddlePage = ({ data }) => {
  const sliderData = [
    { text: '해외 마케팅', icon: Tv },
    { text: '퍼블리셔', icon: Image1 },
    { text: '캐드원(제도사)', icon: BoxIcon },
    { text: '해외 세일즈', icon: Target },
    { text: '해외 CS', icon: Call },
    { text: '해외 마케팅', icon: Target },
    { text: '해외 마케팅', icon: Call },
  ];
  const skills = ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'];

  return (
    <>
      <Box className="p-8  sm:p-16 lg:p-40 from-blue-500 to-teal-500 dark:from-gray-900 dark:to-gray-800">
        <Box className="flex flex-col sm:flex-row w-full items-center justify-between">
          <Box className="space-y-8 sm:space-y-12">
            {/* Header Section */}
            <Box className="text-left">
              <motion.h1
                className="text-3xl sm:text-5xl font-extrabold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                최고의 실력을 가진
              </motion.h1>
              <motion.h1
                className="text-3xl sm:text-5xl font-extrabold text-white mt-[10px] sm:mt-[15px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                외국인 인재를 찾고 계신가요?
              </motion.h1>
              <motion.h3
                className="text-lg sm:text-xl text-gray-100 mt-2 sm:mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                법률 및 인사관리 부담없이
              </motion.h3>
              <motion.h3
                className="text-lg sm:text-xl text-gray-100 mt-2 sm:mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                1주일 이내에 원격으로 채용해보세요.
              </motion.h3>
              <motion.p
                className="text-md sm:text-lg text-gray-200 mt-2 underline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                개발자가 필요하신가요?
              </motion.p>
            </Box>

            {/* Info Cards Section */}
            <Box className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-24">
              <motion.div
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <h4 className="text-base sm:text-xl font-semibold text-gray-800 text-white">평균 월 120만원</h4>
                <p className="text-sm sm:text-base text-white mt-2">임금을 해당 국가를 기준으로 계산합니다.</p>
              </motion.div>
              <motion.div
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <h4 className="text-base sm:text-xl font-semibold text-gray-800 text-white">평균 월 120만원</h4>
                <p className="text-sm sm:text-base text-white mt-2">임금을 해당 국가를 기준으로 계산합니다.</p>
              </motion.div>
              <motion.div
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <h4 className="text-base sm:text-xl font-semibold text-gray-800 text-white">평균 월 120만원</h4>
                <p className="text-sm sm:text-base text-white mt-2">임금을 해당 국가를 기준으로 계산합니다.</p>
              </motion.div>
            </Box>
          </Box>

          {/* Carousel Section */}
          <Box className="mt-8 sm:mt-12 space-y-6 sm:space-y-8 w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white">추천 프로필</h2>
            <Box className="relative h-48 sm:h-72 flex items-center justify-center">
              {/* Carousel */}
              <div className="min-h-screen flex items-center justify-center">
                <Swiper
                  effect="coverflow"
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  initialSlide={1}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={{ clickable: true }}
                  modules={[EffectCoverflow, Pagination]}
                  className="w-full max-w-4xl">
                  {data &&
                    data.map((item, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex justify-center swiper-slide"
                        style={{
                          width: '300px',
                          transition: 'all 0.3s ease',
                        }}>
                        <Box key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80">
                          <Box className="relative w-24 h-24 mb-4">
                            <Image
                              src={item?.profile}
                              alt="Profile Picture"
                              width={96}
                              height={96}
                              className="rounded-full"
                            />
                            {/* Flag Badge */}
                            <Box className="absolute bottom-0 right-0 w-6 h-4 bg-yellow-400 rounded-sm border border-white">
                              <Image src={item?.flag} alt="Flag" width={24} height={16} className="rounded-sm" />
                            </Box>
                          </Box>

                          <h2 className="text-lg font-bold text-gray-900 mb-1">{item?.name}</h2>

                          <p className="text-sm text-blue-500 font-medium">
                            마케팅 • <span className="text-blue-500 font-extrabold">{item?.experience}</span>
                          </p>

                          <Box className="flex flex-wrap justify-center gap-2 mt-4">
                            <Skills skills={skills} />
                          </Box>
                        </Box>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Icons Section */}
      <Box className="flex justify-center gap-2 mt-4 w-full overflow-auto">
        <Slider data={sliderData} />
      </Box>
    </>
  );
};
