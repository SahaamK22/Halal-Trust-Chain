// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThirdwebWrapper from './ThirdwebProvider'; // ✅ Correct import of default export

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YesHalal',
  description: 'Halal Meat Traceability Platform powered by Blockchain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebWrapper>
          {children}
        </ThirdwebWrapper>
      </body>
    </html>
  );
}
