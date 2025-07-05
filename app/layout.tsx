
// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import ReactQueryProvider from '../src/providers/ReactQueryProvider';

 // ✅ updated path
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from '@thirdweb-dev/chains';

export const metadata = {

  title: 'YesHalal',
  description: 'Halal Meat Traceability Dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
 
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider
          activeChain={Sepolia}
          clientId="550162c5fe393a6972126161a6fb65ff" // ✅ include this
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
