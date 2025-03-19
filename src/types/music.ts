export type SidebarMode = "auto" | "always" | "manual";

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  coverArt: string;
  audioSrc: string;
  duration: number;
  color: string;
}

export type Genre = 'electronic' | 'rock' | 'jazz' | 'classical' | 'pop' | string;

export type RepeatMode = "off" | "all" | "one";

// Update PlaybackContext type to be more specific
export type PlaybackContextType = 
  | 'playlist' 
  | 'favorites' 
  | 'explorer' 
  | 'artist' 
  | 'album' 
  | 'search' 
  | 'recent'
  | 'mostPlayed';

export interface PlaybackContext {
  id: string;
  type: PlaybackContextType;
  tracks: Track[];
  name: string;
  sourceId?: string; // For tracking source playlist/artist/album
  viewConfig?: {
    sortBy?: 'title' | 'artist' | 'album' | 'plays' | 'recent' | 'favorite';
    filterBy?: string;
    isAscending?: boolean;
  };
}

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  isShuffling: boolean;
  repeatMode: RepeatMode;
  queue: Track[];
  visualizerActive: boolean;
  equalizerActive: boolean;
  sidebarMode: SidebarMode;
  sidebarVisible: boolean;
  isBuffering: boolean;
  error: string | null;
  lastUserAction: number;
  lastSidebarInteraction: number;
  sidebarOpen: boolean; // Add this line to include the new property
  activeContext: PlaybackContext | null;
  previousContext: PlaybackContext | null; // Add this to track previous context
  contextHistory: PlaybackContext[]; // Add this to maintain context history
  repeatContext: boolean; // Add this to specifically repeat current context
}