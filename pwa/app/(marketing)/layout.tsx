import React from "react";

import '@/src/styles/globals.css';
import { inter } from '@/src/styles/fonts';
//import { Providers } from "./../src/common/Providers";
import ServerHeader from '@/src/components/header/ServerHeader';
import Footer from '@/src/components/footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
        {/*<Providers>*/}
          <ServerHeader />
          {children}
          <Footer />
        {/*</Providers>*/}
    </>
  );
}
