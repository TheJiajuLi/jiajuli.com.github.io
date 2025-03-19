import { Track, RepeatMode } from '../types/music';

const STORAGE_KEYS = {
  LAST_PLAYED: 'dp_last_played',
  PLAYBACK_STATE: 'dp_playback_state',
  VOLUME: 'dp_volume',
  QUEUE: 'dp_queue',
  LAST_POSITION: 'dp_last_position',
  PLAYBACK_HISTORY: 'dp_playback_history',
  LAST_SESSION: 'dp_last_session',
  USER_PREFERENCES: 'dp_user_preferences'
} as const;

interface PlaybackState {
  progress: number;
  volume: number;
  isShuffling: boolean;
  repeatMode: RepeatMode;
  lastPlayedId: string | null;
  timestamp: number;
}

interface PlaybackHistory {
  tracks: Array<{
    trackId: string;
    timestamp: number;
    progress: number;
  }>;
  maxSize: number;
}

interface UserSession {
  startTime: number;
  endTime: number;
  tracksPlayed: string[];
}

export const LocalStorage = {
  saveLastPlayed: (track: Track | null) => {
    try {
      if (track) {
        localStorage.setItem(STORAGE_KEYS.LAST_PLAYED, JSON.stringify({
          ...track,
          timestamp: Date.now()
        }));
      } else {
        localStorage.removeItem(STORAGE_KEYS.LAST_PLAYED);
      }
    } catch (error) {
      console.warn('Failed to save last played track:', error);
    }
  },

  getLastPlayed: (): Track | null => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.LAST_PLAYED);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.warn('Failed to retrieve last played track:', error);
      return null;
    }
  },

  savePlaybackState: (state: PlaybackState) => {
    try {
      localStorage.setItem(STORAGE_KEYS.PLAYBACK_STATE, JSON.stringify({
        ...state,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.warn('Failed to save playback state:', error);
    }
  },

  getPlaybackState: (): PlaybackState | null => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PLAYBACK_STATE);
      if (!stored) return null;

      const state = JSON.parse(stored);
      const hoursPassed = (Date.now() - state.timestamp) / (1000 * 60 * 60);
      
      // Reset progress if more than 24 hours have passed
      if (hoursPassed > 24) {
        state.progress = 0;
      }
      
      return state;
    } catch (error) {
      console.warn('Failed to retrieve playback state:', error);
      return null;
    }
  },

  saveQueue: (queue: Track[]) => {
    try {
      localStorage.setItem(STORAGE_KEYS.QUEUE, JSON.stringify(queue));
    } catch (error) {
      console.warn('Failed to save queue:', error);
    }
  },

  getQueue: (): Track[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.QUEUE);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.warn('Failed to retrieve queue:', error);
      return [];
    }
  },

  clearPlaybackData: () => {
    try {
      localStorage.removeItem(STORAGE_KEYS.LAST_PLAYED);
      localStorage.removeItem(STORAGE_KEYS.PLAYBACK_STATE);
      localStorage.removeItem(STORAGE_KEYS.QUEUE);
    } catch (error) {
      console.warn('Failed to clear playback data:', error);
    }
  },

  // Helper function to check if stored data is still valid
  isDataValid: (timestamp: number, maxAgeHours = 24): boolean => {
    const hoursPassed = (Date.now() - timestamp) / (1000 * 60 * 60);
    return hoursPassed <= maxAgeHours;
  },

  saveToHistory: (track: Track, progress: number) => {
    try {
      const history = LocalStorage.getPlaybackHistory();
      const newEntry = {
        trackId: track.id,
        timestamp: Date.now(),
        progress
      };

      // Add to beginning of array and maintain max size
      history.tracks = [newEntry, ...history.tracks].slice(0, history.maxSize);
      
      localStorage.setItem(STORAGE_KEYS.PLAYBACK_HISTORY, JSON.stringify(history));
    } catch (error) {
      console.warn('Failed to save to playback history:', error);
    }
  },

  getPlaybackHistory: (): PlaybackHistory => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PLAYBACK_HISTORY);
      if (!stored) {
        return { tracks: [], maxSize: 50 };
      }
      return JSON.parse(stored);
    } catch (error) {
      console.warn('Failed to retrieve playback history:', error);
      return { tracks: [], maxSize: 50 };
    }
  },

  startNewSession: () => {
    try {
      const session: UserSession = {
        startTime: Date.now(),
        endTime: 0,
        tracksPlayed: []
      };
      localStorage.setItem(STORAGE_KEYS.LAST_SESSION, JSON.stringify(session));
    } catch (error) {
      console.warn('Failed to start new session:', error);
    }
  },

  updateSession: (trackId: string) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.LAST_SESSION);
      if (stored) {
        const session: UserSession = JSON.parse(stored);
        if (!session.tracksPlayed.includes(trackId)) {
          session.tracksPlayed.push(trackId);
          session.endTime = Date.now();
          localStorage.setItem(STORAGE_KEYS.LAST_SESSION, JSON.stringify(session));
        }
      }
    } catch (error) {
      console.warn('Failed to update session:', error);
    }
  },

  cleanupOldData: () => {
    try {
      const history = LocalStorage.getPlaybackHistory();
      const now = Date.now();
      
      // Remove entries older than 7 days
      history.tracks = history.tracks.filter(entry => {
        const daysPassed = (now - entry.timestamp) / (1000 * 60 * 60 * 24);
        return daysPassed <= 7;
      });

      localStorage.setItem(STORAGE_KEYS.PLAYBACK_HISTORY, JSON.stringify(history));
    } catch (error) {
      console.warn('Failed to cleanup old data:', error);
    }
  }
};

export default LocalStorage;