import '../global.css';
import { Inter } from '@next/font/google';
import LocalFont from '@next/font/local';
import { Metadata } from 'next';
import { Analytics } from './components/analytics';

export const metadata: Metadata = {
  title: {
    default: 'adithyask.com',
    template: '%s | adithyask.com',
  },
  description: 'Software engineer at upstash.com and founder of planetfall.io',
  openGraph: {
    title: 'adithyask.com',
    description:
      'Software engineer at upstash.com and founder of planetfall.io',
    url: 'https://adithyask.com',
    siteName: 'adithyask.com',
    images: [
      {
        url: 'https://adithyask.com/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
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
  twitter: {
    title: 'Adithya S K',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(' ')}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
