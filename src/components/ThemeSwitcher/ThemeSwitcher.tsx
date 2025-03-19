import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeContext } from '../../context/ThemeContext';
import { FiSettings } from 'react-icons/fi';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <ThemeSwitcherContainer>
      <ThemeButton
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiSettings size={16} />
        <ButtonText>Theme</ButtonText>
      </ThemeButton>

      <AnimatePresence>
        {isOpen && (
          <ThemePanel
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <ThemePanelHeader>Select Theme</ThemePanelHeader>
            <ThemeList>
              {availableThemes.map((theme) => (
                <ThemeOption
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                  $isActive={currentTheme.id === theme.id}
                >
                  <ThemeColorPreview $theme={theme} />
                  <ThemeName>{theme.name}</ThemeName>
                  {currentTheme.id === theme.id && (
                    <ActiveIndicator
                      layoutId="activeTheme"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </ThemeOption>
              ))}
            </ThemeList>
          </ThemePanel>
        )}
      </AnimatePresence>
    </ThemeSwitcherContainer>
  );
};

const ThemeSwitcherContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const ThemeButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const ThemePanel = styled(motion.div)`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 240px;
  background: rgba(18, 18, 18, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

const ThemePanelHeader = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ThemeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
`;

const ThemeOption = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${(props) => props.$isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ThemeColorPreview = styled.div<{ $theme: any }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.$theme.background.gradient};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, 
      transparent 0%, 
      ${(props) => props.$theme.ui.accent}66 50%, 
      transparent 100%);
  }
`;

const ThemeName = styled.span`
  font-size: 14px;
  flex: 1;
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  right: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4caf50;
`;

export default ThemeSwitcher;