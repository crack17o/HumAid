import React from 'react';
import './Typography.css';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'inherit';
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  className = '',
  color = 'inherit',
  align = 'left',
  weight = 'normal',
}) => {
  const Tag = variant === 'body' ? 'p' : variant === 'caption' ? 'span' : variant;
  
  return (
    <Tag
      className={`typography typography--${variant} typography--${color} typography--${align} typography--${weight} ${className}`}
    >
      {children}
    </Tag>
  );
};
