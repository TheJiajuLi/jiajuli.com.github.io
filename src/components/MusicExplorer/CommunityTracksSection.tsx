import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../../context/ThemeContext";

const Container = styled.div`
  /* Remove background-color to blend with parent */
  color: ${({ theme }) => theme.text.primary};
  padding: 20px;
`;

const TracksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommunityTracksSection: React.FC = () => {
  const { currentTheme } = useThemeContext();

  return (
    <Container>
      <TracksList>{/* Your content */}</TracksList>
    </Container>
  );
};

export default CommunityTracksSection;
