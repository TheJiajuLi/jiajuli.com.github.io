import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useMusicContext } from "../../context/MusicContext";

const VisualizerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

const Visualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { state } = useMusicContext();
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas resolution match display size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const draw = () => {
      if (!ctx) return;

      // Get current color based on track
      const color = state.currentTrack?.color || "#388e3c";

      animationRef.current = requestAnimationFrame(draw);

      // Simple flowing visualization
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Create simulated waveform data
      const waveformData = new Array(128).fill(0).map((_, i) => {
        // Create dynamic wave pattern based on track progress
        const t = state.progress * 0.01 + i * 0.01;
        return (
          Math.sin(t * 0.5) * 0.3 +
          Math.sin(t * 1.5) * 0.2 +
          Math.sin(t * 3.5) * 0.1
        );
      });

      // Draw flowing background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `${color}40`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();

      ctx.moveTo(0, height);

      for (let i = 0; i < waveformData.length; i++) {
        const x = (i / waveformData.length) * width;
        const y = height - height * 0.5 * (1 + waveformData[i]);

        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // Draw animated border glow
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let i = 0; i < waveformData.length; i++) {
        const x = (i / waveformData.length) * width;
        const y = height - height * 0.5 * (1 + waveformData[i]);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [state.currentTrack, state.progress]);

  return (
    <VisualizerContainer>
      <Canvas ref={canvasRef} />
    </VisualizerContainer>
  );
};

export default Visualizer;
