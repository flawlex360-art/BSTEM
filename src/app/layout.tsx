import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: {
    default: 'Kpando Anglican STEM Club | Empowering African Youth',
    template: '%s | Kpando Anglican STEM Club'
  },
  description: 'Empowering African Youth Through STEM. Advancing digital equity, STEM education, robotics, and innovation leadership across Africa from Kpando, Ghana.',
  keywords: ['STEM', 'Kpando', 'Ghana', 'Education', 'Robotics', 'Science Club', 'Anglican', 'Youth', 'Technology', 'Innovation'],
  openGraph: {
    title: 'Kpando Anglican STEM Club',
    description: 'Empowering African Youth Through STEM. Join us in advancing digital equity and innovation.',
    url: 'https://bstem.vercel.app',
    siteName: 'Kpando Anglican STEM Club',
    images: [
      {
        url: 'https://bstem.vercel.app/logo.png', // Fallback to logo if banner isn't ready
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_GH',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
