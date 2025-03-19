import React, { useState, useEffect, useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { getSafeCoverArt } from "../../utils/imageUtils";
import { useLayout } from "../../context/LayoutContext";
import BottleSwitch from "../shared/NewSideBarToggleling";
// Import the ArtColorVisualizer
import ArtColorVisualizer from "../Visualizer/ArtColorVisualizer";
// Import artColorExtractor utility
import { artColorExtractor } from "../../utils/artColorExtractor";

const MobileMusicControls: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const { state: layoutState, dispatch: layoutDispatch } = useLayout();
  const [isToggleVisible, setIsToggleVisible] = useState(true);
  // Add state for extracted colors
  const [colors, setColors] = useState<{
    primary: string;
    vibrant: string;
    accent: string;
  }>({
    primary: "#4caf50",
    vibrant: "#4caf50",
    accent: "#43a047",
  });

  // Extract album art colors when current track changes
  useEffect(() => {
    if (state.currentTrack?.coverArt) {
      const extractColors = async () => {
        try {
          const coverArtUrl = getSafeCoverArt(state.currentTrack?.coverArt);
          const palette = await artColorExtractor.extractColors(coverArtUrl);
          setColors({
            primary: palette.primary,
            vibrant: palette.vibrant,
            accent: palette.accent,
          });
        } catch (error) {
          console.error("Failed to extract colors:", error);
        }
      };

      extractColors();
    }
  }, [state.currentTrack]);

  // Create animated gradient background
  const backgroundGradient = useMemo(() => {
    return `linear-gradient(135deg, 
      ${colors.primary}22 0%, 
      ${colors.vibrant}33 50%, 
      ${colors.accent}22 100%)`;
  }, [colors]);

  // Other handlers remain the same

  const handlePlayPause = () => {
    dispatch({ type: state.isPlaying ? "PAUSE" : "PLAY" });
  };

  const handlePrevTrack = () => {
    dispatch({ type: "PREV_TRACK" });
  };

  const handleNextTrack = () => {
    dispatch({ type: "NEXT_TRACK" });
  };

  const handleSidebarToggle = () => {
    layoutDispatch({ type: "TOGGLE_EXPLORER" });
  };

  const handleSidebarPlayerToggle = () => {
    dispatch({ type: "SET_SIDEBAR_OPEN", payload: true });
    dispatch({ type: "SET_SIDEBAR_MODE", payload: "manual" });
  };

  useEffect(() => {
    setIsToggleVisible(!state.sidebarOpen);
  }, [state.sidebarOpen]);

  return (
    <>
      <GlobalClickStyles />
      <MobileContainer
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ type: "spring", damping: 20 }}
        style={{ background: backgroundGradient }}
      >
        {/* Add the visualizer as background */}
        <VisualizerBackground>
          {state.currentTrack?.coverArt && (
            <ArtColorVisualizer
              imageUrl={getSafeCoverArt(state.currentTrack.coverArt)}
              isPlaying={state.isPlaying}
              intensity={0.6}
            />
          )}
          <VisualOverlay $isPlaying={state.isPlaying} />
        </VisualizerBackground>

        {/* Add a glassmorphism panel */}
        <GlassPanelContent>
          <ControlsSection>
            <TrackInfo>
              <StyledBottleSwitch
                isOpen={layoutState.explorerVisible}
                onToggle={handleSidebarToggle}
              />
              {state.currentTrack && (
                <AlbumArtWrapper $isPlaying={state.isPlaying}>
                  <AlbumArt
                    src={getSafeCoverArt(state.currentTrack.coverArt)}
                    alt={`${state.currentTrack.title} cover art`}
                    $isPlaying={state.isPlaying}
                  />
                </AlbumArtWrapper>
              )}

              <TextInfo>
                <TrackName>{state.currentTrack?.title || "No track"}</TrackName>
                <ArtistName>
                  {state.currentTrack?.artist || "No artist"}
                </ArtistName>
              </TextInfo>
            </TrackInfo>

            <AnimatePresence>
              {isToggleVisible && (
                <SidebarPlayerToggle
                  onClick={handleSidebarPlayerToggle}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  $accentColor={colors.primary}
                  aria-label="Open sidebar player"
                >
                  <ToggleIconImage
                    src="/assets/icons/full_screen.png"
                    alt="Fullscreen"
                  />
                </SidebarPlayerToggle>
              )}
            </AnimatePresence>

            <PlaybackControls>
              <IconButton onClick={handlePrevTrack} aria-label="Previous track">
                <FaStepBackward />
              </IconButton>
              <PlayButton
                onClick={handlePlayPause}
                aria-label={state.isPlaying ? "Pause" : "Play"}
                $accentColor={colors.vibrant}
                $isPlaying={state.isPlaying}
              >
                {state.isPlaying ? (
                  <FaPause />
                ) : (
                  <FaPlay style={{ marginLeft: "2px" }} />
                )}
              </PlayButton>
              <IconButton onClick={handleNextTrack} aria-label="Next track">
                <FaStepForward />
              </IconButton>
            </PlaybackControls>
          </ControlsSection>
        </GlassPanelContent>
      </MobileContainer>
    </>
  );
};

// Update styled components with background and dynamic colors
const MobileContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  z-index: 1000;
  overflow: hidden;
  height: 90px;
`;

const VisualizerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
`;

const VisualOverlay = styled.div<{ $isPlaying: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(18, 18, 18, 0.4);
  backdrop-filter: blur(${(props) => (props.$isPlaying ? "8px" : "16px")});
  z-index: 1;
  transition: backdrop-filter 1.2s ease;
`;

// Update the GlassPanelContent to adjust for the removed progress bar
const GlassPanelContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; // Center the controls vertically now that progress is gone
`;

// Update the ControlsSection styling to fill the available space
const ControlsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  height: 100%; // Take up full height
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  margin-right: 16px;
`;

const AlbumArtWrapper = styled.div<{ $isPlaying: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-right: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transform: ${(props) => (props.$isPlaying ? "scale(1.05)" : "scale(1)")};
  transition: transform 0.5s ease;
`;

const AlbumArt = styled.img<{ $isPlaying: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${(props) => (props.$isPlaying ? "scale(1.1)" : "scale(1)")};
  transition: transform 5s ease;
  animation: ${(props) =>
    props.$isPlaying ? "subtlePulse 3s infinite alternate" : "none"};

  @keyframes subtlePulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

const TextInfo = styled.div`
  min-width: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const TrackName = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArtistName = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PlaybackControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  /* Remove focus outline and tap highlight */
  outline: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const PlayButton = styled(IconButton)<{
  $accentColor: string;
  $isPlaying: boolean;
}>`
  background: ${(props) => props.$accentColor || "#4caf50"};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 24px;
  box-shadow: 0 2px 15px
    ${(props) =>
      props.$isPlaying
        ? `${props.$accentColor || "#4caf50"}90`
        : `${props.$accentColor || "#4caf50"}50`};
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    opacity: ${(props) => (props.$isPlaying ? 0.9 : 0.7)};
    transition: opacity 0.5s ease;
  }

  &:active {
    transform: scale(0.95);
    background: ${(props) => props.$accentColor || "#43a047"};
  }
`;

const StyledBottleSwitch = styled(BottleSwitch)`
  margin-right: 12px;
  transform-origin: center;
  min-width: 32px;
  height: 48px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  @media (min-width: 769px) {
    display: none;
  }
`;

const SidebarPlayerToggle = styled(motion.button)<{ $accentColor: string }>`
  background: transparent; // Remove background
  border: none;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 8px;
  position: relative;
  overflow: visible; // Allow icon to extend beyond button bounds

  /* Remove focus outline and tap highlight on all devices */
  outline: none;
  -webkit-tap-highlight-color: transparent;

  /* Prevent blue highlight on touch devices */
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

// Update the ToggleIconImage for a floating effect without container visibility
const ToggleIconImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  filter: brightness(1.2) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
  opacity: 0.9;

  ${SidebarPlayerToggle}:hover & {
    filter: brightness(1.5) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6));
    transform: scale(1.1);
    opacity: 1;
  }

  ${SidebarPlayerToggle}:active & {
    filter: brightness(0.9) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    transform: scale(0.9);
  }
`;

// Add a global style to remove focus outlines and highlighting
const GlobalClickStyles = createGlobalStyle`
  /* Remove focus styles for all interactive elements in this component */
  button, 
  [role="button"],
  input,
  select,
  a {
    &:focus {
      outline: none !important;
    }
    
    /* Remove blue highlight on mobile */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
`;

export default MobileMusicControls;
