'use client';

import React, { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <NextUIProvider>
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      themes={['light', 'dark']}
    >
      {children}
    </NextThemesProvider>
  </NextUIProvider>
);
