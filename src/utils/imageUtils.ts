/** * Default cover image path to use when track covers are missing */export const DEFAULT_COVER = '/assets/covers/default_cover_2.jpeg';/** * Gets a safe image URL with fallback * @param src The source image URL or undefined * @returns A valid image URL with fallback */export const getSafeCoverArt = (src?: string): string => {  if (!src) return DEFAULT_COVER;
  
  // If it's already an absolute URL (https://...), return it
  if (src.startsWith('http')) return src;
  
  // Return the source, the global error handler will catch invalid paths
  return src;
};