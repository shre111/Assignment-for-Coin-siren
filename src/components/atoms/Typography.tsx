import { ReactNode } from 'react';

interface TypographyPropTypes {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

const variants = {
  heading: '',
  subtitle: '',
  tags: '',
  text: '',
  tabs: '',
};

export const Typography = ({ children, variant, className }: TypographyPropTypes) => {
  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
};
