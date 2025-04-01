// src/utils/CommunityStorage.ts
import { genreColors } from '../data/colorSchemes';
import { Track, GenreType } from '../types/music';

export interface CommunityTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: GenreType;
  coverArt: string;
  audioSrc: string;
  duration: number;
  color: string;
  uploadedBy: string;
  uploadDate: string;
  isOriginal: boolean;
}

const COMMUNITY_TRACKS_KEY = 'dreaming_polar_community_tracks';

export class CommunityStorage {
  // Add a helper method to get genre color
  static getGenreColor(genre: GenreType): string {
    return genreColors[genre] || '#333333'; // Default color if genre not found
  }

  static saveTrack(track: CommunityTrack): void {
    try {
      // Ensure track has a color based on its genre
      const trackWithColor = {
        ...track,
        color: track.color || CommunityStorage.getGenreColor(track.genre)
      };

      // Get existing tracks
      const existingTracksJson = localStorage.getItem(COMMUNITY_TRACKS_KEY);
      const existingTracks: CommunityTrack[] = existingTracksJson 
        ? JSON.parse(existingTracksJson) 
        : [];
      
      // Add new track
      const updatedTracks = [...existingTracks, trackWithColor];
      
      // Save back to localStorage
      localStorage.setItem(COMMUNITY_TRACKS_KEY, JSON.stringify(updatedTracks));
      
      // Dispatch an event to notify the app
      const event = new CustomEvent('community-track-added', { 
        detail: trackWithColor 
      });
      window.dispatchEvent(event);
    } catch (error) {
      console.error('Error saving community track:', error);
    }
  }
  
  static async getAllTracks(): Promise<CommunityTrack[]> {
    try {
      const tracks = localStorage.getItem(COMMUNITY_TRACKS_KEY);
      return tracks ? JSON.parse(tracks) : [];
    } catch (error) {
      console.error('Failed to get community tracks:', error);
      return [];
    }
  }

  static getTrackById(id: string): CommunityTrack | null {
    try {
      const tracks = CommunityStorage.getAllTracks();
      return tracks.find(track => track.id === id) || null;
    } catch (error) {
      console.error('Error retrieving community track:', error);
      return null;
    }
  }
  
  // Convert CommunityTrack to Track for the player
  static convertToTrack(communityTrack: CommunityTrack): Track {
    return {
      id: communityTrack.id,
      title: communityTrack.title,
      artist: communityTrack.artist,
      album: communityTrack.album,
      genre: communityTrack.genre,
      coverArt: communityTrack.coverArt,
      audioSrc: communityTrack.audioSrc,
      duration: communityTrack.duration,
      color: communityTrack.color || CommunityStorage.getGenreColor(communityTrack.genre)
    };
  }
  
  // Simulate file uploads by creating object URLs
  static uploadAudioFile(file: File): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const audioUrl = URL.createObjectURL(file);
        resolve(audioUrl);
      }, 1500); // Simulate upload delay
    });
  }
  
  static uploadCoverArt(file: File): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const coverUrl = URL.createObjectURL(file);
        resolve(coverUrl);
      }, 1000); // Simulate upload delay
    });
  }

  static cleanupAllStorageKeys(): void {
    const keysToClean = [
      'current_track',
      'player_state',
      'queue_state',
      'recent_plays',
      'track_progress',
      'volume_state'
    ];

    keysToClean.forEach(key => localStorage.removeItem(key));
  }

  static async deleteTrack(trackId: string): Promise<void> {
    try {
      const tracks = await this.getAllTracks();
      const updatedTracks = tracks.filter(track => track.id !== trackId);
      localStorage.setItem(COMMUNITY_TRACKS_KEY, JSON.stringify(updatedTracks));
    } catch (error) {
      console.error('Failed to delete track:', error);
      throw error;
    }
  }

  static async updateTrack(trackId: string, updatedTrack: Partial<CommunityTrack>): Promise<void> {
    try {
      const tracks = await this.getAllTracks();
      const trackIndex = tracks.findIndex(track => track.id === trackId);
      
      if (trackIndex > -1) {
        tracks[trackIndex] = { ...tracks[trackIndex], ...updatedTrack };
        localStorage.setItem(COMMUNITY_TRACKS_KEY, JSON.stringify(tracks));
      }
    } catch (error) {
      console.error('Failed to update track:', error);
      throw error;
    }
  }

  static purgeAllCommunityContent(): boolean {
    try {
      // 1. Get all localStorage keys
      const allKeys = { ...localStorage };
      
      // 2. Find and revoke all blob URLs
      Object.keys(allKeys).forEach(key => {
        const value = localStorage.getItem(key);
        if (value && value.startsWith('blob:')) {
          URL.revokeObjectURL(value);
          localStorage.removeItem(key);
        }
      });

      // 3. Clear all community tracks
      localStorage.removeItem(COMMUNITY_TRACKS_KEY);

      // 4. Clear all player states
      const keysToRemove = [
        'current_track',
        'player_state',
        'queue_state',
        'recent_plays',
        'track_progress',
        'volume_state',
        'blobUrls'
      ];

      keysToRemove.forEach(key => localStorage.removeItem(key));

      // 5. Clear all media elements
      document.querySelectorAll('audio, video').forEach(element => {
        if (element instanceof HTMLMediaElement) {
          element.pause();
          element.src = '';
          element.load();
        }
      });

      // 6. Clear all images with blob URLs
      document.querySelectorAll('img[src^="blob:"]').forEach(img => {
        const blobUrl = img.src;
        img.src = '/assets/covers/default_cover.jpeg'; // Set default cover
        URL.revokeObjectURL(blobUrl);
      });

      return true;
    } catch (error) {
      console.error('Failed to purge community content:', error);
      return false;
    }
  }
}