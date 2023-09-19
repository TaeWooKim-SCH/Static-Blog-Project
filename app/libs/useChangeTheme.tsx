import { useTheme } from "next-themes";

export default function useChangeTheme() {
  const { theme, setTheme } = useTheme();

  const themeChangeLight = () => setTheme('light');
  const themeChangeDark = () => setTheme('dark');

  return {
    theme,
    themeChangeLight,
    themeChangeDark
  }
}