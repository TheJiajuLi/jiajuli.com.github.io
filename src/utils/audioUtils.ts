// Create a new utils file for audio processing

/**
 * Utility functions for audio processing and management
 */

/**
 * Extract the accurate duration of an audio file
 * @param url Path to the audio file
 * @returns Promise that resolves with the duration in seconds
 */
export const getAudioDuration = async (url: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    
    // Handle successful metadata loading
    audio.addEventListener('loadedmetadata', () => {
      if (audio.duration === Infinity || isNaN(audio.duration)) {
        // Some browsers initially return Infinity for some formats
        // Seek to a large time to force duration calculation
        audio.currentTime = 24 * 60 * 60; // Seek to 24 hours
        audio.addEventListener('timeupdate', function getDuration() {
          if (audio.duration !== Infinity && !isNaN(audio.duration)) {
            resolve(audio.duration);
            audio.removeEventListener('timeupdate', getDuration);
          }
        });
      } else {
        // Duration is already available
        resolve(audio.duration);
      }
    });
    
    // Handle loading errors
    audio.addEventListener('error', (e) => {
      reject(new Error(`Failed to load audio file: ${e.message}`));
    });
    
    // Start loading the file
    audio.preload = 'metadata';
    audio.src = url;
    audio.load();
    
    // Set a timeout in case metadata loading takes too long
    setTimeout(() => {
      reject(new Error('Timeout while loading audio metadata'));
    }, 5000);
  });
};

/**
 * Format seconds into mm:ss format
 * @param seconds Duration in seconds
 * @returns Formatted time string
 */
export const formatTime = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

/**
 * Load audio metadata for multiple tracks
 * @param tracks Array of tracks to update with duration info
 * @returns Promise that resolves with updated tracks
 */
export const loadTracksMetadata = async (tracks: Track[]): Promise<Track[]> => {
  const updatedTracks: Track[] = [];
  
  for (const track of tracks) {
    try {
      // Only try to update duration if it's missing or suspect
      if (!track.duration || track.duration <= 0 || track.duration > 7200) {
        const duration = await getAudioDuration(track.audioSrc);
        updatedTracks.push({
          ...track,
          duration: Math.round(duration)
        });
      } else {
        updatedTracks.push(track);
      }
    } catch (error) {
      console.warn(`Failed to get duration for track ${track.title}:`, error);
      // Keep the track with its original duration
      updatedTracks.push(track);
    }
  }
  
  return updatedTracks;
};