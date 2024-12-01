import { ReactNode } from 'react';

interface ButtonPropTypes {
  className?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
}

const variants = {
  actionBtn: 'px-6 py-2 bg-white text-[#4A77FF]',
};

export const Button = ({ className, children, variant }: ButtonPropTypes) => {
  return <button className={`${variants[variant]} ${className}`}>{children}</button>;
};
