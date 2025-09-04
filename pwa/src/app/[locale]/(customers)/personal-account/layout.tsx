import React from "react";

import '@/styles/globals.css';
//import { Providers } from "./../src/common/Providers";
//import ServerHeader from '~/src/_components/header/ServerHeader';
import { MenuNavigation } from '@/_components/molecules';
import Footer from '~/src/_components/footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {

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
