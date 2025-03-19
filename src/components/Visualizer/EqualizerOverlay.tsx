import React from "react";
import styled from "styled-components";
import Equalizer from "./Equalizer";

interface EqualizerOverlayProps {
  color?: string;
}

const OverlayContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  overflow: hidden;
  pointer-events: none;
`;

const EqualizerOverlay: React.FC<EqualizerOverlayProps> = ({ color }) => {
  return (
    <OverlayContainer>
      <Equalizer dominantColor={color} />
    </OverlayContainer>
  );
};

export default EqualizerOverlay;
