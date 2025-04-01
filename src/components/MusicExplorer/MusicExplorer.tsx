import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useLayoutEffect,
} from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaPause, FaPlay } from "react-icons/fa"; // Remove FaSortAlphaDown
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { useMusicContext } from "../../context/MusicContext";
import CustomScrollbar from "../shared/CustomScrollbar";
import { Track } from "../../types/music";
import { getSafeCoverArt } from "../../utils/imageUtils";
import { useLayout } from "../../context/LayoutContext";
import CommunityTracksSection from "./CommunityTracksSection";
import { ICONS } from "../../constants/assetPaths";

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

// Animated equalizer component that activates when music is playing
const AnimatedEqualizer = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <EqualizerContainer $isPlaying={isPlaying}>
      <EqualizerBar $delay={0} $height={0.7} />
      <EqualizerBar $delay={0.2} $height={1} />
      <EqualizerBar $delay={0.1} $height={0.5} />
      <EqualizerBar $delay={0.3} $height={0.8} />
    </EqualizerContainer>
  );
};

const EqualizerContainer = styled.div<{ $isPlaying: boolean }>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 16px;
  gap: 2px;
  opacity: ${(props) => (props.$isPlaying ? 1 : 0.6)};
  transition: opacity 0.3s ease;
`;

const EqualizerBar = styled.div<{ $delay: number; $height: number }>`
  width: 3px;
  height: ${(props) => props.$height * 16}px;
  background: #4caf50;
  border-radius: 1px;
  transform-origin: bottom;
  animation: ${(props) =>
    `equalizer 1.2s ${props.$delay}s ease-in-out infinite alternate`};

  @keyframes equalizer {
    0% {
      height: ${(props) => props.$height * 5}px;
    }
    100% {
      height: ${(props) => props.$height * 16}px;
    }
  }
`;

const MusicExplorer: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const { dispatch: layoutDispatch } = useLayout();
  const [isExpanded, setIsExpanded] = useState(false); // Changed from true to false
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSortPanel, setShowSortPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Add responsive handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  const titleRef = useRef<HTMLDivElement>(null);

  // Add resize observer to handle dynamic font sizing
  useEffect(() => {
    if (!titleRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const element = entry.target as HTMLElement;

        // Adjust font size based on container width
        if (width < 200 && isExpanded) {
          element.style.fontSize = "1.1rem";
        } else if (width < 300 && isExpanded) {
          element.style.fontSize = "1.3rem";
        } else {
          element.style.fontSize = isExpanded ? "1.5rem" : "1.2rem";
        }
      }
    });

    resizeObserver.observe(titleRef.current);

    return () => {
      if (titleRef.current) {
        resizeObserver.unobserve(titleRef.current);
      }
    };
  }, [isExpanded]);

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
      payload: 60, // Set initial width to collapsed state
    });
  }, []); // Empty dependency array for initial setup only

  // Update the handleExplorerToggle function to prevent going off-screen

  const handleExplorerToggle = useCallback(() => {
    const willCollapse = isExpanded;
    setIsExpanded(!willCollapse);

    // This dispatch updates the global layout state
    layoutDispatch({ type: "TOGGLE_EXPLORER" });

    // Safety check - if there's no music context or queue is empty, use a more conservative width
    const hasMusicContext = state.queue && state.queue.length > 0;

    // Adjust layout specifically for mobile
    if (isMobile) {
      // When on mobile, we need to adjust the mainContentWidth differently
      // Add a maximum cap to prevent going off-screen
      const safeWidth = Math.min(
        window.innerWidth,
        document.body.clientWidth - 20
      ); // Leave a small margin

      layoutDispatch({
        type: "SET_EXPLORER_WIDTH",
        payload: willCollapse ? 70 : safeWidth,
      });
    } else {
      // On desktop, use standard widths but with a maximum reasonable size
      const parentWidth = explorerRef.current?.parentElement?.clientWidth || 0;
      const maxExpandedWidth = Math.min(
        window.innerWidth * 0.8, // 80% of window
        parentWidth > 0 ? parentWidth : 800 // Use parent width if available, otherwise cap at 800px
      );

      layoutDispatch({
        type: "SET_EXPLORER_WIDTH",
        payload: willCollapse ? 110 : maxExpandedWidth,
      });
    }

    // Reset all expanded states when collapsing
    if (willCollapse) {
      // Always return to album view when collapsing
      setViewMode("albums");
      setSelectedAlbum(null);
      // Reset other states...
    }
  }, [isExpanded, layoutDispatch, isMobile, state.queue, explorerRef]);

  // Add a new useEffect to ensure the explorer always stays visible
  useEffect(() => {
    // This ensures explorer stays visible when expanded
    if (isExpanded && explorerRef.current) {
      // Check if the explorer is off-screen
      const rect = explorerRef.current.getBoundingClientRect();
      const isOffScreen = rect.right < 0 || rect.left > window.innerWidth;

      if (isOffScreen) {
        // If it's off-screen, reset to a safe position
        explorerRef.current.style.transform = "translateX(0)";
        // Force a reflow to ensure it's visible
        explorerRef.current.style.opacity = "0.99";

        // Request animation frame to ensure it renders properly
        requestAnimationFrame(() => {
          if (explorerRef.current) {
            explorerRef.current.style.opacity = "1";
          }
        });

        // Update the layout if necessary
        layoutDispatch({
          type: "SET_EXPLORER_WIDTH",
          payload: Math.min(window.innerWidth * 0.8, 800),
        });
      }
    }
  }, [isExpanded, layoutDispatch]);

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

  // Update the renderContent function
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
        <AlbumGrid $isExpanded={isExpanded} $albumSize={albumSize}>
          {filterAlbums.length === 0 ? (
            <EmptyStateMessage>
              No albums match your search criteria
            </EmptyStateMessage>
          ) : (
            filterAlbums.map((album) => (
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
                  $size={albumSize}
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
            ))
          )}
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

  // Add useEffect to handle container resizing
  useEffect(() => {
    if (!explorerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      // When parent container changes size, ensure we're still filling it
      if (isExpanded) {
        layoutDispatch({
          type: "SET_EXPLORER_WIDTH",
          payload:
            explorerRef.current?.parentElement?.clientWidth ||
            window.innerWidth,
        });
      }
    });

    // Observe the parent container
    const parentElement = explorerRef.current.parentElement;
    if (parentElement) {
      resizeObserver.observe(parentElement);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [isExpanded, layoutDispatch]);

  // Update the return JSX to use the renderContent function
  return (
    <>
      <ExplorerGlobalStyles />
      <ExplorerContainer
        ref={explorerRef}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        $isExpanded={isExpanded}
        className="explorer-container"
      >
        {/* Add the visualizer as the first element to ensure it's behind other content */}
        <AlbumArtColorVisualizer />

        <Header $isExpanded={isExpanded} className="header-section">
          <Title
            ref={titleRef}
            $isExpanded={isExpanded}
            animate={{
              scale: isExpanded ? 1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded
              ? viewMode === "albums"
                ? "All Time Best" // Changed from "Music Explorer" to "All Time Best"
                : selectedAlbum?.title || "Tracks"
              : "DP"}
          </Title>

          {/* Add Album Size Controls - Only show when in album view and expanded */}
          {isExpanded && viewMode === "albums" && (
            <CompactSizeControls
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <AlbumSizeButtonWithTooltip
                onClick={() =>
                  setAlbumSize(Math.max(minAlbumSize, albumSize - 10))
                }
                disabled={albumSize <= minAlbumSize}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-tooltip={`Small albums (${minAlbumSize}px)`}
              >
                <SmallAlbumIcon />
              </AlbumSizeButtonWithTooltip>

              <SliderContainer>
                <AlbumSizeSlider
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const progress = clickX / rect.width;
                    const newSize =
                      minAlbumSize + progress * (maxAlbumSize - minAlbumSize);
                    setAlbumSize(Math.round(newSize));
                  }}
                >
                  <AlbumSizeProgress
                    $progress={
                      (albumSize - minAlbumSize) / (maxAlbumSize - minAlbumSize)
                    }
                  />
                  <SliderThumb
                    $progress={
                      (albumSize - minAlbumSize) / (maxAlbumSize - minAlbumSize)
                    }
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}
                    dragMomentum={false}
                    onDrag={(e, info) => {
                      const parent = (e.target as HTMLElement).parentElement;
                      if (!parent) return;
                      const rect = parent.getBoundingClientRect();
                      const progress = Math.max(
                        0,
                        Math.min(1, (info.point.x - rect.left) / rect.width)
                      );
                      const newSize =
                        minAlbumSize + progress * (maxAlbumSize - minAlbumSize);
                      setAlbumSize(Math.round(newSize));
                    }}
                  >
                    <SizeTooltip>{albumSize}px</SizeTooltip>
                  </SliderThumb>
                </AlbumSizeSlider>
              </SliderContainer>

              <AlbumSizeButtonWithTooltip
                onClick={() =>
                  setAlbumSize(Math.min(maxAlbumSize, albumSize + 10))
                }
                disabled={albumSize >= maxAlbumSize}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-tooltip={`Large albums (${maxAlbumSize}px)`}
              >
                <LargeAlbumIcon />
              </AlbumSizeButtonWithTooltip>
            </CompactSizeControls>
          )}

          <HeaderControls $isExpanded={isExpanded}>
            <ExpandButton
              $isExpanded={isExpanded}
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
            <Controls className="controls-section">
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
                  viewMode === "albums"
                    ? "Search albums..."
                    : "Search tracks..."
                }
              />

              <ControlButtons>
                <IconButtonWithTooltip
                  onClick={() => setShowSortPanel(!showSortPanel)}
                  $active={showSortPanel}
                  $tooltip="Sort options"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-sort-button
                >
                  <CategoryIconWrapper $active={showSortPanel}>
                    {state.isPlaying ? (
                      <AnimatedEqualizer isPlaying={true} />
                    ) : (
                      <StyledImage
                        src="public/assets/icons/equalizer_green.png"
                        alt="Sort options"
                        className="equalizer-icon"
                      />
                    )}
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
              className="sorting-section"
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
                      <motion.div
                        className="direction-indicator"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            rotate: sortOptions.direction === "asc" ? 0 : 180,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          ↑
                        </motion.span>
                      </motion.div>
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
          className="content-container"
        >
          <CustomScrollbar ref={scrollContainerRef}>
            {renderContent()}
            <CommunityTracksSection />
          </CustomScrollbar>
        </ContentContainer>
        <AlbumArtColorVisualizer />
      </ExplorerContainer>
    </>
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
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click
              onTogglePlay(); // Use the prop instead of direct dispatch
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onTogglePlay();
              }
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
              src="public/assets/icons/selected_later.png" // Changed from selected.png to selected_later.png
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
              src={isHovered ? ICONS.selected : ICONS.add}
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
      </EnhancedFavoriteButton>
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
    </TrackItemContainer>
  );
};

// Styled components
const ExplorerContainer = styled(motion.div).attrs<{ $isExpanded: boolean }>(
  (props) => ({
    style: {
      width: props.$isExpanded
        ? "100%" // Always 100% to fill available space when expanded
        : window.innerWidth <= 768
        ? "100px"
        : "110px",
      flex: props.$isExpanded ? 1 : "none", // Make it flex when expanded
    },
  })
)`
  position: relative;
  height: 100%;
  backdrop-filter: blur(10px);
  transition: width 0.4s cubic-bezier(0.65, 0, 0.35, 1),
    height 0.4s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.3s ease,
    transform 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  border-radius: 12px;
  background: rgba(18, 18, 18, 0.4);
  box-shadow: none;
  margin-left: 10px;
  margin-right: 10px;
  isolation: isolate;

  @media (max-width: 768px) {
    position: ${(props) => (props.$isExpanded ? "relative" : "fixed")};
    top: 0;
    left: 0;
    bottom: 0;
    margin-left: 0;
    margin-right: 0;
    height: ${(props) => (props.$isExpanded ? "100%" : "100vh")};
    max-height: 100vh;
    border-radius: 0; /* Remove border radius on mobile */
    z-index: ${(props) => (props.$isExpanded ? 10 : 5)};
  }
`;

// Update the TrackItemContainer styled component
const TrackItemContainer = styled(motion.div).attrs<{
  $isActive: boolean;
  $isExpanded: boolean;
}>((props) => ({
  style: {
    padding: props.$isExpanded ? "12px" : "4px",
    gap: props.$isExpanded ? "12px" : "4px",
    height: props.$isExpanded ? "auto" : "auto",
    width: props.$isExpanded ? "auto" : "90px",
    flexDirection: !props.$isExpanded ? "column" : "row",
    alignItems: !props.$isExpanded ? "center" : "stretch",
    justifyContent: !props.$isExpanded ? "center" : "flex-start",
  },
}))`
  display: flex;
  background: rgba(255, 255, 255, 0.03); /* Very subtle light background */
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  backdrop-filter: blur(2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  /* Add subtle hover effect */
  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateZ(2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Update CoverArtWrapper to ensure circular shape when playing
// Update the CoverArtWrapper dimensions
const CoverArtWrapper = styled(motion.div).attrs<{
  $isExpanded: boolean;
  $isActive: boolean;
  $isPlaying: boolean;
}>((props) => ({
  style: {
    width: props.$isExpanded ? "48px" : "72px",
    height: props.$isExpanded ? "48px" : "72px",
    borderRadius: props.$isActive && props.$isPlaying ? "50%" : "8px",
  },
}))`
  position: relative;
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
const CoverArt = styled(motion.img).attrs<{ $isPlaying: boolean }>((props) => ({
  style: {
    borderRadius: props.$isPlaying ? "50%" : "8px",
    boxShadow: props.$isPlaying ? "0 0 15px rgba(76, 175, 80, 0.3)" : "none",
    animation: props.$isPlaying ? "spin 20s linear infinite" : "none",
    filter: props.$isPlaying ? "brightness(1.1)" : "none",
  },
  draggable: false,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  transform-origin: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  pointer-events: none;
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
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
  }

  svg {
    opacity: ${(props) => (props.$isPlaying ? 0.9 : 1)};
    transition: opacity 0.3s ease;
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
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
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
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
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
  background: var(--theme-background-gradient, rgba(0, 0, 0, 0.3));
  classname: controls-section;
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
  padding: ${(props) => (props.$isExpanded ? "12px" : "8px")};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--theme-background-gradient, rgba(18, 18, 18, 0.4));
  position: relative;
  z-index: 1;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.$isExpanded ? "row" : "column")};
    height: ${(props) => (props.$isExpanded ? "auto" : "auto")};
    padding: ${(props) => (props.$isExpanded ? "12px" : "10px")};
    justify-content: space-between;
  }
`;

// Update Title component for better mobile optimization
const Title = styled(motion.div).attrs<{ $isExpanded: boolean }>((props) => ({
  style: {
    fontSize: props.$isExpanded
      ? window.innerWidth <= 768
        ? "0.85rem" // Reduced from 1.25rem to 0.85rem for mobile
        : "1.5rem"
      : window.innerWidth <= 768
      ? "0"
      : "1.2rem",
    padding: props.$isExpanded
      ? window.innerWidth <= 768
        ? "6px" // Reduced padding for mobile
        : "16px"
      : window.innerWidth <= 768
      ? "0"
      : "8px",
  },
}))`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  transition: all 0.3s ease;
  align-items: center;
  gap: 4px; // Reduced gap for mobile
  text-align: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    letter-spacing: -0.3px;
    line-height: 1.1;
  }
`;

// Define the rotation animation separately
// Update the TitleIcon component
// First, define the prop types for the ExpandButton
interface ExpandButtonProps {
  $isExpanded: boolean;
}

// Update the ExpandButton styled component
const ExpandButton = styled(motion.button)<ExpandButtonProps>`
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
  transition: all 0.3s ease;

  /* Add styling based on expanded state */
  transform: rotate(${(props) => (props.$isExpanded ? "0deg" : "180deg")});
  opacity: ${(props) => (props.$isExpanded ? 1 : 0.8)};

  &:hover {
    opacity: 1;
    color: ${(props) => (props.$isExpanded ? "#4caf50" : "white")};
  }
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
  classname: content-container;

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
  background: var(--theme-background-gradient, rgba(0, 0, 0, 0.3));
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-color: var(--theme-border-color, rgba(255, 255, 255, 0.1));
  padding: 12px 16px;
  classname: sorting-section;
`;

const SortOptionList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 8px;
  }
`;

const SortOptionItem = styled(motion.button)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: ${(props) =>
    props.$isActive
      ? "linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.1))"
      : "rgba(0, 0, 0, 0.25)"};
  border: 1px solid
    ${(props) =>
      props.$isActive ? "rgba(76, 175, 80, 0.4)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${(props) =>
    props.$isActive ? "0 2px 6px rgba(76, 175, 80, 0.15)" : "none"};

  /* Ensure all text is consistent */
  span {
    color: white;
    position: relative;
    z-index: 2;
    font-weight: ${(props) => (props.$isActive ? "600" : "400")};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  }

  /* Direction indicator with animation */
  .direction-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: ${(props) =>
      props.$isActive ? "rgba(76, 175, 80, 0.2)" : "rgba(255, 255, 255, 0.1)"};
    border-radius: 50%;
  }

  &:hover {
    background: ${(props) =>
      props.$isActive
        ? "linear-gradient(135deg, rgba(76, 175, 80, 0.25), rgba(76, 175, 80, 0.15))"
        : "rgba(0, 0, 0, 0.35)"};
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 13px;
  }
`;

// Add these new styled components after the existing ones
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
const AlbumGrid = styled.div.attrs<{
  $isExpanded: boolean;
  $albumSize: number;
}>((props) => ({
  style: {
    gridTemplateColumns: props.$isExpanded
      ? window.innerWidth <= 768
        ? `repeat(auto-fill, minmax(${Math.max(
            80,
            props.$albumSize * 0.8
          )}px, 1fr))` // Slightly smaller on mobile
        : `repeat(auto-fill, minmax(${props.$albumSize}px, 1fr))`
      : "1fr",
    gap: props.$isExpanded
      ? window.innerWidth <= 768
        ? "8px"
        : "12px"
      : "8px",
    padding: props.$isExpanded
      ? window.innerWidth <= 768
        ? "8px"
        : "12px"
      : "6px",
  },
}))`
  display: grid;
  width: 100%;
`;

// Update AlbumCover to properly handle size
const AlbumCover = styled(motion.div)<{
  $isExpanded: boolean;
  $size?: number;
}>`
  width: ${(props) => (props.$isExpanded ? `${props.$size || 120}px` : "72px")};
  height: ${(props) =>
    props.$isExpanded ? `${props.$size || 120}px` : "72px"};
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

  @media (max-width: 768px) {
    width: 24px; // Smaller size on mobile
    height: 24px;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #4caf50;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AlbumSizeSlider = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  position: relative;
  overflow: visible;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);

  /* Add more tick marks for finer granularity */
  &::before,
  &::after,
  &::before ~ &::before,
  &::after ~ &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 1px;
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%);
    border-radius: 1px;
    z-index: 1;
  }

  &::before {
    left: 20%;
  }
  &::after {
    left: 40%;
  }
  &::before ~ &::before {
    left: 60%;
  }
  &::after ~ &::after {
    left: 80%;
  }
`;

// Add the AlbumSizeProgress definition
const AlbumSizeProgress = styled.div.attrs<{ $progress: number }>((props) => ({
  style: {
    width: `${props.$progress * 100}%`,
  },
}))`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(76, 175, 80, 0.8),
    rgba(76, 175, 80, 0.5)
  );
  border-radius: 6px;
`;

// Fix the SliderThumb component with better event handling
const SliderThumb = styled(motion.div).attrs<{ $progress: number }>(
  (props) => ({
    style: {
      left: `${props.$progress * 100}%`,
    },
  })
)`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: white;
  border: 2px solid var(--album-color-primary, rgba(76, 175, 80, 0.8));
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 5;

  @media (max-width: 768px) {
    width: 14px; // Slightly smaller on mobile
    height: 14px;
    border-width: 1.5px;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }

  &:active {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

// Update the SliderThumb component to use pointer cursor instead of grab cursor

// Create a container for header controls
const HeaderControls = styled.div<{ $isExpanded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: ${(props) => (!props.$isExpanded ? "column" : "row")};
    align-items: ${(props) => (!props.$isExpanded ? "center" : "center")};
    justify-content: ${(props) =>
      !props.$isExpanded ? "flex-end" : "flex-start"};
    height: ${(props) => (!props.$isExpanded ? "auto" : "auto")};
    width: ${(props) => (!props.$isExpanded ? "100%" : "auto")};
  }
`;

// Update CompactSizeControls for better mobile display
const CompactSizeControls = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--theme-background-gradient, rgba(0, 0, 0, 0.35));
  backdrop-filter: blur(10px);
  padding: 6px 8px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 4px 6px;
    gap: 4px;
    transform: scale(0.9);
    margin-right: 8px;
  }
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

  // 8. Update the useEffect in AlbumArtColorVisualizer to apply theme to all components
  useEffect(() => {
    if (colors.length < 2 || !isVisible) return;

    // Get theme colors for consistent use
    const primaryColor = colors[0];
    const secondaryColor = colors[1];

    // Apply to root document variables
    document.documentElement.style.setProperty(
      "--album-color-primary",
      primaryColor
    );
    document.documentElement.style.setProperty(
      "--album-color-secondary",
      secondaryColor
    );

    // Create a single consistent gradient for all components
    const backgroundGradient = `linear-gradient(135deg, 
      ${primaryColor}15, 
      ${secondaryColor}20)`;

    const activeBgGradient = `linear-gradient(135deg, 
      ${primaryColor}25, 
      ${secondaryColor}30)`;

    document.documentElement.style.setProperty(
      "--theme-background-gradient",
      backgroundGradient
    );
    document.documentElement.style.setProperty(
      "--theme-active-gradient",
      activeBgGradient
    );
    document.documentElement.style.setProperty(
      "--theme-border-color",
      `${primaryColor}40`
    );

    // Function to apply consistent styling to all components
    const applyConsistentStyling = () => {
      // Target all themed sections
      const targetSelectors = [
        ".header-section",
        ".controls-section",
        ".sorting-section",
        ".filter-section",
        ".size-controls",
        ".content-container",
        ".explorer-container",
      ];

      // Apply the exact same styling to all components
      targetSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          const htmlEl = el as HTMLElement;

          // Apply identical styling to all components
          htmlEl.style.background = backgroundGradient;
          htmlEl.style.borderColor = `${primaryColor}40`;
          htmlEl.style.position = "relative";
          htmlEl.style.zIndex = "1";

          // Add a data attribute to track styled elements
          htmlEl.setAttribute("data-theme-styled", "true");
        });
      });

      // Style active elements consistently (like sort options)
      const activeElements = document.querySelectorAll("[data-active='true']");
      activeElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.background = activeBgGradient;
        htmlEl.style.borderColor = `${primaryColor}60`;

        // Ensure text is consistent
        const spans = htmlEl.querySelectorAll("span");
        spans.forEach((span) => {
          (span as HTMLElement).style.color = "white";
          (span as HTMLElement).style.textShadow =
            "0 1px 2px rgba(0, 0, 0, 0.6)";
          (span as HTMLElement).style.fontWeight = "600";
        });
      });
    };

    // Apply consistent styling initially
    applyConsistentStyling();

    // Create a MutationObserver to ensure consistency is maintained
    const observer = new MutationObserver(() => {
      applyConsistentStyling();
    });

    // Observe the entire document for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "data-active", "style"],
    });

    // Clean up function
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--album-color-primary");
      document.documentElement.style.removeProperty("--album-color-secondary");
      document.documentElement.style.removeProperty(
        "--theme-background-gradient"
      );
      document.documentElement.style.removeProperty("--theme-active-gradient");
      document.documentElement.style.removeProperty("--theme-border-color");

      // Remove all applied styles
      const styledElements = document.querySelectorAll(
        '[data-theme-styled="true"]'
      );
      styledElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.removeProperty("background");
        htmlEl.style.removeProperty("border-color");
        htmlEl.style.removeProperty("position");
        htmlEl.style.removeProperty("z-index");
        htmlEl.removeAttribute("data-theme-styled");

        // Clean up spans
        const spans = htmlEl.querySelectorAll("span");
        spans.forEach((span) => {
          (span as HTMLElement).style.removeProperty("color");
          (span as HTMLElement).style.removeProperty("text-shadow");
          (span as HTMLElement).style.removeProperty("font-weight");
        });
      });
    };
  }, [colors, isVisible]);

  // 2. Update how the ColorCanvas is used in the return statement of AlbumArtColorVisualizer
  return (
    <ColorCanvas
      ref={canvasRef}
      opacity={isVisible ? 0.85 : 0}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 0.85 : 0 }}
      transition={{ duration: 1.2 }}
    />
  );
};

// Add these styled components
const ColorCanvas = styled(motion.canvas).attrs<{ opacity?: number }>(
  (props) => ({
    style: {
      opacity: props.opacity !== undefined ? props.opacity : 0.85,
    },
  })
)`
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

// Add these new styled components for the slider thumb and size preview
// Update the EmailPopup styled component with improved positioning
// Add the missing TypewriterText styled component
// Add SliderContainer component definition
const SliderContainer = styled.div`
  position: relative;
  width: 120px;
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 6px;

  @media (max-width: 768px) {
    width: 80px; // Smaller width on mobile
    height: 20px;
    padding: 0 4px;
  }

  /* Create a slight background for better visibility */
  &::before {
    content: "";
    position: absolute;
    inset: 4px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    z-index: 0;
  }
`;

// Add SizeLabel component definition
const StyledImage = styled.img`
  object-fit: contain;
  width: 16px;
  height: 16px;
`;

const EmptyStateMessage = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  padding: 16px;
`;

// Add a global style component to ensure all text in the explorer is unselectable
const ExplorerGlobalStyles = createGlobalStyle`
  .explorer-container * {
    user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  
  .explorer-container img {
    -webkit-user-drag: none;
    user-drag: none;
    pointer-events: none;
  }
`;

// Add these custom icon components right after the other styled components

// Custom SVG icons for album size control
const SmallAlbumIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="8"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M6 8.5L6 15.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 8.5L18 15.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8.5 6L15.5 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8.5 18L15.5 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const LargeAlbumIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M1 4.5L1 19.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M23 4.5L23 19.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4.5 1L19.5 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4.5 23L19.5 23"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Enhance the AlbumSizeButton with tooltips
const AlbumSizeButtonWithTooltip = styled(AlbumSizeButton)`
  position: relative;

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -28px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 11px;
    white-space: nowrap;
    transition: all 0.2s ease;
    opacity: 0;
    pointer-events: none;
    z-index: 100;
  }

  &:hover::before {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
`;

// Add the SizeTooltip component if it doesn't exist
const SizeTooltip = styled.div`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${SliderThumb}:hover & {
    opacity: 1;
  }
`;

export default MusicExplorer;
