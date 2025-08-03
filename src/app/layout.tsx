import type { Metadata } from 'next';
import { DM_Sans, DM_Mono, Rubik } from 'next/font/google';
import './globals.css';
import cc from 'classcat';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classNames = cc([
    dmSans.variable,
    dmMono.variable,
    rubik.variable,
    'antialiased',
  ]);

  return (
    <html lang="en">
      <body className={classNames}>{children}</body>
    </html>
  );
}
