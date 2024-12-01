import { useState } from 'react';
import { Box, Button, Typography, Icon } from '../../atoms';
import { Dropdown } from '../../molecules';
import Logo from '@/assets/logo.svg';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const subItems = ['해외 개발자 원격 채용', '외국인 원격 채용 (비개발 직군)', '한국어 가능 외국인 채용'];
  return (
    <>
      <Box variant="rowBetween" className="w-[100%] sm:w-[80%] m-auto px-6 py-4 sm:px-16">
        <Icon width={114}>{Logo}</Icon>

        {/* Desktop View */}
        <Box variant="rowCenter" className="gap-6 hidden lg:flex">
          <Dropdown label={'채용'} subItems={subItems} />
          <Typography className="text-white">해외 개발자 활용 서비스</Typography>
        </Box>

        <Button variant={'actionBtn'} className="hidden lg:block rounded-md font-extrabold">
          문의하기
        </Button>

        {/* Mobile View: Menu Button */}
        <button className="block lg:hidden text-white pr-4" onClick={toggleSidebar}>
          ☰
        </button>
      </Box>

      {/* Sidebar */}
      {isSidebarOpen && (
        <Box className="fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform transform">
          <Box>
            <Box className="flex justify-end p-1.5 px-2.5">
              <button className="text-black" onClick={toggleSidebar}>
                ✕
              </button>
            </Box>
            <Box>
              <Typography className="text-black text-left font-bold">채용</Typography>
            </Box>
            <Box>
              <ul className="mt-2 w-[100%]">
                {subItems.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer bg-white border border-gray-200 rounded-md shadow-large mb-15">
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
            <Button
              variant={'actionBtn'}
              className="mt-6 w-full rounded-md font-extrabold text-black shadow-large border">
              문의하기
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};
