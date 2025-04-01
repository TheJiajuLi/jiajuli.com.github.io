import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import {
  PlayerState,
  Track,
  SidebarMode,
  PlaybackContext,
} from "../types/music";
import { CommunityTrackEvent } from "../types/events";
import musicLibrary from "../data/musicLibrary";
import LocalStorage from "../utils/LocalStorage"; // Import LocalStorage utility

// Initial state for the player
const getInitialState = (): PlayerState => {
  const lastPlayed = LocalStorage.getLastPlayed();
  const playbackState = LocalStorage.getPlaybackState();
  const savedQueue = LocalStorage.getQueue();

  return {
    currentTrack: lastPlayed || null,
    isPlaying: false,
    volume: playbackState?.volume ?? 0.7,
    progress: playbackState?.progress ?? 0,
    duration: lastPlayed?.duration ?? 0,
    isShuffling: playbackState?.isShuffling ?? false,
    repeatMode: playbackState?.repeatMode ?? "off",
    queue: savedQueue.length > 0 ? savedQueue : musicLibrary,
    visualizerActive: true,
    equalizerActive: true,
    sidebarMode: "manual",
    sidebarVisible: false,
    isBuffering: false,
    error: null,
    lastUserAction: Date.now(),
    lastSidebarInteraction: Date.now(),
    sidebarOpen: false,
  };
};

type MusicAction =
  | { type: "SET_TRACK"; payload: Track }
  | { type: "PLAY" }
  | { type: "PAUSE" }
  | { type: "SET_VOLUME"; payload: number }
  | { type: "SET_PROGRESS"; payload: number }
  | { type: "SET_DURATION"; payload: number }
  | { type: "TOGGLE_SHUFFLE" }
  | { type: "CYCLE_REPEAT_MODE" } // Replace TOGGLE_REPEAT with this
  | { type: "TOGGLE_REPEAT_ONE" } // Add this new action
  | { type: "SET_QUEUE"; payload: Track[] }
  | { type: "NEXT_TRACK" }
  | { type: "PREV_TRACK" }
  | { type: "TOGGLE_VISUALIZER" }
  | { type: "TOGGLE_EQUALIZER" }
  | { type: "SET_BUFFERING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_SIDEBAR_MODE"; payload: SidebarMode }
  | { type: "SIDEBAR_INTERACTION" } // Track when user interacts with sidebar
  | { type: "USER_INTERACTION" } // Track general user interactions
  | { type: "TOGGLE_SIDEBAR_VISIBILITY" } // Add this new action type
  | { type: "SET_SIDEBAR_OPEN"; payload: boolean } // Add this new action type
  | { type: "SET_ACTIVE_CONTEXT"; payload: PlaybackContext } // Add new action type
  | { type: "ADD_TRACK"; payload: Track }; // Add new action type

// Reducer to handle state changes
const musicReducer = (state: PlayerState, action: MusicAction): PlayerState => {
  switch (action.type) {
    case "SET_TRACK": {
      const track = action.payload;
      LocalStorage.saveLastPlayed(track);
      LocalStorage.updateSession(track.id);
      return {
        ...state,
        currentTrack: track,
        isPlaying: false, // Explicitly set to false when changing tracks
        progress: 0,
        duration: track.duration || 0, // Set initial duration from track data
        error: null,
        isBuffering: true,
        lastUserAction: Date.now(),
      };
    }
    case "PLAY":
      return {
        ...state,
        isPlaying: true,
        lastUserAction: Date.now(),
      };
    case "PAUSE":
      return {
        ...state,
        isPlaying: false,
        lastUserAction: Date.now(),
      };
    case "SET_VOLUME":
      return {
        ...state,
        volume: action.payload,
        lastUserAction: Date.now(),
      };
    case "SET_PROGRESS": {
      if (state.currentTrack) {
        LocalStorage.saveToHistory(state.currentTrack, action.payload);
      }
      // Only update progress if it's a valid number
      const newProgress = isNaN(action.payload)
        ? state.progress
        : action.payload;
      return {
        ...state,
        progress: newProgress,
        isBuffering: false,
      };
    }
    case "SET_DURATION": {
      // Only update duration if it's a valid number
      const newDuration = isNaN(action.payload)
        ? state.duration
        : action.payload;
      return {
        ...state,
        duration: newDuration,
      };
    }
    case "TOGGLE_SHUFFLE":
      return {
        ...state,
        isShuffling: !state.isShuffling,
        lastUserAction: Date.now(),
      };
    case "SET_QUEUE":
      return { ...state, queue: [...action.payload] }; // Create a new array to ensure immutability
    case "NEXT_TRACK": {
      if (!state.currentTrack || !state.activeContext) return state;

      const contextTracks = state.activeContext.tracks;
      const currentIndex = contextTracks.findIndex(
        (track) => track.id === state.currentTrack!.id
      );

      let nextIndex: number;

      if (state.repeatMode === "one") {
        // Repeat current track
        nextIndex = currentIndex;
      } else if (state.repeatMode === "all") {
        // Go to next track in current context, loop back to start if at end
        nextIndex = (currentIndex + 1) % contextTracks.length;
      } else {
        // No repeat - stop at end of context
        if (currentIndex === contextTracks.length - 1) {
          return {
            ...state,
            isPlaying: false,
            progress: 0,
          };
        }
        nextIndex = currentIndex + 1;
      }

      // Handle shuffle within current context
      if (state.isShuffling && state.repeatMode !== "one") {
        const remainingTracks = contextTracks.filter(
          (_, i) => i > currentIndex
        );
        if (remainingTracks.length > 0) {
          const randomTrack =
            remainingTracks[Math.floor(Math.random() * remainingTracks.length)];
          nextIndex = contextTracks.indexOf(randomTrack);
        }
      }

      const nextTrack = contextTracks[nextIndex];
      return {
        ...state,
        currentTrack: nextTrack,
        isPlaying: true,
        progress: 0,
        isBuffering: true,
        lastUserAction: Date.now(),
        queue: contextTracks, // Update queue to match current context
      };
    }
    case "PREV_TRACK": {
      if (!state.currentTrack || !state.activeContext) return state;

      const contextTracks = state.activeContext.tracks;
      const currentIndex = contextTracks.findIndex(
        (track) => track.id === state.currentTrack!.id
      );

      let prevIndex: number;

      if (state.repeatMode === "one") {
        prevIndex = currentIndex;
      } else if (state.repeatMode === "all") {
        prevIndex =
          (currentIndex - 1 + contextTracks.length) % contextTracks.length;
      } else {
        if (currentIndex === 0) {
          return {
            ...state,
            progress: 0,
          };
        }
        prevIndex = currentIndex - 1;
      }

      return {
        ...state,
        currentTrack: contextTracks[prevIndex],
        isPlaying: true,
        progress: 0,
        isBuffering: true,
        lastUserAction: Date.now(),
      };
    }
    case "TOGGLE_VISUALIZER":
      return {
        ...state,
        visualizerActive: !state.visualizerActive,
        lastUserAction: Date.now(),
      };
    case "TOGGLE_EQUALIZER":
      return {
        ...state,
        equalizerActive: !state.equalizerActive,
        lastUserAction: Date.now(),
      };
    case "SET_BUFFERING":
      return { ...state, isBuffering: action.payload };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        isBuffering: false,
        // Add this to potentially retry or recover from errors
        isPlaying: false, // Pause on error
      };
    case "SET_SIDEBAR_MODE":
      return {
        ...state,
        sidebarMode: action.payload,
        lastUserAction: Date.now(),
        lastSidebarInteraction: Date.now(),
      };
    case "SIDEBAR_INTERACTION":
      return {
        ...state,
        lastSidebarInteraction: Date.now(),
      };
    case "USER_INTERACTION":
      return {
        ...state,
        lastUserAction: Date.now(),
      };
    case "CYCLE_REPEAT_MODE":
      return {
        ...state,
        repeatMode:
          state.repeatMode === "off"
            ? "all"
            : state.repeatMode === "all"
            ? "one"
            : "off",
        lastUserAction: Date.now(),
      };
    case "TOGGLE_SIDEBAR_VISIBILITY": {
      // Add a check to prevent unnecessary updates
      const newVisibility = !state.sidebarVisible;
      console.log(
        `Toggling sidebar visibility from ${state.sidebarVisible} to ${newVisibility}`
      );

      // Only update if value is actually changing
      if (state.sidebarVisible === newVisibility) {
        return state; // No change needed
      }

      return {
        ...state,
        sidebarVisible: newVisibility,
      };
    }
    case "SET_SIDEBAR_OPEN": {
      // This action is specifically for the MusicPlayer component to listen for
      return {
        ...state,
        sidebarOpen: action.payload, // true or false
      };
    }
    case "SET_ACTIVE_CONTEXT":
      return {
        ...state,
        activeContext: action.payload,
        queue: action.payload.tracks, // Update queue to match context
      };
    case "ADD_TRACK":
      return {
        ...state,
        queue: [...state.queue, action.payload],
      };
    default:
      return state;
  }
};

// Create the context
interface MusicContextType {
  state: PlayerState;
  dispatch: React.Dispatch<MusicAction>;
  isLoadingTracks: boolean;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

// Provider component
export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(musicReducer, getInitialState());
  const [isLoadingTracks] = useState(false);

  // Set the first track as current if none is selected
  useEffect(() => {
    if (!state.currentTrack && state.queue.length > 0) {
      dispatch({ type: "SET_TRACK", payload: state.queue[0] });
    }
  }, [state.queue, state.currentTrack]);

  useEffect(() => {
    // Start new session when app loads
    LocalStorage.startNewSession();
    // Clean up old data
    LocalStorage.cleanupOldData();
  }, []);

  // Add the event listener to handle new community tracks
  useEffect(() => {
    const handleCommunityTrackAdded = (event: CommunityTrackEvent) => {
      const track = event.detail;
      console.log("Community track added:", track);

      dispatch({
        type: "ADD_TRACK",
        payload: track,
      });
    };

    window.addEventListener(
      "community-track-added",
      handleCommunityTrackAdded as EventListener
    );

    return () => {
      window.removeEventListener(
        "community-track-added",
        handleCommunityTrackAdded as EventListener
      );
    };
  }, [dispatch]);

  return (
    <MusicContext.Provider value={{ state, dispatch, isLoadingTracks }}>
      {children}
    </MusicContext.Provider>
  );
}

// Custom hook for using the music context
export function useMusicContext() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusicContext must be used within a MusicProvider");
  }
  return context;
}
