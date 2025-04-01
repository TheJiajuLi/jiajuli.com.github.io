import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";

// Add WebKit audio context type definition
declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}

const EqualizerCanvas = styled.canvas<{ $isActive?: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$isActive ? 1 : 0.7)};
  transition: opacity 0.3s ease;
`;

const Equalizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const prevHeightsRef = useRef<number[]>([]);
  const [barHeights, setBarHeights] = useState<number[]>([]);

  const analyzerRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Move updateBars to useCallback to prevent recreation
  const updateBars = useCallback(() => {
    if (!analyzerRef.current || !canvasRef.current) {
      animationFrameRef.current = requestAnimationFrame(updateBars);
      return;
    }

    const dataArray = new Uint8Array(analyzerRef.current.frequencyBinCount);
    analyzerRef.current.getByteFrequencyData(dataArray);

    const newHeights = Array.from(dataArray).map((value) => value / 255);

    // Compare with previous heights stored in ref instead of state
    const hasChanged = newHeights.some(
      (height, index) =>
        Math.abs(height - (prevHeightsRef.current[index] || 0)) > 0.05
    );

    if (hasChanged) {
      prevHeightsRef.current = newHeights;
      setBarHeights(newHeights);
    }

    animationFrameRef.current = requestAnimationFrame(updateBars);
  }, []); // No dependencies needed since we use refs

  useEffect(() => {
    // Initialize audio context and analyzer only once
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextClass();
      analyzerRef.current = audioContextRef.current.createAnalyser();
      analyzerRef.current.fftSize = 64;
    }

    // Start the animation
    updateBars();

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateBars]); // Only depend on updateBars

  // Draw the equalizer bars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bars
    const barWidth = canvas.width / barHeights.length;
    barHeights.forEach((height, index) => {
      const x = index * barWidth;
      const h = height * canvas.height;

      ctx.fillStyle = `rgba(76, 175, 80, ${height * 0.8 + 0.2})`; // Green with dynamic opacity
      ctx.fillRect(x, canvas.height - h, barWidth - 1, h);
    });
  }, [barHeights]);

  return <EqualizerCanvas ref={canvasRef} width={300} height={100} />;
};

export default Equalizer;
