import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

export const metadata: Metadata = {
  title: 'Fiera del Mastro',
  description: 'Raw hands. Infinite vision.',
  icons: {
    icon: [
      { url: '/icon.svg?v=3', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon.svg?v=3', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg?v=3" />
        <link rel="apple-touch-icon" href="/icon.svg?v=3" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-on-surface selection:bg-[#A68B03] selection:text-white leading-[1.6]">
        <LoadingScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
