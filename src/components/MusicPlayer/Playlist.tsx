import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMusicContext } from "../../context/MusicContext";
import { FaPlay, FaPause } from "react-icons/fa";
import { Track } from "../../types/music";
import { motion } from "framer-motion";
import { useColorExtractor } from "../../hooks/useColorExtractor";

const PlaylistContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: ${(props) => props.theme.surfaceLight};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: relative;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
`;

const CategoryFilter = styled.div`
  display: flex;
  margin-bottom: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 10px;
`;

const CategoryButton = styled.button<{ $active?: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  margin-right: 10px;
  background: ${(props) =>
    props.$active ? props.theme.primary : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) =>
    props.$active ? props.theme.buttonText : props.theme.textSecondary};
  font-size: 14px;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${(props) =>
      props.$active ? props.theme.primary : "rgba(255, 255, 255, 0.15)"};
  }
`;

const TrackList = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin: 0 -10px;
  padding: 0 10px;
`;

const TrackItem = styled(motion.div)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 10px;
  background: ${(props) =>
    props.$active ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }
`;

const CoverArt = styled.div<{ $color?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 15px;
  position: relative;
  background: ${(props) => props.$color || props.theme.primary};
  flex-shrink: 0;
`;

const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TrackDetails = styled.div`
  flex: 1;
`;

const TrackTitle = styled.div<{ $active?: boolean }>`
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  color: ${(props) => props.theme.text};
  font-size: 0.95rem;
`;

const TrackInfo = styled.div`
  color: ${(props) => props.theme.textSecondary};
  font-size: 0.85rem;
  margin-top: 5px;
  display: flex;
`;

const TrackArtist = styled.span`
  margin-right: 10px;
`;

const TrackDuration = styled.span`
  color: ${(props) => props.theme.textSecondary};
`;

const PlayButton = styled.button<{ $active?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.$active ? props.theme.primary : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) => (props.$active ? props.theme.buttonText : props.theme.text)};
  margin-left: 10px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: ${(props) =>
      props.$active ? props.theme.primaryHover : props.theme.primary};
    color: ${(props) => props.theme.buttonText};
  }

  svg {
    font-size: 0.9rem;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 12px 15px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.text};
  font-size: 0.95rem;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary}40;
  }

  &::placeholder {
    color: ${(props) => props.theme.textSecondary};
    opacity: 0.7;
  }
`;

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const Playlist: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Generate unique genres from the track list
  const genres = ["all", ...new Set(state.queue.map((track) => track.genre))];

  // Filter tracks by genre and search query
  const filteredTracks = state.queue.filter((track) => {
    const matchesGenre = filter === "all" || track.genre === filter;
    const matchesSearch =
      searchQuery === "" ||
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  // Handle track click
  const handleTrackClick = (track: Track) => {
    if (state.currentTrack?.id === track.id) {
      dispatch({ type: state.isPlaying ? "PAUSE" : "PLAY" });
    } else {
      dispatch({ type: "SET_TRACK", payload: track });

      // Try to play after a short delay
      setTimeout(() => {
        dispatch({ type: "PLAY" });
      }, 100);
    }
  };

  return (
    <PlaylistContainer>
      <Title>Music Explorer</Title>

      <SearchBar
        type="text"
        placeholder="Search tracks, artists..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <CategoryFilter>
        {genres.map((genre) => (
          <CategoryButton
            key={genre}
            $active={filter === genre}
            onClick={() => setFilter(genre)}
          >
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </CategoryButton>
        ))}
      </CategoryFilter>

      <TrackList>
        {filteredTracks.map((track) => (
          <TrackListItem
            key={track.id}
            track={track}
            isActive={state.currentTrack?.id === track.id}
            isPlaying={state.isPlaying && state.currentTrack?.id === track.id}
            onClick={() => handleTrackClick(track)}
          />
        ))}
      </TrackList>
    </PlaylistContainer>
  );
};

// Separate component for track items to optimize rendering
const TrackListItem: React.FC<{
  track: Track;
  isActive: boolean;
  isPlaying: boolean;
  onClick: () => void;
}> = ({ track, isActive, isPlaying, onClick }) => {
  const color = useColorExtractor(track.coverArt);

  return (
    <TrackItem
      $active={isActive}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CoverArt $color={track.color || color}>
        {track.coverArt && <Cover src={track.coverArt} alt={track.title} />}
      </CoverArt>

      <TrackDetails>
        <TrackTitle $active={isActive}>{track.title}</TrackTitle>
        <TrackInfo>
          <TrackArtist>{track.artist}</TrackArtist>
          <TrackDuration>{formatTime(track.duration)}</TrackDuration>
        </TrackInfo>
      </TrackDetails>

      <PlayButton
        $active={isActive}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </PlayButton>
    </TrackItem>
  );
};

export default Playlist;
