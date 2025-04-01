import { Track } from '../types/music';

interface PlaybackState {
  volume: number;
  progress: number;
  isShuffling: boolean;
  repeatMode: 'off' | 'all' | 'one';
}

class LocalStorage {
  private static readonly LAST_PLAYED_KEY = 'lastPlayed';
  private static readonly PLAYBACK_STATE_KEY = 'playbackState';
  private static readonly QUEUE_KEY = 'queue';
  private static readonly SESSION_KEY = 'currentSession';
  private static readonly HISTORY_KEY = 'playHistory';

  static saveLastPlayed(track: Track): void {
    localStorage.setItem(this.LAST_PLAYED_KEY, JSON.stringify(track));
  }

  static getLastPlayed(): Track | null {
    const stored = localStorage.getItem(this.LAST_PLAYED_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  static savePlaybackState(state: PlaybackState): void {
    localStorage.setItem(this.PLAYBACK_STATE_KEY, JSON.stringify(state));
  }

  static getPlaybackState(): PlaybackState | null {
    const stored = localStorage.getItem(this.PLAYBACK_STATE_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  static saveQueue(queue: Track[]): void {
    localStorage.setItem(this.QUEUE_KEY, JSON.stringify(queue));
  }

  static getQueue(): Track[] {
    const stored = localStorage.getItem(this.QUEUE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  static startNewSession(): void {
    const sessionId = Date.now().toString();
    localStorage.setItem(this.SESSION_KEY, sessionId);
  }

  static updateSession(trackId: string): void {
    const sessionId = localStorage.getItem(this.SESSION_KEY);
    if (!sessionId) return;

    const history = this.getHistory();
    history[sessionId] = history[sessionId] || [];
    history[sessionId].push({
      trackId,
      timestamp: Date.now()
    });

    localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history));
  }

  static saveToHistory(track: Track, progress: number): void {
    const history = this.getHistory();
    const sessionId = localStorage.getItem(this.SESSION_KEY);
    
    if (!sessionId) return;

    history[sessionId] = history[sessionId] || [];
    history[sessionId].push({
      trackId: track.id,
      timestamp: Date.now(),
      progress
    });

    localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history));
  }

  static getHistory(): Record<string, Array<{ trackId: string; timestamp: number }>> {
    const stored = localStorage.getItem(this.HISTORY_KEY);
    return stored ? JSON.parse(stored) : {};
  }

  static cleanupOldData(maxAgeDays = 30): void {
    const now = Date.now();
    const maxAge = maxAgeDays * 24 * 60 * 60 * 1000;
    
    const history = this.getHistory();
    const cleanedHistory: Record<string, Array<{ trackId: string; timestamp: number }>> = {};

    Object.entries(history).forEach(([sessionId, tracks]) => {
      const sessionTime = parseInt(sessionId);
      if (now - sessionTime < maxAge) {
        cleanedHistory[sessionId] = tracks;
      }
    });

    localStorage.setItem(this.HISTORY_KEY, JSON.stringify(cleanedHistory));
  }
}

export default LocalStorage;