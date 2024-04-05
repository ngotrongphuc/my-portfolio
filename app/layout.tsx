import { poppins } from '@/app/ui/fonts';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import './globals.css';
import { BASE_URL } from './utils/constants';

export const metadata: Metadata = {
  title: 'Ngo Trong Phuc - Portfolio',
  description: 'This is the portfolio web of Ngo Trong Phuc',
  openGraph: {
    title: 'Ngo Trong Phuc - Portfolio',
    description: 'This is the portfolio web of Ngo Trong Phuc',
    url: BASE_URL,
    siteName: 'Ngo Trong Phuc Portfolio',
    images: [
      {
        url: `${BASE_URL}/hero-bg.jpg`,
        width: 1920,
        height: 1080,
        alt: 'Hero background',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
