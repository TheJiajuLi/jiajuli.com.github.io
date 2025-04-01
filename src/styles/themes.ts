export type ThemeType = 'dark' | 'light' | 'space-grey' | 'ocean-blue' | 'cyber-punk' | 'contrast-light';

export interface AppTheme {
  id: ThemeType;
  name: string;
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    hover: string;
    highlight: string;
    gradient: string;
    nav: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: {
    subtle: string;
  };
  ui: {
    accent: string;
    accentDark: string;
    secondary: string;
    secondaryHover: string;
    danger: string;
    hover: string;
  };
}

export const darkTheme: AppTheme = {
  id: 'dark',
  name: 'Dark Theme',
  background: {
    primary: '#121212',
    secondary: '#1E1E1E',
    tertiary: '#282828',
    hover: 'rgba(255, 255, 255, 0.1)',
    highlight: 'rgba(255, 255, 255, 0.05)',
    gradient: 'linear-gradient(180deg, #121212 0%, #000000 100%)',
    nav: 'rgba(18, 18, 18, 0.8)'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B3B3B3',
    tertiary: '#737373'
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.1)'
  },
  ui: {
    accent: '#1DB954',
    accentDark: '#1AA34A',
    secondary: '#282828',
    secondaryHover: '#333333',
    danger: '#E91429',
    hover: 'rgba(255, 255, 255, 0.1)'
  }
};

export const lightTheme: AppTheme = {
  id: 'light',
  name: 'Light Theme',
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    tertiary: '#EEEEEE',
    hover: 'rgba(0, 0, 0, 0.05)',
    highlight: 'rgba(0, 0, 0, 0.03)',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)',
    nav: 'rgba(255, 255, 255, 0.8)'
  },
  text: {
    primary: '#000000',
    secondary: '#6F6F6F',
    tertiary: '#A3A3A3'
  },
  border: {
    subtle: 'rgba(0, 0, 0, 0.1)'
  },
  ui: {
    accent: '#1DB954',
    accentDark: '#1AA34A',
    secondary: '#EEEEEE',
    secondaryHover: '#E5E5E5',
    danger: '#E91429',
    hover: 'rgba(0, 0, 0, 0.05)'
  }
};

export const spaceGreyTheme: AppTheme = {
  id: 'space-grey',
  name: 'Space Grey',
  background: {
    primary: '#1E2132',
    secondary: '#252A3F',
    tertiary: '#2C334D',
    hover: 'rgba(255, 255, 255, 0.1)',
    highlight: 'rgba(255, 255, 255, 0.05)',
    gradient: 'linear-gradient(180deg, #1E2132 0%, #141824 100%)',
    nav: 'rgba(30, 33, 50, 0.8)'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B3B3B3',
    tertiary: '#737373'
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.1)'
  },
  ui: {
    accent: '#5C6BC0',
    accentDark: '#3F51B5',
    secondary: '#2C334D',
    secondaryHover: '#353D5C',
    danger: '#EF5350',
    hover: 'rgba(255, 255, 255, 0.1)'
  }
};

export const oceanBlueTheme: AppTheme = {
  id: 'ocean-blue',
  name: 'Ocean Blue',
  background: {
    primary: '#00547A',
    secondary: '#006994',
    tertiary: '#0087B8',
    hover: 'rgba(255, 255, 255, 0.1)',
    highlight: 'rgba(255, 255, 255, 0.05)',
    gradient: 'linear-gradient(180deg, #00547A 0%, #004666 100%)',
    nav: 'rgba(0, 84, 122, 0.8)'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B3E0FF',
    tertiary: '#80CFFF'
  },
  border: {
    subtle: 'rgba(255, 255, 255, 0.1)'
  },
  ui: {
    accent: '#00D4FF',
    accentDark: '#00BFFF',
    secondary: '#006994',
    secondaryHover: '#007AB8',
    danger: '#FF4C4C',
    hover: 'rgba(255, 255, 255, 0.1)'
  }
};

export const cyberPunkTheme: AppTheme = {
  id: 'cyber-punk',
  name: 'Cyber Punk',
  background: {
    primary: '#19002E',
    secondary: '#220042',
    tertiary: '#2C0057',
    hover: 'rgba(255, 0, 255, 0.1)',
    highlight: 'rgba(255, 0, 255, 0.05)',
    gradient: 'linear-gradient(180deg, #19002E 0%, #0F001C 100%)',
    nav: 'rgba(25, 0, 46, 0.8)'
  },
  text: {
    primary: '#FF00FF',
    secondary: '#CC00CC',
    tertiary: '#990099'
  },
  border: {
    subtle: 'rgba(255, 0, 255, 0.1)'
  },
  ui: {
    accent: '#00FFFF',
    accentDark: '#00CCCC',
    secondary: '#2C0057',
    secondaryHover: '#380070',
    danger: '#FF003C',
    hover: 'rgba(255, 0, 255, 0.1)'
  }
};

export const contrastLightTheme: AppTheme = {
  id: 'contrast-light',
  name: 'High Contrast Light',
  background: {
    primary: '#FFFFFF',
    secondary: '#F0F0F0',
    tertiary: '#E0E0E0',
    hover: 'rgba(0, 0, 0, 0.1)',
    highlight: 'rgba(0, 0, 0, 0.05)',
    gradient: 'linear-gradient(180deg, #FFFFFF 0%, #F0F0F0 100%)',
    nav: 'rgba(255, 255, 255, 0.95)'
  },
  text: {
    primary: '#000000',
    secondary: '#1A1A1A',
    tertiary: '#333333'
  },
  border: {
    subtle: 'rgba(0, 0, 0, 0.2)'
  },
  ui: {
    accent: '#0066CC',
    accentDark: '#004C99',
    secondary: '#E0E0E0',
    secondaryHover: '#D0D0D0',
    danger: '#CC0000',
    hover: 'rgba(0, 0, 0, 0.1)'
  }
};

export const themes: Record<ThemeType, AppTheme> = {
  light: lightTheme,
  dark: darkTheme,
  'space-grey': spaceGreyTheme,
  'ocean-blue': oceanBlueTheme,
  'cyber-punk': cyberPunkTheme,
  'contrast-light': contrastLightTheme
};

export default themes;