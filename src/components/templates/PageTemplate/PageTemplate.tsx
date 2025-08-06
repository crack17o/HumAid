import React from 'react';
import { Navigation, Footer } from '../../organisms';
import './PageTemplate.css';

export interface PageTemplateProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`page-template ${className}`}>
      <Navigation />
      <main className="page-template__main">
        {children}
      </main>
      <Footer />
    </div>
  );
};
