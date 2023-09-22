'use client'

import { useTheme } from "next-themes";

export default function useChangeTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isthemeDark = resolvedTheme === 'dark';
  const themeChangeLight = () => setTheme('light');
  const themeChangeDark = () => setTheme('dark');

  return {
    isthemeDark,
    theme,
    themeChangeLight,
    themeChangeDark
  }
}