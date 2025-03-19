import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { artColorExtractor, WaveConfig } from '../../utils/artColorExtractor';
import { performanceOptimizer } from '../../utils/performanceOptimizer';

interface ArtColorVisualizerProps {
  imageUrl: string;
  isPlaying?: boolean;
  intensity?: number; // 0-1 scale for animation intensity
}

const ArtColorVisualizer: React.FC<ArtColorVisualizerProps> = ({ 
  imageUrl,
  isPlaying = false,
  intensity = 0.5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [waves, setWaves] = useState<WaveConfig[]>([]);
  const [backgroundGradient, setBackgroundGradient] = useState<string>('');
  
  // Extract colors on image change
  useEffect(() => {
    if (!imageUrl) return;
    
    let isMounted = true;
    
    const extractAndSetup = async () => {
      try {
        const palette = await artColorExtractor.extractColors(imageUrl);
        
        if (!isMounted) return;
        
        // Generate wave configs based on palette
        const newWaves = artColorExtractor.generateWaveEffects(palette);
        setWaves(newWaves);
        
        // Create background gradient
        const gradient = artColorExtractor.createGradientBackground(palette);
        setBackgroundGradient(gradient);
      } catch (error) {
        console.error('Failed to process image colors:', error);
      }
    };
    
    extractAndSetup();
    
    return () => {
      isMounted = false;
    };
  }, [imageUrl]);
  
  // Set up and animate canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container || waves.length === 0) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    resizeCanvas();
    const resizeObserver = new ResizeObserver(performanceOptimizer.throttle(resizeCanvas, 100));
    resizeObserver.observe(container);
    
    // Animation parameters
    const time = { value: 0 };
    let lastTimestamp = 0;
    
    // Animation function
    const animate = (timestamp: number) => {
      // Calculate time delta
      if (lastTimestamp === 0) lastTimestamp = timestamp;
      const delta = (timestamp - lastTimestamp) / 1000; // Convert to seconds
      lastTimestamp = timestamp;
      
      // Only increment time if playing
      if (isPlaying) {
        time.value += delta;
      }
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw each wave with layered effect
      waves.forEach((wave, index) => {
        drawWave(ctx, wave, time.value, canvas.width, canvas.height, index, intensity);
      });
      
      // Request next frame
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [waves, isPlaying, intensity]);
  
  // Draw a single wave on canvas
  const drawWave = (
    ctx: CanvasRenderingContext2D, 
    wave: WaveConfig, 
    time: number, 
    width: number, 
    height: number,
    layer: number,
    intensity: number
  ) => {
    const { amplitude, frequency, speed, color } = wave;
    
    // Adjust parameters based on layer and intensity
    const adjustedAmplitude = amplitude * intensity * (1 - layer * 0.2);
    const adjustedSpeed = speed * (isPlaying ? 1 : 0.2); // Slower when not playing
    const yOffset = height * (0.3 + layer * 0.15); // Position waves at different heights
    
    ctx.beginPath();
    ctx.moveTo(0, yOffset);
    
    // Draw wave path
    for (let x = 0; x <= width; x += 1) {
      const y = yOffset + 
                Math.sin(x * frequency + time * adjustedSpeed) * adjustedAmplitude + 
                Math.sin(x * frequency * 0.5 + time * adjustedSpeed * 0.7) * (adjustedAmplitude * 0.5);
      ctx.lineTo(x, y);
    }
    
    // Complete the path by connecting to bottom corners
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    
    // Fill with gradient based on wave color
    const gradient = ctx.createLinearGradient(0, yOffset, 0, height);
    gradient.addColorStop(0, `${color}80`); // Semi-transparent at top
    gradient.addColorStop(1, `${color}10`); // Almost transparent at bottom
    
    ctx.fillStyle = gradient;
    ctx.fill();
  };

  return (
    <VisualizerContainer ref={containerRef} style={{ background: backgroundGradient }}>
      <Canvas ref={canvasRef} />
      <GlowOverlay $isPlaying={isPlaying} />
    </VisualizerContainer>
  );
};

// Styled components
const VisualizerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  transition: background 1s ease;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const GlowOverlay = styled.div<{ $isPlaying: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  opacity: ${props => props.$isPlaying ? 0.7 : 0.3};
  transition: opacity 0.5s ease;
  z-index: 2;
  
  animation: ${props => props.$isPlaying ? 'pulse 4s infinite alternate' : 'none'};
  
  @keyframes pulse {
    0% {
      opacity: 0.3;
      transform: scale(1);
    }
    100% {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }
`;

export default ArtColorVisualizer;