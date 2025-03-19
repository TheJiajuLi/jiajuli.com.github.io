export const formatTime = (timeInSeconds: number): string => {
  // Handle invalid input
  if (typeof timeInSeconds !== 'number' || isNaN(timeInSeconds) || !isFinite(timeInSeconds)) {
    return "0:00";
  }

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};