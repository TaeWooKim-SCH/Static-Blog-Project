'use client'

import { useTheme } from "next-themes";

export default function useChangeTheme() {
  const { setTheme, resolvedTheme } = useTheme();

  const isthemeDark = resolvedTheme === 'dark';
  const themeChangeLight = () => setTheme('light');
  const themeChangeDark = () => setTheme('dark');

  return {
    isthemeDark,
    themeChangeLight,
    themeChangeDark
  }
}