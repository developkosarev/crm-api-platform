import React from 'react';

import '@/styles/globals.css';
//import { Providers } from "./../src/common/Providers";
import { PartnerLayout } from '@/_components/organisms/layouts';

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PartnerLayout>{children}</PartnerLayout>;
}
