import { ReactNode } from 'react';
import { Box } from './index';

interface TooltipPropTypes {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  open: boolean;
  outerClassName?: string;
}

const variants = {
  leftBottom: 'rotate-[180deg] relative left-[8px] top-[-1px]',
  rightBottom: 'rotate-[180deg] relative right-[8px] top-[-1px]',
  centerBottom: 'rotate-[180deg] relative right-[50%] top-[-1px]',
  leftTop: 'relative right-[4px] top-[-1px]',
  rightTop: 'relative right-[4px] top-[-1px]',
};

export const Tooltip = ({
  children,
  outerClassName,
  className,
  variant = 'leftBottom',
  open = true,
}: TooltipPropTypes) => {
  return (
    <Box
      className={`${open ? 'opacity-100 transition duration-500 ease-in' : 'opacity-0 transition duration-500 ease-in'} ${outerClassName}`}>
      <Box className={`${className} bg-white w-fit p-2 rounded-lg`}>{children}</Box>
      <Triangle variant={variants[variant]} />
    </Box>
  );
};

const Triangle = ({ variant }: { variant: string }) => {
  return (
    <Box
      className={`${variant} w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-b-white border-transparent`}></Box>
  );
};
