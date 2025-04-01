import React, { useState, useEffect, useMemo } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { getSafeCoverArt } from "../../utils/imageUtils";
import { useLayout } from "../../context/LayoutContext";
import BottleSwitch from "../shared/NewSideBarToggleling";
import ArtColorVisualizer from "../Visualizer/ArtColorVisualizer";
import { artColorExtractor } from "../../utils/artColorExtractor";

const MobileMusicControls: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const { state: layoutState, dispatch: layoutDispatch } = useLayout();
  const [isToggleVisible, setIsToggleVisible] = useState(true);
  const [colors, setColors] = useState<{
    primary: string;
    vibrant: string;
    accent: string;
  }>({
    primary: "#4caf50",
    vibrant: "#4caf50",
    accent: "#43a047",
  });

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

  const backgroundGradient = useMemo(() => {
    return `linear-gradient(135deg, 
      ${colors.primary}22 0%, 
      ${colors.vibrant}33 50%, 
      ${colors.accent}22 100%)`;
  }, [colors]);

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
        className="mobile-player-container"
      >
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

const MobileContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px;
  z-index: 1000;
  overflow: hidden;
  height: 60px;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  @media (max-width: 768px) {
    height: 54px;
    padding: 4px;
  }
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

const GlassPanelContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ControlsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  height: 100%;
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  margin-right: 12px;
`;

const AlbumArtWrapper = styled.div<{ $isPlaying: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transform: ${(props) => (props.$isPlaying ? "scale(1.05)" : "scale(1)")};
  transition: transform 0.5s ease;
`;

const AlbumArt = styled.img.attrs({
  draggable: false,
})<{ $isPlaying: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${(props) => (props.$isPlaying ? "scale(1.1)" : "scale(1)")};
  transition: transform 5s ease;
  animation: ${(props) =>
    props.$isPlaying ? "subtlePulse 3s infinite alternate" : "none"};
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  user-drag: none;
  pointer-events: none;

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
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;

const TrackName = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;

const ArtistName = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;

const PlaybackControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

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

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px;
  }
`;

const PlayButton = styled(IconButton)<{
  $accentColor: string;
  $isPlaying: boolean;
}>`
  background: ${(props) => props.$accentColor || "#4caf50"};
  border-radius: 50%;
  width: 34px;
  height: 34px;
  font-size: 16px;
  box-shadow: 0 2px 12px
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

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`;

const StyledBottleSwitch = styled(BottleSwitch)`
  margin-right: 8px;
  transform-origin: center;
  min-width: 24px;
  height: 32px;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3));

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    min-width: 20px;
    height: 28px;
    margin-right: 6px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const SidebarPlayerToggle = styled(motion.button)<{ $accentColor: string }>`
  background: transparent;
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 4px;
  position: relative;
  overflow: visible;

  outline: none;
  -webkit-tap-highlight-color: transparent;

  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

const ToggleIconImage = styled.img`
  width: 16px;
  height: 16px;
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

const GlobalClickStyles = createGlobalStyle`
  /* Apply to all elements in the player */
  .mobile-player-container * {
    user-select: none !important;
    -webkit-user-select: none !important;
    -webkit-touch-callout: none !important;
  }
  
  button, 
  [role="button"],
  input,
  select,
  a,
  img,
  svg {
    &:focus {
      outline: none !important;
    }
    
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
  
  img {
    -webkit-user-drag: none;
    user-drag: none;
  }
`;

export default MobileMusicControls;
