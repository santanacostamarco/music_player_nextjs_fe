import type { Metadata } from 'next';
import { DM_Sans, DM_Mono, Rubik } from 'next/font/google';
import './globals.css';
import cc from 'classcat';
import { Sidebar } from '@/components/Sidebar';
import { getAccessToken } from '@/common/utils/cookies';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});
const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: '400',
});
const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: '500',
});

export const metadata: Metadata = {
  title: 'LuizaLabs Spotfy',
  description: 'Desafio LuizaLabs',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const accessToken = await getAccessToken();

  const classNames = [
    dmSans.variable,
    dmMono.variable,
    rubik.variable,
    'antialiased',
  ];

  if (!accessToken) {
    return (
      <html lang="en">
        <body className={cc(classNames)}>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={cc(classNames)}>
        <div className="lg:flex">
          <Sidebar />
          <main className="lg:h-screen lg:flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
