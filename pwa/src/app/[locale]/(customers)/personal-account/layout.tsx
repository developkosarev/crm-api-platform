import React from 'react';

import '@/styles/globals.css';
//import { Providers } from "./../src/common/Providers";
import { CustomerLayout } from '@/_components/organisms/layouts';

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CustomerLayout>{children}</CustomerLayout>;
}
