import React from "react";
import styled from "styled-components";
import { FiMusic, FiHeart, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

const LibraryPage: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header>
        <Title>Your Library</Title>
      </Header>

      <Sections>
        <Section>
          <SectionHeader>
            <FiHeart size={20} />
            <SectionTitle>Favorites</SectionTitle>
          </SectionHeader>
          <EmptyState>No favorite tracks yet</EmptyState>
        </Section>

        <Section>
          <SectionHeader>
            <FiClock size={20} />
            <SectionTitle>Recently Played</SectionTitle>
          </SectionHeader>
          <EmptyState>No recent tracks</EmptyState>
        </Section>

        <ComingSoonBox>
          <FiMusic size={32} />
          <ComingSoonText>
            More library features coming soon!
            <br />
            Stay tuned for playlists and more.
          </ComingSoonText>
        </ComingSoonBox>
      </Sections>
    </Container>
  );
};

const Container = styled(motion.div)`
  padding: 2rem;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text?.primary};
  font-size: 2rem;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.div`
  background: ${({ theme }) => theme.background?.secondary};
  padding: 1.5rem;
  border-radius: 12px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.text?.primary};
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

const EmptyState = styled.p`
  color: ${({ theme }) => theme.text?.secondary};
  text-align: center;
  padding: 2rem;
`;

const ComingSoonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: ${({ theme }) => theme.background?.secondary};
  border-radius: 12px;
  color: ${({ theme }) => theme.text?.secondary};
`;

const ComingSoonText = styled.p`
  text-align: center;
  line-height: 1.6;
  font-size: 1.1rem;
`;

export default LibraryPage;
