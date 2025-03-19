import React, { createContext, useState, useContext, useEffect } from "react";
import { AppTheme, themes, classicalBlackTheme } from "../styles/themes";

interface ThemeContextType {
  currentTheme: AppTheme;
  setTheme: (themeId: string) => void;
  availableThemes: AppTheme[];
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: classicalBlackTheme,
  setTheme: () => {},
  availableThemes: Object.values(themes),
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Try to get saved theme from localStorage
  const [currentTheme, setCurrentTheme] = useState<AppTheme>(() => {
    const savedThemeId = localStorage.getItem("theme");
    return savedThemeId && themes[savedThemeId]
      ? themes[savedThemeId]
      : classicalBlackTheme;
  });

  const setTheme = (themeId: string) => {
    if (themes[themeId]) {
      setCurrentTheme(themes[themeId]);
      localStorage.setItem("theme", themeId);
    }
  };

  // Provide available themes as array for easy iteration
  const availableThemes = Object.values(themes);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};
