import React, { ReactNode } from 'react';
import { Box } from '../Box';
import Image from 'next/image';
import Skills from '../../molecules/Skills';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

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
}

function ProfileCard({ item, index }: TypographyPropTypes) {
  const skills = ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'];
  return (
    <div>
      {' '}
      <Box key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 w-80">
        <Box className="relative w-24 h-24 mb-4">
          <Image src={item?.profile} alt="Profile Picture" width={96} height={96} className="rounded-full" />
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
    </div>
  );
}

export default ProfileCard;
