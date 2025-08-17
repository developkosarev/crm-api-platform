import { Inter, Lusitana, Playfair_Display } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',   // <- REQUIRED for inter.variable
  display: 'swap'
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal','italic'],
  variable: '--font-playfair',
  display: 'swap',
});
