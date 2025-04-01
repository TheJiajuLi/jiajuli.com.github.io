import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { MusicProvider } from "../context/MusicContext";
import { LayoutProvider, useLayout } from "../context/LayoutContext";
import {
  ThemeProvider,
  useThemeContext,
  ThemeContextType,
} from "../context/ThemeContext";
import { AppTheme } from "../styles/themes";
import MusicExplorer from "./MusicExplorer/MusicExplorer";
import SideBarPlayer from "./MusicPlayer/SideBarPlayer";
import MobileMusicControls from "./MusicPlayer/MobileMusicControls";
import HorizontalPlayerBar from "./MusicPlayer/HorizontalPlayerBar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CommunityUploadPage from "./CommunityUpload/CommunityUploadPage";
import NavBar from "./NavBar/NavBar";
import SearchPage from "./Search/SearchPage";
import LibraryPage from "./Library/LibraryPage";

// Update type guard to handle theme context structure
const isValidTheme = (theme: unknown): theme is ThemeContextType => {
  if (!theme || typeof theme !== "object") return false;

  const contextObj = theme as Partial<ThemeContextType>;
  return (
    !!contextObj.currentTheme &&
    typeof contextObj.currentTheme === "object" &&
    "background" in contextObj.currentTheme &&
    "text" in contextObj.currentTheme &&
    "ui" in contextObj.currentTheme
  );
};

const AppRouter: React.FC = () => {
  const location = useLocation();
  const { state: layoutState } = useLayout();
  const themeContext = useThemeContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isValidTheme(themeContext)) {
    console.error(
      "Theme validation failed:",
      JSON.stringify(themeContext, null, 2)
    );
    return null;
  }

  return (
    <StyledThemeProvider theme={themeContext.currentTheme}>
      <AppContainer>
        <NavBar />
        <MainLayout $hasMobileControls={isMobile}>
          <Routes location={location}>
            <Route
              path="/"
              element={
                layoutState.explorerVisible && (
                  <ExplorerSection style={{ width: "100%" }}>
                    <MusicExplorer />
                  </ExplorerSection>
                )
              }
            />
            <Route
              path="/explorer"
              element={
                <ExplorerSection style={{ width: "100%" }}>
                  <MusicExplorer />
                </ExplorerSection>
              }
            />
            <Route
              path="/community-upload"
              element={
                <ExplorerSection style={{ width: "100%" }}>
                  <CommunityUploadPage />
                </ExplorerSection>
              }
            />
            <Route
              path="/settings"
              element={
                <ExplorerSection style={{ width: "100%" }}>
                  <div>Settings Page (Coming Soon)</div>
                </ExplorerSection>
              }
            />
            <Route
              path="/search"
              element={
                <ExplorerSection style={{ width: "100%" }}>
                  <SearchPage />
                </ExplorerSection>
              }
            />
            <Route
              path="/library"
              element={
                <ExplorerSection style={{ width: "100%" }}>
                  <LibraryPage />
                </ExplorerSection>
              }
            />
          </Routes>

          <HiddenPlayerSection>
            <SideBarPlayer />
          </HiddenPlayerSection>
        </MainLayout>
        <PlayerControlsSection>
          <AnimatePresence mode="wait">
            {isMobile ? (
              <MobileControlsWrapper
                key="mobile"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                $theme={themeContext.currentTheme}
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
    </StyledThemeProvider>
  );
};

const AppContent: React.FC = () => {
  return (
    <LayoutProvider>
      <MusicProvider>
        <AppRouter />
      </MusicProvider>
    </LayoutProvider>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
};

const AppContainer = styled.div.attrs<{ theme: AppTheme }>(({ theme }) => ({
  style: {
    background: theme.background.gradient,
  },
}))`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MainLayout = styled.div.attrs<{ $hasMobileControls?: boolean }>(
  ({ $hasMobileControls }) => ({
    style: {
      marginBottom: $hasMobileControls ? "54.2px" : "32px",
    },
  })
)`
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: calc(100vh - 80px);
    padding: 0;
  }
`;

const ExplorerSection = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
}))`
  flex: 1;
  width: 100%;
  height: 92%;
  overflow: hidden;
  margin-top: 0px;
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;

  @media (max-width: 768px) {
    height: 100%;
    margin-top: 0;
    border-radius: 0px;
    border: none;
  }
`;

const HiddenPlayerSection = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  border-radius: 12px;
`;

const PlayerControlsSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  pointer-events: none;
`;

const MobileControlsWrapper = styled(motion.div).attrs<{ $theme: AppTheme }>(
  ({ $theme }) => ({
    style: {
      background: $theme?.background?.secondary || "rgba(0, 0, 0, 0.8)",
    },
  })
)`
  pointer-events: auto;
  width: 100%;
  padding: 0;
  backdrop-filter: blur(20px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
`;

const HorizontalControlsWrapper = styled(motion.div)`
  pointer-events: auto;
  width: 100%;
  padding: 0 15px 20px;
`;

export default App;
