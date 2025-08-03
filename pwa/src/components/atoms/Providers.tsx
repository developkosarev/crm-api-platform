'use client';
import React from 'react'

import { ThemeProvider } from 'next-themes';

export interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
    {children}
  </ThemeProvider>
);

export default Providers;
