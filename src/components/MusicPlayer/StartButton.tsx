import React from "react";
import styled from "styled-components";
import { FaPlayCircle, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";

const ButtonOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  backdrop-filter: blur(10px);
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  
  svg {
    color: ${props => props.theme.primary};
  }
`;

const PlayButton = styled(motion.button)`
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
              0 0 0 15px rgba(56, 142, 60, 0.2);
  
  svg {
    font-size: 3rem;
    margin-bottom: 10px;
  }
`;

const ButtonText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 10px;
`;

const Message = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-top: 30px;
  font-size: 0.9rem;
  max-width: 400px;
  text-align: center;
`;

interface StartButtonProps {
  onStart: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStart }) => {
  const { dispatch } = useMusicContext();

  const handleStart = () => {
    // Play a silent audio to unblock audio context
    const audio = new Audio();
    audio.src =
      "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
    audio
      .play()
      .then(() => {
        onStart();
      })
      .catch((err) => {
        console.error("Failed to establish audio context:", err);
        onStart(); // Continue anyway
      });
  };

  return (
    <ButtonOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Logo>
        <FaMusic /> Music Player
      </Logo>
      
      <PlayButton 
        onClick={handleStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPlayCircle />
        <ButtonText>Start</ButtonText>
      </PlayButton>
      
      <Message>
        Click to enable audio and start exploring your music collection
      </Message>
    </ButtonOverlay>
  );
};

export default StartButton;
