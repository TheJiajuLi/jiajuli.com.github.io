import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes, css, useTheme } from "styled-components"; // Add useTheme
import { motion, HTMLMotionProps } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
} from "react-icons/fa";
import { getSafeCoverArt } from "../../utils/imageUtils";
import { AppTheme } from "../../styles/themes"; // Import the AppTheme type

// Define Genre type based on the categories used
type Genre =
  | "electronic"
  | "rock"
  | "jazz"
  | "classical"
  | "pop"
  | "default"
  | string;

// Add these animations at the top after imports
const shimmerEffect = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
`;

// Add these new animations at the top
const breatheAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

// Add this new animation for enhanced glow

// Add these enhanced animations
const genreShimmer = keyframes`
  0% {
    background-position: 200% 50%;
    opacity: 0.3;
  }
  100% {
    background-position: -200% 50%;
    opacity: 0.7;
  }
`;

const pulseGlow = keyframes`
  0% { filter: brightness(1) blur(8px); }
  50% { filter: brightness(1.5) blur(12px); }
  100% { filter: brightness(1) blur(8px); }
`;

const getCategoryColor = (category: string = "default") => {
  const colors = {
    electronic: "#00ff99",
    rock: "#ff4444",
    jazz: "#4444ff",
    classical: "#ffaa00",
    pop: "#ff44ff",
    default: "#4caf50",
  };
  return colors[category as keyof typeof colors] || colors.default;
};

// Styled components
const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.text.primary};
    background: ${({ theme }) => theme.ui.hover};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

// Update the PlayButton component
const PlayButton = styled(IconButton)<{
  $isPlaying: boolean;
  $category?: Genre;
}>`
  width: 40px;
  height: 40px;
  background: ${(props) => getCategoryColor(props.$category)};
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: ${(props) => `${getCategoryColor(props.$category)}ee`};
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 16px;
    height: 16px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ theme }) =>
    theme.id === "contrast-light"
      ? "rgba(0, 0, 0, 0.1)"
      : "rgba(255, 255, 255, 0.1)"};
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  transition: height 0.2s ease;

  &:hover {
    height: 6px;
  }
`;

// Update Progress styled component to handle dragging state
const Progress = styled.div<{
  $width: string;
  $isDragging: boolean;
  $category?: Genre;
}>`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${(props) => getCategoryColor(props.$category)} 0%,
    ${(props) => getCategoryColor(props.$category)}cc 100%
  );
  border-radius: inherit;
  position: relative;
  width: ${(props) => props.$width};
  transition: ${(props) => (props.$isDragging ? "none" : "width 0.1s linear")};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: ${genreShimmer} 2s linear infinite;
    opacity: ${(props) => (props.$isDragging ? 1 : 0.7)};
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 4px;
    height: 16px;
    background: ${(props) => getCategoryColor(props.$category)};
    border-radius: 2px;
    transform: translate(50%, -50%);
    box-shadow: 0 0 10px ${(props) => getCategoryColor(props.$category)}80;
    animation: ${pulseGlow} 2s ease-in-out infinite;
  }
`;

const TimeTooltip = styled.div<{ $visible: boolean; $position: string }>`
  position: absolute;
  bottom: 20px;
  left: ${(props) => props.$position};
  transform: translateX(-50%);
  background: ${({ theme }) =>
    theme.id === "contrast-light"
      ? "rgba(0, 0, 0, 0.8)"
      : theme.player.controls};
  color: ${({ theme }) => theme.text.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.2s ease;
  pointer-events: none;
  border: 1px solid
    ${({ theme }) =>
      theme.id === "contrast-light" ? "transparent" : theme.explorer.border};
`;

const VolumeSlider = styled.input`
  width: 100px;
  height: 4px;
  -webkit-appearance: none;
  background: ${({ theme }) =>
    theme.id === "contrast-light"
      ? "rgba(0, 0, 0, 0.1)"
      : "rgba(255, 255, 255, 0.1)"};
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: ${({ theme }) =>
      theme.id === "contrast-light" ? theme.ui.accent : "white"};
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  &:hover::-webkit-slider-thumb {
    transform: scale(1.2);
    box-shadow: 0 0 8px ${({ theme }) => theme.ui.accent}80;
  }
`;

// Update the HorizontalBar container by removing shimmer animation
const HorizontalBar = styled(motion.div)<{ $themeId?: string }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: ${({ theme }) => theme.player.controls};
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 24px;
  z-index: 100;

  /* Theme-specific styling */
  ${({ theme }) => {
    switch (theme.id) {
      case "space-grey":
        return css`
          box-shadow: 0 -3px 16px rgba(0, 0, 0, 0.4);
        `;
      case "ocean-blue":
        return css`
          background: linear-gradient(
            180deg,
            ${theme.player.controls} 0%,
            rgba(0, 92, 151, 0.98) 100%
          );
        `;
      case "cyber-punk":
        return css`
          box-shadow: 0 -4px 20px ${theme.ui.accent}33;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              ${theme.ui.accent} 50%,
              transparent 100%
            );
            opacity: 0.7;
          }
        `;
      case "contrast-light":
        return css`
          border-top: 1px solid ${theme.explorer.border};
        `;
      default:
        return "";
    }
  }}

  /* Responsive hover effects */
  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) =>
        theme.id === "contrast-light"
          ? "rgba(245, 245, 245, 0.98)"
          : theme.id === "cyber-punk"
          ? "rgba(20, 0, 40, 0.98)"
          : theme.id === "ocean-blue"
          ? "rgba(0, 82, 141, 0.98)"
          : "rgba(24, 24, 24, 0.98)"};
    }
  }

  /* Mobile optimization */
  @media (max-width: 768px) {
    height: 64px;
    padding: 0 16px;
    gap: 16px;
  }

  /* Smooth transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

// Update the TrackSection container
const TrackSection = styled.div<{ $category?: Genre }>`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 180px;
  flex: 1;
  position: relative;
  padding: 12px;
  border-radius: 8px;
  background: transparent; // Remove the dark background

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      45deg,
      ${(props) =>
        props.theme.id === "contrast-light"
          ? `${getCategoryColor(props.$category)}25`
          : `${getCategoryColor(props.$category)}15`},
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

// Update the CoverArt component with enhanced glow
const CoverArt = styled.img<{ $isPlaying: boolean; $category?: Genre }>`
  width: 56px;
  height: 56px;
  border-radius: 4px;
  object-fit: cover;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;

  ${(props) =>
    props.$isPlaying &&
    css`
      animation: ${breatheAnimation} 3s ease-in-out infinite;

      &::before {
        content: "";
        position: absolute;
        inset: -15px;
        background: ${getCategoryColor(props.$category)};
        animation: ${pulseGlow} 3s ease-in-out infinite;
        z-index: -1;
        opacity: 0.5;
      }

      &::after {
        content: "";
        position: absolute;
        inset: -2px;
        background: linear-gradient(
          90deg,
          ${getCategoryColor(props.$category)}00,
          ${getCategoryColor(props.$category)}40,
          ${getCategoryColor(props.$category)}00
        );
        animation: ${genreShimmer} 3s linear infinite;
        border-radius: inherit;
      }
    `}

  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 0 20px ${(props) => getCategoryColor(props.$category)}40,
      0 0 40px ${(props) => getCategoryColor(props.$category)}20;
  }
`;

const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.text.primary};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Artist = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ControlsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 2;
  max-width: 600px;
`;

const PlaybackControls = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProgressContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  position: relative;

  /* Add subtle ambient glow behind progress area */
  &::before {
    content: "";
    position: absolute;
    left: 16px;
    right: 16px;
    top: 50%;
    height: 20px;
    background: radial-gradient(
      ellipse at center,
      ${(props) => `${props.theme.primary}26`} 0%,
      transparent 70%
    );
    transform: translateY(-50%);
    filter: blur(8px);
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }
`;

const ExtraControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 180px;
  justify-content: flex-end;
  flex: 1;
`;

const TimeInfo = styled.div`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 12px;
  margin-left: auto;
  padding-right: 16px;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 4px;

  /* Highlight current time */
  span:first-child {
    color: ${({ theme }) => theme.text.primary};
  }
`;

const VolumeControlWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const VolumeButton = styled(IconButton)<{ $isMuted: boolean }>`
  color: rgba(255, 255, 255, ${(props) => (props.$isMuted ? 0.5 : 0.8)});

  &:hover {
    color: white;
  }
`;

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

// Update the component type to include motion props
const HorizontalPlayerBar: React.FC<HTMLMotionProps<"div">> = (props) => {
  const { state, dispatch } = useMusicContext();
  const theme = useTheme() as AppTheme; // Access the current theme
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isDraggingProgress, setIsDraggingProgress] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isHoveringProgress, setIsHoveringProgress] = useState(false);
  const [hoverPosition, setHoverPosition] = useState("0px");
  const [hoverTime, setHoverTime] = useState("0:00");
  const [isMuted, setIsMuted] = useState(false);
  const previousVolume = useRef(state.volume);

  // Add playback controls
  const handlePlayPause = () => {
    dispatch({ type: state.isPlaying ? "PAUSE" : "PLAY" });
  };

  const handlePrevTrack = () => {
    dispatch({ type: "PREV_TRACK" });
  };

  const handleNextTrack = () => {
    dispatch({ type: "NEXT_TRACK" });
  };

  // Progress bar functionality
  const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const position = (e.clientX - rect.left) / rect.width;
    const hoverTime = position * audioRef.current.duration;

    if (!isNaN(hoverTime)) {
      setHoverPosition(`${e.clientX - rect.left}px`);
      setHoverTime(formatTime(hoverTime));
      setIsHoveringProgress(true);
    }
  };

  const handleVolumeToggle = () => {
    if (isMuted) {
      dispatch({ type: "SET_VOLUME", payload: previousVolume.current });
      setIsMuted(false);
    } else {
      previousVolume.current = state.volume;
      dispatch({ type: "SET_VOLUME", payload: 0 });
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10) / 100;
    dispatch({ type: "SET_VOLUME", payload: newVolume });
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent text selection
    setIsDraggingProgress(true);

    // Calculate and set the new time immediately on mouse down
    if (progressBarRef.current && audioRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const position = (e.clientX - rect.left) / rect.width;
      const newTime = position * audioRef.current.duration;

      if (!isNaN(newTime)) {
        audioRef.current.currentTime = newTime;
        dispatch({ type: "SET_PROGRESS", payload: newTime });
      }
    }

    if (state.isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleProgressMouseUp = () => {
    setIsDraggingProgress(false);
    if (state.isPlaying && audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingProgress && progressBarRef.current && audioRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const position = Math.min(
          Math.max((e.clientX - rect.left) / rect.width, 0),
          1
        );
        const newTime = position * audioRef.current.duration;

        if (!isNaN(newTime)) {
          audioRef.current.currentTime = newTime;
          dispatch({ type: "SET_PROGRESS", payload: newTime });

          // Update hover time while dragging
          setHoverPosition(`${e.clientX - rect.left}px`);
          setHoverTime(formatTime(newTime));
        }
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDraggingProgress) {
        setIsDraggingProgress(false);
        setIsHoveringProgress(false);
        if (state.isPlaying && audioRef.current) {
          audioRef.current.play().catch(console.error);
        }
      }
    };

    if (isDraggingProgress) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDraggingProgress, state.isPlaying, dispatch]);

  // Update the component mount animation
  return (
    <HorizontalBar
      {...props}
      $themeId={theme.id}
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 1,
        },
      }}
      exit={{
        y: 100,
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
    >
      <TrackSection $category={state.currentTrack?.genre}>
        <CoverArt
          src={getSafeCoverArt(state.currentTrack?.coverArt)}
          alt={state.currentTrack?.title || "Album art"}
          $isPlaying={state.isPlaying}
          $category={state.currentTrack?.genre}
        />
        <TrackInfo>
          <Title>{state.currentTrack?.title || "No track"}</Title>
          <Artist>{state.currentTrack?.artist || "No artist"}</Artist>
        </TrackInfo>
        <TimeInfo>
          <span>{formatTime(state.progress)}</span>
          <span>/</span>
          <span>{formatTime(state.duration)}</span>
        </TimeInfo>
      </TrackSection>

      <ControlsSection>
        <PlaybackControls>
          <IconButton onClick={handlePrevTrack} aria-label="Previous track">
            <FaStepBackward />
          </IconButton>
          <PlayButton
            onClick={handlePlayPause}
            aria-label={state.isPlaying ? "Pause" : "Play"}
            $isPlaying={state.isPlaying}
            $category={state.currentTrack?.genre}
          >
            {state.isPlaying ? <FaPause /> : <FaPlay />}
          </PlayButton>
          <IconButton onClick={handleNextTrack} aria-label="Next track">
            <FaStepForward />
          </IconButton>
        </PlaybackControls>

        <ProgressContainer>
          <ProgressBar
            ref={progressBarRef}
            onMouseDown={handleProgressMouseDown}
            onMouseMove={handleProgressHover}
            onMouseLeave={() => {
              setIsHoveringProgress(false);
              if (!isDraggingProgress) {
                setHoverTime("0:00");
              }
            }}
          >
            <Progress
              $width={`${(state.progress / state.duration) * 100}%`}
              $isDragging={isDraggingProgress}
              $category={state.currentTrack?.genre}
            />
            {(isHoveringProgress || isDraggingProgress) && (
              <TimeTooltip $visible={true} $position={hoverPosition}>
                {hoverTime}
              </TimeTooltip>
            )}
          </ProgressBar>
        </ProgressContainer>
      </ControlsSection>

      <ExtraControls>
        <VolumeControlWrapper>
          <VolumeButton
            onClick={handleVolumeToggle}
            $isMuted={isMuted || state.volume === 0}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            <FaVolumeUp />
          </VolumeButton>
          <VolumeSlider
            type="range"
            min="0"
            max="100"
            value={Math.round(state.volume * 100)}
            onChange={handleVolumeChange}
            aria-label="Volume"
          />
        </VolumeControlWrapper>
      </ExtraControls>
    </HorizontalBar>
  );
};

export default HorizontalPlayerBar;
