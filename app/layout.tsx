import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components';
// import Footer from '@/components/modules/Footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Patissier',
  description: 'Ваш ідеальний десерт',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-main-bg`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
