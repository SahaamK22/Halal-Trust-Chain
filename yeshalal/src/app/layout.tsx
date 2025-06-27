// src/app/layout.tsx
import './globals.css';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'YesHalal',
  description: 'Traceable Halal Meat Chain on Blockchain',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider clientId="550162c5fe393a6972126161a6fb65ff">
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
