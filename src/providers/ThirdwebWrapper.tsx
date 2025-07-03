'use client';

import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from '@thirdweb-dev/chains';
import { ReactNode } from 'react';

export default function ThirdwebWrapper({ children }: { children: ReactNode }) {
  return (
    <ThirdwebProvider
      clientId="550162c5fe393a6972126161a6fb65ff"
      activeChain={Sepolia}
    >
      {children}
    </ThirdwebProvider>
  );
}
