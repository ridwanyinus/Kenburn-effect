import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'kenburns effect',
  description: 'Made with 🖤',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Script src='./js/jquery-3.4.1.min.js' />
        <Script src='./vendors/revolution/js/jquery.themepunch.tools.min.js' strategy='afterInteractive' />
        <Script src='./vendors/revolution/js/jquery.themepunch.revolution.min.js' strategy='afterInteractive' />
        <Script src='./vendors/revolution/js/extensions/revolution.extension.kenburn.min.js' strategy='afterInteractive' />
        <Script src='./js/theme.js' strategy='afterInteractive' />
      </body>
    </html>
  );
}
