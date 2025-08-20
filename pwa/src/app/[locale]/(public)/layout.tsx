import React from "react";

import '@/styles/globals.css';
//import { Providers } from "./../src/common/Providers";
import Footer from '@/_components/footer';
import ServerHeader from '@/_components/header/ServerHeader';

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
