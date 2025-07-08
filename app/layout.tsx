import './globals.css';
import { ReactNode } from 'react';
import ReactQueryProvider from '../src/providers/ReactQueryProvider';
import ThirdwebWrapper from './ThirdwebProvider';

export const metadata = {
  title: 'YesHalal',
  description: 'Halal Meat Traceability Dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThirdwebWrapper>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThirdwebWrapper>
      </body>
    </html>
  );
}