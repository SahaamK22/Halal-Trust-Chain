import './globals.css';
import { Inter } from 'next/font/google';
import ThirdwebWrapper from '@/providers/ThirdwebWrapper';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'YesHalal',
  description: 'Halal Meat Journey – From Farm to Fork.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebWrapper>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </ThirdwebWrapper>
      </body>
    </html>
  );
}
