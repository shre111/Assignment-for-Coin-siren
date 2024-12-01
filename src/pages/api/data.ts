import type { NextApiRequest, NextApiResponse } from 'next';
import profile from '@/assets/Ellipse 12.png';
import flag from '@/assets/image 17.png';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = {
    userData: [
      {
        name: 'Abhishek Gupta',
        experience: '2y+',
        profile: profile,
        flag: flag,
        skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        name: 'Abhishek Gupta',
        experience: '2y+',
        profile: profile,
        flag: flag,
        skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        name: 'Abhishek Gupta',
        experience: '2y+',
        profile: profile,
        flag: flag,
        skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
    ],
  };
  res.status(200).json(data);
}
