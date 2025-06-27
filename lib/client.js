// lib/client.ts
import { createThirdwebClient } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains"; // use Sepolia directly

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "",
  chain: Sepolia, // use predefined chain constant
});
