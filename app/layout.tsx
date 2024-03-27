import type { Metadata } from 'next';
import { poppins } from '@/app/ui/fonts';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: {
    template: '%s | Ngo Trong Phuc',
    default: 'Ngo Trong Phuc',
  },
  description: 'My portfolio',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
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
