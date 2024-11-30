import { MouseEvent, ReactNode } from 'react';

interface BoxPropTypes {
  children?: ReactNode;
  variant?: keyof typeof variants;
  customStyles?: string;
  onClickEvent?: (event: MouseEvent<HTMLDivElement>) => void;
}

const variants = {
  rowCenter: 'flex justify-center items-center',
  colCenter: 'flex flex-col justify-center items-center',
  rowBetween: 'flex justify-between items-center',
  colBetween: 'flex flex-col justify-center items-between',
};

export const Box = ({ children, variant, customStyles, onClickEvent }: BoxPropTypes) => {
  return (
    <div className={`${variants[variant]} ${customStyles}`} onClick={onClickEvent ? onClickEvent : undefined}>
      {children}
    </div>
  );
};
