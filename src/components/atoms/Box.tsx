import { MouseEvent, ReactNode } from 'react';

interface BoxPropTypes {
  children?: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  onClickEvent?: (event: MouseEvent<HTMLDivElement>) => void;
}

const variants = {
  rowCenter: 'flex justify-center items-center',
  colCenter: 'flex flex-col justify-center items-center',
  rowBetween: 'flex justify-between items-center',
  colBetween: 'flex flex-col justify-center items-between',
};

export const Box = ({ children, variant, className, onClickEvent }: BoxPropTypes) => {
  return (
    <div className={`${variants[variant]} ${className}`} onClick={onClickEvent ? onClickEvent : undefined}>
      {children}
    </div>
  );
};
