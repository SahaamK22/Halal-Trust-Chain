// components/ConnectButton.js
'use client';
import { ConnectButton } from 'thirdweb/react';
import { client } from '../lib/client';  // Changed to relative path

export default function CustomConnectButton() {
  return (
    <ConnectButton 
      client={client}
    />
  );
}