'use client';

import * as React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-xl border bg-white text-black shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};
