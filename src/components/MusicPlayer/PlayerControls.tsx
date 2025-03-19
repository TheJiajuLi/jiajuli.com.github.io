import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
  FaVolumeMute,
  FaRandom,
  FaSyncAlt,
} from "react-icons/fa";
import { MdGraphicEq, MdWaves } from "react-icons/md";
import { useMusicContext } from "../../context/MusicContext";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const PlaybackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.accent};
    transform: scale(1.1);
  }
`;

const ControlButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.text};
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.secondary};
    transform: scale(1.1);
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  cursor: pointer;
  position: relative;
`;

const Progress = styled.div<{ $width: string }>`
  height: 100%;
  width: ${(props) => props.$width};
  background: ${(props) => props.theme.accent};
  border-radius: 5px;
  transition: width 0.1s linear;
`;

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${(props) => props.theme.textSecondary};
`;

const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const VolumeSlider = styled.input`
  -webkit-appearance: none;
  width: 100px;
  height: 5px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) => props.theme.accent};
    cursor: pointer;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const ToggleButton = styled(motion.button)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 15px;
  background: ${(props) =>
    props.$active ? props.theme.primary : "transparent"};
  color: ${(props) =>
    props.$active ? props.theme.text : props.theme.textSecondary};
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$active ? props.theme.accent : "rgba(255, 255, 255, 0.1)"};
  }
`;

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const PlayerControls: React.FC = () => {
  const { state, dispatch } = useMusicContext();
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const { playTrack, pauseTrack, nextTrack, prevTrack, setVolume, seekTo } =
    useAudioPlayer(audioRef);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !state.duration) return;

    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const seekTime = percent * state.duration;

    seekTo(seekTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    setVolume(volume);
  };

  const progressPercent =
    state.duration > 0 ? (state.progress / state.duration) * 100 : 0;

  return (
    <Container>
      <audio
        ref={audioRef}
        src={state.currentTrack?.audioSrc}
        onEnded={nextTrack}
      />

      <ProgressContainer>
        <ProgressBar ref={progressRef} onClick={handleProgressClick}>
          <Progress $width={`${progressPercent}%`} />
        </ProgressBar>
        <TimeDisplay>
          <span>{formatTime(state.progress)}</span>
          <span>{formatTime(state.duration)}</span>
        </TimeDisplay>
      </ProgressContainer>

      <ButtonsContainer>
        <ControlButton onClick={prevTrack} whileTap={{ scale: 0.9 }}>
          <FaStepBackward />
        </ControlButton>

        <PlaybackButton
          onClick={state.isPlaying ? pauseTrack : playTrack}
          whileTap={{ scale: 0.9 }}
        >
          {state.isPlaying ? <FaPause /> : <FaPlay />}
        </PlaybackButton>

        <ControlButton onClick={nextTrack} whileTap={{ scale: 0.9 }}>
          <FaStepForward />
        </ControlButton>
      </ButtonsContainer>

      <VolumeContainer>
        <ControlButton
          onClick={() => (state.volume > 0 ? setVolume(0) : setVolume(0.5))}
          whileTap={{ scale: 0.9 }}
        >
          {state.volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
        </ControlButton>

        <VolumeSlider
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={state.volume}
          onChange={handleVolumeChange}
        />
      </VolumeContainer>

      <ToggleContainer>
        <ToggleButton
          onClick={() => dispatch({ type: "TOGGLE_SHUFFLE" })}
          $active={state.isShuffling}
          whileTap={{ scale: 0.9 }}
        >
          <FaRandom /> Shuffle
        </ToggleButton>

        <ToggleButton
          onClick={() => dispatch({ type: "TOGGLE_REPEAT" })}
          $active={state.isRepeating}
          whileTap={{ scale: 0.9 }}
        >
          <FaSyncAlt /> Repeat
        </ToggleButton>
      </ToggleContainer>

      <ToggleContainer>
        <ToggleButton
          onClick={() => dispatch({ type: "TOGGLE_VISUALIZER" })}
          $active={state.visualizerActive}
          whileTap={{ scale: 0.9 }}
        >
          <MdWaves /> Visualizer
        </ToggleButton>

        <ToggleButton
          onClick={() => dispatch({ type: "TOGGLE_EQUALIZER" })}
          $active={state.equalizerActive}
          whileTap={{ scale: 0.9 }}
        >
          <MdGraphicEq /> Equalizer
        </ToggleButton>
      </ToggleContainer>
    </Container>
  );
};

export default PlayerControls;
