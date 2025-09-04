import React from 'react';

import '@/styles/globals.css';
//import { Providers } from "./../src/common/Providers";
//import ServerHeader from '~/src/_components/header/ServerHeader';
import { BusinessLayout } from '@/_components/organisms/layouts';
//import Footer from '@/_components/footer';

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-white">
      <body className="h-full">
        <BusinessLayout>{children}</BusinessLayout>
      </body>
    </html>
  );
}
