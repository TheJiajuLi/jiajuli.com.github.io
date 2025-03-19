// Make sure SidebarMode is properly defined
export type SidebarMode = "auto" | "always" | "manual";

export interface PlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  duration: number;
  isShuffling: boolean;
  isRepeating: boolean;
  queue: Track[];
  visualizerActive: boolean;
  equalizerActive: boolean;
  sidebarMode: SidebarMode; // Added this property
  isBuffering: boolean;
  error: string | null;
  lastUserAction: number; // Added this property
  lastSidebarInteraction: number; // Added this property
}

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