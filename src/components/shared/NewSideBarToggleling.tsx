import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface BottleSwitchProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

const BottleSwitch: React.FC<BottleSwitchProps> = ({ isOpen, onToggle, className }) => {
  return (
    <BottleContainer 
      className={className}
      onClick={onToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <LiquidContainer $isOpen={isOpen}>
        <Liquid 
          animate={{ 
            y: isOpen ? "0%" : "-50%",
            rotate: isOpen ? 0 : -15
          }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        />
      </LiquidContainer>
      <BottleNeck />
      <BottleBody>
        <BottleInner />
      </BottleBody>
    </BottleContainer>
  );
};

const BottleContainer = styled(motion.button)`
  position: relative;
  width: 32px;
  height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LiquidContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 12px;
  width: 20px;
  height: 30px;
  overflow: hidden;
  border-radius: 4px;
  opacity: ${props => props.$isOpen ? 0.8 : 1};
  transition: opacity 0.3s ease;
`;

const Liquid = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
  border-radius: 4px;
`;

const BottleNeck = styled.div`
  width: 12px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px 2px 0 0;
`;

const BottleBody = styled.div`
  width: 24px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

const BottleInner = styled.div`
  position: absolute;
  inset: 1px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

export default BottleSwitch;