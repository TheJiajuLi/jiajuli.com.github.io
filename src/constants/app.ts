/**
 * Dreaming Polar - Core Application Constants
 * These constants define the core branding and default values used throughout the app
 */

// App identity
export const APP_NAME = 'Dreaming Polar';
export const APP_DESCRIPTION = 'An immersive music experience with beautiful visualizations';
export const APP_VERSION = '1.4.0';

// App assets
export const APP_LOGO = '/assets/logos/logo_8_mini.png';
export const APP_FAVICON = '/assets/logos/logo_8_mini.png';
export const APP_SOCIAL_PREVIEW = '/assets/logos/logo_8_mini.png';

// Default values
export const DEFAULT_COVER = '/assets/logos/logo_8_mini.png'; // Using logo as default cover
export const DEFAULT_COLOR = '#3a1f7a'; // Primary brand color
export const DEFAULT_ARTIST = 'Dreaming Polar';
export const DEFAULT_ALBUM = 'Music Collection';

// Storage keys
export const STORAGE_PREFIX = 'dp_'; // dp for Dreaming Polar
export const STORAGE_VOLUME = `${STORAGE_PREFIX}volume`;
export const STORAGE_LAST_TRACK = `${STORAGE_PREFIX}last_track`;
export const STORAGE_REPEAT_MODE = `${STORAGE_PREFIX}repeat_mode`;
export const STORAGE_SHUFFLE = `${STORAGE_PREFIX}shuffle`;

// Feature flags
export const ENABLE_VISUALIZER = true;
export const ENABLE_EQUALIZER = true;
export const ENABLE_LYRICS = false; // Future feature

// API endpoints (if applicable)
export const API_BASE_URL = 'https://api.dreamingpolar.com'; // For future use

// Social links
export const SOCIAL_LINKS = {
  Personal: 'https://www.jiajuli.com',
  Instagram: 'tagram.com/the_jiaju_li/', // Replace with actual when available
  Linkedin: 'linkedin.com/in/jiaju-li/', // Replace with actual when available
  Business: 'contact@dreamingpolar.com'
};