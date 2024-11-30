import { FooterCard } from '../../organisms/FooterCards';
import codeIcon from '../../../../assets/icon-code.svg';
import gearIcon from '../../../../assets/icon-gear.svg';
import korIcon from '../../../../assets/icon-kor.svg';
import avtarIcon from '../../../../assets/icon-avatar.svg';
import logo from '../../../../assets/__덉씠__1.png';
import Image, { StaticImageData } from 'next/image';
import { Box } from '../../atoms/Box';
import { Typography } from '../../atoms/Typography';

const Footer = () => {
  const cardData: { title: string; icon: StaticImageData }[] = [
    { title: '해외 개발자 원격 채용', icon: codeIcon },
    { title: '외국인 원격 채용 (비개발)', icon: avtarIcon },
    { title: '한국어 가능 외국인 채용', icon: korIcon },
    { title: '해외 개발자 활용 서비스', icon: gearIcon },
  ];

  const addressDetails: { title: string; subValue: string; address: string }[] = [
    {
      title: "상호명",
      subValue: "하이퍼하이어",
      address: "Hyperhire India Private Limited"
    },
    {
      title: "대표 CEO",
      subValue: "김주현",
      address: "Juhyun Kim"
    },
    {
      title: "사업자등록번호 CIN",
      subValue: "427-86-01187",
      address: "U74110DL2016PTC290812"
    },
    {
      title: "주소 ADDRESS",
      subValue: "서울특별시 강남대로 479, 지하1층 238호",
      address: "D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India"
    }
  ];

  return (
    <footer className="bg-gray-50 text-gray-800 py-12">
      <Box className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <Box className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Left Section */}
          <Box>
            <Box className="flex items-center mb-4">
              <Image
                src={logo}
                alt="Hyperhire"
                className="w-40 h-8 mr-3"
              />
            </Box>
            <Typography className="text-gray-700 mb-4">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</Typography>
            <Typography className="text-gray-700 font-medium">010-0000-0000</Typography>
            <Typography className="text-gray-700 font-medium">aaaaa@naver.com</Typography>
          </Box>

          {/* Right Section */}
          <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <FooterCard data={cardData} />
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box className="flex flex-col md:flex-row justify-between gap-8">
          {
            addressDetails.map((detail, index) => {
              return (
                <Box>
                  <Typography className="font-semibold">상호명</Typography>
                  <Typography className="text-gray-700">하이퍼하이어</Typography>
                  <Typography className="text-gray-700">Hyperhire India Private Limited</Typography>
                </Box>
              )
            })
          }
        </Box>
        <Box className="text-center mt-8">
          <Typography className="text-gray-700">© 2023 Hyperhire</Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
