import {notFound} from 'next/navigation';
import {Locale, NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import { routing } from '@/i18n/routing';
import '@/styles/globals.css';
import { inter, playfair } from '@/styles/fonts';

type Props = {
  children: ReactNode;
  params: Promise<{locale: Locale}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <title>Check entry page with auth</title>
      </head>
      <body className='antialiased'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}