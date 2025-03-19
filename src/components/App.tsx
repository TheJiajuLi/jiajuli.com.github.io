import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { MusicProvider } from "../context/MusicContext";
import { LayoutProvider, useLayout } from "../context/LayoutContext";
import { ThemeProvider, useThemeContext } from "../context/ThemeContext";
import MusicExplorer from "./MusicExplorer/MusicExplorer";
import SideBarPlayer from "./MusicPlayer/SideBarPlayer";
import MobileMusicControls from "./MusicPlayer/MobileMusicControls";
import HorizontalPlayerBar from "./MusicPlayer/HorizontalPlayerBar";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

// Wrap this component to access theme context
const AppContent: React.FC = () => {
  const { state: layoutState } = useLayout();
  const { currentTheme } = useThemeContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <StyledThemeProvider theme={currentTheme}>
      <MusicProvider>
        <LayoutProvider>
          <AppContainer>
            <ThemeSwitcher />
            <MainLayout $hasMobileControls={isMobile}>
              {/* Explorer Section */}
              {layoutState.explorerVisible && (
                <ExplorerSection
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <MusicExplorer />
                </ExplorerSection>
              )}

              {/* Player Section */}
              <PlayerSection $expanded={!layoutState.explorerVisible}>
                <SideBarPlayer />
              </PlayerSection>
            </MainLayout>

            {/* Independent Player Controls Section */}
            <PlayerControlsSection>
              <AnimatePresence mode="wait">
                {isMobile ? (
                  <MobileControlsWrapper
                    key="mobile"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 20 }}
                  >
                    <MobileMusicControls />
                  </MobileControlsWrapper>
                ) : (
                  <HorizontalControlsWrapper
                    key="desktop"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 20 }}
                  >
                    <HorizontalPlayerBar />
                  </HorizontalControlsWrapper>
                )}
              </AnimatePresence>
            </PlayerControlsSection>
          </AppContainer>
        </LayoutProvider>
      </MusicProvider>
    </StyledThemeProvider>
  );
};

// Main App component with ThemeProvider
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

// Styled components that use theme props
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background.gradient};
  backdrop-filter: blur(${({ theme }) => theme.background.blur});
`;

const MainLayout = styled.div<{ $hasMobileControls?: boolean }>`
  display: flex;
  height: calc(100vh - 100px); /* Leave space for player controls */
  position: relative;
  overflow: hidden;
  gap: 20px;
  padding: 20px 20px 0 20px;

  @media (max-width: 768px) {
    height: calc(100vh - 80px); /* Adjust for mobile controls */
    flex-direction: column;
    gap: 12px;
    padding: 12px 12px 0 12px;
  }
`;

const ExplorerSection = styled(motion.div)`
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.explorer.background};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;
  margin-left: 10px;
  border: 1px solid ${({ theme }) => theme.explorer.border};

  @media (max-width: 768px) {
    height: 100%;
    margin-left: 0;
    border-radius: 0;
  }
`;

const PlayerSection = styled.div<{ $expanded: boolean }>`
  flex: 1;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  background: ${({ theme }) => theme.player.background};
  backdrop-filter: blur(10px);
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: ${(props) => (props.$expanded ? "0" : "20px")};
  border: 1px solid ${({ theme }) => theme.explorer.border};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const PlayerControlsSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
`;

const MobileControlsWrapper = styled(motion.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0 12px 12px;
  background: ${({ theme }) => theme.player.controls};
  backdrop-filter: blur(20px);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
`;

const HorizontalControlsWrapper = styled(motion.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0 15px 20px;
  background: ${({ theme }) => theme.player.controls};
  backdrop-filter: blur(20px);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
`;

export default App;
