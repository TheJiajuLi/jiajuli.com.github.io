import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.7; }
`;

const LoaderContainer = styled.div.attrs({
  className: "dp-loader",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
`;

const Logo = styled.img.attrs({
  className: "dp-loader-logo",
})`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  animation: ${pulse} 2s infinite ease-in-out;
  margin-bottom: 20px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
`;

const LoadingText = styled.h2.attrs({
  className: "dp-loader-text",
})`
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Logo src="/assets/covers/logo.jpeg" alt="Dreaming Polar Logo" />
      <LoadingText>Listen music like never before...</LoadingText>
    </LoaderContainer>
  );
};

export default Loader;
