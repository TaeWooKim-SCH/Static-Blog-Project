'use client'

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface PropsType {
  children: ReactNode;
}

export default function ThemeWrap({ children }: PropsType) {
  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  );
}