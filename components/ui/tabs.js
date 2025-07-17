'use client';
import React from 'react';
import { useState } from 'react';

export function Tabs({ defaultValue, children, className }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className}>
      {
        // Loop through children and pass props
        React.Children.map(children, child => {
          if (child.type.name === 'TabsList') {
            return React.cloneElement(child, { activeTab, setActiveTab });
          }
          if (child.type.name === 'TabsContent') {
            return child.props.value === activeTab ? child : null;
          }
          return child;
        })
      }
    </div>
  );
}

export function TabsList({ children, activeTab, setActiveTab, className }) {
  return (
    <div className={`flex border-b ${className}`}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}

export function TabsTrigger({ children, value, activeTab, setActiveTab }) {
  const isActive = value === activeTab;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 text-sm font-medium border-b-2 ${
        isActive ? 'border-black text-black' : 'border-transparent text-gray-500'
      } hover:text-black transition-all`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div className="mt-4">{children}</div>;
}
