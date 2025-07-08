'use client';

import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from '@thirdweb-dev/chains';

export default function ThirdwebWrapper({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <ThirdwebProvider 
      activeChain={Sepolia}
      clientId="550162c5fe393a6972126161a6fb65ff"
    >
      {children}
    </ThirdwebProvider>
  );
}