import React, { useState, useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUpload,
  FiMusic,
  FiImage,
  FiCheck,
  FiX,
  FiArrowLeft,
  FiSearch,
} from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import { darkTheme } from "../styles/themes";
import {
  GenreType,
  genreColors,
  artistCovers,
  albumCovers,
  coverArt,
  ArtistId,
} from "../data/coverArtData";
import { parseBlob } from "music-metadata-browser";
import { Track } from "../types/music";

// Update the helper functions after the imports
const isArtistId = (id: string): id is ArtistId => {
  return Object.keys(artistCovers).includes(id);
};

const isAlbumId = (id: string): id is string => {
  return Object.keys(albumCovers).includes(id);
};

const isGenreType = (id: string): id is GenreType => {
  return Object.keys(coverArt).includes(id);
};

interface UploadTrack {
  id: string;
  file: File;
  metadata: {
    title: string;
    artist: string;
    album: string;
    genre: GenreType; // Change from string to GenreType
    originalArtist: boolean;
    year?: string;
  };
  coverFile?: File;
  coverPreview?: string;
  coverSelection: string;
  status: "idle" | "processing" | "uploading" | "complete" | "error";
  progress: number;
  error?: string;
}

interface CoverOption {
  id: string;
  name: string;
  src: string;
  type: "artist" | "album" | "genre";
}

const CommunityUpload: React.FC = () => {
  const [tracks, setTracks] = useState<UploadTrack[]>([]);
  const [activeTrackIndex, setActiveTrackIndex] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [coverOptions, setCoverOptions] = useState<CoverOption[]>([]);
  const [showCoverSelector, setShowCoverSelector] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  // Generate cover options from your existing assets
  useEffect(() => {
    const options: CoverOption[] = [];

    // Add artist covers
    Object.entries(artistCovers).forEach(([id, src]) => {
      options.push({
        id: `artist-${id}`,
        name: id
          .replace(/_/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()),
        src,
        type: "artist",
      });
    });

    // Add album covers
    Object.entries(albumCovers).forEach(([id, src]) => {
      options.push({
        id: `album-${id}`,
        name: id
          .replace(/_/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()),
        src,
        type: "album",
      });
    });

    // Add genre covers
    Object.entries(coverArt).forEach(([id, src]) => {
      options.push({
        id: `genre-${id}`,
        name: id.charAt(0).toUpperCase() + id.slice(1),
        src,
        type: "genre",
      });
    });

    setCoverOptions(options);
  }, []);

  // Filter cover options based on search
  const filteredCoverOptions = searchQuery
    ? coverOptions.filter((option) =>
        option.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : coverOptions;

  // Handle file selection
  const handleFileSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const newTracks: UploadTrack[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith("audio/")) continue;

      const track: UploadTrack = {
        id: uuidv4(),
        file,
        metadata: {
          title: file.name.replace(/\.[^/.]+$/, ""),
          artist: "",
          album: "",
          genre: "pop", // Default genre
          originalArtist: false,
        },
        coverSelection: "default",
        status: "idle",
        progress: 0,
      };

      // Try to extract metadata from the file
      try {
        const metadata = await parseBlob(file);
        if (metadata.common) {
          track.metadata.title = metadata.common.title || track.metadata.title;
          track.metadata.artist = metadata.common.artist || "";
          track.metadata.album = metadata.common.album || "";
          track.metadata.year = metadata.common.year?.toString() || "";

          // If picture exists in metadata, use it
          if (metadata.common.picture && metadata.common.picture.length > 0) {
            const picture = metadata.common.picture[0];
            const blob = new Blob([picture.data], { type: picture.format });
            track.coverPreview = URL.createObjectURL(blob);
            track.coverSelection = "custom";
          }
        }
      } catch (error) {
        console.error("Error extracting metadata:", error);
      }

      newTracks.push(track);
    }

    if (newTracks.length > 0) {
      setTracks([...tracks, ...newTracks]);
      setActiveTrackIndex(tracks.length);
    }
  };

  // Handle cover image selection
  const handleCoverSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      !event.target.files ||
      event.target.files.length === 0 ||
      activeTrackIndex === null
    )
      return;

    const file = event.target.files[0];
    if (!file.type.startsWith("image/")) return;

    const coverPreview = URL.createObjectURL(file);

    setTracks((prev) => {
      const updated = [...prev];
      updated[activeTrackIndex] = {
        ...updated[activeTrackIndex],
        coverFile: file,
        coverPreview,
        coverSelection: "custom",
      };
      return updated;
    });
  };

  // Handle selection of a cover from the existing options
  const handleExistingCoverSelect = (option: CoverOption) => {
    if (activeTrackIndex === null) return;

    setTracks((prev) => {
      const updated = [...prev];
      updated[activeTrackIndex] = {
        ...updated[activeTrackIndex],
        coverPreview: option.src,
        coverSelection: option.id as string,
      };
      return updated;
    });

    setShowCoverSelector(false);
  };

  // Update track metadata
  const updateTrackMetadata = (
    index: number,
    field: string,
    value: string | boolean
  ) => {
    setTracks((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        metadata: {
          ...updated[index].metadata,
          [field]: value,
        },
      };
      return updated;
    });
  };

  // Upload tracks to the library
  const handleUpload = async () => {
    if (tracks.length === 0 || uploading) return;

    setUploading(true);

    try {
      for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];

        // Update status to uploading
        setTracks((prev) => {
          const updated = [...prev];
          updated[i] = { ...updated[i], status: "uploading", progress: 10 };
          return updated;
        });

        // Simulate file processing
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Update progress
        setTracks((prev) => {
          const updated = [...prev];
          updated[i] = { ...updated[i], progress: 30 };
          return updated;
        });

        // Generate a unique filename for the audio file
        const fileExt = track.file.name.split(".").pop() || "mp3";
        const audioFilename = `${track.id}.${fileExt}`;
        const audioPath = `/assets/musics/single_tracks/${audioFilename}`;

        // Determine cover path
        let coverPath = "";
        if (track.coverSelection === "custom" && track.coverPreview) {
          coverPath = `/assets/covers/user_uploads/${track.id}.jpg`;
        } else if (track.coverSelection.startsWith("artist-")) {
          const rawId = track.coverSelection.replace("artist-", "") as string;
          if (isArtistId(rawId)) {
            coverPath = artistCovers[rawId]; // Now TypeScript knows rawId is ArtistId
          } else {
            console.warn(`Invalid artist ID: ${rawId}`);
            coverPath = "/assets/covers/default.jpg";
          }
        } else if (track.coverSelection.startsWith("album-")) {
          const rawId = track.coverSelection.replace("album-", "") as string;
          if (isAlbumId(rawId)) {
            coverPath = albumCovers[rawId];
          } else {
            console.warn(`Invalid album ID: ${rawId}`);
            coverPath = "/assets/covers/default.jpg";
          }
        } else if (track.coverSelection.startsWith("genre-")) {
          const rawId = track.coverSelection.replace("genre-", "") as string;
          if (isGenreType(rawId)) {
            coverPath = coverArt[rawId]; // Now TypeScript knows rawId is GenreType
          } else {
            console.warn(`Invalid genre type: ${rawId}`);
            coverPath = "/assets/covers/default.jpg";
          }
        } else {
          coverPath = "/assets/covers/default.jpg";
        }

        // Update progress
        setTracks((prev) => {
          const updated = [...prev];
          updated[i] = { ...updated[i], progress: 60 };
          return updated;
        });

        // Create track data to add to the music library
        const newTrackData: Track = {
          id: track.id,
          title: track.metadata.title,
          artist: track.metadata.artist,
          album: track.metadata.album,
          genre: track.metadata.genre,
          coverArt: coverPath,
          audioSrc: audioPath,
          duration: 0, // Would be extracted from the audio file
          color: genreColors[track.metadata.genre] || "#555555",
        };

        // In a real implementation, you would:
        // 1. Upload the audio file to your server
        // 2. Upload the cover image if it's custom
        // 3. Save the track metadata to your database

        // For now, we'll simulate success and update the status
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Update status to complete
        setTracks((prev) => {
          const updated = [...prev];
          updated[i] = { ...updated[i], status: "complete", progress: 100 };
          return updated;
        });

        // Add the track to the music library
        // In a real implementation, this would be done server-side
        // For now, we'll just simulate adding it to the local library
        const addEvent = new CustomEvent("community-track-added", {
          detail: newTrackData,
        });
        window.dispatchEvent(addEvent);
      }
    } catch (error) {
      console.error("Upload error:", error);

      // Set error status for any remaining tracks
      setTracks((prev) =>
        prev.map((track) =>
          track.status === "uploading"
            ? { ...track, status: "error", error: "Upload failed" }
            : track
        )
      );
    } finally {
      setUploading(false);
    }
  };

  // Remove a track from the queue
  const removeTrack = (index: number) => {
    setTracks((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });

    if (activeTrackIndex === index) {
      setActiveTrackIndex(null);
    } else if (activeTrackIndex !== null && activeTrackIndex > index) {
      setActiveTrackIndex(activeTrackIndex - 1);
    }
  };

  // Return to the main app
  const handleReturn = () => {
    window.close();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header>
          <BackButton onClick={handleReturn}>
            <FiArrowLeft size={24} />
            <span>Return to App</span>
          </BackButton>
          <Title>Upload Your Music to the Community</Title>
        </Header>

        <Content>
          <Sidebar>
            <UploadSection>
              <UploadButton onClick={() => fileInputRef.current?.click()}>
                <FiUpload size={24} />
                <span>Select Audio Files</span>
              </UploadButton>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                multiple
                onChange={(e) => handleFileSelect(e.target.files)}
                style={{ display: "none" }}
                aria-label="Upload audio files"
              />

              <TrackCount>{tracks.length} tracks selected</TrackCount>

              {tracks.length > 0 && (
                <ActionButton onClick={handleUpload} disabled={uploading}>
                  <FiMusic size={20} />
                  <span>
                    {uploading ? "Uploading..." : "Upload All Tracks"}
                  </span>
                </ActionButton>
              )}
            </UploadSection>

            <TrackList>
              {tracks.map((track, index) => (
                <TrackItem
                  key={track.id}
                  isActive={activeTrackIndex === index}
                  onClick={() => setActiveTrackIndex(index)}
                >
                  <TrackInfo>
                    <TrackTitle>{track.metadata.title}</TrackTitle>
                    <TrackArtist>
                      {track.metadata.artist || "Unknown Artist"}
                    </TrackArtist>
                  </TrackInfo>

                  <TrackActions>
                    {track.status === "complete" ? (
                      <StatusIcon>
                        <FiCheck size={18} color="#4CAF50" />
                      </StatusIcon>
                    ) : track.status === "error" ? (
                      <StatusIcon>
                        <FiX size={18} color="#F44336" />
                      </StatusIcon>
                    ) : track.status === "uploading" ? (
                      <ProgressCircle progress={track.progress} />
                    ) : (
                      <RemoveButton
                        onClick={(e) => {
                          e.stopPropagation();
                          removeTrack(index);
                        }}
                      >
                        <FiX size={18} />
                      </RemoveButton>
                    )}
                  </TrackActions>
                </TrackItem>
              ))}
            </TrackList>
          </Sidebar>

          <EditorPanel>
            {activeTrackIndex !== null && tracks[activeTrackIndex] ? (
              <TrackEditor>
                <EditorHeader>
                  <h2>Edit Track Information</h2>
                </EditorHeader>

                <CoverSection>
                  <CoverPreview
                    onClick={() => setShowCoverSelector(true)}
                    coverUrl={tracks[activeTrackIndex].coverPreview}
                  >
                    {!tracks[activeTrackIndex].coverPreview && (
                      <FiMusic size={48} />
                    )}
                  </CoverPreview>

                  <CoverButtons>
                    <CoverButton onClick={() => setShowCoverSelector(true)}>
                      <FiSearch size={18} />
                      <span>Browse Library Covers</span>
                    </CoverButton>

                    <CoverButton onClick={() => coverInputRef.current?.click()}>
                      <FiImage size={18} />
                      <span>Upload Cover</span>
                    </CoverButton>

                    <input
                      ref={coverInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleCoverSelect}
                      style={{ display: "none" }}
                      aria-label="Upload cover image"
                    />
                  </CoverButtons>
                </CoverSection>

                <FormGroup>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={tracks[activeTrackIndex].metadata.title}
                    onChange={(e) =>
                      updateTrackMetadata(
                        activeTrackIndex,
                        "title",
                        e.target.value
                      )
                    }
                    placeholder="Track Title"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="artist">Artist</Label>
                  <Input
                    id="artist"
                    value={tracks[activeTrackIndex].metadata.artist}
                    onChange={(e) =>
                      updateTrackMetadata(
                        activeTrackIndex,
                        "artist",
                        e.target.value
                      )
                    }
                    placeholder="Artist Name"
                  />
                </FormGroup>

                <FormGroup>
                  <Checkbox
                    checked={tracks[activeTrackIndex].metadata.originalArtist}
                    onChange={(e) =>
                      updateTrackMetadata(
                        activeTrackIndex,
                        "originalArtist",
                        e.target.checked
                      )
                    }
                    id="originalArtist"
                  />
                  <Label htmlFor="originalArtist">
                    I am the original artist of this track
                  </Label>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="album">Album</Label>
                  <Input
                    id="album"
                    value={tracks[activeTrackIndex].metadata.album}
                    onChange={(e) =>
                      updateTrackMetadata(
                        activeTrackIndex,
                        "album",
                        e.target.value
                      )
                    }
                    placeholder="Album Name"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="genre" id="genre-label">
                    Genre
                  </Label>
                  <Select
                    id="genre"
                    value={tracks[activeTrackIndex].metadata.genre}
                    onChange={(e) =>
                      updateTrackMetadata(
                        activeTrackIndex,
                        "genre",
                        e.target.value as GenreType
                      )
                    }
                    aria-labelledby="genre-label"
                    aria-label="Select music genre"
                  >
                    <option value="classical">Classical</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="electronic">Electronic</option>
                    <option value="jazz">Jazz</option>
                    <option value="ambient">Ambient</option>
                    <option value="soundtrack">Soundtrack</option>
                    <option value="hiphop">Hip-hop</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="year">Year (Optional)</Label>
                  <Input
                    id="year"
                    value={tracks[activeTrackIndex].metadata.year || ""}
                    onChange={(e) =>
                      updateTrackMetadata(
                        activeTrackIndex,
                        "year",
                        e.target.value
                      )
                    }
                    placeholder="Release Year"
                  />
                </FormGroup>
              </TrackEditor>
            ) : (
              <EmptyState>
                <FiMusic size={64} opacity={0.3} />
                <EmptyStateText>
                  {tracks.length === 0
                    ? "Select audio files to begin uploading music to the community"
                    : "Select a track from the list to edit its details"}
                </EmptyStateText>
              </EmptyState>
            )}
          </EditorPanel>
        </Content>

        <AnimatePresence>
          {showCoverSelector && (
            <CoverSelector
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <CoverSelectorHeader>
                <h3>Select Cover Art</h3>
                <CloseButton onClick={() => setShowCoverSelector(false)}>
                  <FiX size={24} />
                </CloseButton>
              </CoverSelectorHeader>

              <SearchBar>
                <SearchIcon>
                  <FiSearch size={18} />
                </SearchIcon>
                <SearchInput
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search covers..."
                />
              </SearchBar>

              <CoverGrid>
                {filteredCoverOptions.map((option) => (
                  <CoverGridItem
                    key={option.id}
                    onClick={() => handleExistingCoverSelect(option)}
                  >
                    <CoverImage src={option.src} alt={option.name} />
                    <CoverName>{option.name}</CoverName>
                    <CoverType>{option.type}</CoverType>
                  </CoverGridItem>
                ))}
              </CoverGrid>
            </CoverSelector>
          )}
        </AnimatePresence>
      </Container>
    </ThemeProvider>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.primary};
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.border.subtle};
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0 0 0 20px;
  font-weight: 600;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.secondary};
  border-right: 1px solid ${({ theme }) => theme.border.subtle};
`;

const UploadSection = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.border.subtle};
`;

const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  background-color: ${({ theme }) => theme.ui.accent};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.ui.accentDark};
  }
`;

const ActionButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  background-color: ${({ theme }) => theme.ui.secondary};
  color: ${({ theme }) => theme.text.primary};
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.ui.secondaryHover};
  }
`;

const TrackCount = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text.secondary};
  margin-top: 8px;
`;

const TrackList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px;
`;

const TrackItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 8px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.background.highlight : "transparent"};

  &:hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.background.highlight : theme.background.hover};
  }
`;

const TrackInfo = styled.div`
  overflow: hidden;
`;

const TrackTitle = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackArtist = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TrackActions = styled.div`
  display: flex;
  align-items: center;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.ui.danger};
  }
`;

const StatusIcon = styled.div`
  padding: 4px;
`;

const ProgressCircle = styled.div<{ progress: number }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: conic-gradient(
    ${({ theme }) => theme.ui.accent} ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    background: ${({ theme }) => theme.background.secondary};
    border-radius: 50%;
  }
`;

const EditorPanel = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const TrackEditor = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const EditorHeader = styled.div`
  margin-bottom: 24px;

  h2 {
    font-size: 22px;
    font-weight: 500;
  }
`;

const CoverSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const CoverPreview = styled.div<{ coverUrl?: string }>`
  width: 200px;
  height: 200px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.background.secondary};
  background-image: ${({ coverUrl }) =>
    coverUrl ? `url(${coverUrl})` : "none"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.border.subtle};

  &:hover {
    opacity: 0.9;
  }
`;

const CoverButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const CoverButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.background.secondary};
  color: ${({ theme }) => theme.text.primary};
  border: 1px solid ${({ theme }) => theme.border.subtle};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.background.hover};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<{ htmlFor: string }>`
  font-weight: 500;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.subtle};
  color: ${({ theme }) => theme.text.primary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.ui.accent};
  }
`;

const Select = styled.select`
  padding: 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.subtle};
  color: ${({ theme }) => theme.text.primary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.ui.accent};
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
`;

const EmptyStateText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text.secondary};
  max-width: 400px;
  margin-top: 16px;
`;

const CoverSelector = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 900px;
  max-height: 80vh;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
`;

const CoverSelectorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.border.subtle};

  h3 {
    font-size: 18px;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SearchBar = styled.div`
  padding: 16px 20px;
  position: relative;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.text.secondary};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.border.subtle};
  color: ${({ theme }) => theme.text.primary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.ui.accent};
  }
`;

const CoverGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
  padding: 20px;
  overflow-y: auto;
  max-height: 500px;
`;

const CoverGridItem = styled.div`
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
`;

const CoverName = styled.div`
  font-size: 14px;
  margin-top: 8px;
  font-weight: 500;
`;

const CoverType = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text.secondary};
`;

export default CommunityUpload;
