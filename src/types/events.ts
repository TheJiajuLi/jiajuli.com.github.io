import { Track } from './music';

export interface CommunityTrackEvent extends CustomEvent {
  detail: Track;
}