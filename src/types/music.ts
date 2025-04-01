/**
 * Defines available repeat modes for the music player
 */
export type RepeatMode = 'off' | 'all' | 'one';

/**
 * Defines available sidebar modes for the music player
 */
export type SidebarMode = 'queue' | 'lyrics' | 'about' | 'related' | 'manual';

/**
 * Defines available genre types for the music tracks
 */
export type GenreType = 'classical' | 'rock' | 'pop' | 'electronic' | 'jazz' | 'ambient' | 'soundtrack' | 'hiphop';

/**
 * Defines the structure of a music track in the application
 */
export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: GenreType;
  coverArt: string;
  audioSrc: string;
  duration: number;
  color?: string;
}

/**
 * Defines the context in which tracks are being played
 */
export interface PlaybackContext {
  id: string;
  type: 'album' | 'playlist' | 'artist' | 'queue';
  name: string;
  tracks: Track[];
}

/**
 * Defines the state of the music player
 */
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
  sidebarOpen: boolean;
  activeContext?: PlaybackContext;
}