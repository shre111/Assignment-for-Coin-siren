import Image from 'next/image';
import { motion } from 'framer-motion';
import profile from '../../../assets/Ellipse 12.png';
import flag from '../../../assets/image 17.png';
import Skills from '../molecules/Skills';
import Slider from '../molecules/Slider';
import Tv from '../../../assets/icon-marketing.svg';
import Image1 from '../../../assets/icon-image.svg';
import Box from '../../../assets/icon-box.svg';
import Target from '../../../assets/icon-target.svg';
import Call from '../../../assets/icon-call.svg';

export const MiddlePage = () => {
  const sliderData = [
    { text: '해외 마케팅', icon: Tv },
    { text: '퍼블리셔', icon: Image1 },
    { text: '캐드원(제도사)', icon: Box },
    { text: '해외 세일즈', icon: Target },
    { text: '해외 CS', icon: Call },
    { text: '해외 마케팅', icon: Target },
    { text: '해외 마케팅', icon: Call },
  ];
  const skills = ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'];
  return (
    <>
      <div className="p-8 h-[830px] sm:p-16 lg:p-40 bg-gradient-to-r from-blue-500 to-teal-500 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800">
        <div className="flex flex-col sm:flex-row w-full items-center justify-between">
          <div className="space-y-8 sm:space-y-12">
            {/* Header Section */}
            <div className="text-left">
              {/* <h1 className="text-3xl sm:text-5xl font-extrabold text-white">최고의 실력을 가진</h1>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-[10px] sm:mt-[15px]">
                외국인 인재를 찾고 계신가요?
              </h1> */}
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
              {/* <h3 className="text-lg sm:text-xl text-gray-100 mt-2 sm:mt-4">법률 및 인사관리 부담없이</h3>
              <h3 className="text-lg sm:text-xl text-gray-100 mt-2 sm:mt-4">1주일 이내에 원격으로 채용해보세요.</h3>
              <p className="text-md sm:text-lg text-gray-200 mt-2 underline">개발자가 필요하신가요?</p> */}
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
            </div>

            {/* Info Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-24">
              {/* <div className="text-white">
                <h4 className="text-base sm:text-xl font-semibold text-gray-800 text-white">평균 월 120만원</h4>
                <p className="text-sm sm:text-base text-white mt-2">임금을 해당 국가를 기준으로 계산합니다.</p>
              </div>
              <div className="text-white">
                <h4 className="text-base sm:text-xl font-semibold text-gray-800 text-white">평균 월 120만원</h4>
                <p className="text-sm sm:text-base text-white mt-2">임금을 해당 국가를 기준으로 계산합니다.</p>
              </div>
              <div className="text-white">
                <h4 className="text-base sm:text-xl font-semibold text-gray-800 text-white">평균 월 120만원</h4>
                <p className="text-sm sm:text-base text-white mt-2">임금을 해당 국가를 기준으로 계산합니다.</p>
              </div> */}
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
            </div>
          </div>

          {/* Carousel Section */}
          <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8 w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white">추천 프로필</h2>
            <div className="relative h-48 sm:h-72 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
              {/* Carousel */}

              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={profile} // Replace with your image path
                    alt="Profile Picture"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                  {/* Flag Badge */}
                  <div className="absolute bottom-0 right-0 w-6 h-4 bg-yellow-400 rounded-sm border border-white">
                    <Image
                      src={flag} // Replace with your flag image path
                      alt="Flag"
                      width={24}
                      height={16}
                      className="rounded-sm"
                    />
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-900 mb-1">Abhishek Gupta</h2>

                <p className="text-sm text-blue-500 font-medium">
                  마케팅 • <span className="text-blue-500 font-extrabold">2y+</span>
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <Skills skills={skills} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Icons Section */}
      <div className="flex justify-center gap-2 mt-4 absolute top-[75%] w-full overflow-auto">
        <Slider data={sliderData} />
      </div>
    </>
  );
};
