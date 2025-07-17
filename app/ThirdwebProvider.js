// app/ThirdwebProvider.js
'use client';
import { ThirdwebProvider } from 'thirdweb/react';
import { client, activeChain } from '../lib/client';  // Changed to relative path

export default function ThirdwebWrapper({ children }) {
  return (
    <ThirdwebProvider 
      client={client}
      activeChain={activeChain}
    >
      {children}
    </ThirdwebProvider>
  );
}