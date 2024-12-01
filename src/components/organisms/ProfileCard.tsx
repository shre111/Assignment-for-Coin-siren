import Image from 'next/image';
import React from 'react';
import { Box, Typography } from '../atoms';
import { Skills } from '../molecules';

interface profile {
  name: string;
  experience: string;
  profile: string;
  flag: string;
  skills: string[];
}

interface TypographyPropTypes {
  item?: profile;
  index?: number;
  setOpen: (value: boolean) => void;
}

export const ProfileCard = ({ item, index, setOpen }: TypographyPropTypes) => {
  const skills = ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'];
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      key={index}
      className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80 min-h-[400px]">
      <Box className="relative w-[120px] mb-4">
        <Image src={item?.profile} alt="Profile Picture" width={120} height={120} className="rounded-full" />
        {/* Flag Badge */}
        <Box className="absolute bottom-1 right-2 w-6 h-4 bg-yellow-400 rounded-sm border border-white">
          <Image src={item?.flag} alt="Flag" width={24} height={16} className="rounded-sm" />
        </Box>
      </Box>

      <Typography className="text-2xl font-black text-gray-900 align-center leading-[36px] mb-1">
        {item?.name}
      </Typography>

      <Typography className="text-base text-[#4A77FF] font-black leading-6">
        마케팅 • <span className="text-[#4A77FF] font-extrabold">{item?.experience}</span>
      </Typography>

      <Box className="flex flex-wrap justify-center leading-6 gap-2 mt-4">
        <Skills skills={skills} />
      </Box>
    </div>
  );
};
