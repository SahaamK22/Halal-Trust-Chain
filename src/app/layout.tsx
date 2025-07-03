import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThirdwebWrapper from '../providers/ThirdwebWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YesHalal – Halal Meat Trust Chain',
  description: 'Track and trace halal meat from farm to fork with blockchain transparency.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebWrapper>{children}</ThirdwebWrapper>
      </body>
    </html>
  );
}
