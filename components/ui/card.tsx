// components/ui/card.tsx
'use client';

import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`rounded-xl border bg-white text-black shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = ({ children, className, ...props }: CardContentProps) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};
