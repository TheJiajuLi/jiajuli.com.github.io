import { GenreType } from '../types/music';

export const genreColors: Record<GenreType, string> = {
  classical: '#7a1f1f',
  rock: '#585858',
  pop: '#9c27b0',
  electronic: '#3a1f7a',
  jazz: '#7a4b1f',
  ambient: '#2d5d2a',
  soundtrack: '#1f5a7a',
  hiphop: '#333333'
};

// Theme colors for UI
export const themeColors = {
  light: {
    bg: {
      primary: '#FFFFFF',
      secondary: '#F5F7FA',
      tertiary: '#EEF2F7',
      sidebar: '#F0F4F8'
    },
    text: {
      primary: '#2D3748',
      secondary: '#4A5568',
      tertiary: '#718096'
    },
    ui: {
      border: '#E2E8F0',
      hover: '#EDF2F7',
      accent: '#3182CE',
      highlight: 'rgba(49, 130, 206, 0.1)',
      success: '#38A169',
      error: '#E53E3E'
    }
  },
  dark: {
    bg: {
      primary: '#171923',
      secondary: '#1A202C',
      tertiary: '#2D3748',
      sidebar: '#151A27'
    },
    text: {
      primary: '#F7FAFC',
      secondary: '#E2E8F0',
      tertiary: '#A0AEC0'
    },
    ui: {
      border: '#2D3748',
      hover: '#2C3547',
      accent: '#4299E1',
      highlight: 'rgba(66, 153, 225, 0.15)',
      success: '#48BB78',
      error: '#F56565'
    }
  }
};

// Visualization color schemes
export const visualizationSchemes = {
  default: ['#FF5C8D', '#9B59B6', '#3498DB', '#2ECC71', '#F39C12'],
  neon: ['#FF00FF', '#00FFFF', '#FF8000', '#00FF00', '#FFFF00'],
  monochrome: ['#FFFFFF', '#DDDDDD', '#BBBBBB', '#999999', '#777777'],
  ocean: ['#1A5276', '#2874A6', '#3498DB', '#5DADE2', '#85C1E9'],
  sunset: ['#6C3483', '#E74C3C', '#F39C12', '#F1C40F', '#F7DC6F']
};