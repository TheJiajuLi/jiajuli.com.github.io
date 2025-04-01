import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const SearchPage: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header>
        <SearchIcon size={24} />
        <Title>Search</Title>
      </Header>

      <SearchInput
        type="text"
        placeholder="Search for songs, artists, or albums..."
        disabled
      />

      <ComingSoonBox>
        <ComingSoonText>
          🎵 Search functionality coming soon!
          <br />
          You'll be able to discover new music here.
        </ComingSoonText>
      </ComingSoonBox>
    </Container>
  );
};

const Container = styled(motion.div)`
  padding: 2rem;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SearchIcon = styled(FiSearch)`
  color: ${({ theme }) => theme.text?.primary};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text?.primary};
  font-size: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border?.subtle};
  background: ${({ theme }) => theme.background?.secondary};
  color: ${({ theme }) => theme.text?.primary};
  font-size: 1rem;
  margin-bottom: 2rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ComingSoonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.background?.secondary};
  border-radius: 12px;
  margin-top: 2rem;
`;

const ComingSoonText = styled.p`
  color: ${({ theme }) => theme.text?.secondary};
  text-align: center;
  line-height: 1.6;
  font-size: 1.1rem;
`;

export default SearchPage;
