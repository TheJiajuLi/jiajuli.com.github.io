import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useLayoutEffect,
} from "react";
import styled, { keyframes, css } from "styled-components";
import { motion, AnimatePresence, m } from "framer-motion";
import { useMusicContext } from "../../context/MusicContext";
import CustomScrollbar from "../shared/CustomScrollbar";
import { Track } from "../../types/music";
import { getSafeCoverArt } from "../../utils/imageUtils";
import { FaSortAlphaDown, FaPause, FaPlay } from "react-icons/fa";
import { useLayout } from "../../context/LayoutContext";
import toggleIcon from "/assets/icons/toggle_button.png";
import { FiZoomIn, FiZoomOut } from "react-icons/fi"; // Add these to your imports

interface TrackStats {
  plays: number;
  lastPlayed: Date | null;
  favorite: boolean;
}

interface TrackItemProps {
  track: Track;
  stats: TrackStats | undefined;
  isActive: boolean;
  onClick: () => void;
  onExpand: () => void;
  onToggleFavorite: (trackId: string) => void; // Add this
  onTogglePlay: () => void; // Add this prop
}

// Add these new interfaces for better organization
interface AlbumData {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  tracks: Track[];
}

// Update the SortOptions interface
interface SortOptions {
  field: "title" | "artist" | "album" | "plays" | "lastPlayed" | "favorites";
  direction: "asc" | "desc";
}

interface FilterOptions {
  search: string;
  favorites: boolean;
  minPlays: number;
}

const MusicExplorer: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const { dispatch: layoutDispatch } = useLayout();
  const [isExpanded, setIsExpanded] = useState(true);
  const [trackStats, setTrackStats] = useState<Record<string, TrackStats>>({});
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    field: "title",
    direction: "asc",
  });
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    search: "",
    favorites: false,
    minPlays: 0,
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSortPanel, setShowSortPanel] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  // Add state variables to the MusicExplorer component
  // New state variables for album view
  const [viewMode, setViewMode] = useState<"albums" | "tracks">("albums");
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumData | null>(null);
  const [albumSize, setAlbumSize] = useState(120); // Default album size in pixels
  const minAlbumSize = 80;
  const maxAlbumSize = 180;

  // Add refs for element references
  const explorerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Track statistics management
  useEffect(() => {
    const loadTrackStats = async () => {
      try {
        setIsLoading(true);
        const savedStats = localStorage.getItem("trackStats");
        if (savedStats) {
          const parsed = JSON.parse(savedStats);
          setTrackStats(parsed);
        }
      } catch (error) {
        console.error("Failed to load track stats:", error);
        setTrackStats({});
        setError("Failed to load track statistics");
      } finally {
        setIsLoading(false);
      }
    };

    loadTrackStats();
  }, []);

  const updateTrackStats = (trackId: string) => {
    try {
      const newStats = {
        ...trackStats,
        [trackId]: {
          plays: (trackStats[trackId]?.plays || 0) + 1,
          lastPlayed: new Date(),
          favorite: trackStats[trackId]?.favorite || false,
        },
      };
      setTrackStats(newStats);
      localStorage.setItem("trackStats", JSON.stringify(newStats));
    } catch (error) {
      console.error("Failed to update track stats:", error);
    }
  };

  const toggleFavorite = (trackId: string) => {
    const newStats = {
      ...trackStats,
      [trackId]: {
        ...trackStats[trackId],
        favorite: !trackStats[trackId]?.favorite,
        lastPlayed: trackStats[trackId]?.lastPlayed || null,
        plays: trackStats[trackId]?.plays || 0,
      },
    };
    setTrackStats(newStats);

    try {
      localStorage.setItem("trackStats", JSON.stringify(newStats));
    } catch (error) {
      console.error("Failed to save favorites:", error);
    }
  };

  // Update the sortTracks function
  const sortTracksFunc = (tracks: Track[]) => {
    return [...tracks].sort((a, b) => {
      const stats1 = trackStats[a.id];
      const stats2 = trackStats[b.id];

      switch (sortOptions.field) {
        case "title":
          return sortOptions.direction === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        case "artist":
          return sortOptions.direction === "asc"
            ? a.artist.localeCompare(b.artist)
            : b.artist.localeCompare(a.artist);
        case "album":
          return sortOptions.direction === "asc"
            ? a.album.localeCompare(b.album)
            : b.album.localeCompare(a.album);
        case "plays":
          return sortOptions.direction === "asc"
            ? (stats1?.plays || 0) - (stats2?.plays || 0)
            : (stats2?.plays || 0) - (stats1?.plays || 0);
        case "lastPlayed":
          const date1 = stats1?.lastPlayed
            ? new Date(stats1.lastPlayed).getTime()
            : 0;
          const date2 = stats2?.lastPlayed
            ? new Date(stats2.lastPlayed).getTime()
            : 0;
          return sortOptions.direction === "asc"
            ? date1 - date2
            : date2 - date1;
        case "favorites":
          const fav1 = stats1?.favorite || false;
          const fav2 = stats2?.favorite || false;
          return sortOptions.direction === "asc"
            ? Number(fav1) - Number(fav2)
            : Number(fav2) - Number(fav1);
        default:
          return 0;
      }
    });
  };

  const filterTracks = (tracks: Track[]) => {
    return tracks.filter((track) => {
      const stats = trackStats[track.id];
      const searchLower = filterOptions.search.toLowerCase();

      const matchesSearch =
        searchLower === "" ||
        track.title.toLowerCase().includes(searchLower) ||
        track.artist.toLowerCase().includes(searchLower);

      const matchesFavorites = !filterOptions.favorites || stats?.favorite;
      const matchesPlays = (stats?.plays || 0) >= filterOptions.minPlays;

      return matchesSearch && matchesFavorites && matchesPlays;
    });
  };

  useEffect(() => {
    layoutDispatch({
      type: "SET_EXPLORER_WIDTH",
      payload: isExpanded ? 350 : 60,
    });
  }, [isExpanded, layoutDispatch]);

  // Handle explorer collapse/expand
  const handleExplorerToggle = () => {
    const willCollapse = isExpanded;
    setIsExpanded(!isExpanded);
    setIsOpen(!willCollapse); // Update isOpen state
    layoutDispatch({ type: "TOGGLE_EXPLORER" });

    // Reset all expanded states when collapsing
    if (willCollapse) {
      // Always return to album view when collapsing
      setViewMode("albums");
      setSelectedAlbum(null);

      // Reset filter states
      setShowFilters(false);
      setFilterOptions({
        search: "",
        favorites: false,
        minPlays: 0,
      });
      setSortOptions({
        field: "title",
        direction: "asc",
      });
      // Close sorting panel
      setShowSortPanel(false);
    }
  };

  // Add useEffect for keyboard shortcuts
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "f" && isExpanded) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [isExpanded]);

  // Add scroll restoration
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("explorerScrollPosition");
    if (savedScroll && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = parseInt(savedScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        sessionStorage.setItem(
          "explorerScrollPosition",
          scrollContainerRef.current.scrollTop.toString()
        );
      }
    };
  }, []);

  // Also add an effect to auto-collapse panels on width change
  useEffect(() => {
    if (!isExpanded) {
      setShowFilters(false);
      setShowSortPanel(false);
    }
  }, [isExpanded]);

  // Update the sortOptionsList array
  const sortOptionsList = [
    { value: "title", label: "Title" },
    { value: "artist", label: "Artist" },
    { value: "album", label: "Album" },
    { value: "plays", label: "Plays" },
    { value: "lastPlayed", label: "Last Played" },
    { value: "favorites", label: "Favorites" },
  ];

  // Create a ref to track previous values
  const prevTracksRef = useRef<Track[]>([]);

  // Fix the effect that's causing infinite updates
  useEffect(() => {
    // Get the current filtered and sorted tracks
    const currentTracks = sortTracksFunc(filterTracks(state.queue));

    // Don't update if there's no difference or tracks are empty
    if (!currentTracks || currentTracks.length === 0) return;

    // Compare current tracks with previous tracks deeply
    const tracksChanged =
      JSON.stringify(prevTracksRef.current) !== JSON.stringify(currentTracks);

    if (tracksChanged) {
      // Update the ref with current tracks
      prevTracksRef.current = [...currentTracks];

      // Dispatch only when tracks have changed
      dispatch({
        type: "SET_ACTIVE_CONTEXT",
        payload: {
          id: "explorer",
          type: "explorer",
          tracks: currentTracks,
          name: "Music Explorer",
          viewConfig: {
            sortBy: sortOptions.field,
            isAscending: sortOptions.direction === "asc",
            filterBy: filterOptions.search,
          },
        },
      });
    }
  }, [state.queue, sortOptions, filterOptions]); // Simplified dependency array

  // Group tracks by album for the album view
  const albums = useMemo(() => {
    const albumMap = new Map<string, AlbumData>();

    state.queue.forEach((track) => {
      const albumId = `${track.album}-${track.artist}`;

      if (!albumMap.has(albumId)) {
        albumMap.set(albumId, {
          id: albumId,
          title: track.album,
          artist: track.artist,
          coverArt: track.coverArt,
          tracks: [track],
        });
      } else {
        albumMap.get(albumId)?.tracks.push(track);
      }
    });

    return Array.from(albumMap.values());
  }, [state.queue]);

  // Sort albums based on the same sort options
  const sortAlbums = useMemo(() => {
    return [...albums].sort((a, b) => {
      switch (sortOptions.field) {
        case "title":
          return sortOptions.direction === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        case "artist":
          return sortOptions.direction === "asc"
            ? a.artist.localeCompare(b.artist)
            : b.artist.localeCompare(a.artist);
        default:
          return 0;
      }
    });
  }, [albums, sortOptions]);

  // Filter albums based on search criteria
  const filterAlbums = useMemo(() => {
    return sortAlbums.filter((album) => {
      const searchLower = filterOptions.search.toLowerCase();

      return (
        searchLower === "" ||
        album.title.toLowerCase().includes(searchLower) ||
        album.artist.toLowerCase().includes(searchLower)
      );
    });
  }, [sortAlbums, filterOptions.search]);

  // Handle album selection
  const handleAlbumClick = (album: AlbumData) => {
    if (!isExpanded) {
      // If explorer is collapsed, expand it first
      setIsExpanded(true);
      layoutDispatch({ type: "TOGGLE_EXPLORER" });
      // Use timeout to ensure smooth transition
      setTimeout(() => {
        setSelectedAlbum(album);
        setViewMode("tracks");
      }, 300);
    } else {
      // If already expanded, just switch to track view
      setSelectedAlbum(album);
      setViewMode("tracks");
    }
  };

  // Handle back button click to return to album view
  const handleBackToAlbums = () => {
    setViewMode("albums");
    setSelectedAlbum(null);
  };

  // Add this function to your component
  const adjustAlbumSize = (increment: boolean) => {
    setAlbumSize((prev) => {
      const newSize = increment ? prev + 20 : prev - 20;
      return Math.max(minAlbumSize, Math.min(maxAlbumSize, newSize));
    });
  };

  // Modify the existing content rendering based on view mode
  const renderContent = () => {
    if (isLoading) {
      return (
        <LoadingContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <LoadingSpinner />
          <span>Loading music library...</span>
        </LoadingContainer>
      );
    }

    if (viewMode === "albums") {
      return (
        <AlbumGrid
          $isExpanded={isExpanded}
          style={{
            gridTemplateColumns: isExpanded
              ? `repeat(auto-fill, minmax(${albumSize}px, 1fr))`
              : "1fr",
          }}
        >
          {filterAlbums.map((album) => (
            <AlbumItem
              key={album.id}
              onClick={() => handleAlbumClick(album)}
              $isExpanded={isExpanded}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8,
              }}
            >
              <AlbumCover
                $isExpanded={isExpanded}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={getSafeCoverArt(album.coverArt)}
                  alt={`${album.title} cover`}
                  loading="lazy"
                  draggable={false}
                />
              </AlbumCover>

              {isExpanded && (
                <AlbumInfo>
                  <AlbumTitle>{album.title}</AlbumTitle>
                  <AlbumArtist>{album.artist}</AlbumArtist>
                  <TrackCount>{album.tracks.length} tracks</TrackCount>
                </AlbumInfo>
              )}
            </AlbumItem>
          ))}
        </AlbumGrid>
      );
    } else if (viewMode === "tracks" && selectedAlbum) {
      return (
        <>
          <BackButton
            onClick={handleBackToAlbums}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Albums
          </BackButton>

          <AlbumHeader>
            <AlbumHeaderCover>
              <img
                src={getSafeCoverArt(selectedAlbum.coverArt)}
                alt={`${selectedAlbum.title} cover`}
                draggable={false}
              />
            </AlbumHeaderCover>
            <AlbumHeaderInfo>
              <AlbumHeaderTitle>{selectedAlbum.title}</AlbumHeaderTitle>
              <AlbumHeaderArtist>{selectedAlbum.artist}</AlbumHeaderArtist>
              <AlbumHeaderDetails>
                {selectedAlbum.tracks.length} tracks
              </AlbumHeaderDetails>
            </AlbumHeaderInfo>
          </AlbumHeader>

          <TrackList $isExpanded={isExpanded}>
            {sortTracksFunc(selectedAlbum.tracks).map((track) => (
              <TrackItem
                key={track.id}
                track={track}
                stats={trackStats[track.id]}
                isActive={state.currentTrack?.id === track.id}
                onClick={() => {
                  dispatch({ type: "SET_TRACK", payload: track });
                  dispatch({ type: "PLAY" });
                  updateTrackStats(track.id);
                }}
                onExpand={() => {
                  setIsExpanded(true);
                  layoutDispatch({ type: "TOGGLE_EXPLORER" });
                }}
                onToggleFavorite={toggleFavorite}
                onTogglePlay={() => {
                  dispatch(
                    state.isPlaying ? { type: "PAUSE" } : { type: "PLAY" }
                  );
                }}
              />
            ))}
          </TrackList>
        </>
      );
    }

    return null;
  };

  // Helper function to sort tracks from the selected album

  // Add animation effect when sort panel is toggled
  useEffect(() => {
    // Add a subtle animation to the sorting button when panel is opened
    if (showSortPanel) {
      const btn = document.querySelector("[data-sort-button]");
      if (btn) {
        btn.animate(
          [
            { transform: "scale(1)", offset: 0 },
            { transform: "scale(1.15)", offset: 0.5 },
            { transform: "scale(1)", offset: 1 },
          ],
          {
            duration: 400,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }
        );
      }
    }
  }, [showSortPanel]);

  // Update the return JSX to use the renderContent function
  return (
    <ExplorerContainer
      ref={explorerRef}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      $isExpanded={isExpanded}
    >
      {/* Add the visualizer as the first element to ensure it's behind other content */}
      <AlbumArtColorVisualizer />

      <Header $isExpanded={isExpanded}>
        <Title
          $isExpanded={isExpanded}
          animate={{
            scale: isExpanded ? 1 : 0.9,
          }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded
            ? viewMode === "albums"
              ? "Music Explorer"
              : selectedAlbum?.title || "Tracks"
            : "DP"}
          <TitleIcon src={toggleIcon} alt="Music Explorer" $isOpen={isOpen} />
        </Title>

        <HeaderControls>
          {/* Show album size controls only when expanded and in album view */}
          {isExpanded && viewMode === "albums" && (
            <CompactSizeControls
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AlbumSizeButton
                onClick={() => adjustAlbumSize(false)}
                disabled={albumSize <= minAlbumSize}
                title="Smaller album tiles"
                whileTap={{ scale: 0.9 }}
                style={{ width: "28px", height: "28px" }}
              >
                <FiZoomOut size={14} />
              </AlbumSizeButton>

              <AlbumSizeSlider style={{ width: "60px", height: "4px" }}>
                <AlbumSizeProgress
                  $progress={
                    (albumSize - minAlbumSize) / (maxAlbumSize - minAlbumSize)
                  }
                />
              </AlbumSizeSlider>

              <AlbumSizeButton
                onClick={() => adjustAlbumSize(true)}
                disabled={albumSize >= maxAlbumSize}
                title="Larger album tiles"
                whileTap={{ scale: 0.9 }}
                style={{ width: "28px", height: "28px" }}
              >
                <FiZoomIn size={14} />
              </AlbumSizeButton>
            </CompactSizeControls>
          )}

          <ExpandButton
            onClick={handleExplorerToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isExpanded ? "Collapse explorer" : "Expand explorer"}
          >
            {isExpanded ? "−" : "+"}
          </ExpandButton>
        </HeaderControls>
      </Header>

      {error && (
        <ErrorMessage>
          {error}
          <RetryButton onClick={() => window.location.reload()}>
            Retry
          </RetryButton>
        </ErrorMessage>
      )}

      {!error && isExpanded && (
        <AnimatePresence>
          <Controls>
            <SearchInput
              ref={searchInputRef}
              value={filterOptions.search}
              onChange={(e) =>
                setFilterOptions((prev) => ({
                  ...prev,
                  search: e.target.value,
                }))
              }
              placeholder={
                viewMode === "albums" ? "Search albums..." : "Search tracks..."
              }
            />

            <ControlButtons>
              <IconButtonWithTooltip
                onClick={() => setShowSortPanel(!showSortPanel)}
                $active={showSortPanel}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-sort-button
              >
                <CategoryIconWrapper $active={showSortPanel}>
                  <img
                    src="public/assets/icons/categories.png"
                    alt="Sort options"
                    width="16"
                    height="16"
                    style={{ objectFit: "contain" }}
                  />
                </CategoryIconWrapper>
              </IconButtonWithTooltip>

              {viewMode === "tracks" && (
                <IconButtonWithTooltip
                  onClick={handleBackToAlbums}
                  $active={false}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>←</span>
                  {/* Removed the Tooltip element here */}
                </IconButtonWithTooltip>
              )}
            </ControlButtons>
          </Controls>
        </AnimatePresence>
      )}

      <AnimatePresence>
        {showSortPanel && (
          <SortingSection
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SortOptionList>
              {sortOptionsList.map((option) => (
                <SortOptionItem
                  key={option.value}
                  $isActive={sortOptions.field === option.value}
                  onClick={() => {
                    if (sortOptions.field === option.value) {
                      setSortOptions((prev) => ({
                        ...prev,
                        direction: prev.direction === "asc" ? "desc" : "asc",
                      }));
                    } else {
                      setSortOptions({
                        field: option.value as SortOptions["field"],
                        direction: "asc",
                      });
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{option.label}</span>
                  {sortOptions.field === option.value && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {sortOptions.direction === "asc" ? "↑" : "↓"}
                    </motion.span>
                  )}
                </SortOptionItem>
              ))}
            </SortOptionList>
          </SortingSection>
        )}
      </AnimatePresence>

      <ContentContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <CustomScrollbar ref={scrollContainerRef}>
          {renderContent()}
        </CustomScrollbar>
      </ContentContainer>
      <AlbumArtColorVisualizer />
    </ExplorerContainer>
  );
};

// First, fix the duplicate declarations by merging the two TrackItem implementations
const TrackItem: React.FC<TrackItemProps> = ({
  track,
  stats,
  isActive,
  onClick,
  onExpand,
  onToggleFavorite,
  onTogglePlay,
}) => {
  // Add states for animation control
  const [isHovered, setIsHovered] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [isPulseAnimating, setIsPulseAnimating] = useState(false);
  const { state: layoutState } = useLayout();
  const { state: musicState } = useMusicContext();
  const isExpanded = layoutState.explorerVisible;
  const favoriteButtonRef = useRef<HTMLButtonElement>(null);

  // Enhanced favorite toggle handler with haptic feedback
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Apply visual feedback
    if (!stats?.favorite) {
      // Adding to favorites - explosion effect
      setShowExplosion(true);
      setIsPulseAnimating(true);

      // Create haptic feedback if supported
      if (navigator.vibrate) {
        navigator.vibrate([15, 10, 30]);
      }

      // Play micro-animation to indicate success
      if (favoriteButtonRef.current) {
        favoriteButtonRef.current.animate(
          [
            { transform: "scale(1)", offset: 0 },
            { transform: "scale(1.5)", offset: 0.3 },
            { transform: "scale(0.8)", offset: 0.6 },
            { transform: "scale(1.2)", offset: 0.8 },
            { transform: "scale(1)", offset: 1 },
          ],
          {
            duration: 600,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }
        );
      }

      // Reset states after animation completes
      setTimeout(() => {
        setShowExplosion(false);
        setIsPulseAnimating(false);
      }, 1000);
    } else {
      // Removing from favorites - subtle animation
      if (favoriteButtonRef.current) {
        favoriteButtonRef.current.animate(
          [
            { transform: "scale(1)", opacity: 1, offset: 0 },
            { transform: "scale(0.8)", opacity: 0.5, offset: 0.5 },
            { transform: "scale(1)", opacity: 1, offset: 1 },
          ],
          {
            duration: 300,
            easing: "ease-out",
          }
        );
      }
    }

    onToggleFavorite(track.id);
  };

  // Create particles for explosion with improved distribution
  const particles = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      angle: i * 22.5 + Math.random() * 10, // More random distribution
      delay: i * 0.02,
      size: 3 + Math.random() * 5,
      distance: 30 + Math.random() * 30, // Varied particle travel distance
    }));
  }, []);

  return (
    <TrackItemContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      $isActive={isActive}
      $isExpanded={isExpanded}
      onClick={() => {
        onClick();
        if (!isExpanded) {
          onExpand();
        }
      }}
      layout
    >
      <CoverArtWrapper
        $isExpanded={isExpanded}
        $isActive={isActive}
        $isPlaying={isActive && musicState.isPlaying}
        whileHover={
          !isActive || !musicState.isPlaying
            ? {
                scale: 1.05,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }
            : {}
        }
      >
        <CoverArt
          src={getSafeCoverArt(track.coverArt)}
          alt={`${track.title} cover`}
          $isPlaying={isActive && musicState.isPlaying}
          transition={{
            rotate: {
              duration: 20,
              ease: "linear",
            },
          }}
          loading="lazy"
          draggable={false}
        />
        {isActive && (
          <PlayingIndicator
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click
              onTogglePlay(); // Use the prop instead of direct dispatch
            }}
            $isPlaying={musicState.isPlaying}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: musicState.isPlaying ? 1.1 : 1,
            }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            {musicState.isPlaying ? (
              <FaPause size={20} />
            ) : (
              <FaPlay size={20} />
            )}
          </PlayingIndicator>
        )}
      </CoverArtWrapper>

      <AnimatePresence>
        {isExpanded && (
          <TrackInfo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TrackTitle $isActive={isActive}>{track.title}</TrackTitle>
            <TrackArtist>{track.artist}</TrackArtist>
            <StatsContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <StatItem>
                <StatIcon>🎵</StatIcon>
                {stats?.plays || 0}
              </StatItem>
              {stats?.lastPlayed && (
                <StatItem>
                  <StatIcon>🕒</StatIcon>
                  {new Date(stats.lastPlayed).toLocaleDateString()}
                </StatItem>
              )}
            </StatsContainer>
          </TrackInfo>
        )}
      </AnimatePresence>

      <EnhancedFavoriteButton
        ref={favoriteButtonRef}
        initial={{ scale: 1 }}
        animate={{
          scale: isPulseAnimating ? [1, 1.2, 1] : 1,
          transition: {
            repeat: isPulseAnimating ? 2 : 0,
            duration: 0.5,
          },
        }}
        whileHover={{
          scale: stats?.favorite ? [1, 1.2, 1.1] : 1.15,
          transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 300,
          },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleToggleFavorite}
        aria-label={
          stats?.favorite ? "Remove from favorites" : "Add to favorites"
        }
        $isFavorite={stats?.favorite || false}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          {stats?.favorite ? (
            <motion.img
              key="favorite"
              src="public/assets/icons/selected.png" // Use custom icon instead of ❤️
              alt="Favorite"
              width="20"
              height="20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", damping: 10, stiffness: 200 }}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <motion.img
              key="not-favorite"
              src={
                isHovered
                  ? "public/assets/icons/selected.png"
                  : "public/assets/icons/add_1.png"
              } // Use custom icons
              alt="Add to favorites"
              width="20"
              height="20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", damping: 10, stiffness: 200 }}
              style={{ objectFit: "contain" }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showExplosion && (
            <FavoriteExplosion>
              {particles.map((particle) => (
                <SparkParticle
                  key={particle.id}
                  initial={{
                    scale: 0,
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [1, 0.8, 0],
                    x: [
                      0,
                      Math.cos(particle.angle * (Math.PI / 180)) *
                        particle.distance,
                    ],
                    y: [
                      0,
                      Math.sin(particle.angle * (Math.PI / 180)) *
                        particle.distance,
                    ],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: particle.delay,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    background:
                      particle.id % 3 === 0
                        ? `radial-gradient(circle, rgba(76, 175, 80, 0.8), rgba(76, 175, 80, 0) 70%)` // Changed to green
                        : particle.id % 3 === 1
                        ? `radial-gradient(circle, rgba(129, 199, 132, 0.8), rgba(129, 199, 132, 0) 70%)` // Lighter green
                        : `radial-gradient(circle, rgba(200, 230, 201, 0.8), rgba(200, 230, 201, 0) 70%)`, // Palest green
                    boxShadow:
                      particle.id % 3 === 0
                        ? "0 0 8px rgba(76, 175, 80, 0.8)" // Changed to green
                        : particle.id % 3 === 1
                        ? "0 0 8px rgba(129, 199, 132, 0.8)" // Lighter green
                        : "0 0 8px rgba(200, 230, 201, 0.8)", // Palest green
                  }}
                />
              ))}

              {/* Enhanced central burst */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 3, 0],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(76, 175, 80, 0.8) 0%, rgba(129, 199, 132, 0.4) 50%, rgba(76, 175, 80, 0) 70%)", // Changed to green gradient
                  filter: "blur(2px)",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </FavoriteExplosion>
          )}
        </AnimatePresence>
      </EnhancedFavoriteButton>
    </TrackItemContainer>
  );
};

// Styled components
const ExplorerContainer = styled(motion.div)<{ $isExpanded: boolean }>`
  position: relative;
  width: ${(props) => (props.$isExpanded ? "420px" : "110px")};
  height: 100%;
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none; // Add this to make all text unselectable by default
  background: rgba(18, 18, 18, 0.4); /* Semi-transparent dark background */
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  isolation: isolate; /* Create new stacking context for z-index */

  @media (max-width: 768px) {
    width: ${(props) => (props.$isExpanded ? "100%" : "100px")};
    height: ${(props) => (props.$isExpanded ? "100%" : "630px")};
    border-radius: 0;
  }
`;

// Update the TrackItemContainer styled component
const TrackItemContainer = styled(motion.div)<{
  $isActive: boolean;
  $isExpanded: boolean;
}>`
  display: flex;
  align-items: center;
  padding: ${(props) => (props.$isExpanded ? "12px" : "4px")};
  background: rgba(255, 255, 255, 0.03); /* Very subtle light background */
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  gap: ${(props) => (props.$isExpanded ? "12px" : "4px")};
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  height: ${(props) => (props.$isExpanded ? "auto" : "auto")};
  width: ${(props) => (props.$isExpanded ? "auto" : "90px")};
  backdrop-filter: blur(2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  ${(props) =>
    !props.$isExpanded &&
    `
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}

  /* Add subtle hover effect */
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateZ(2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Update CoverArtWrapper to ensure circular shape when playing
// Update the CoverArtWrapper dimensions
const CoverArtWrapper = styled(motion.div)<{
  $isExpanded: boolean;
  $isActive: boolean;
  $isPlaying: boolean;
}>`
  position: relative;
  width: ${(props) => (props.$isExpanded ? "48px" : "72px")};
  height: ${(props) => (props.$isExpanded ? "48px" : "72px")};
  border-radius: ${(props) =>
    props.$isActive && props.$isPlaying ? "50%" : "8px"};
  overflow: visible; // Changed to visible to show glow
  flex-shrink: 0;
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  perspective: 1000px;

  // Glowing edge effect
  ${(props) =>
    props.$isActive &&
    props.$isPlaying &&
    `
    &::after {
      content: '';
      position: absolute;
      inset: -2px; // Slightly larger than container
      background: conic-gradient(
        from 0deg,
        rgba(76, 175, 80, 0.8),
        rgba(76, 175, 80, 0.2),
        rgba(76, 175, 80, 0.8),
        rgba(76, 175, 80, 0.2),
        rgba(76, 175, 80, 0.8)
      );
      border-radius: 50%;
      animation: glowSpin 3s linear infinite;
      z-index: -1;
      filter: blur(4px);
    }

    @keyframes glowSpin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}

  // CD center hole
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: ${(props) => (props.$isActive && props.$isPlaying ? 1 : 0)};
    transition: opacity 0.3s ease;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.6); // Added glow to center hole
  }
`;

// Enhanced CoverArt component
const CoverArt = styled(motion.img)<{ $isPlaying: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transform-origin: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${(props) => (props.$isPlaying ? "50%" : "8px")};
  box-shadow: ${(props) =>
    props.$isPlaying ? "0 0 15px rgba(76, 175, 80, 0.3)" : "none"};

  ${(props) =>
    props.$isPlaying &&
    `
    animation: spin 20s linear infinite;
    filter: brightness(1.1);
  `}
`;

// Update PlayingIndicator styled component
const PlayingIndicator = styled(motion.div)<{ $isPlaying: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0;
  border-radius: 50%; // Match parent's circular shape
  transition: all 0.3s ease;

  // Only show hover effect when not playing
  ${(props) =>
    !props.$isPlaying &&
    `
    &:hover {
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(2px);
    }
  `}

  svg {
    opacity: ${(props) => (props.$isPlaying ? 0.9 : 1)};
    transition: opacity 0.3s ease;
  }

  // Only show on hover when not playing
  ${CoverArtWrapper}:hover & {
    opacity: ${(props) => (props.$isPlaying ? 0 : 1)};
  }

  // Show briefly when changing play state
  &:active {
    opacity: 1;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const TrackInfo = styled(motion.div)`
  flex: 1;
  min-width: 0;
  user-select: none; // Add this to make text unselectable
`;

const TrackTitle = styled.h3<{ $isActive: boolean }>`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.$isActive ? "#4caf50" : "white")};
  transition: color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none; // Add this to make text unselectable
  /* Add subtle text shadow for active items instead of background color */
  text-shadow: ${(props) =>
    props.$isActive ? "0 0 8px rgba(76, 175, 80, 0.3)" : "none"};
`;

const TrackArtist = styled.p`
  margin: 2px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none; // Add this to make text unselectable
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  user-select: none; // Add this to make stats unselectable
`;

const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
`;

const StatIcon = styled.span`
  font-size: 12px;
`;

const Controls = styled(motion.div)`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const SearchInput = styled.input.attrs({
  "aria-label": "Search tracks",
  type: "text",
  placeholder: "Search tracks...",
})`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  font-size: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ControlButtons = styled.div`
  display: flex;
  gap: 4px;
`;

// Update the SortSelect styled component with proper accessibility attributes
// Add these styled components after the existing ones
const Header = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.$isExpanded ? "space-between" : "center"};
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(
    18,
    18,
    18,
    0.4
  ); /* Semi-transparent to show colors but not overwhelm */
  position: relative;
  z-index: 1;
  backdrop-filter: blur(4px);
`;

// Update the Title styled component
const Title = styled(motion.div)<{ $isExpanded: boolean }>`
  font-size: ${(props) => (props.$isExpanded ? "1.5rem" : "1rem")};
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  padding: ${(props) => (props.$isExpanded ? "16px" : "8px")};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;48
`;
48;

// Define the rotation animation separately
const rotateY = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

// Update the TitleIcon component
const TitleIcon = styled.img<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  transform-style: preserve-3d;
  transition: filter 0.3s ease;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$isOpen
      ? css`
          animation: ${rotateY} 4s linear infinite;
        `
      : css`
          filter: brightness(0.7);
          transform: rotateY(180deg);
        `}

  &:hover {
    animation: none;
    filter: drop-shadow(0 0 8px #4a9eff) brightness(1.2);
    transform: scale(1.1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    background: radial-gradient(
      circle,
      rgba(74, 158, 255, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ExpandButton = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const ContentContainer = styled(motion.div)`
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  background: rgba(18, 18, 18, 0.2); /* Very subtle background */
  backdrop-filter: blur(2px);

  /* Add this to ensure proper height calculation */
  & > div {
    height: 100%;
    width: 100%;
  }
`;

// Update the TrackList styled component
const TrackList = styled.div<{ $isExpanded: boolean }>`
  padding: ${(props) => (props.$isExpanded ? "8px" : "4px")};
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isExpanded ? "1fr" : "repeat(auto-fill, 80px)"};
  gap: ${(props) => (props.$isExpanded ? "8px" : "4px")};
  min-height: 0;
  flex: 1;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  padding: 16px;
  color: #ff5252;
  text-align: center;
  background: rgba(255, 82, 82, 0.1);
  margin: 16px;
  border-radius: 8px;
`;

const RetryButton = styled.button`
  background: #ff5252;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    background: #ff6b6b;
  }
`;

// Update the IconButtonWithTooltip styled component
const IconButtonWithTooltip = styled(motion.button)<{ $active: boolean }>`
  position: relative;
  background: ${(props) =>
    props.$active ? "rgba(76, 175, 80, 0.2)" : "rgba(255, 255, 255, 0.1)"};
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$active ? "#4caf50" : "white")};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* Add indicator line at bottom when active */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${(props) => (props.$active ? "50%" : "0")};
    height: 2px;
    background: #4caf50;
    transform: translateX(-50%);
    transition: width 0.3s ease;
    border-radius: 1px;
  }

  &:hover {
    background: ${(props) =>
      props.$active ? "rgba(76, 175, 80, 0.3)" : "rgba(255, 255, 255, 0.2)"};

    &::after {
      width: ${(props) => (props.$active ? "80%" : "40%")};
    }
  }
`;

// Add these styled components
const SortingSection = styled(motion.div)`
  overflow: hidden;
  background: rgba(18, 18, 18, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const SortOptionList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 8px;
  padding: 12px;
`;

const SortOptionItem = styled(motion.button)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: ${(props) =>
    props.$isActive ? "rgba(76, 175, 80, 0.15)" : "rgba(255, 255, 255, 0.05)"};
  border: 1px solid
    ${(props) => (props.$isActive ? "rgba(76, 175, 80, 0.3)" : "transparent")};
  border-radius: 6px;
  color: ${(props) =>
    props.$isActive ? "#4caf50" : "rgba(255, 255, 255, 0.8)"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$isActive ? "rgba(76, 175, 80, 0.2)" : "rgba(255, 255, 255, 0.1)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
  }
`;

// Add these styled components after the existing ones
const LoadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
`;

const LoadingSpinner = styled(motion.div)`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(76, 175, 80, 0.3);
  border-top-color: #4caf50;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// Update the FavoriteButton styled component
const EnhancedFavoriteButton = styled(motion.button)<{ $isFavorite: boolean }>`
  background: ${(props) =>
    props.$isFavorite
      ? "rgba(76, 175, 80, 0.1)"
      : "transparent"}; // Changed red to green
  border: none;
  border-radius: 50%;
  padding: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.9;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: ${(props) =>
      props.$isFavorite
        ? "0 0 10px rgba(76, 175, 80, 0.4)"
        : "none"}; // Changed red to green
  }

  &:focus-visible {
    outline: 2px solid #4caf50;
    outline-offset: 2px;
  }
`;

// Add these new styled components
const FavoriteExplosion = styled(motion.div)`
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 2;
`;

const SparkParticle = styled(motion.div)`
  position: absolute;
  background: #4caf50;
  border-radius: 50%;
  transform-origin: center;
`;

// New styled components for album grid
const AlbumGrid = styled.div<{ $isExpanded: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isExpanded
      ? "repeat(auto-fill, minmax(120px, 1fr))" // More compact grid in expanded mode
      : "1fr"};
  gap: ${(props) => (props.$isExpanded ? "12px" : "8px")};
  padding: ${(props) => (props.$isExpanded ? "12px" : "6px")};
  width: 100%;
`;

// Make AlbumCover smaller for better grid density
const AlbumCover = styled(motion.div)<{ $isExpanded: boolean }>`
  width: ${(props) => (props.$isExpanded ? "100%" : "72px")};
  height: ${(props) => (props.$isExpanded ? "auto" : "72px")};
  aspect-ratio: 1/1;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

// Make AlbumItem more compact
const AlbumItem = styled(motion.div)<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: ${(props) => (props.$isExpanded ? "6px" : "4px")};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

// Make text elements more compact
const AlbumTitle = styled.h3`
  margin: 0;
  font-size: 12px; // Smaller font
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 100%;
`;

const AlbumArtist = styled.p`
  margin: 2px 0 0;
  font-size: 11px; // Smaller font
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  max-width: 100%;
`;

const TrackCount = styled.span`
  font-size: 10px; // Smaller font
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  text-align: center;
`;

// Make the AlbumInfo component more compact
const AlbumInfo = styled.div`
  width: 100%;
  padding: 6px 2px 2px;
  display: flex;
  flex-direction: column;
`;

// Components for album tracks view
const BackButton = styled(motion.button)`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 12px;
  margin: 8px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`;

const AlbumHeader = styled.div`
  display: flex;
  padding: 12px;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const AlbumHeaderCover = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AlbumHeaderInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AlbumHeaderTitle = styled.h2`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

const AlbumHeaderArtist = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

const AlbumHeaderDetails = styled.p`
  margin: 4px 0 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

// Add these new styled components

const AlbumSizeButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #4caf50;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: rgba(255, 255, 255, 0.05);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const AlbumSizeSlider = styled.div`
  width: 100px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
`;

const AlbumSizeProgress = styled.div<{ $progress: number }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${(props) => props.$progress * 100}%;
  background: linear-gradient(90deg, #4caf50, #66bb6a);
  border-radius: 3px;
  transition: width 0.3s ease;
`;

// Create a container for header controls
const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// Create a compact version of AlbumSizeControls for the header
const CompactSizeControls = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  height: 32px;
`;

// Add this new component inside MusicExplorer.tsx
const AlbumArtColorVisualizer = () => {
  const { state } = useMusicContext();
  const [colors, setColors] = useState<string[]>(["#121212", "#1e1e1e"]);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Extract colors from current album art
  useEffect(() => {
    if (!state.currentTrack?.coverArt) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    const extractColors = (imageUrl: string) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const imageData = ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        ).data;
        const colorCounts: Record<string, number> = {};

        // Sample pixels for color extraction
        for (let i = 0; i < imageData.length; i += 40) {
          const r = imageData[i];
          const g = imageData[i + 1];
          const b = imageData[i + 2];

          // Skip very dark or very light colors
          if ((r < 20 && g < 20 && b < 20) || (r > 230 && g > 230 && b > 230))
            continue;

          const hexColor = `#${r.toString(16).padStart(2, "0")}${g
            .toString(16)
            .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
          colorCounts[hexColor] = (colorCounts[hexColor] || 0) + 1;
        }

        // Convert to array and sort by frequency
        const sortedColors = Object.entries(colorCounts)
          .sort((a, b) => b[1] - a[1])
          .map((entry) => entry[0]);

        if (sortedColors.length >= 2) {
          setColors(sortedColors.slice(0, 5));
        }
      };

      img.onerror = () => {
        console.error("Failed to load image for color extraction");
      };

      img.src = imageUrl;
    };

    extractColors(state.currentTrack.coverArt);
  }, [state.currentTrack?.coverArt]);

  // Create animated color waves
  useLayoutEffect(() => {
    if (!canvasRef.current || !isVisible || colors.length < 2) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, `${colors[0]}99`);
      gradient.addColorStop(0.5, `${colors[1]}88`);
      gradient.addColorStop(1, `${colors[0]}99`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flowing waves
      const waveCount = 3;
      colors.slice(0, 3).forEach((color, i) => {
        ctx.beginPath();

        const amplitude = 12 + i * 8;
        const period = canvas.width / (1 + i * 0.5);
        const speed = 0.002 + i * 0.001;

        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++) {
          const dx = x / canvas.width;
          const offsetY =
            Math.sin(dx * waveCount * Math.PI + time * speed) * amplitude;
          const y = canvas.height * 0.5 + offsetY + i * 20;

          ctx.lineTo(x, y);
        }

        // Complete the wave path
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        // Fill with translucent color
        ctx.fillStyle = `${color}33`;
        ctx.fill();
      });

      time += 1;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [colors, isVisible]);

  return (
    <ColorCanvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 0.85 : 0 }}
      transition={{ duration: 1.2 }}
    />
  );
};

// Add these styled components
const ColorCanvas = styled(motion.canvas)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  border-radius: inherit;
`;

// Add these new styled components for the category icon
const CategoryIconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${(props) =>
        props.$active ? "rgba(76, 175, 80, 0.4)" : "rgba(255, 255, 255, 0.2)"},
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img {
    transition: all 0.3s ease;
    filter: ${(props) =>
      props.$active
        ? "brightness(1.2) drop-shadow(0 0 3px rgba(76, 175, 80, 0.7))"
        : "brightness(1)"};
  }

  ${IconButtonWithTooltip}:hover &::after {
    opacity: 1;
  }

  ${IconButtonWithTooltip}:hover & img {
    filter: ${(props) =>
      props.$active
        ? "brightness(1.3) drop-shadow(0 0 4px rgba(76, 175, 80, 0.9))"
        : "brightness(1.2) drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))"};
    transform: scale(1.1);
  }
`;

export default MusicExplorer;
