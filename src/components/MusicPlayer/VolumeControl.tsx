import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaVolumeUp, FaVolumeDown, FaVolumeMute } from "react-icons/fa";

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
  className?: string;
}

const VolumeControlContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  z-index: 5;
  margin-left: 2px; /* Add margin to prevent slider from going too far left */
  will-change: transform, opacity;
`;

// Define an interface for the button props
interface VolumeButtonProps {
  volume: number;
}

// Enhanced VolumeButton with improved galaxy gif background
const VolumeButton = styled(motion.button).attrs<VolumeButtonProps>(
  (props) => ({
    id: "music-player-volume-toggle",
    "aria-label": props.volume === 0 ? "Unmute" : "Mute",
  })
)`
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0;
  left: 15px;
  transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  will-change: transform, opacity;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/assets/covers/galaxy_2.gif");
    background-size: cover;
    background-position: center;
    opacity: 0.9; /* Increased opacity as requested */
    z-index: -1;
    border-radius: 50%;
    animation: gentleBackgroundBreathing 6s infinite ease-in-out;
  }

  &:hover {
    color: rgb(255, 255, 255);
    box-shadow: 0 0 20px rgba(138, 43, 226, 0.7);

    &::before {
      opacity: 0; /* Make background image completely transparent on hover */
      transition: opacity 0.5s ease;
    }
  }

  &:focus-visible {
    outline: 2px solid rgba(138, 43, 226, 0.7);
    box-shadow: 0 0 0 4px rgba(138, 43, 226, 0.3);
  }

  svg {
    filter: drop-shadow(0 0 5px rgba(138, 43, 226, 0.9));
    z-index: 1;
    transition: transform 0.3s ease, filter 0.3s ease;
    animation: iconPulse 3s infinite ease-in-out;

    /* Enhanced SVG styles */
    fill: rgba(255, 255, 255, 0.95);
    stroke: rgba(138, 43, 226, 0.3);
    stroke-width: 0.5px;
    transform-origin: center;
  }

  &:hover svg {
    transform: scale(1.1);
    filter: drop-shadow(0 0 8px rgba(147, 112, 219, 1));
    animation: iconPulseHover 3s infinite ease-in-out;
    fill: white;
    stroke: rgba(138, 43, 226, 0.5);
    stroke-width: 1px;
  }

  /* Replace the green glow with a cosmic blue/purple theme */
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(138, 43, 226, 0.4) 0%,
      rgba(147, 112, 219, 0.2) 40%,
      transparent 80%
    );
    opacity: 0;
    transition: all 0.4s ease;
    transform: scale(0.85);
    z-index: 0;
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1.05);
    box-shadow: inset 0 0 15px rgba(147, 112, 219, 0.5),
      0 0 20px rgba(138, 43, 226, 0.6);
    animation: pulseGlow 3s infinite ease-in-out;
  }

  /* Create breathing animations */
  @keyframes gentleBackgroundBreathing {
    0% {
      opacity: 0.8;
      filter: brightness(0.9) saturate(1.1);
    }
    25% {
      opacity: 0.85;
      filter: brightness(1) saturate(1.15);
    }
    50% {
      opacity: 0.95;
      filter: brightness(1.1) saturate(1.2);
    }
    75% {
      opacity: 0.85;
      filter: brightness(1) saturate(1.15);
    }
    100% {
      opacity: 0.8;
      filter: brightness(0.9) saturate(1.1);
    }
  }

  @keyframes pulseGlow {
    0% {
      opacity: 0.7;
      box-shadow: inset 0 0 15px rgba(147, 112, 219, 0.2),
        0 0 15px rgba(88, 101, 242, 0.3);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.3) 0%,
        rgba(147, 112, 219, 0.15) 40%,
        transparent 80%
      );
      filter: brightness(0.92) hue-rotate(-5deg);
    }
    25% {
      opacity: 0.8;
      box-shadow: inset 0 0 17px rgba(147, 112, 219, 0.3),
        0 0 18px rgba(88, 101, 242, 0.4);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.35) 0%,
        rgba(147, 112, 219, 0.18) 40%,
        transparent 80%
      );
      filter: brightness(1) hue-rotate(-2deg);
    }
    50% {
      opacity: 0.9;
      box-shadow: inset 0 0 20px rgba(147, 112, 219, 0.4),
        0 0 22px rgba(88, 101, 242, 0.5);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.4) 0%,
        rgba(147, 112, 219, 0.2) 40%,
        transparent 80%
      );
      filter: brightness(1.08) hue-rotate(3deg);
    }
    75% {
      opacity: 0.8;
      box-shadow: inset 0 0 17px rgba(147, 112, 219, 0.3),
        0 0 18px rgba(88, 101, 242, 0.4);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.35) 0%,
        rgba(147, 112, 219, 0.18) 40%,
        transparent 80%
      );
      filter: brightness(1) hue-rotate(-2deg);
    }
    100% {
      opacity: 0.7;
      box-shadow: inset 0 0 15px rgba(147, 112, 219, 0.2),
        0 0 15px rgba(88, 101, 242, 0.3);
      background: radial-gradient(
        circle at center,
        rgba(138, 43, 226, 0.3) 0%,
        rgba(147, 112, 219, 0.15) 40%,
        transparent 80%
      );
      filter: brightness(0.92) hue-rotate(-5deg);
    }
  }

  @keyframes iconPulse {
    0% {
      filter: drop-shadow(0 0 3px rgba(147, 112, 219, 0.6));
      transform: scale(1);
    }
    33% {
      filter: drop-shadow(0 0 4px rgba(138, 43, 226, 0.7));
      transform: scale(1.05);
    }
    66% {
      filter: drop-shadow(0 0 5px rgba(138, 43, 226, 0.8));
      transform: scale(1);
    }
    100% {
      filter: drop-shadow(0 0 3px rgba(147, 112, 219, 0.6));
      transform: scale(1);
    }
  }

  @keyframes iconPulseHover {
    0% {
      filter: drop-shadow(0 0 5px rgba(147, 112, 219, 0.8));
      transform: scale(1.1);
    }
    33% {
      filter: drop-shadow(0 0 6px rgba(138, 43, 226, 0.85));
      transform: scale(1.15);
    }
    66% {
      filter: drop-shadow(0 0 7px rgba(138, 43, 226, 0.9));
      transform: scale(1.1);
    }
    100% {
      filter: drop-shadow(0 0 5px rgba(147, 112, 219, 0.8));
      transform: scale(1.1);
    }
  }
`;

// Update the SliderContainer component
const SliderContainer = styled(motion.div)`
  position: absolute;
  width: 120px;
  height: 36px;
  background: rgba(10, 10, 10, 0.95);
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 0 12px 0 30px;
  left: 30px;
  transform: translateX(-15%);
  z-index: 10;
  position: absolute;
  top: 0;
  will-change: transform, opacity, width;
  backdrop-filter: blur(10px);

  /* Enhanced cosmic border effect */
  border: 1px solid rgba(138, 43, 226, 0.4);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5),
    inset 0 0 2px rgba(138, 43, 226, 0.4), 0 0 10px rgba(138, 43, 226, 0.3),
    inset 0 0 8px rgba(138, 43, 226, 0.2), 0 0 20px rgba(147, 112, 219, 0.2);

  /* Animated gradient border */
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      rgba(138, 43, 226, 0.5),
      rgba(147, 112, 219, 0.5),
      rgba(88, 101, 242, 0.5),
      rgba(138, 43, 226, 0.5)
    );
    border-radius: 19px;
    z-index: -1;
    animation: borderGlow 3s linear infinite;
    filter: blur(8px);
    opacity: 0.5;
  }

  /* Star Trek-like scanning line effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(147, 112, 219, 0.2),
      rgba(138, 43, 226, 0.4),
      rgba(147, 112, 219, 0.2),
      transparent
    );
    border-radius: inherit;
    z-index: 1;
    animation: scanLine 2s linear infinite;
    pointer-events: none;
  }

  /* Volume icon container enhancement */
  .icon-container {
    position: absolute;
    left: 3px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(10, 10, 10, 0.5);
    border-radius: 50%;
    box-shadow: inset 0 0 5px rgba(138, 43, 226, 0.3),
      0 0 10px rgba(138, 43, 226, 0.2);
  }

  @keyframes borderGlow {
    0% {
      filter: blur(8px) hue-rotate(0deg);
    }
    50% {
      filter: blur(10px) hue-rotate(180deg);
    }
    100% {
      filter: blur(8px) hue-rotate(360deg);
    }
  }

  /* Hover state enhancement */
  &:hover {
    &::before {
      opacity: 0.7;
      filter: blur(6px);
    }
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6),
      inset 0 0 4px rgba(138, 43, 226, 0.6), 0 0 15px rgba(138, 43, 226, 0.4),
      inset 0 0 12px rgba(138, 43, 226, 0.3), 0 0 25px rgba(147, 112, 219, 0.3);
  }
`;

// Update VolumeSlider with the cosmic theme
const VolumeSlider = styled.input.attrs({
  type: "range",
  min: "0",
  max: "100",
  step: "1",
  id: "music-player-volume-slider",
})`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: ${(props) => `linear-gradient(
    to right,
    rgba(138, 43, 226, 0.8) 0%,
    rgba(147, 112, 219, 0.8) ${props.value}%,
    rgba(255, 255, 255, 0.2) ${props.value}%,
    rgba(255, 255, 255, 0.2) 100%
  )`};
  outline: none;
  position: relative;
  z-index: 1;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #8a2be2; /* Changed to blueviolet */
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.7);
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid rgba(255, 255, 255, 0.9);
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    background: #9370db; /* Changed to medium purple */
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.9);
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #8a2be2; /* Changed to blueviolet */
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.7);
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid rgba(255, 255, 255, 0.9);
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.1);
    background: #9370db; /* Changed to medium purple */
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.9);
  }

  &:focus-visible {
    outline: 2px solid rgba(138, 43, 226, 0.7);
  }
`;

// Update VolumeLevel with the cosmic theme
const VolumeLevel = styled(motion.div)<{ $volume: number }>`
  position: absolute;
  top: -25px;
  left: ${(props) => props.$volume}%;
  transform: translateX(-50%);
  background: rgba(10, 10, 10, 0.9);
  color: #8a2be2; /* Changed to blueviolet */
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  border: 1px solid rgba(138, 43, 226, 0.3);
  font-weight: 600;
  z-index: 2;
`;

// Keep MuteIndicator as is
const MuteIndicator = styled(motion.div)`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10, 10, 10, 0.9);
  color: #ff5252;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  border: 1px solid rgba(255, 82, 82, 0.3);
  font-weight: 600;
  z-index: 2;
`;

// Update WaveAnimation with cosmic colors
const WaveAnimation = styled(motion.div)<{ $volume: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200%;
  height: 200%;
  pointer-events: none;
  opacity: ${(props) => (props.$volume === 0 ? 0 : 0.3)};
  z-index: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid rgba(138, 43, 226, 0.7);
    animation: waveEffect 3s infinite ease-out;
  }

  &::after {
    animation-delay: 1.5s;
  }

  @keyframes waveEffect {
    0% {
      width: 110%;
      height: 110%;
      opacity: 0.7;
    }
    100% {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }
`;

const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  onVolumeChange,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(volume);
  const [showTooltip, setShowTooltip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the component to close slider
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        isSliderVisible
      ) {
        setIsSliderVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSliderVisible]);

  // Determine which volume icon to show with enhanced props
  const getVolumeIcon = () => {
    if (volume === 0) {
      return (
        <FaVolumeMute
          size={18}
          style={{
            opacity: 0.9,
            filter: "drop-shadow(0 0 2px rgba(255, 82, 82, 0.7))",
          }}
        />
      );
    }
    if (volume < 50) {
      return (
        <FaVolumeDown
          size={18}
          style={{
            opacity: volume / 100 + 0.5,
            transform: `scale(${0.9 + volume / 200})`,
          }}
        />
      );
    }
    return (
      <FaVolumeUp
        size={18}
        style={{
          opacity: volume / 100 + 0.5,
          transform: `scale(${0.9 + volume / 200})`,
        }}
      />
    );
  };

  // Toggle mute function
  const toggleMute = () => {
    if (volume === 0) {
      onVolumeChange(previousVolume > 0 ? previousVolume : 50);
    } else {
      setPreviousVolume(volume);
      onVolumeChange(0);
    }
  };

  // Handle slider change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    onVolumeChange(newVolume);
  };

  // Toggle slider visibility with immediate response
  const toggleSlider = useCallback(() => {
    // Use requestAnimationFrame to ensure UI updates before the next paint
    requestAnimationFrame(() => {
      setIsSliderVisible((prev) => !prev);
    });
  }, []);

  // Update the return statement with optimized transitions
  return (
    <VolumeControlContainer
      ref={containerRef}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(false);
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }} // Faster initial transition
    >
      <AnimatePresence
        mode="wait"
        initial={false}
        presenceAffectsLayout={false}
      >
        {!isSliderVisible ? (
          <VolumeButton
            key="volume-button"
            volume={volume}
            onClick={toggleSlider}
            onDoubleClick={toggleMute}
            whileTap={{ scale: 0.95 }}
            title="Open volume slider"
            initial={{ opacity: 0, scale: 0.9 }} // Less dramatic scale for faster perception
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }} // Much faster transition
          >
            {getVolumeIcon()}
            <WaveAnimation
              $volume={volume}
              initial={{ opacity: 0 }}
              animate={{ opacity: volume === 0 ? 0 : isHovered ? 0.3 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </VolumeButton>
        ) : (
          <SliderContainer
            key="slider-container"
            initial={{ opacity: 0, width: "40px" }}
            animate={{ opacity: 1, width: "120px" }}
            exit={{ opacity: 0, width: "40px" }}
            transition={{
              duration: 0.15, // Faster transition
              ease: "easeOut", // Use easeOut for faster initial movement
              width: { duration: 0.2 }, // Slightly longer for width to feel smooth
            }}
          >
            {/* Volume icon */}
            <div
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                filter: "drop-shadow(0 0 3px rgba(138, 43, 226, 0.7))",
              }}
            >
              {getVolumeIcon()}
            </div>

            <VolumeSlider
              value={volume}
              onChange={handleVolumeChange}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            />

            <AnimatePresence>
              {showTooltip && volume > 0 && (
                <VolumeLevel
                  key="volume-level"
                  $volume={volume}
                  initial={{ opacity: 0, y: 5 }} // Smaller y movement for faster perception
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.1 }} // Very fast tooltip transition
                >
                  {volume}%
                </VolumeLevel>
              )}

              {volume === 0 && showTooltip && (
                <MuteIndicator
                  key="mute-indicator"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.1 }}
                >
                  Muted
                </MuteIndicator>
              )}
            </AnimatePresence>
          </SliderContainer>
        )}
      </AnimatePresence>
    </VolumeControlContainer>
  );
};

export default VolumeControl;
