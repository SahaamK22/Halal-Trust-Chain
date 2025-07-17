// lib/utils.ts
import { client, activeChain } from './client';

/**
 * Utility to join class names conditionally
 * Commonly used in Tailwind UI components
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Existing Thirdweb config
export const getThirdwebConfig = () => ({
  client,
  chain: activeChain,
});
