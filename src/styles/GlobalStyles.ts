import { createGlobalStyle } from 'styled-components';
import { AppTheme } from './themes';

const GlobalStyles = createGlobalStyle<{ theme: AppTheme }>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.text.primary};
    transition: background 0.3s ease, color 0.3s ease;
  }

  * {
    box-sizing: border-box;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => 
      theme.id === 'contrast-light' 
        ? 'rgba(0, 0, 0, 0.05)' 
        : 'rgba(255, 255, 255, 0.05)'
    };
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => 
      theme.id === 'contrast-light' 
        ? 'rgba(0, 0, 0, 0.2)' 
        : 'rgba(255, 255, 255, 0.2)'
    };
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => 
      theme.id === 'contrast-light' 
        ? 'rgba(0, 0, 0, 0.3)' 
        : 'rgba(255, 255, 255, 0.3)'
    };
  }

  /* Apply theme accent color to focus outlines */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.ui.accent};
    outline-offset: 2px;
  }

  /* Style text selection */
  ::selection {
    background: ${({ theme }) => theme.ui.accent}66;
    color: ${({ theme }) => theme.text.primary};
  }
`;

export default GlobalStyles;