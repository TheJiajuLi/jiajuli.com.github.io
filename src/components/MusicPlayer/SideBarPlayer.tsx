import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaRandom,
  FaBars,
  FaTimes,
  FaEye,
  FaLock,
  FaLockOpen,
} from "react-icons/fa";
import { MdEqualizer } from "react-icons/md";
import { TbRepeatOff, TbRepeatOnce, TbRepeat } from "react-icons/tb";
import Visualizer from "../Visualizer/Visualizer";
import Equalizer from "../Visualizer/Equalizer";
import { SidebarMode } from "../../types/music";
import { DEFAULT_COVER, getSafeCoverArt } from "../../utils/imageUtils";
import VolumeControl from "./VolumeControl"; // Import the new VolumeControl

// Add this new component for the energy particles
const EnergyParticles = styled.div.attrs({
  className: "mp-ambient-particles",
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(76, 175, 80, 0.6);
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.8), 0 0 20px rgba(76, 175, 80, 0.4);
    opacity: 0;
  }

  &::before {
    top: 10%;
    left: 10%;
    animation: floatParticle1 15s infinite ease-in-out;
  }

  &::after {
    bottom: 20%;
    right: 15%;
    animation: floatParticle2 18s infinite ease-in-out;
  }

  @keyframes floatParticle1 {
    0%,
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    25% {
      transform: translate(30vw, 20vh);
      opacity: 0.7;
    }
    50% {
      transform: translate(60vw, 10vh);
      opacity: 0.3;
    }
    75% {
      transform: translate(80vw, 30vh);
      opacity: 0.6;
    }
  }

  @keyframes floatParticle2 {
    0%,
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    25% {
      transform: translate(-20vw, -10vh);
      opacity: 0.5;
    }
    50% {
      transform: translate(-50vw, -30vh);
      opacity: 0.8;
    }
    75% {
      transform: translate(-70vw, -5vh);
      opacity: 0.4;
    }
  }
`;

const BackgroundVisualizer = styled.div.attrs({
  className: "mp-visualizer-wrapper",
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

// Animation constants for consistent timing across components
const ANIMATION_TIMING = {
  sidebar: 0.3,
  buttonDelay: 0.15,
  buttonTransition: 0.35,
};

// Update the PlayerSidebarContainer to use framer-motion consistently
const PlayerSidebarContainer = styled(motion.div).attrs<{ $isOpen?: boolean }>(
  (props) => ({
    className: "mp-sidebar",
  })
)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 280px;
  max-width: ${(props) =>
    props.$isOpen ? "85vw" : "75vw"}; // Increase max width when open
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(56, 142, 60, 0.1);
  overflow: hidden; // Important for containing the animated line

  /* Animated divider line with water-like effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(56, 142, 60, 0.2) 20%,
      rgba(76, 175, 80, 0.6) 50%,
      rgba(56, 142, 60, 0.2) 80%,
      transparent 100%
    );
    animation: waterFlowAnimation 3s ease-in-out infinite;
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.5), 0 0 30px rgba(76, 175, 80, 0.3);
  }

  /* Animated glow effect */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 5px;
    height: 150px;
    transform: translateY(-50%);
    background: radial-gradient(
      ellipse at left,
      rgba(76, 175, 80, 0.6) 0%,
      transparent 70%
    );
    filter: blur(5px);
    animation: pulseGlow 2s ease-in-out infinite;
  }

  @keyframes waterFlowAnimation {
    0% {
      background-position: 0 0%;
      background-size: 100% 100%;
    }
    25% {
      background-size: 100% 90%;
    }
    50% {
      background-position: 0 100%;
      background-size: 100% 110%;
    }
    75% {
      background-size: 100% 90%;
    }
    100% {
      background-position: 0 0%;
      background-size: 100% 100%;
    }
  }

  @keyframes pulseGlow {
    0%,
    100% {
      opacity: 0.7;
      height: 150px;
    }
    50% {
      opacity: 0.9;
      height: 200px;
    }
  }

  @media (max-width: 600px) {
    width: 260px;
  }

  @media (max-width: 380px) {
    width: 100%; /* Full width sidebar for very small screens */
    max-width: none;
    border-left: none;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    /* Special treatment for landscape orientation on small devices */
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr;

    & > div:first-of-type {
      grid-column: 1;
    }

    & > div:last-of-type {
      grid-column: 2;
      padding-left: 0;
    }
  }
`;

// Update AlbumSection for better small screen support
const AlbumSection = styled.div.attrs<{ $bgColor?: string }>((props) => ({
  className: "mp-track-display",
}))`
  padding: 30px;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.$bgColor
      ? `linear-gradient(45deg, ${props.$bgColor}40, ${props.theme.background})`
      : props.theme.background};
  overflow: hidden;

  @media (max-width: 380px) {
    padding: 20px 15px;
  }

  @media (max-height: 600px) {
    padding: 15px 10px;
    justify-content: flex-start;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    padding: 10px;
    justify-content: center;

    & > div {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
`;

// Replace this component
const AlbumBackground = styled.div.attrs<{ $bgColor?: string }>((props) => ({
  className: "mp-album-bg-color",
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  background: ${(props) => props.$bgColor || "transparent"};
  z-index: 0;
  filter: blur(50px);
  transition: background 0.5s ease;
`;

// Water ripple effect for the album art
const AlbumArtRipple = styled.div.attrs({
  className: "mp-album-ripple-effect",
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;
    border: 2px solid rgba(76, 175, 80, 0.3);
    transform: translate(-50%, -50%) scale(0);
    animation: rippleEffect 5s infinite ease-out;
  }

  &::after {
    animation-delay: 2.5s;
  }

  @keyframes rippleEffect {
    0% {
      transform: translate(-50%, -50%) scale(0.3);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0;
    }
  }
`;

// Update the AlbumArt component to include the ripple
// Update AlbumArt to be more responsive
const AlbumArt = styled.div.attrs({
  className: "mp-album-artwork",
})`
  position: relative;
  width: 220px;
  height: 220px;
  aspect-ratio: 1 / 1; /* Force square aspect ratio */
  max-width: min(calc(100% - 40px), 220px); /* Prevent oversizing */
  max-height: min(calc(100vw - 120px), 220px);
  margin: 35px auto 20px auto; /* Increase top margin from 20px to 35px */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 1;
  user-select: none;
  transform: translateZ(0); /* Hardware acceleration */
  backface-visibility: hidden; /* Prevent flickering */
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;

  /* Enhanced hover effect container */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(76, 175, 80, 0.15) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
    pointer-events: none;
  }

  /* Container for the album art image with enhanced hover */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transform-origin: center;
    will-change: transform;
  }

  /* Hover effects */
  &:hover {
    transform: scale(1.02) translateZ(0);
    box-shadow: 0 25px 35px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(255, 255, 255, 0.15);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.15);
    }
  }

  /* Active state for click/touch feedback */
  &:active {
    transform: scale(0.98) translateZ(0);
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

    img {
      transform: scale(1.08);
      transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  }

  /* Maintain minimum size */
  @media (max-width: 280px) {
    width: 120px;
    height: 120px;
    min-width: 120px;
    min-height: 120px;
  }

  /* Container sizing rules for different screen sizes */
  @media (max-height: 700px) {
    width: 180px;
    height: 180px;
    margin: 30px auto 15px auto; /* Adjusted for smaller screens */
  }

  @media (max-height: 600px) {
    width: 150px;
    height: 150px;
    margin: 25px auto 12px auto; /* Adjusted for even smaller screens */
  }

  @media (max-height: 500px) and (orientation: landscape) {
    width: 130px;
    height: 130px;
    margin: 20px auto 10px auto; /* Adjusted for landscape mode */
  }

  /* Ensure proper spacing on very small screens */
  @media (max-width: 380px) {
    margin-top: 40px; /* Increased from 25px to 40px */
    margin-bottom: 15px;
  }

  /* Enhanced visual appearance with subtle inner shadow */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: inherit;
    pointer-events: none;
    z-index: 3;
  }

  /* Loading state */
  &.loading::before {
    opacity: 1;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.1;
    }
  }
`;

// Update the Cover component
const Cover = styled.img.attrs({
  className: "mp-album-image",
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TrackInfo = styled.div.attrs({
  className: "mp-track-metadata",
})`
  text-align: center;
  margin-top: 20px;
  z-index: 1;
  user-select: none; // Prevent selection

  @media (max-height: 700px) {
    margin-top: 12px;
  }
`;

const TrackTitle = styled.h2.attrs({
  className: "mp-track-title",
})`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  user-select: none; // Prevent text selection

  @media (max-height: 700px) {
    font-size: 1.2rem;
    margin: 0 0 4px 0;
  }
`;

const TrackArtist = styled.p.attrs({
  className: "mp-track-artist",
})`
  font-size: 1.1rem;
  color: ${(props) => props.theme.textSecondary};
  margin: 0 0 5px 0;
  user-select: none; // Prevent text selection
`;

const TrackAlbum = styled.p.attrs({
  className: "mp-track-album",
})`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textSecondary};
  opacity: 0.8;
  user-select: none; // Prevent text selection
`;

// Make controls more touch-friendly on small screens
const ControlsContainer = styled.div.attrs({
  className: "mp-playback-controls",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  gap: 15px;
  z-index: 1;
  padding: 8px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    border: 1px solid rgba(76, 175, 80, 0.3);
    box-shadow: inset 0 0 10px rgba(76, 175, 80, 0.1);
    pointer-events: none;
  }

  @media (max-height: 700px) {
    margin-top: 15px;
    gap: 10px;
  }

  @media (max-height: 600px) {
    margin-top: 10px;
    padding: 6px;
  }

  @media (max-width: 380px) {
    width: 90%;
    justify-content: space-around;
  }

  @media (max-height: 500px) and (orientation: landscape) {
    margin-top: 5px;
    padding: 5px;
  }
`;

// Make control buttons larger on small screens for better touch targets
const ControlButton = styled.button.attrs({
  className: "mp-control-button",
})`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.text};
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, color 0.2s ease;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    color: ${(props) => props.theme.primary};
    transform: scale(1.1);
  }

  @media (max-width: 380px) {
    min-width: 44px;
    min-height: 44px;
    padding: 10px;
  }
`;

// Replace your current PlayPauseButton with this enhanced version
const PlayPauseButton = styled(ControlButton).attrs({
  className: "mp-play-pause-button",
})`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${(props) => props.theme.primary};
  color: white;
  font-size: 1.4rem;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.3s ease, box-shadow 0.3s ease;

  /* Glowing background effect */
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: ${(props) => props.theme.primary};
    opacity: 0.4;
    z-index: -1;
    animation: pulse 2s infinite ease-out;
    transition: all 0.3s ease;
  }

  /* Inner progress ring */
  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-top-color: rgba(255, 255, 255, 0.8);
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: rotate 1.5s linear infinite;
  }

  /* Show progress ring when playing */
  &.playing::after {
    opacity: 0.7;
  }

  /* Base states styling */
  &.playing {
    background: ${(props) => props.theme.primaryDark || "#388e3c"};
    box-shadow: 0 0 20px rgba(76, 175, 80, 0.7);
  }

  &.paused {
    background: ${(props) => props.theme.primary};
  }

  /* Icon container for smooth transitions */
  .icon-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Icon transitions */
  .play-icon,
  .pause-icon {
    position: absolute;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, opacity;
  }

  /* When playing, hide play icon and show pause icon */
  &.playing .play-icon {
    opacity: 0;
    transform: scale(0.5) rotate(-90deg);
  }

  &.playing .pause-icon {
    opacity: 1;
    transform: scale(1);
  }

  /* When paused, hide pause icon and show play icon */
  &.paused .play-icon {
    opacity: 1;
    transform: scale(1);
  }

  &.paused .pause-icon {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 0 25px rgba(76, 175, 80, 0.8);

    &::before {
      animation: pulse 1s infinite ease-out;
      opacity: 0.6;
    }

    &.playing {
      background: ${(props) => props.theme.primaryDark || "#2e7d32"};
    }

    &.paused {
      background: ${(props) => props.theme.primaryHover || "#43a047"};
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.5;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-height: 700px) {
    width: 46px;
    height: 46px;
    font-size: 1.2rem;
  }
`;

const Controls = ({ isPlaying, onPlayPause, onPrev, onNext }) => (
  <ControlsContainer>
    <ControlButton onClick={onPrev}>
      <FaBackward />
    </ControlButton>

    <PlayPauseButton
      onClick={onPlayPause}
      className={isPlaying ? "playing" : "paused"}
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      <div className="icon-container">
        <FaPlay className="play-icon" />
        <FaPause className="pause-icon" />
      </div>
    </PlayPauseButton>

    <ControlButton onClick={onNext}>
      <FaForward />
    </ControlButton>
  </ControlsContainer>
);

// Replace the existing progress bar components with these enhanced versions

// Container with subtle background glow
const ProgressContainer = styled.div.attrs({
  className: "mp-progress-wrapper",
})`
  width: 100%;
  margin-top: 25px;
  padding: 0 15px;
  z-index: 1;
  position: relative;

  /* Add subtle ambient glow behind progress area */
  &::before {
    content: "";
    position: absolute;
    left: 15px;
    right: 15px;
    top: 50%;
    height: 20px;
    background: radial-gradient(
      ellipse at center,
      rgba(76, 175, 80, 0.15) 0%,
      rgba(0, 0, 0, 0) 70%
    );
    transform: translateY(-50%);
    filter: blur(8px);
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }

  @media (max-height: 700px) {
    margin-top: 15px;
  }
`;

// Sleeker progress bar with enhanced interaction area
const ProgressBar = styled.div.attrs({
  className: "mp-progress-track",
})`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  margin: 8px 0; // Add space for click area
  padding: 0.9px 0; // Create larger hit area while maintaining visual size
  box-sizing: content-box; // Ensure padding doesn't affect visual size

  &:hover {
    height: 5px;
    background: rgba(255, 255, 255, 0.18);
  }

  /* Track shine effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

// Update the Progress component for more responsive fill
const Progress = styled.div.attrs<{
  $width: string;
  $isDragging?: boolean;
  $isPlaying?: boolean;
}>((props) => ({
  style: {
    width: props.$width, // Move this dynamic property to style
  },
}))`
  height: 100%;
  border-radius: inherit;
  position: relative;
  transition: width ${(props) => (props.$isDragging ? "0s" : "0.08s")} linear;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.primary} 0%,
    ${(props) => props.theme.primaryHover || "#43a047"} 100%
  );

  /* Shimmer effect - only active when music is playing */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(43, 167, 103, 0.87) 50%,
      transparent 100%
    );
    opacity: 0;
    animation: ${(props) =>
      props.$isPlaying ? "shimmer 3s infinite" : "none"};
    pointer-events: none;
  }

  @keyframes shimmer {
    0%,
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

// Modern handle design with enhanced visual states
const ProgressHandle = styled.div.attrs<{
  $visible: boolean;
  $position: string;
  $isDragging?: boolean;
}>((props) => ({
  style: {
    left: props.$position, // Move this dynamic property to style
    transform: `translate(-50%, -50%) scale(${props.$visible ? 1 : 0})`,
    width: props.$isDragging ? "18px" : "12px",
    height: props.$isDragging ? "18px" : "12px",
    background: props.$isDragging ? "white" : props.theme.primary,
    boxShadow: props.$isDragging
      ? `0 0 0 4px rgba(76, 175, 80, 0.3), 
         0 0 15px rgba(76, 175, 80, 0.8),
         0 0 30px rgba(76, 175, 80, 0.4)`
      : `0 0 0 2px rgba(76, 175, 80, 0.2), 
         0 0 8px rgba(76, 175, 80, 0.6)`,
  },
}))`
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1),
    background-color 0.2s ease, box-shadow 0.2s ease,
    width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  z-index: 2;
  will-change: transform, width, height, left;

  /* Inner dot for enhanced visual presence */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${(props) => (props.$isDragging ? "6px" : "4px")};
    height: ${(props) => (props.$isDragging ? "6px" : "4px")};
    background: white;
    border-radius: 50%;
    opacity: ${(props) => (props.$isDragging ? 0.9 : 0.7)};
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
  }

  /* Focus ring for enhanced visibility during interaction */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${(props) => (props.$isDragging ? "28px" : "20px")};
    height: ${(props) => (props.$isDragging ? "28px" : "20px")};
    transform: translate(-50%, -50%)
      scale(${(props) => (props.$isDragging ? 1 : 0.7)});
    opacity: ${(props) => (props.$isDragging ? 0.6 : 0)};
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      rgba(76, 175, 80, 0.3) 0%,
      transparent 70%
    );
    transition: opacity 0.3s ease, transform 0.2s ease;
    pointer-events: none;
  }

  /* Advanced pulse effect during dragging */
  animation: ${(props) =>
    props.$isDragging
      ? "advancedPulse 2s infinite cubic-bezier(0.66, 0, 0.34, 1)"
      : "none"};
`;

// Enhanced time info display
const TimeInfo = styled.div.attrs({
  className: "mp-time-display",
})`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${(props) => props.theme.textSecondary};
  margin-top: 10px;
  user-select: none;
  letter-spacing: 0.5px;
  font-weight: 500;
  opacity: 0.9;
  padding: 0 2px;

  /* Apply subtle highlight to current time */
  span:first-child {
    color: ${(props) => props.theme.primary};
    opacity: 0.95;
  }
`;

// Beautiful floating time tooltip
const TimeTooltip = styled.div.attrs<{
  $visible: boolean;
  $position: string;
  $isDragging?: boolean;
}>((props) => ({
  style: {
    opacity: props.$visible ? 1 : 0,
    transform: `translateX(-50%) translateY(${props.$visible ? 0 : 10}px)`,
    left: props.$position,
    background: props.$isDragging
      ? props.theme.primaryDark || "#2e7d32"
      : "rgba(0, 0, 0, 0.75)",
    padding: props.$isDragging ? "5px 10px" : "4px 8px",
    fontSize: props.$isDragging ? "0.85rem" : "0.75rem",
    fontWeight: props.$isDragging ? 600 : 500,
  },
}))`
  position: absolute;
  bottom: ${(props) => (props.$isDragging ? "28px" : "24px")};
  color: white;
  border-radius: 6px;
  transition: opacity 0.15s ease, transform 0.15s ease,
    background-color 0.2s ease, padding 0.2s ease;
  pointer-events: none;
  z-index: 3;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
  user-select: none; /* Add this line to prevent text selection */

  /* Subtle pointer tip */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid
      ${(props) =>
        props.$isDragging
          ? props.theme.primaryDark || "#2e7d32"
          : "rgba(0, 0, 0, 0.75)"};
    transition: border-top-color 0.2s ease;
  }
`;

// Add this class to manage media control commands and debouncing
class MediaControlHandler {
  private lastAction: { type: string; time: number } | null = null;
  private doubleClickThreshold = 300; // ms
  private debounceThreshold = 150; // ms
  private playPromise: Promise<void> | null = null;

  constructor(
    private audioRef: React.RefObject<HTMLAudioElement>,
    private dispatch: any
  ) {}

  isDoubleClick(actionType: string): boolean {
    if (!this.lastAction) return false;

    return (
      this.lastAction.type === actionType &&
      Date.now() - this.lastAction.time < this.doubleClickThreshold
    );
  }

  shouldDebounce(actionType: string): boolean {
    if (!this.lastAction) return false;

    return (
      this.lastAction.type === actionType &&
      Date.now() - this.lastAction.time < this.debounceThreshold
    );
  }

  handlePlayPause = () => {
    if (this.shouldDebounce("playPause")) return;
    this.lastAction = { type: "playPause", time: Date.now() };

    const audio = this.audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      this.dispatch({ type: "PLAY" });

      try {
        // Store the play promise to properly handle interruptions
        this.playPromise = audio.play();
        this.playPromise?.catch((error) => {
          console.warn("Play failed:", error);
          this.dispatch({ type: "PAUSE" });
          this.playPromise = null;
        });
      } catch (error) {
        console.warn("Play operation failed:", error);
        this.dispatch({ type: "PAUSE" });
      }
    } else {
      // Wait for any pending play operation to complete before pausing
      if (this.playPromise) {
        this.playPromise
          .then(() => {
            audio.pause();
            this.dispatch({ type: "PAUSE" });
            this.playPromise = null;
          })
          .catch(() => {
            // If the play promise fails, still try to pause
            audio.pause();
            this.dispatch({ type: "PAUSE" });
            this.playPromise = null;
          });
      } else {
        audio.pause();
        this.dispatch({ type: "PAUSE" });
      }
    }
  };

  handlePrev = () => {
    if (this.shouldDebounce("prev")) return;

    const isDoubleClick = this.isDoubleClick("prev");
    this.lastAction = { type: "prev", time: Date.now() };

    const audio = this.audioRef.current;
    if (!audio) return;

    // For double-click, always go to previous track regardless of position
    if (isDoubleClick) {
      console.log(
        "Double-click detected on prev button, skipping to previous track"
      );
      this.dispatch({ type: "PREV_TRACK" });
      return;
    }

    // Standard behavior: restart if beyond threshold, otherwise go to previous
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
    } else {
      this.dispatch({ type: "PREV_TRACK" });
    }
  };

  handleNext = () => {
    if (this.shouldDebounce("next")) return;
    this.lastAction = { type: "next", time: Date.now() };

    // Handle double-click on next with special behavior if needed
    const isDoubleClick = this.isDoubleClick("next");
    if (isDoubleClick) {
      console.log("Double-click detected on next button");
      // Implement special behavior for double-click on next if desired
    }

    this.dispatch({ type: "NEXT_TRACK" });
  };
}

// Update the PlayerSidebar interface
interface PlayerSidebarProps {
  isOpen: boolean;
  toggleOpen: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
}

// Update the PlayerSidebar component
const PlayerSidebar = React.forwardRef<HTMLDivElement, PlayerSidebarProps>(
  ({ isOpen, toggleOpen, setSidebarOpen }, ref) => {
    const { state, dispatch } = useMusicContext();
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    // Create a media control handler instance
    const mediaControls = useRef(
      new MediaControlHandler(audioRef, dispatch)
    ).current;

    // Map the handler methods to our component functions
    const togglePlay = mediaControls.handlePlayPause;
    const prevTrack = mediaControls.handlePrev;
    const nextTrack = () => {
      // If repeat one is enabled, just restart the current track
      if (state.repeatMode === "one" && audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current
          .play()
          .catch((err) => console.warn("Couldn't restart track:", err));
        return;
      }

      // Otherwise dispatch the normal next track action
      // The reducer should handle wrapping around if repeatMode is "all"
      dispatch({ type: "NEXT_TRACK" });
    };

    // Use this instead of directly accessing state.isPlaying

    const bgColor = state.currentTrack?.color || "#388e3c";

    useEffect(() => {
      if (state.isPlaying) {
        audioRef.current?.play();
      } else {
        audioRef.current?.pause();
      }
    }, [state.isPlaying, state.currentTrack]);

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = state.volume;
      }
    }, [state.volume]);

    const formatTime = (time: number) => {
      if (time && !isNaN(time)) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      }
      return "0:00";
    };

    const updateProgress = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        dispatch({ type: "SET_PROGRESS", payload: currentTime });
        dispatch({ type: "SET_DURATION", payload: duration });
      }
    };

    const setProgress = (e: React.MouseEvent<HTMLDivElement>) => {
      if (progressBarRef.current && audioRef.current) {
        const width = progressBarRef.current.clientWidth;
        const clickX = e.nativeEvent.offsetX;
        const duration = audioRef.current.duration;
        audioRef.current.currentTime = (clickX / width) * duration;
      }
    };

    useEffect(() => {
      if (state.isPlaying && audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Failed to start playback:", error);
            dispatch({ type: "PAUSE" });
          });
        }
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
    }, [state.currentTrack, state.isPlaying, dispatch]);

    useEffect(() => {
      // Monitor and handle audio playback errors
      const handleMediaError = () => {
        if (audioRef.current?.error) {
          console.error("Media error:", audioRef.current.error);

          // Retry playback with exponential backoff
          let retryCount = 0;
          const maxRetries = 3;

          const retryPlayback = () => {
            if (retryCount < maxRetries) {
              retryCount++;
              const delay = Math.pow(2, retryCount) * 1000;

              console.log(`Retrying playback in ${delay / 1000} seconds...`);
              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.load();
                  audioRef.current.play().catch((err) => {
                    console.warn("Retry failed:", err);
                    retryPlayback();
                  });
                }
              }, delay);
            } else {
              // If all retries fail, skip to next track
              console.warn("All retries failed, skipping track");
              nextTrack();
            }
          };

          retryPlayback();
        }
      };

      const audioElement = audioRef.current;
      if (audioElement) {
        audioElement.addEventListener("error", handleMediaError);
      }

      return () => {
        if (audioElement) {
          audioElement.removeEventListener("error", handleMediaError);
        }
      };
    }, []);

    // Add these state variables to PlayerSidebar component
    const [isHoveringProgress, setIsHoveringProgress] = useState(false);
    const [hoverPosition, setHoverPosition] = useState("0%");
    const [isDragging, setIsDragging] = useState(false);

    // Add this state variable
    const [hoverTime, setHoverTime] = useState<string | null>(null);

    // Add these functions to PlayerSidebar component
    // Replace the handleProgressHover function with this enhanced version
    const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
      if (progressBarRef.current) {
        // Get precise position data
        const rect = progressBarRef.current.getBoundingClientRect();

        // Calculate exact position to 3 decimal places for smoother experience
        const rawPosition = (e.clientX - rect.left) / rect.width;
        const position = Math.max(0, Math.min(1, rawPosition)) * 100;

        // Update position with high precision - critical for smooth feeling
        setHoverPosition(`${position.toFixed(3)}%`);

        // Calculate and set hover time immediately
        if (audioRef.current?.duration) {
          const timeAtPosition = (position * audioRef.current.duration) / 100;
          setHoverTime(formatTime(timeAtPosition));
        }

        // Set hover state immediately without animation delay
        if (!isHoveringProgress) {
          setIsHoveringProgress(true);
        }
      }
    };

    const handleProgressLeave = () => {
      if (!isDragging) {
        setIsHoveringProgress(false);
      }
    };

    const handleProgressDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      handleProgressMove(e);
    };

    // Add this function to get the timestamp at hover position
    const getHoverTime = (position: number): string => {
      if (audioRef.current) {
        const duration = audioRef.current.duration;
        const timeAtPosition = (position / 100) * duration;
        return formatTime(timeAtPosition);
      }
      return "0:00";
    };

    const handleProgressMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (progressBarRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const rawPosition = (e.clientX - rect.left) / rect.width;
        const position = Math.max(0, Math.min(1, rawPosition)) * 100;

        // Update position with immediate effect - no toFixed for maximum responsiveness
        const positionString = `${position}%`;
        setHoverPosition(positionString);

        // Calculate and set hover time
        setHoverTime(getHoverTime(position));

        if (isDragging && audioRef.current) {
          // Update audio position
          const duration = audioRef.current.duration;
          audioRef.current.currentTime = (position / 100) * duration;

          // Force a direct DOM update for maximum responsiveness
          if (progressBarRef.current.querySelector(".mp-progress-fill")) {
            (
              progressBarRef.current.querySelector(
                ".mp-progress-fill"
              ) as HTMLElement
            ).style.width = positionString;
          }
        }
      }
    };

    const handleProgressDragEnd = () => {
      setIsDragging(false);
      setTimeout(() => {
        if (!isHoveringProgress) {
          setIsHoveringProgress(false);
        }
      }, 100);
    };

    // Add these event listeners to document in a useEffect
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (isDragging && progressBarRef.current) {
          e.preventDefault();

          // Use more precise position calculations
          const rect = progressBarRef.current.getBoundingClientRect();
          const rawPosition = (e.clientX - rect.left) / rect.width;
          const position = Math.max(0, Math.min(1, rawPosition)) * 100;

          // Update position with high precision
          setHoverPosition(`${position.toFixed(3)}%`);

          // Update audio time with the same high precision
          if (audioRef.current) {
            const duration = audioRef.current.duration;
            audioRef.current.currentTime = (position / 100) * duration;
          }
        }
      };

      // Use a more optimized approach with requestAnimationFrame for smoother updates
      let animationId: number;
      const smoothMouseMove = (e: MouseEvent) => {
        if (isDragging) {
          e.preventDefault();
          cancelAnimationFrame(animationId);

          animationId = requestAnimationFrame(() => {
            handleMouseMove(e);
          });
        }
      };

      const handleMouseUp = () => {
        if (isDragging) {
          handleProgressDragEnd();
          cancelAnimationFrame(animationId);
        }
      };

      if (isDragging) {
        document.addEventListener("mousemove", smoothMouseMove, {
          passive: false,
        });
        document.addEventListener("mouseup", handleMouseUp);
      }

      return () => {
        document.removeEventListener("mousemove", smoothMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        cancelAnimationFrame(animationId);
      };
    }, [isDragging]);

    // Add this function in the PlayerSidebar component
    const cycleSidebarMode = () => {
      const currentMode = isValidSidebarMode(state.sidebarMode)
        ? state.sidebarMode
        : "auto";

      const modes: SidebarMode[] = ["auto", "always", "manual"];
      const currentIndex = modes.indexOf(currentMode);
      const nextIndex = (currentIndex + 1) % modes.length;
      const nextMode = modes[nextIndex];

      dispatch({ type: "SET_SIDEBAR_MODE", payload: nextMode });
    };

    // Add this to your component

    // Updated volume control implementation in the PlayerSidebar component

    // Add this to your component

    // Update the handleClose function
    const handleClose = () => {
      toggleOpen(); // Use the toggleOpen function
      dispatch({ type: "SET_SIDEBAR_MODE", payload: "manual" });
      dispatch({ type: "SIDEBAR_INTERACTION" });
      dispatch({ type: "USER_INTERACTION" });
    };

    return (
      <PlayerSidebarContainer
        $isOpen={isOpen}
        className="player-sidebar"
        ref={ref}
        initial={{ right: "-280px" }}
        animate={{ right: isOpen ? 0 : "-280px" }}
        transition={{
          duration: ANIMATION_TIMING.sidebar,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        <SidebarGlow />

        <CloseButton onClick={handleClose} aria-label="Close sidebar">
          <FaTimes />
          <div className="particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
        </CloseButton>

        <audio
          ref={audioRef}
          src={state.currentTrack?.audioSrc}
          onTimeUpdate={updateProgress}
          onEnded={nextTrack}
          onError={(e) => {
            console.error("Audio error:", e);
            // Handle the error appropriately
            if (state.isPlaying) {
              dispatch({ type: "PAUSE" });
              setTimeout(() => {
                nextTrack(); // Try playing the next track instead
              }, 500);
            }
          }}
          onCanPlayThrough={() => {
            // Automatically attempt to play when the track is ready
            if (state.isPlaying && audioRef.current) {
              audioRef.current.play().catch((error) => {
                console.warn("Auto-play was prevented:", error);
                dispatch({ type: "PAUSE" });
              });
            }
          }}
        />

        <AlbumSection $bgColor={bgColor}>
          <AlbumBackground $bgColor={bgColor} />

          {state.currentTrack ? (
            <>
              <AlbumArt>
                <Cover
                  src={getSafeCoverArt(state.currentTrack?.coverArt)}
                  alt={state.currentTrack?.title || "Album Cover"}
                />
                <AlbumArtRipple />
                {state.equalizerActive && <Equalizer />}
              </AlbumArt>

              <TrackInfo>
                <TrackTitle>{state.currentTrack.title}</TrackTitle>
                <TrackArtist>{state.currentTrack.artist}</TrackArtist>
                <TrackAlbum>{state.currentTrack.album}</TrackAlbum>
              </TrackInfo>

              <Controls
                isPlaying={state.isPlaying}
                onPlayPause={togglePlay}
                onPrev={prevTrack}
                onNext={nextTrack}
              />

              <ProgressContainer>
                <ProgressBar
                  ref={progressBarRef}
                  onClick={setProgress}
                  onMouseMove={handleProgressHover}
                  onMouseEnter={handleProgressHover}
                  onMouseLeave={handleProgressLeave}
                  onMouseDown={handleProgressDragStart}
                >
                  <Progress
                    $width={
                      isDragging
                        ? hoverPosition
                        : `${(state.progress / state.duration) * 100}%`
                    }
                    $isDragging={isDragging}
                    $isPlaying={state.isPlaying}
                  />
                  {/* Time tooltip */}
                  <TimeTooltip
                    $visible={isHoveringProgress}
                    $position={hoverPosition}
                    $isDragging={isDragging}
                  >
                    {hoverTime || formatTime(state.progress)}
                  </TimeTooltip>
                  <ProgressHandle
                    $visible={isHoveringProgress || isDragging}
                    $position={
                      isDragging
                        ? hoverPosition
                        : isHoveringProgress
                        ? hoverPosition
                        : `${(state.progress / state.duration) * 100}%`
                    }
                    $isDragging={isDragging}
                  />
                </ProgressBar>
                <TimeInfo>
                  <span>{formatTime(state.progress)}</span>
                  <span>{formatTime(state.duration)}</span>
                </TimeInfo>
              </ProgressContainer>
            </>
          ) : (
            <TrackInfo>
              <TrackTitle>No track selected</TrackTitle>
              <TrackArtist>Select a track to play</TrackArtist>
            </TrackInfo>
          )}
        </AlbumSection>

        <ExtraControls>
          {/* Volume Control Group */}
          <ControlGroup>
            <VolumeControl
              volume={Math.round(state.volume * 100)}
              onVolumeChange={(newVolume) =>
                dispatch({ type: "SET_VOLUME", payload: newVolume / 100 })
              }
            />
          </ControlGroup>

          {/* Feature Toggles in a Grid Layout */}
          <ToggleButtons>
            {/* First Row */}
            <ControlButton
              onClick={() => dispatch({ type: "TOGGLE_SHUFFLE" })}
              style={{ color: state.isShuffling ? "#388e3c" : "" }}
              title="Toggle shuffle mode"
            >
              <FaRandom />
            </ControlButton>

            <RepeatButton
              onClick={() => dispatch({ type: "CYCLE_REPEAT_MODE" })}
              className={`${
                state.repeatMode === "off"
                  ? "repeat-off"
                  : state.repeatMode === "all"
                  ? "repeat-all"
                  : "repeat-one"
              } ${state.repeatMode !== "off" ? "active" : ""}`}
              title={`Repeat mode: ${state.repeatMode}`}
              aria-label={`Repeat mode: ${state.repeatMode}`}
            >
              <div className="repeat-icon-container">
                <TbRepeatOff
                  className={`repeat-off-icon ${
                    state.repeatMode === "off" ? "active" : ""
                  }`}
                />
                <TbRepeat
                  className={`repeat-all-icon ${
                    state.repeatMode === "all" ? "active" : ""
                  }`}
                />
                <TbRepeatOnce
                  className={`repeat-one-icon ${
                    state.repeatMode === "one" ? "active" : ""
                  }`}
                />
                <span className="repeat-badge">1</span>
              </div>
            </RepeatButton>

            <ControlButton
              onClick={() => dispatch({ type: "TOGGLE_VISUALIZER" })}
              style={{ color: state.visualizerActive ? "#388e3c" : "" }}
              title="Toggle visualizer"
            >
              <FaBars />
            </ControlButton>

            {/* Second Row */}
            <EqualizerButton
              onClick={() => dispatch({ type: "TOGGLE_EQUALIZER" })}
              className={`${state.isPlaying ? "playing" : ""} ${
                state.equalizerActive ? "active" : ""
              }`}
              style={{ color: state.equalizerActive ? "#388e3c" : "" }}
              title="Toggle equalizer"
            >
              <MdEqualizer />
            </EqualizerButton>

            {/* Empty cell for spacing */}
            <div></div>

            {/* Sidebar mode button aligned with other controls */}
            <ControlButton
              className="sidebar-mode-button"
              onClick={cycleSidebarMode}
              style={{
                color: (() => {
                  switch (state.sidebarMode) {
                    case "auto":
                      return "rgba(76, 175, 80, 1)";
                    case "always":
                      return "rgba(33, 150, 243, 1)";
                    case "manual":
                      return "rgba(255, 152, 0, 1)";
                    default:
                      return "rgba(76, 175, 80, 1)";
                  }
                })(),
              }}
              title={`Sidebar: ${state.sidebarMode} mode`}
            >
              {state.sidebarMode === "auto" && <FaEye />}
              {state.sidebarMode === "always" && <FaLock />}
              {state.sidebarMode === "manual" && <FaLockOpen />}
            </ControlButton>
          </ToggleButtons>
        </ExtraControls>
      </PlayerSidebarContainer>
    );
  }
);

// Add this styled component definition before it's referenced
const SidebarGlow = styled.div.attrs({
  className: "mp-sidebar-ambient-effect",
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(76, 175, 80, 0.1) 0%,
      rgba(76, 175, 80, 0) 70%
    );
    opacity: 0.7;
    animation: rotateGradient 15s infinite linear;
  }

  @keyframes rotateGradient {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Add this before the CloseButton definition
// Enhanced CloseButton with more dynamic particles
const CloseButton = styled.button.attrs({
  className: "mp-sidebar-close",
})`
  position: absolute;
  top: ${(props) => (props.theme.isMobile ? "10px" : "15px")};
  right: ${(props) => (props.theme.isMobile ? "10px" : "15px")};
  width: ${(props) => (props.theme.isMobile ? "40px" : "36px")};
  height: ${(props) => (props.theme.isMobile ? "40px" : "36px")};
  border: none;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-size: ${(props) => (props.theme.isMobile ? "1.7rem" : "1.5rem")};
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Galaxy background when hovered - Fix the path by removing 'public/' */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
    border-radius: 50%;
  }

  /* Outer glow effect */
  &::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(76, 175, 80, 0.7) 0%,
      rgba(76, 175, 80, 0) 70%
    );
    opacity: 0;
    z-index: -2;
    transition: opacity 0.3s ease;
  }

  /* X icon styling */
  svg {
    width: 18px;
    height: 18px;
    stroke-width: 2px;
    transition: color 0.3s ease, filter 0.3s ease;
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5));
  }

  /* Particle container */
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }

  /* Particle styling - now with 12 particles instead of 6 */
  .particle {
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.8), 0 0 12px rgba(76, 175, 80, 0.4);
  }

  /* Different size particles for more dynamic look */
  .particle:nth-child(3n + 1) {
    width: 2px;
    height: 2px;
    background: rgba(76, 175, 80, 1);
  }

  .particle:nth-child(3n + 2) {
    width: 3px;
    height: 3px;
    background: rgba(120, 200, 80, 0.9);
  }

  .particle:nth-child(3n + 3) {
    width: 4px;
    height: 4px;
    background: rgba(60, 220, 130, 0.85);
  }

  /* Hover state */
  &:hover {
    color: white;
    background: rgba(0, 0, 0, 0.4);

    &::before {
      opacity: 0.9;
    }

    &::after {
      opacity: 0.7;
      animation: pulseGlow 1.5s infinite alternate;
    }

    svg {
      filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
    }

    /* Particle explosion animations with improved timing */
    .particle:nth-child(1) {
      animation: particleFly1 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    }
    .particle:nth-child(2) {
      animation: particleFly2 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.05s;
    }
    .particle:nth-child(3) {
      animation: particleFly3 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.1s;
    }
    .particle:nth-child(4) {
      animation: particleFly4 0.75s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.05s;
    }
    .particle:nth-child(5) {
      animation: particleFly5 0.85s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.15s;
    }
    .particle:nth-child(6) {
      animation: particleFly6 0.95s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.1s;
    }
    .particle:nth-child(7) {
      animation: particleFly7 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.15s;
    }
    .particle:nth-child(8) {
      animation: particleFly8 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    }
    .particle:nth-child(9) {
      animation: particleFly9 0.9s cubic-bezier(0.215, 0.61, 0.355, 1) forwards
        0.1s;
    }
    .particle:nth-child(10) {
      animation: particleFly10 0.75s cubic-bezier(0.215, 0.61, 0.355, 1)
        forwards 0.05s;
    }
    .particle:nth-child(11) {
      animation: particleFly11 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    }
    .particle:nth-child(12) {
      animation: particleFly12 0.85s cubic-bezier(0.215, 0.61, 0.355, 1)
        forwards 0.15s;
    }
  }

  /* Active/pressed state with particle implosion effect */
  &:active {
    transform: scale(0.9);

    &::before {
      opacity: 1;
    }

    .particle {
      animation: particleImplosion 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53)
        forwards !important;
    }
  }

  /* Improved keyframes for more dynamic particle movements */
  @keyframes particleFly1 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-28px, -22px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly2 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(25px, -20px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly3 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(22px, 25px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly4 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-26px, 18px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly5 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(0, -32px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly6 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(8px, 30px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly7 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-35px, 5px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly8 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(32px, 8px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly9 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-15px, -28px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly10 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(-18px, 25px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly11 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(22px, -15px) scale(0);
      opacity: 0;
    }
  }

  @keyframes particleFly12 {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) translate(12px, 32px) scale(0);
      opacity: 0;
    }
  }

  /* Implosion effect when button is clicked */
  @keyframes particleImplosion {
    0% {
      transform: translate(-50%, -50%) scale(1)
        translate(var(--tx, 0), var(--ty, 0));
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0) translate(0, 0);
      opacity: 0;
    }
  }

  @keyframes pulseGlow {
    0% {
      opacity: 0.5;
      transform: scale(0.95);
    }
    100% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
`;

// Update SidebarModeIndicator to align with CloseButton

// Add proper type guard function to validate sidebarMode values
const isValidSidebarMode = (mode: any): mode is SidebarMode => {
  return mode === "auto" || mode === "always" || mode === "manual";
};

// Update the MusicPlayer component to use framer-motion for animations
const SideBarPlayer: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // Add this useEffect to automatically initialize audio
  useEffect(() => {
    // Create audio context only after user interaction
    const initializeAudioOnUserAction = () => {
      try {
        // Only initialize once
        window.removeEventListener("click", initializeAudioOnUserAction);
        window.removeEventListener("touchstart", initializeAudioOnUserAction);

        // Initialize audio context with proper type handling
        const AudioContextClass =
          window.AudioContext || (window as any).webkitAudioContext;

        if (AudioContextClass) {
          const audioContext = new AudioContextClass();

          // Resume audio context if needed
          if (audioContext.state === "suspended") {
            audioContext.resume();
          }

          console.log("Audio context initialized through user interaction");
        }
      } catch (err) {
        console.log("Audio initialization error:", err);
      }
    };

    // Add event listeners for user interaction
    window.addEventListener("click", initializeAudioOnUserAction);
    window.addEventListener("touchstart", initializeAudioOnUserAction);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("click", initializeAudioOnUserAction);
      window.removeEventListener("touchstart", initializeAudioOnUserAction);
    };
  }, []);

  // Handle sidebar behavior based on the selected mode
  useEffect(() => {
    // Logic for automatic mode
    if (state.sidebarMode === "auto") {
      // Function to handle mouse movements
      const handleMouseMove = (e: MouseEvent) => {
        const screenWidth = window.innerWidth;
        const edgeThreshold = Math.min(80, screenWidth * 0.08);

        // Open sidebar when mouse is near the edge
        if (e.clientX > screenWidth - edgeThreshold && !isSidebarOpen) {
          setSidebarOpen(true);
          dispatch({ type: "SIDEBAR_INTERACTION" });
        }

        // Close sidebar when mouse leaves the sidebar area completely
        if (isSidebarOpen) {
          // Calculate sidebar boundaries
          const sidebarWidth = 280; // Match your sidebar width
          const sidebarLeft = screenWidth - sidebarWidth;

          // Check if mouse is outside the sidebar area
          if (e.clientX < sidebarLeft) {
            // Close immediately when cursor leaves sidebar area
            setSidebarOpen(false);
          }
        }
      };

      // Function to handle clicks outside for both desktop and mobile
      const handleClickOutside = (e: MouseEvent) => {
        if (isSidebarOpen && sidebarRef.current) {
          // Check if click is outside the sidebar
          if (!sidebarRef.current.contains(e.target as Node)) {
            setSidebarOpen(false);
          }
        }
      };

      // Function to handle touch events for mobile
      const handleTouchMove = (e: TouchEvent) => {
        if (isSidebarOpen && e.touches.length > 0) {
          const touch = e.touches[0];
          const screenWidth = window.innerWidth;
          const sidebarWidth = 280; // Match your sidebar width

          // Close sidebar if touch is clearly outside the sidebar area
          if (touch.clientX < screenWidth - sidebarWidth - 30) {
            setSidebarOpen(false);
          }
        }
      };

      // Add event listeners
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("touchmove", handleTouchMove);

      // Cleanup
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("touchmove", handleTouchMove);
      };
    }

    // Logic for always-visible mode
    if (state.sidebarMode === "always") {
      setSidebarOpen(true);
    }

    // Manual mode doesn't need any auto-behavior
  }, [state.sidebarMode, isSidebarOpen, dispatch, sidebarRef]);

  // Handle track changes
  const updateProgress = (audio: React.RefObject<HTMLAudioElement>) => {
    if (audio.current) {
      const currentTime = audio.current.currentTime;
      const duration = audio.current.duration;

      if (!isNaN(currentTime) && !isNaN(duration)) {
        dispatch({ type: "SET_PROGRESS", payload: currentTime });
        dispatch({ type: "SET_DURATION", payload: duration });
      }
    }
  };

  const nextTrack = () => {
    dispatch({ type: "NEXT_TRACK" });
  };

  // Toggle sidebar visibility manually
  const toggleSidebar = () => {
    const newSidebarOpen = !isSidebarOpen;

    // Update local state
    setSidebarOpen(newSidebarOpen);

    // Update context state
    dispatch({ type: "SET_SIDEBAR_OPEN", payload: newSidebarOpen });

    // Toggle visibility in global state for HorizontalMusicControls
    dispatch({ type: "TOGGLE_SIDEBAR_VISIBILITY" });

    // If in another mode, switch to manual mode
    if (state.sidebarMode !== "manual") {
      dispatch({ type: "SET_SIDEBAR_MODE", payload: "manual" });
    }

    // Record interactions for analytics
    dispatch({ type: "SIDEBAR_INTERACTION" });
    dispatch({ type: "USER_INTERACTION" });
  };

  // Add this effect after your other useEffects in the MusicPlayer component:
  useEffect(() => {
    const handleImageError = (e: Event) => {
      const img = e.target as HTMLImageElement;
      if (img.tagName === "IMG" && !img.src.includes("default_cover.jpeg")) {
        console.log(`Image failed to load: ${img.src}, using default cover`);
        img.src = DEFAULT_COVER;
      }
    };

    // Add the event listener
    document.addEventListener("error", handleImageError, true);

    // Clean up
    return () => {
      document.removeEventListener("error", handleImageError, true);
    };
  }, []);

  // Add this function in the MusicPlayer component

  // In MusicPlayer.tsx, add a useEffect to listen for the sidebar open state
  useEffect(() => {
    // When the sidebarOpen state changes in the context, update the local state
    if (state.sidebarOpen !== undefined) {
      setSidebarOpen(state.sidebarOpen);
    }
  }, [state.sidebarOpen]);

  return (
    <PlayerSidebarContainer
      $isOpen={isSidebarOpen}
      ref={sidebarRef}
      initial={{ right: "-280px" }}
      animate={{ right: isSidebarOpen ? 0 : "-280px" }}
      transition={{
        duration: ANIMATION_TIMING.sidebar,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      <EnergyParticles />

      <audio
        ref={audioRef}
        src={state.currentTrack?.audioSrc}
        onTimeUpdate={() => updateProgress(audioRef)}
        onEnded={nextTrack}
      />

      <BackgroundVisualizer>
        {state.visualizerActive && <Visualizer />}
      </BackgroundVisualizer>

      <PlayerSidebar
        isOpen={isSidebarOpen}
        toggleOpen={toggleSidebar}
        setSidebarOpen={setSidebarOpen}
        ref={sidebarRef}
      />
    </PlayerSidebarContainer>
  );
};

// Add this new styled component
// Update SidebarModeButton for better positioning on different screen sizes

// Add these styled component definitions before the PlayerSidebar component

// Update the ExtraControls component for better organization
const ExtraControls = styled.div.attrs({
  className: "mp-secondary-controls",
})`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 15px;
  background: rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 1;
  user-select: none;

  @media (max-height: 700px) {
    padding: 15px 10px;
    gap: 10px;
  }
`;

// Update the ControlGroup to only handle volume control
const ControlGroup = styled.div.attrs({
  className: "mp-control-group",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
  padding: 0 2px;
`;

// Update the ToggleButtons to include the sidebar mode button
const ToggleButtons = styled.div.attrs({
  className: "mp-feature-toggles",
})`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;

  /* Add specific styling for sidebar mode button */
  .sidebar-mode-button {
    grid-column: 3; /* Place in last column */
    grid-row: 2; /* Place in second row */
    justify-self: center;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(2, 1fr);

    .sidebar-mode-button {
      grid-column: 2;
      grid-row: 2;
    }
  }
`;
const EqualizerButton = styled(ControlButton).attrs({
  className: "mp-control-button mp-equalizer-button",
})`
  position: relative;

  /* Container for the animated GIF - shown when playing and active */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 15px; /* Smaller exact size that matches the icon */
    height: 15px; /* Smaller exact size that matches the icon */
    transform: translate(-50%, -50%);
    background-image: url("/assets/icons/equalizer_animation.gif");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 1;
    pointer-events: none;
  }

  /* Container for the static PNG - shown when not playing but active */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25px; /* Smaller exact size that matches the icon */
    height: 25px; /* Smaller exact size that matches the icon */
    transform: translate(-50%, -50%);
    background-image: url("/assets/icons/equalizer_green.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 1;
    pointer-events: none;
  }

  /* Show animated GIF when playing and active */
  &.playing.active::before {
    opacity: 1;
  }

  /* Show static PNG when not playing but active */
  &.active:not(.playing)::after {
    opacity: 1;
  }

  /* Hide the static SVG icon when the animation is showing */
  svg {
    position: relative;
    z-index: 0;
    transition: opacity 0.2s ease;
  }

  &.active svg {
    opacity: 0;
  }

  /* Keep hover effect consistent */
  &:hover {
    color: ${(props) =>
      props.style?.color || props.theme?.primary || "#4caf50"};
  }
`;

// Add this new styled component for the enhanced repeat button
const RepeatButton = styled(ControlButton).attrs({
  className: "mp-control-button mp-repeat-button",
})`
  position: relative;
  overflow: visible;

  /* Inner content container for smooth transitions */
  .repeat-icon-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Bottom indicator showing current state */
  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    height: 2px;
    width: 16px;
    background: ${(props) => props.theme.primary || "#4caf50"};
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    border-radius: 2px;
    opacity: 0.9;
  }

  &.active::after {
    transform: translateX(-50%) scaleX(1);
  }

  &.repeat-one::after {
    background: #3f51b5;
    box-shadow: 0 0 4px rgba(63, 81, 181, 0.7);
  }

  &.repeat-all::after {
    background: #4caf50;
    box-shadow: 0 0 4px rgba(76, 175, 80, 0.7);
  }

  /* Badge for repeat-one mode */
  .repeat-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    background: #3f51b5;
    color: white;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    font-size: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px rgba(63, 81, 181, 0.8);
    opacity: 0;
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.2s ease;
  }

  &.repeat-one .repeat-badge {
    opacity: 1;
    transform: scale(1);
  }

  /* Icon animations */
  svg {
    position: absolute;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
    transform: scale(0.7) rotate(-30deg);
  }

  svg.active {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }

  /* Icon colors based on state */
  &.repeat-off svg.repeat-off-icon {
    color: rgba(255, 255, 255, 0.7);
  }

  &.repeat-all svg.repeat-all-icon {
    color: #4caf50;
  }

  &.repeat-one svg.repeat-one-icon {
    color: #3f51b5;
  }

  /* Hover effect */
  &:hover {
    &.repeat-off svg.repeat-off-icon {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

export default SideBarPlayer;
