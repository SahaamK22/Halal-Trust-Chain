'use client';

import "./globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider
          activeChain={Sepolia}
          clientId="550162c5fe393a6972126161a6fb65ff" // ✅ Hardcoded clientId here
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}