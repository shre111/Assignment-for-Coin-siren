import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface IconPropTypes {
  children: StaticImageData;
  width?: number;
}

export const Icon = ({ children, width }: IconPropTypes) => {
  return <Image src={children} alt="Logo" width={width || 100} height={50} />;
};
