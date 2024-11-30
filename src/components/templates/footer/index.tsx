import { Card } from '../../atoms/Card';
import codeIcon from '../../../../assets/icon-code.svg';
import gearIcon from '../../../../assets/icon-gear.svg';
import korIcon from '../../../../assets/icon-kor.svg';
import avtarIcon from '../../../../assets/icon-avatar.svg';
import logo from '../../../../assets/__덉씠__1.png';
import Image from 'next/image';

const Footer = () => {
  const cardData = [
    { title: '해외 개발자 원격 채용', icon: codeIcon },
    { title: '외국인 원격 채용 (비개발)', icon: avtarIcon },
    { title: '한국어 가능 외국인 채용', icon: korIcon },
    { title: '해외 개발자 활용 서비스', icon: gearIcon },
  ];
  return (
    <footer className="bg-gray-50 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Left Section */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src={logo} // Replace with your logo path
                alt="Hyperhire"
                className="w-40 h-8 mr-3"
              />
            </div>
            <p className="text-gray-700 mb-4">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
            <p className="text-gray-700 font-medium">010-0000-0000</p>
            <p className="text-gray-700 font-medium">aaaaa@naver.com</p>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card data={cardData} />
          </div>
        </div>

        {/* Bottom Section */}
        {/* <div className="border-t border-gray-200 pt-8 text-sm"> */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-semibold">상호명</p>
            <p className="text-gray-700">하이퍼하이어</p>
            <p className="text-gray-700">Hyperhire India Private Limited</p>
          </div>
          <div>
            <p className="font-semibold">대표 CEO</p>
            <p className="text-gray-700">김주현</p>
            <p className="text-gray-700">Juhyun Kim</p>
          </div>
          <div>
            <p className="font-semibold">사업자등록번호 CIN</p>
            <p className="text-gray-700">427-86-01187</p>
            <p className="text-gray-700">U74110DL2016PTC290812</p>
          </div>
          <div>
            <p className="font-semibold">주소 ADDRESS</p>
            <p className="text-gray-700">서울특별시 강남대로 479, 지하1층 238호</p>
            <p className="text-gray-700">
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-700">© 2023 Hyperhire</p>
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
