import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'React nextjs kenburns effect',
  description: 'Made with 🖤',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`font-sans antialiased`}>
        {children}

        <Script src='/js/jquery-3.4.1.min.js' />

        {/* main revolution slider from https://www.sliderrevolution.com/wordpress-sliders/ */}
        <Script src='/revolution/js/jquery.themepunch.tools.min.js' strategy='afterInteractive' />
        <Script src='/revolution/js/jquery.themepunch.revolution.min.js' strategy='afterInteractive' />
        <Script src='/revolution/js/extensions/revolution.extension.kenburn.min.js' strategy='afterInteractive' />
        <Script src='/js/theme.js' strategy='afterInteractive' />
      </body>
    </html>
  );
}
