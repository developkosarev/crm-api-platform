import { MenuNavigation } from '@/_components/molecules';
import '@/styles/globals.css';
import React from 'react';
//import { Providers } from "./../src/common/Providers";
import Footer from '@/_components/footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/*<Providers>*/}
      <MenuNavigation />
      {children}
      <Footer />
      {/*</Providers>*/}
    </>
  );
}
