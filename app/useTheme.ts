// app/useTheme.ts
import { useState, useEffect } from "react";
import { ThemeOptions, themeColors } from "./themes";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeOptions>("pop");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeOptions;
    if (savedTheme && Object.keys(themeColors).includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  const changeTheme = (newTheme: ThemeOptions) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const colors = themeColors[theme];

  return { theme, changeTheme, colors };
}
