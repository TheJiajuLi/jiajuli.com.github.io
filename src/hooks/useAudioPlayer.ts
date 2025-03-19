import { useRef, useEffect } from 'react';
import { useMusicContext } from '../context/MusicContext';

export const useAudioPlayer = (audioRef: React.RefObject<HTMLAudioElement>) => {
  const { state, dispatch } = useMusicContext();

  // Play the track
  const playTrack = () => {
    if (audioRef.current) {
      audioRef.current.play();
      dispatch({ type: 'PLAY' });
    }
  };

  // Pause the track
  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      dispatch({ type: 'PAUSE' });
    }
  };

  // Next track
  const nextTrack = () => {
    dispatch({ type: 'NEXT_TRACK' });
  };

  // Previous track
  const prevTrack = () => {
    dispatch({ type: 'PREV_TRACK' });
  };

  // Set volume
  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      dispatch({ type: 'SET_VOLUME', payload: volume });
    }
  };

  // Seek to position
  const seekTo = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      dispatch({ type: 'SET_PROGRESS', payload: time });
    }
  };

  // Update progress
  const updateProgress = (audioRef: React.RefObject<HTMLAudioElement>) => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 0;
      dispatch({ type: 'SET_PROGRESS', payload: currentTime });
      
      if (duration && duration !== state.duration) {
        dispatch({ type: 'SET_DURATION', payload: duration });
      }
    }
  };

  // Auto-play when track changes
  useEffect(() => {
    if (audioRef.current && state.currentTrack) {
      if (state.isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Audio playback error:', error);
          dispatch({ type: 'PAUSE' });
        });
      }
    }
  }, [state.currentTrack, state.isPlaying, dispatch]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume;
    }
  }, [state.volume]);

  return {
    playTrack,
    pauseTrack,
    nextTrack,
    prevTrack,
    setVolume,
    seekTo,
    updateProgress,
  };
};