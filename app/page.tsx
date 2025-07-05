'use client';

import { ConnectWallet } from '@thirdweb-dev/react';

export default function Home() {
  if (typeof window === 'undefined') return null;
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      {/* LOGO */}
      <img src="/yeshalal-logo.svg" alt="YesHalal Logo" className="w-48 h-auto mb-6" />

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-green-600 mb-2">✅ YesHalal is Live!</h1>

      {/* SUBTITLE */}
      <p className="text-lg mb-6 text-gray-700">
        Welcome to the Halal Meat Journey – From Farm to Fork.
      </p>

      {/* CONNECT WALLET */}
      <ConnectWallet
        theme="light"
        btnTitle="Connect Wallet to Continue"
        className="scale-110"
      />
    </main>
  );
}
