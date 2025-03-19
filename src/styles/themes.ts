import { DefaultTheme } from "styled-components";

// Define Theme interface
export interface AppTheme extends DefaultTheme {
  id: string;
  name: string;
  background: {
    primary: string;
    secondary: string;
    gradient: string;
    blur: string;
  };
  explorer: {
    background: string;
    border: string;
  };
  player: {
    background: string;
    controls: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  ui: {
    primary: string;
    secondary: string;
    accent: string;
    hover: string;
  };
}

// Space Grey Theme
export const spaceGreyTheme: AppTheme = {
  id: "space-grey",
  name: "Space Grey",
  background: {
    primary: "rgba(28, 28, 30, 0.9)",
    secondary: "rgba(44, 44, 46, 0.8)",
    gradient: "linear-gradient(135deg, rgba(44, 44, 46, 0.9) 0%, rgba(28, 28, 30, 0.95) 100%)",
    blur: "10px",
  },
  explorer: {
    background: "rgba(44, 44, 46, 0.3)",
    border: "rgba(142, 142, 147, 0.2)",
  },
  player: {
    background: "rgba(28, 28, 30, 0.4)",
    controls: "rgba(44, 44, 46, 0.95)",
  },
  text: {
    primary: "rgba(255, 255, 255, 0.9)",
    secondary: "rgba(255, 255, 255, 0.6)",
  },
  ui: {
    primary: "#8E8E93",
    secondary: "#636366",
    accent: "#0A84FF",
    hover: "rgba(255, 255, 255, 0.1)",
  },
};

// Ocean Blue Theme
export const oceanBlueTheme: AppTheme = {
  id: "ocean-blue",
  name: "Ocean Blue",
  background: {
    primary: "rgba(0, 67, 112, 0.9)",
    secondary: "rgba(0, 92, 151, 0.8)",
    gradient: "linear-gradient(135deg, rgba(0, 92, 151, 0.9) 0%, rgba(0, 67, 112, 0.95) 100%)",
    blur: "10px",
  },
  explorer: {
    background: "rgba(0, 128, 201, 0.2)",
    border: "rgba(91, 192, 235, 0.2)",
  },
  player: {
    background: "rgba(0, 67, 112, 0.4)",
    controls: "rgba(0, 92, 151, 0.95)",
  },
  text: {
    primary: "rgba(255, 255, 255, 0.9)",
    secondary: "rgba(255, 255, 255, 0.6)",
  },
  ui: {
    primary: "#91D2FA",
    secondary: "#5BC0EB",
    accent: "#00A8E8",
    hover: "rgba(91, 192, 235, 0.2)",
  },
};

// Classical Black Theme
export const classicalBlackTheme: AppTheme = {
  id: "classical-black",
  name: "Classical Black",
  background: {
    primary: "rgba(0, 0, 0, 0.9)",
    secondary: "rgba(18, 18, 18, 0.8)",
    gradient: "linear-gradient(135deg, rgba(18, 18, 18, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%)",
    blur: "10px",
  },
  explorer: {
    background: "rgba(30, 30, 30, 0.3)",
    border: "rgba(45, 45, 45, 0.2)",
  },
  player: {
    background: "rgba(10, 10, 10, 0.4)",
    controls: "rgba(18, 18, 18, 0.95)",
  },
  text: {
    primary: "rgba(255, 255, 255, 0.9)",
    secondary: "rgba(255, 255, 255, 0.6)",
  },
  ui: {
    primary: "#AAAAAA",
    secondary: "#747474",
    accent: "#FFFFFF",
    hover: "rgba(255, 255, 255, 0.1)",
  },
};

// Contrast Light Theme
export const contrastLightTheme: AppTheme = {
  id: "contrast-light",
  name: "Contrast Light",
  background: {
    primary: "rgba(245, 245, 245, 0.9)",
    secondary: "rgba(235, 235, 235, 0.8)",
    gradient: "linear-gradient(135deg, rgba(235, 235, 235, 0.9) 0%, rgba(245, 245, 245, 0.95) 100%)",
    blur: "10px",
  },
  explorer: {
    background: "rgba(255, 255, 255, 0.3)",
    border: "rgba(200, 200, 200, 0.3)",
  },
  player: {
    background: "rgba(255, 255, 255, 0.4)",
    controls: "rgba(255, 255, 255, 0.95)",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.9)",
    secondary: "rgba(0, 0, 0, 0.6)",
  },
  ui: {
    primary: "#666666",
    secondary: "#999999",
    accent: "#007AFF",
    hover: "rgba(0, 0, 0, 0.05)",
  },
};

// Cyber Punk Theme
export const cyberPunkTheme: AppTheme = {
  id: "cyber-punk",
  name: "Cyber Punk",
  background: {
    primary: "rgba(8, 0, 28, 0.9)",
    secondary: "rgba(24, 0, 50, 0.8)",
    gradient: "linear-gradient(135deg, rgba(24, 0, 50, 0.9) 0%, rgba(120, 0, 120, 0.6) 50%, rgba(8, 0, 28, 0.95) 100%)",
    blur: "10px",
  },
  explorer: {
    background: "rgba(120, 0, 120, 0.2)",
    border: "rgba(255, 0, 255, 0.2)",
  },
  player: {
    background: "rgba(8, 0, 28, 0.4)",
    controls: "rgba(24, 0, 50, 0.95)",
  },
  text: {
    primary: "rgba(255, 255, 255, 0.9)",
    secondary: "rgba(255, 255, 255, 0.6)",
  },
  ui: {
    primary: "#FF00FF", // Magenta
    secondary: "#00FFFF", // Cyan
    accent: "#FE53BB", // Pink
    hover: "rgba(255, 0, 255, 0.2)",
  },
};

// Available themes
export const themes: Record<string, AppTheme> = {
  "space-grey": spaceGreyTheme,
  "ocean-blue": oceanBlueTheme,
  "classical-black": classicalBlackTheme,
  "contrast-light": contrastLightTheme,
  "cyber-punk": cyberPunkTheme,
};

// For backward compatibility
export const forestTheme = classicalBlackTheme;