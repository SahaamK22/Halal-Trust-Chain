// lib/client.ts

import { createThirdwebClient } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import type { Chain } from "thirdweb";

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
  secretKey: process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY as string,
});

export const activeChain: Chain = sepolia;
