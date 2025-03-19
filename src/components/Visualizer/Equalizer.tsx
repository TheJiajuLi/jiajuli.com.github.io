import React, { useRef, useEffect, useState, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { useMusicContext } from "../../context/MusicContext";

interface EqualizerProps {
  isPlaying?: boolean;
  dominantColor?: string;
  audioRef?: React.RefObject<HTMLAudioElement>;
  onIntensityChange?: (intensity: number) => void;
}

// Define animations
const pulseAnimation = keyframes`
  /* existing animation */
`;

const flowAnimation = keyframes`
  /* existing animation */
`;

// Update your styled components
const EqualizerContainer = styled.div.attrs({
  className: "dp-equalizer-container",
})<{ $isActive: boolean; $color: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
`;

const Canvas = styled.canvas.attrs({
  className: "dp-equalizer-canvas",
})`
  /* existing styles */
`;

// Optimize GlowOverlay with attrs for dynamically changing properties
const GlowOverlay = styled.div.attrs<{
  $intensity: number;
  $color: string;
  $isPlaying: boolean;
}>((props) => ({
  className: "dp-equalizer-glow",
  style: {
    opacity: props.$isPlaying ? 0.8 : 0.2,
    animationDuration: `${3 - props.$intensity * 1.5}s`,
    background: `linear-gradient(90deg, transparent, ${props.$color}20, transparent)`,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  animation-name: ${pulseAnimation};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  background-size: 200% 200%;
  will-change: opacity, background;
`;

// Optimize FlowEffect with attrs
const FlowEffect = styled.div.attrs<{ $intensity: number; $color: string }>(
  (props) => ({
    className: "dp-equalizer-flow",
    style: {
      animationDuration: `${8 - props.$intensity * 4}s`,
    },
  })
)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  background-size: 200% 200%;
  animation-name: ${flowAnimation};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  mix-blend-mode: overlay;
  will-change: transform;
`;

// Optimize Bar component with attrs for dynamic styles
const Bar = styled.div.attrs<{ $height: number; $color: string }>((props) => ({
  style: {
    height: `${props.$height}%`,
    backgroundColor: props.$color,
  },
}))`
  width: 4px;
  border-radius: 2px;
  transition: height 0.1s ease;
  will-change: height;
`;

const Equalizer: React.FC<EqualizerProps> = ({
  isPlaying = false,
  dominantColor = "#4CAF50",
  audioRef,
  onIntensityChange,
}) => {
  const { state } = useMusicContext();
  const [bars, setBars] = useState<number[]>(Array(12).fill(10));
  const animationRef = useRef<number>(0);
  const [intensity, setIntensity] = useState(0);
  const prevTime = useRef(0);

  // Optimize color calculation
  const color = useMemo(
    () => dominantColor || state.currentTrack?.color || "#388e3c",
    [dominantColor, state.currentTrack?.color]
  );

  // Calculate overall intensity from bars
  useEffect(() => {
    const newIntensity =
      bars.reduce((sum, height) => sum + height, 0) / (bars.length * 100);
    setIntensity(newIntensity);
  }, [bars]);

  // Notify parent of intensity changes
  useEffect(() => {
    if (onIntensityChange) {
      onIntensityChange(intensity);
    }
  }, [intensity, onIntensityChange]);

  // Optimize animation timing
  useEffect(() => {
    if (!state.isPlaying || !state.equalizerActive) {
      setBars(Array(12).fill(10));
      return () => cancelAnimationFrame(animationRef.current);
    }

    const updateBars = (timestamp: number) => {
      // Throttle updates to reduce renders (update at ~30fps instead of 60fps)
      if (timestamp - prevTime.current < 33) {
        animationRef.current = requestAnimationFrame(updateBars);
        return;
      }
      prevTime.current = timestamp;

      setBars((prev) => {
        // Check if we need to update bars based on significant changes
        const newBars = prev.map((height) => {
          const targetHeight = 20 + Math.random() * 60;
          return height + (targetHeight - height) * 0.3;
        });

        // Only update if there's a meaningful change
        const hasSignificantChange = newBars.some(
          (bar, i) => Math.abs(bar - prev[i]) > 2
        );

        return hasSignificantChange ? newBars : prev;
      });

      animationRef.current = requestAnimationFrame(updateBars);
    };

    animationRef.current = requestAnimationFrame(updateBars);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [state.isPlaying, state.equalizerActive]);

  // Memoize the bars to prevent unnecessary re-renders
  const barElements = useMemo(
    () =>
      bars.map((height, i) => (
        <Bar key={i} $height={state.isPlaying ? height : 5} $color={color} />
      )),
    [bars, state.isPlaying, color]
  );

  return (
    <EqualizerContainer $isActive={isPlaying} $color={dominantColor}>
      <Canvas ref={audioRef} width="280" height="70" />
      <GlowOverlay
        $intensity={intensity}
        $color={dominantColor}
        $isPlaying={isPlaying}
      >
        <FlowEffect $intensity={intensity} $color={dominantColor} />
      </GlowOverlay>
      {barElements}
    </EqualizerContainer>
  );
};

export default React.memo(Equalizer);
