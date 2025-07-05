import { ReactNode } from 'react';
import ReactQueryClientProvider from './ReactQueryClientProvider';

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  return <ReactQueryClientProvider>{children}</ReactQueryClientProvider>;
}
