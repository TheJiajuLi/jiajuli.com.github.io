import { formatTime } from '../../utils/timeFormat';

const TimeDisplay: React.FC<{ progress: number; duration: number }> = ({ 
  progress, 
  duration 
}) => (
  <div className="time-display">
    <span>{formatTime(progress || 0)}</span>
    <span>/</span>
    <span>{formatTime(duration || 0)}</span>
  </div>
);