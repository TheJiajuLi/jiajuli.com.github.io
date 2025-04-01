import React, { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AppTheme, ThemeType, themes } from "../styles/themes";

export interface ThemeContextType {
  currentTheme: AppTheme;
  setTheme: (themeId: ThemeType) => void;
  themeId: ThemeType;
}

const defaultThemeId: ThemeType = "dark";

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeId, setThemeId] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("theme") as ThemeType;
    return saved && themes[saved] ? saved : defaultThemeId;
  });

  const currentTheme = themes[themeId];

  const handleSetTheme = (newThemeId: ThemeType) => {
    if (themes[newThemeId]) {
      // Wrap in requestAnimationFrame to avoid React state updates during render
      requestAnimationFrame(() => {
        setThemeId(newThemeId);
        localStorage.setItem("theme", newThemeId);
      });
    }
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(
    () => ({
      currentTheme,
      setTheme: handleSetTheme,
      themeId,
    }),
    [currentTheme, themeId]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const useTheme = () => {
  return useThemeContext().currentTheme;
};
