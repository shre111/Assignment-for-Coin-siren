import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface IconPropTypes {
  children: StaticImageData;
  width?: number;
  className?: string;
}

export const Icon = ({ children, width, className }: IconPropTypes) => {
  return <Image className={className} src={children} alt="Logo" width={width || 100} height={50} />;
};
