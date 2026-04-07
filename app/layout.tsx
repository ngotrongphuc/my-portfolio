import type { Metadata } from 'next';
import { Navbar } from './components/Navbar';
import './globals.css';
import { poppins } from './ui/fonts';

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: 'Ngo Trong Phuc - Portfolio',
  description: 'This is the portfolio web of Ngo Trong Phuc',
  openGraph: {
    title: 'Ngo Trong Phuc - Portfolio',
    description: 'This is the portfolio web of Ngo Trong Phuc',
    url: '/',
    siteName: 'Ngo Trong Phuc Portfolio',
    images: [
      {
        url: '/hero-bg.jpg',
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
