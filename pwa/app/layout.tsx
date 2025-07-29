import React from "react";

import '@/src/styles/globals.css';
import { inter } from '@/src/styles/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
