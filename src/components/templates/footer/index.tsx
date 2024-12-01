import Image, { StaticImageData } from 'next/image';
import { Box, Typography } from '../../atoms';
import { FooterCard } from '../../organisms';
import codeIcon from '@/assets/icon-code.svg';
import gearIcon from '@/assets/icon-gear.svg';
import korIcon from '@/assets/icon-kor.svg';
import avtarIcon from '@/assets/icon-avatar.svg';
import logo from '@/assets/__덉씠__1.png';

export const Footer = () => {
  const cardData: { title: string; icon: StaticImageData }[] = [
    { title: '해외 개발자 원격 채용', icon: codeIcon },
    { title: '외국인 원격 채용 (비개발)', icon: avtarIcon },
    { title: '한국어 가능 외국인 채용', icon: korIcon },
    { title: '해외 개발자 활용 서비스', icon: gearIcon },
  ];

  const addressDetails: { title: string; subValue: string; address: string }[] = [
    {
      title: '상호명',
      subValue: '하이퍼하이어',
      address: 'Hyperhire India Private Limited',
    },
    {
      title: '대표 CEO',
      subValue: '김주현',
      address: 'Juhyun Kim',
    },
    {
      title: '사업자등록번호 CIN',
      subValue: '427-86-01187',
      address: 'U74110DL2016PTC290812',
    },
    {
      title: '주소 ADDRESS',
      subValue: '서울특별시 강남대로 479, 지하1층 238호',
      address: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
    },
  ];

  return (
    <footer className="bg-gray-50 text-gray-800">
      <Box className="mx-auto px-6 p-8 sm:p-16 w-[80%]">
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[30px] auto-rows-auto">
          <Box>
            <Box className="flex items-center mb-4">
              <Image src={logo} alt="Hyperhire" className="w-40 h-8 mr-3" />
            </Box>
            <Typography className="text-[#343741] font-black leading-[21px] text-sm mb-4">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </Typography>
            <Typography className="text-[#5E626F] text-[13px] font-black">010-0000-0000</Typography>
            <Typography className="text-[#5E626F] text-[13px] font-black">aaaaa@naver.com</Typography>
          </Box>

          <Box className="grid xl:grid-cols-4 grid-cols-2 gap-4 w-fit">
            <FooterCard data={cardData} />
          </Box>
          <Box className="flex items-center justify-start gap-6">
            {addressDetails.slice(0, 2).map((detail) => {
              return (
                <Box key={detail.title}>
                  <Typography className="text-[#343741] text-xs leading-[18px] font-black">{detail.title}</Typography>
                  <Typography className="text-gray-700">{detail.subValue}</Typography>
                  <Typography className="text-gray-700">{detail.address}</Typography>
                </Box>
              );
            })}
          </Box>

          <Box className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6">
            {addressDetails.splice(2, addressDetails.length - 1).map((detail) => {
              return (
                <Box key={detail.title}>
                  <Typography className="text-[#343741] text-xs leading-[18px] font-black">{detail.title}</Typography>
                  <Typography className="text-[#5E626F] text-[13px] font-black leading-[19.5px]">
                    {detail.subValue}
                  </Typography>
                  <Typography className="text-[#5E626F] text-[13px] font-black leading-[19.5px]">
                    {detail.address}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box className="text-center flex justify-start w-full mt-8">
          <Typography className="text-[#5E626F] font-black leading-[19.5px]">© 2023 Hyperhire</Typography>
        </Box>
      </Box>
    </footer>
  );
};
