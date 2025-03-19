import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Track } from "../../types/music";
import EqualizerOverlay from "../Visualizer/EqualizerOverlay";
import { useMusicContext } from "../../context/MusicContext";

interface TrackInfoProps {
  track: Track | null;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const AlbumCoverContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const AlbumCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AlbumOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const TrackTitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

const ArtistName = styled(motion.h3)`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme.textSecondary};
  text-align: center;
`;

const AlbumName = styled(motion.p)`
  font-size: 1rem;
  color: ${(props) => props.theme.textSecondary};
  opacity: 0.8;
  text-align: center;
`;

const GenreTag = styled(motion.span)`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  font-size: 0.8rem;
  padding: 3px 10px;
  border-radius: 15px;
  margin-top: 5px;
  text-transform: capitalize;
`;

const TrackInfo: React.FC<TrackInfoProps> = ({ track }) => {
  const { state } = useMusicContext();

  if (!track) {
    return (
      <Container>
        <div>No track selected</div>
      </Container>
    );
  }

  return (
    <Container>
      <AlbumCoverContainer>
        <AlbumCover src={track.coverArt} alt={`${track.album} cover`} />
        <AlbumOverlay />
        {state.equalizerActive && <EqualizerOverlay color={track.color} />}
      </AlbumCoverContainer>

      <InfoContainer>
        <TrackTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {track.title}
        </TrackTitle>

        <ArtistName
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {track.artist}
        </ArtistName>

        <AlbumName
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Album: {track.album}
        </AlbumName>

        <GenreTag
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          {track.genre}
        </GenreTag>
      </InfoContainer>
    </Container>
  );
};

export default TrackInfo;
