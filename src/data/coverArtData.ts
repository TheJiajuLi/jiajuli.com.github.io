// src/data/coverArtData.ts
export type GenreType = 'classical' | 'rock' | 'pop' | 'electronic' | 'jazz' | 'ambient' | 'soundtrack' | 'hiphop';

export const genreColors: Record<GenreType, string> = {
  classical: '#7a1f1f',
  rock: '#585858',
  pop: '#9c27b0',
  electronic: '#3a1f7a',
  jazz: '#7a4b1f',
  ambient: '#2d5d2a',
  soundtrack: '#1f5a7a',
  hiphop: '#333333'
};

export type ArtistId = 'chopin' | 'chopin_etudes' | 'bach' | 'queen' | 'bonJovi' | 'rema' | 'rosalia' | 'eminem' | 'liebestraume' | 'rema_calm_down' | 'memory_reboot';

export const artistCovers: Record<ArtistId, string> = {
  chopin: '/assets/covers/artists/chopin.jpg',
  chopin_etudes: '/assets/covers/artists/chopin_etudes.jpg',
  bach: '/assets/covers/artists/bach.jpg',
  queen: '/assets/covers/artists/queen.jpg',
  bonJovi: '/assets/covers/artists/bon_jovi.jpg',
  rema: '/assets/covers/artists/rema.jpg',
  rosalia: '/assets/covers/artists/rosalia.jpg',
  eminem: '/assets/covers/artists/eminem.jpg',
  liebestraume: '/assets/covers/artists/liebestraume.jpg',
  rema_calm_down: '/assets/covers/artists/rema_calm_down.jpg',
  memory_reboot: '/assets/covers/artists/memory_reboot.jpg'
};

export const albumCovers: Record<string, string> = {
  classical_collection: '/assets/covers/albums/classical_collection.jpg',
  rock_anthology: '/assets/covers/albums/rock_anthology.jpg',
  pop_hits: '/assets/covers/albums/pop_hits.jpg',
  electronic_beats: '/assets/covers/albums/electronic_beats.jpg',
  jazz_classics: '/assets/covers/albums/jazz_classics.jpg',
  ambient_sounds: '/assets/covers/albums/ambient_sounds.jpg',
  film_scores: '/assets/covers/albums/film_scores.jpg',
  hiphop_beats: '/assets/covers/albums/hiphop_beats.jpg'
};

export type AlbumId = keyof typeof albumCovers;

export const coverArt: Record<GenreType, string> = {
  classical: '/assets/covers/genres/classical.jpg',
  rock: '/assets/covers/genres/rock.jpg',
  pop: '/assets/covers/genres/pop.jpg',
  electronic: '/assets/covers/genres/electronic.jpg',
  jazz: '/assets/covers/genres/jazz.jpg',
  ambient: '/assets/covers/genres/ambient.jpg',
  soundtrack: '/assets/covers/genres/soundtrack.jpg',
  hiphop: '/assets/covers/genres/hiphop.jpg'
};

export interface CoverOption {
  id: string;
  name: string;
  src: string;
  type: 'artist' | 'album' | 'genre';
  rawId: ArtistId | string | GenreType;
}

export function generateCoverOptions(): CoverOption[] {
  const options: CoverOption[] = [];

  // Add artist covers
  Object.entries(artistCovers).forEach(([id, src]) => {
    options.push({
      id: `artist-${id}`,
      rawId: id as ArtistId,
      name: id.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase()),
      src,
      type: 'artist'
    });
  });

  // Add album covers
  Object.entries(albumCovers).forEach(([id, src]) => {
    options.push({
      id: `album-${id}`,
      rawId: id,
      name: id.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase()),
      src,
      type: 'album'
    });
  });

  // Add genre covers
  Object.entries(coverArt).forEach(([id, src]) => {
    options.push({
      id: `genre-${id}`,
      rawId: id as GenreType,
      name: id.charAt(0).toUpperCase() + id.slice(1),
      src,
      type: 'genre'
    });
  });

  return options;
}

export default {
  genreColors,
  artistCovers,
  albumCovers,
  coverArt,
  generateCoverOptions
};